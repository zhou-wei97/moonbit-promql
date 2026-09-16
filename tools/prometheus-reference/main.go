// Independent test adapter. The parser itself is the unmodified upstream module.
package main

import (
    "bufio"
    "encoding/base64"
    "encoding/json"
    "fmt"
    "os"
    "runtime"
    "runtime/debug"
    "sort"
    "strconv"
    "time"
    "unicode"

    "github.com/prometheus/prometheus/model/labels"
    "github.com/prometheus/prometheus/promql/parser"
)

type Request struct {
    Query string `json:"query"`
    Experimental bool `json:"experimental"`
    ExperimentalFunctions bool `json:"experimental_functions"`
    DurationExpressions bool `json:"duration_expressions"`
    ExtendedRanges bool `json:"extended_ranges"`
    FillModifiers bool `json:"fill_modifiers"`
    Metadata bool `json:"metadata"`
    Regex *string `json:"regex"`
}

func inspect(e parser.Expr) any {
    if e==nil {return nil}
    switch n:=e.(type) {
    case *parser.NumberLiteral: return []any{"number",strconv.FormatFloat(n.Val,'g',-1,64)}
    case *parser.StringLiteral: return []any{"string",base64.StdEncoding.EncodeToString([]byte(n.Val))}
    case *parser.ParenExpr: return inspect(n.Expr)
    case *parser.UnaryExpr: return []any{"unary",n.Op.String(),inspect(n.Expr)}
    case *parser.BinaryExpr:
        var matching any
        if v:=n.VectorMatching;v!=nil {
            var left,right any
            if v.FillValues.LHS!=nil {left=strconv.FormatFloat(*v.FillValues.LHS,'g',-1,64)}
            if v.FillValues.RHS!=nil {right=strconv.FormatFloat(*v.FillValues.RHS,'g',-1,64)}
            group:="";if v.Card==parser.CardManyToOne {group="group_left"};if v.Card==parser.CardOneToMany {group="group_right"}
            mode:="ignoring";if v.On {mode="on"}
            matching=map[string]any{"mode":mode,"labels":v.MatchingLabels,"group":group,"include":v.Include,"left":left,"right":right}
        }
        return []any{"binary",n.Op.String(),inspect(n.LHS),inspect(n.RHS),n.ReturnBool,matching}
    case *parser.Call:
        args:=[]any{};for _,v:=range n.Args {args=append(args,inspect(v))};return []any{"call",n.Func.Name,args}
    case *parser.AggregateExpr:
        var param any;if n.Param!=nil {param=inspect(n.Param)}
        return []any{"aggregate",n.Op.String(),n.Grouping,n.Without,param,inspect(n.Expr)}
    case *parser.VectorSelector:
        matchers:=[]any{};for _,m:=range n.LabelMatchers {matchers=append(matchers,[]string{base64.StdEncoding.EncodeToString([]byte(m.Name)),m.Type.String(),base64.StdEncoding.EncodeToString([]byte(m.Value))})}
        return []any{"selector",n.Name,matchers,duration(n.OriginalOffset,n.OriginalOffsetExpr),timestamp(n.Timestamp),startEnd(n.StartOrEnd),n.Anchored,n.Smoothed}
    case *parser.MatrixSelector: return []any{"range",inspect(n.VectorSelector),duration(n.Range,n.RangeExpr)}
    case *parser.SubqueryExpr: return []any{"subquery",inspect(n.Expr),duration(n.Range,n.RangeExpr),duration(n.Step,n.StepExpr),duration(n.OriginalOffset,n.OriginalOffsetExpr),timestamp(n.Timestamp),startEnd(n.StartOrEnd),false,false}
    case *parser.DurationExpr: return []any{"duration",n.Op.String(),inspect(n.LHS),inspect(n.RHS)}
    default: return []any{"other",fmt.Sprintf("%T",e),e.String()}
    }
}

func duration(d time.Duration,e *parser.DurationExpr) any {if e!=nil {return inspect(e)};return []any{"number",strconv.FormatFloat(d.Seconds(),'g',-1,64)}}
func timestamp(t *int64) any {if t==nil {return nil};return strconv.FormatInt(*t,10)}
func startEnd(t parser.ItemType) string {if t==parser.START||t==parser.END {return t.String()+"()"};return ""}

func handle(req Request) any {
    if req.Metadata {
        properties:=[]string{"Any","ASCII","Assigned"};for name:=range unicode.Categories {properties=append(properties,name)};for name:=range unicode.Scripts {properties=append(properties,name)};sort.Strings(properties)
        build,_:=debug.ReadBuildInfo()
        return map[string]any{"go":runtime.Version(),"module":"github.com/prometheus/prometheus","version":"v0.314.0","functions":parser.Functions,"unicodeProperties":properties,"build":build.String()}
    }
    if req.Regex!=nil {
        matcher,err:=labels.NewMatcher(labels.MatchRegexp,"label",*req.Regex)
        if err!=nil {return map[string]any{"accepted":false,"error":err.Error()}}
        return map[string]any{"accepted":true,"matchesEmpty":matcher.Matches("")}
    }
    p:=parser.NewParser(parser.Options{EnableExperimentalFunctions:req.Experimental||req.ExperimentalFunctions,ExperimentalDurationExpr:req.Experimental||req.DurationExpressions,EnableExtendedRangeSelectors:req.Experimental||req.ExtendedRanges,EnableBinopFillModifiers:req.Experimental||req.FillModifiers})
    expr,err:=p.ParseExpr(req.Query)
    if err!=nil {return map[string]any{"accepted":false,"error":err.Error()}}
    return map[string]any{"accepted":true,"type":expr.Type(),"formatted":expr.String(),"ast":inspect(expr)}
}

func main() {
    scanner:=bufio.NewScanner(os.Stdin);scanner.Buffer(make([]byte,4096),2*1024*1024)
    out:=json.NewEncoder(os.Stdout)
    for scanner.Scan() {
        var request Request
        if err:=json.Unmarshal(scanner.Bytes(),&request);err!=nil {out.Encode(map[string]any{"adapterError":err.Error()});continue}
        if err:=out.Encode(handle(request));err!=nil {out.Encode(map[string]any{"adapterError":err.Error()})}
    }
    if err:=scanner.Err();err!=nil {fmt.Fprintln(os.Stderr,err);os.Exit(1)}
}
