class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $oob() {
  throw new Error("Index out of bounds");
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
function _M0TPB4IterGcE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGRP211localreview6promql9QueryTypeE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGsE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function _M0TPB9ArrayViewGcE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function _M0TPB3MapGsRPC15debug4ReprE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGsRPC15debug4ReprE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB8MutLocalGORPB5EntryGsRPC15debug4ReprEE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRPB5ArrayGRP211localreview6promql9QueryTypeERP211localreview6promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP211localreview6promql9QueryTypeERP211localreview6promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP211localreview6promql9QueryTypeERP211localreview6promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP211localreview6promql9QueryTypeERP211localreview6promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGRP211localreview6promql9QueryTypeE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0MPB7JSArray12append__view = (dst, src, src_offset, len) => {
   for (let i = 0; i < len; i++) {
     dst.push(src[src_offset + i]);
   }
 };
function _M0TPB9ArrayViewGRPC16string10StringViewE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC15debug4Repr7UnitLit() {}
_M0DTPC15debug4Repr7UnitLit.prototype.$tag = 0;
function _M0DTPC15debug4Repr7Integer(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7Integer.prototype.$tag = 1;
function _M0DTPC15debug4Repr9DoubleLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr9DoubleLit.prototype.$tag = 2;
function _M0DTPC15debug4Repr8FloatLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr8FloatLit.prototype.$tag = 3;
function _M0DTPC15debug4Repr7BoolLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7BoolLit.prototype.$tag = 4;
function _M0DTPC15debug4Repr7CharLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7CharLit.prototype.$tag = 5;
function _M0DTPC15debug4Repr9StringLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr9StringLit.prototype.$tag = 6;
function _M0DTPC15debug4Repr5Tuple(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr5Tuple.prototype.$tag = 7;
function _M0DTPC15debug4Repr5Array(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr5Array.prototype.$tag = 8;
function _M0DTPC15debug4Repr6Record(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr6Record.prototype.$tag = 9;
function _M0DTPC15debug4Repr4Enum(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr4Enum.prototype.$tag = 10;
function _M0DTPC15debug4Repr3Map(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr3Map.prototype.$tag = 11;
function _M0DTPC15debug4Repr11RecordField(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr11RecordField.prototype.$tag = 12;
function _M0DTPC15debug4Repr14EnumLabeledArg(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr14EnumLabeledArg.prototype.$tag = 13;
function _M0DTPC15debug4Repr6Opaque(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr6Opaque.prototype.$tag = 14;
function _M0DTPC15debug4Repr7Literal(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7Literal.prototype.$tag = 15;
function _M0DTPC15debug4Repr8MapEntry(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr8MapEntry.prototype.$tag = 16;
function _M0DTPC15debug4Repr7Omitted() {}
_M0DTPC15debug4Repr7Omitted.prototype.$tag = 17;
const _M0DTPC15debug4Repr7Omitted__ = new _M0DTPC15debug4Repr7Omitted();
function _M0TPC15debug13ContentParens(param0, param1) {
  this.size = param0;
  this.lines = param1;
}
function _M0TPC15debug7Content(param0, param1, param2) {
  this.size = param0;
  this.lines = param1;
  this.needs_parens = param2;
}
function _M0TPB9ArrayViewGUsRPC15debug4ReprEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid.prototype.$tag = 0;
function _M0TP211localreview6promql14VectorMatching(param0, param1, param2, param3, param4) {
  this.return_bool = param0;
  this.mode = param1;
  this.labels = param2;
  this.group = param3;
  this.include_labels = param4;
}
function _M0DTPC16result6ResultGuRP211localreview6promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP211localreview6promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRP211localreview6promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP211localreview6promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP211localreview6promql5TokenRP211localreview6promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview6promql5TokenRP211localreview6promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview6promql5TokenRP211localreview6promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview6promql5TokenRP211localreview6promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGsERP211localreview6promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGsERP211localreview6promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGsERP211localreview6promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGsERP211localreview6promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRP211localreview6promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP211localreview6promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRP211localreview6promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP211localreview6promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGlE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGRP211localreview6promql4ExprE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGbE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRP211localreview6promql4ExprRP211localreview6promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview6promql4ExprRP211localreview6promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview6promql4ExprRP211localreview6promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview6promql4ExprRP211localreview6promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTP211localreview6promql4Expr6Number(param0) {
  this._0 = param0;
}
_M0DTP211localreview6promql4Expr6Number.prototype.$tag = 0;
function _M0DTP211localreview6promql4Expr13StringLiteral(param0) {
  this._0 = param0;
}
_M0DTP211localreview6promql4Expr13StringLiteral.prototype.$tag = 1;
function _M0DTP211localreview6promql4Expr8Selector(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview6promql4Expr8Selector.prototype.$tag = 2;
function _M0DTP211localreview6promql4Expr5Range(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview6promql4Expr5Range.prototype.$tag = 3;
function _M0DTP211localreview6promql4Expr4Call(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview6promql4Expr4Call.prototype.$tag = 4;
function _M0DTP211localreview6promql4Expr9Aggregate(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
_M0DTP211localreview6promql4Expr9Aggregate.prototype.$tag = 5;
function _M0DTP211localreview6promql4Expr6Binary(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP211localreview6promql4Expr6Binary.prototype.$tag = 6;
function _M0DTP211localreview6promql4Expr5Unary(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview6promql4Expr5Unary.prototype.$tag = 7;
function _M0DTP211localreview6promql4Expr11BinaryMatch(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
_M0DTP211localreview6promql4Expr11BinaryMatch.prototype.$tag = 8;
function _M0DTP211localreview6promql4Expr14AggregateParam(param0, param1, param2, param3, param4) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
}
_M0DTP211localreview6promql4Expr14AggregateParam.prototype.$tag = 9;
function _M0DTP211localreview6promql4Expr8Subquery(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP211localreview6promql4Expr8Subquery.prototype.$tag = 10;
function _M0DTP211localreview6promql4Expr6Offset(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview6promql4Expr6Offset.prototype.$tag = 11;
function _M0DTP211localreview6promql4Expr2At(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview6promql4Expr2At.prototype.$tag = 12;
function _M0TPB8MutLocalGsE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRP211localreview6promql14VectorMatchingRP211localreview6promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview6promql14VectorMatchingRP211localreview6promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview6promql14VectorMatchingRP211localreview6promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview6promql14VectorMatchingRP211localreview6promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGRPB5ArrayGsEE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRP211localreview6promql6CursorRP211localreview6promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview6promql6CursorRP211localreview6promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview6promql6CursorRP211localreview6promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview6promql6CursorRP211localreview6promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TP211localreview6promql5Token(param0, param1) {
  this.text = param0;
  this.quoted = param1;
}
function _M0TP211localreview6promql6Cursor(param0, param1) {
  this.tokens = param0;
  this.pos = param1;
}
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
const _M0MPC16string6String4trimN7_2abindS6861 = "\t\n\r ";
const _M0MPB4Iter4nextN6constrS9855GcE = 0;
const _M0MPB4Iter4nextN6constrS9856GcE = 0;
const _M0MPB4Iter4nextN6constrS9855GRP211localreview6promql9QueryTypeE = 0;
const _M0MPB4Iter4nextN6constrS9856GRP211localreview6promql9QueryTypeE = 0;
const _M0MPB4Iter4nextN6constrS9855GsE = 0;
const _M0MPB4Iter4nextN6constrS9856GsE = 0;
const _M0MPB4Iter3newN6constrS9863GcE = 0;
const _M0MPB4Iter3newN6constrS9863GRP211localreview6promql9QueryTypeE = 0;
const _M0MPB4Iter3newN6constrS9863GsE = 0;
const _M0FPC15debug14compact__linesN7_2abindS1134 = "";
const _M0FPC15debug14compact__linesN7_2abindS1147 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1141 = ",";
const _M0FPC15debug14compact__linesN7_2abindS1139 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1138 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1136 = "";
const _M0FPC15debug14compact__linesN7_2abindS1148 = "(";
const _M0FPC15debug14compact__linesN7_2abindS1152 = "";
const _M0FPC15debug14compact__linesN7_2abindS1161 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1155 = ",";
const _M0FPC15debug14compact__linesN7_2abindS1166 = " ";
const _M0FPC15debug19bracket__seq__linesN7_2abindS1175 = "";
const _M0FPC15debug14print__contentN7_2abindS1244 = "\n";
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FPC15debug6renderN6constrS1705 = 16;
function _M0FPC15abort5abortGRPB9ArrayViewGRP211localreview6promql9QueryTypeEE(msg) {
  return $panic();
}
function _M0FPC15abort5abortGOiE(msg) {
  return $panic();
}
function _M0FPB4rotl(x, r) {
  return x << r | (x >>> (32 - r | 0) | 0);
}
function _M0FPB13consume4__acc(acc, input) {
  return Math.imul(_M0FPB4rotl((acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0, 17), 668265263) | 0;
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGsEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGsEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(self, obj) {
  _M0IPC16string10StringViewPB4Show6output(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC13int3Int16unsafe__to__char(self) {
  return self;
}
function _M0MPC14byte4Byte8to__char(self) {
  return self;
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0MPB13StringBuilder10to__string(self) {
  return self.val;
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0MPC16uint166UInt1622is__leading__surrogate(self) {
  return self >= 55296 && self <= 56319;
}
function _M0MPC16uint166UInt1623is__trailing__surrogate(self) {
  return self >= 56320 && self <= 57343;
}
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPC16uint166UInt1616unsafe__to__char(self) {
  return self;
}
function _M0MPC16string6String16unsafe__char__at(self, index) {
  const c1 = self.charCodeAt(index);
  if (_M0MPC16uint166UInt1622is__leading__surrogate(c1)) {
    const c2 = self.charCodeAt(index + 1 | 0);
    return _M0FPB32code__point__of__surrogate__pair(c1, c2);
  } else {
    return _M0MPC16uint166UInt1616unsafe__to__char(c1);
  }
}
function _M0IPC14byte4BytePB3Add3add(self, that) {
  return (self + that | 0) & 255;
}
function _M0IPC14byte4BytePB3Div3div(self, that) {
  if (that === 0) {
    $panic();
  }
  return (self / that | 0) & 255;
}
function _M0IPC14byte4BytePB3Mod3mod(self, that) {
  if (that === 0) {
    $panic();
  }
  return (self % that | 0) & 255;
}
function _M0IPC14byte4BytePB3Sub3sub(self, that) {
  return (self - that | 0) & 255;
}
function _M0MPC14byte4Byte7to__hexN14to__hex__digitS3978(i) {
  return i < 10 ? _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Add3add(i, 48)) : _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Sub3sub(_M0IPC14byte4BytePB3Add3add(i, 97), 10));
}
function _M0MPC14byte4Byte7to__hex(b) {
  const _self = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS3978(_M0IPC14byte4BytePB3Div3div(b, 16)));
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS3978(_M0IPC14byte4BytePB3Mod3mod(b, 16)));
  return _M0MPB13StringBuilder10to__string(_self);
}
function _M0MPC16string10StringView11sub_2einner(self, start, end) {
  const str_len = self.str.length;
  let abs_end;
  if (end === undefined) {
    abs_end = self.end;
  } else {
    const _Some = end;
    const _end = _Some;
    abs_end = self.start + _end | 0;
  }
  const abs_start = self.start + start | 0;
  if (abs_start >= self.start && (abs_start <= abs_end && abs_end <= self.end)) {
    if (abs_start < str_len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.str.charCodeAt(abs_start))) {
      } else {
        $panic();
      }
    }
    if (abs_end < str_len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.str.charCodeAt(abs_end))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self.str, abs_start, abs_end);
  } else {
    return $panic();
  }
}
function _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i) {
  const logger = _env._1;
  const self = _env._0;
  if (i > seg) {
    logger.method_table.method_2(logger.self, _M0MPC16string10StringView11sub_2einner(self, seg, i));
    return;
  } else {
    return;
  }
}
function _M0MPC16string10StringView18escape__to_2einner(self, logger, quote) {
  if (quote) {
    logger.method_table.method_3(logger.self, 34);
  }
  const len = self.end - self.start | 0;
  const _env = { _0: self, _1: logger };
  let _tmp = 0;
  let _tmp$2 = 0;
  _L: while (true) {
    const i = _tmp;
    const seg = _tmp$2;
    if (i >= len) {
      _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
      break;
    }
    const code = self.str.charCodeAt(self.start + i | 0);
    let c;
    _L$2: {
      switch (code) {
        case 34: {
          c = code;
          break _L$2;
        }
        case 92: {
          c = code;
          break _L$2;
        }
        case 10: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\n");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 13: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\r");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 8: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\b");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 9: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\t");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        default: {
          if (code < 32) {
            _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
            logger.method_table.method_0(logger.self, "\\u{");
            logger.method_table.method_0(logger.self, _M0MPC14byte4Byte7to__hex(code & 255));
            logger.method_table.method_3(logger.self, 125);
            _tmp = i + 1 | 0;
            _tmp$2 = i + 1 | 0;
            continue _L;
          } else {
            _tmp = i + 1 | 0;
            continue _L;
          }
        }
      }
    }
    _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, _M0MPC16uint166UInt1616unsafe__to__char(c));
    _tmp = i + 1 | 0;
    _tmp$2 = i + 1 | 0;
    continue;
  }
  if (quote) {
    logger.method_table.method_3(logger.self, 34);
    return;
  } else {
    return;
  }
}
function _M0MPC16string6String14escape_2einner(self, quote) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0MPC16string10StringView18escape__to_2einner(new _M0TPC16string10StringView(self, 0, self.length), { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger }, quote);
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0)) ? new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0) : _M0FPC15abort5abortGRPB9ArrayViewGRP211localreview6promql9QueryTypeEE("Invalid index for View");
}
function _M0IPC16uint166UInt16PB2Eq5equal(self, that) {
  return self === that;
}
function _M0MPC16uint166UInt168to__uint(self) {
  return self;
}
function _M0IP016_24default__implPB2Eq10not__equalGsE(x, y) {
  return !(x === y);
}
function _M0IP016_24default__implPB2Eq10not__equalGOsE(x, y) {
  return !_M0IPC16option6OptionPB2Eq5equalGsE(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRP211localreview6promql9QueryTypeE(x, y) {
  return !_M0IP211localreview6promql9QueryTypePB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRPB5ArrayGRP211localreview6promql9QueryTypeEE(x, y) {
  return !_M0IPC15array5ArrayPB2Eq5equalGRP211localreview6promql9QueryTypeE(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(x, y) {
  return !_M0IPC16string10StringViewPB2Eq5equal(x, y);
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String11sub_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    if (start < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(start))) {
      } else {
        $panic();
      }
    }
    if (end$2 < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(end$2))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self, start, end$2);
  } else {
    return $panic();
  }
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String11sub_2einner(value, start, start + len | 0));
}
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16string6StringPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(self) {
  const logger = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPC15debug4ReprPB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MPB13StringBuilder10to__string(logger);
}
function _M0MPB4Iter4nextGcE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === -1) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9856GcE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9855GcE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGRP211localreview6promql9QueryTypeE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9856GRP211localreview6promql9QueryTypeE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9855GRP211localreview6promql9QueryTypeE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGsE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9856GsE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9855GsE;
    }
  }
  return result;
}
function _M0MPB4Iter3newGcE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9863GcE;
  }
  return new _M0TPB4IterGcE(f, size_hint$2);
}
function _M0MPB4Iter3newGRP211localreview6promql9QueryTypeE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9863GRP211localreview6promql9QueryTypeE;
  }
  return new _M0TPB4IterGRP211localreview6promql9QueryTypeE(f, size_hint$2);
}
function _M0MPB4Iter3newGsE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9863GsE;
  }
  return new _M0TPB4IterGsE(f, size_hint$2);
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0IPC16string10StringViewPB4Show6output(self, logger) {
  logger.method_table.method_2(logger.self, self);
}
function _M0MPC16string10StringView3all(self, f) {
  const _bind = self.str;
  const _bind$2 = self.start;
  const _bind$3 = self.end;
  let _tmp = _bind$2;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$3) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$4 = _bind.charCodeAt(_string_index);
        if (_bind$4 >= 55296 && _bind$4 <= 56319 && (_string_index + 1 | 0) < _bind$3) {
          const _bind$5 = _bind.charCodeAt(_string_index + 1 | 0);
          if (_bind$5 >= 56320 && _bind$5 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$4 - 55296 | 0, 1024) | 0) + _bind$5 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
          break _L;
        }
      }
      if (!f(_decoded_char)) {
        return false;
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC16string6String20unsafe__range__equal(self, self_off, other, other_off, len) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(self.charCodeAt(self_off + i | 0), other.charCodeAt(other_off + i | 0))) {
      } else {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0IPC16string10StringViewPB2Eq5equal(self, other) {
  const len = self.end - self.start | 0;
  if (len === (other.end - other.start | 0)) {
    if (self.str === other.str && self.start === other.start) {
      return true;
    }
    return _M0MPC16string6String20unsafe__range__equal(self.str, self.start, other.str, other.start, len);
  } else {
    return false;
  }
}
function _M0MPC16string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
  let _tmp = end_offset;
  let _tmp$2 = 0;
  while (true) {
    const utf16_offset = _tmp;
    const char_count = _tmp$2;
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (_M0MPC16uint166UInt1623is__trailing__surrogate(c)) {
        _tmp = utf16_offset - 2 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      } else {
        _tmp = utf16_offset - 1 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      }
    } else {
      return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
    }
  }
}
function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let _tmp = start_offset;
    let _tmp$2 = 0;
    while (true) {
      const utf16_offset = _tmp;
      const char_count = _tmp$2;
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (_M0MPC16uint166UInt1622is__leading__surrogate(c)) {
          _tmp = utf16_offset + 2 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        } else {
          _tmp = utf16_offset + 1 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        }
      } else {
        return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
      }
    }
  } else {
    return _M0FPC15abort5abortGOiE("Invalid start index");
  }
}
function _M0MPC16string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? _M0MPC16string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MPC16string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0IPC16string6StringPB4Show10to__string(self) {
  return self;
}
function _M0MPC16string6String6repeat(self, n) {
  if (n < 0) {
    return _M0FPC15abort5abortGRPB9ArrayViewGRP211localreview6promql9QueryTypeEE("negative repeat count");
  } else {
    if (n === 0) {
      return "";
    } else {
      if (n === 1) {
        return self;
      } else {
        const len = self.length;
        const total = Math.imul(len, n) | 0;
        let _tmp;
        if (len === 0) {
          _tmp = true;
        } else {
          if (n === 0) {
            $panic();
          }
          _tmp = (total / n | 0) === len;
        }
        if (_tmp) {
          const buf = _M0MPB13StringBuilder21StringBuilder_2einner(total);
          const str = _M0IPC16string6StringPB4Show10to__string(self);
          let _tmp$2 = 0;
          while (true) {
            const _ = _tmp$2;
            if (_ < n) {
              _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
              _tmp$2 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          return _M0MPB13StringBuilder10to__string(buf);
        } else {
          return _M0FPC15abort5abortGRPB9ArrayViewGRP211localreview6promql9QueryTypeEE("repeat result too large");
        }
      }
    }
  }
}
function _M0MPC16string10StringView11has__suffix(self, str) {
  const self_len = self.end - self.start | 0;
  const str_len = str.end - str.start | 0;
  if (str_len <= self_len) {
    const start = self_len - str_len | 0;
    return str_len === 0 || _M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + start | 0), str.str.charCodeAt(str.start)) ? _M0MPC16string6String20unsafe__range__equal(self.str, self.start + start | 0, str.str, str.start, str_len) : false;
  } else {
    return false;
  }
}
function _M0MPC16string6String11has__suffix(self, str) {
  return _M0MPC16string10StringView11has__suffix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC16string10StringView13strip__suffix(self, suffix) {
  const self_len = self.end - self.start | 0;
  const suffix_len = suffix.end - suffix.start | 0;
  return self_len >= suffix_len && _M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string10StringView12view_2einner(self, self_len - suffix_len | 0, undefined), suffix) ? _M0MPC16string10StringView12view_2einner(self, 0, self_len - suffix_len | 0) : undefined;
}
function _M0MPC16string6String13strip__suffix(self, suffix) {
  return _M0MPC16string10StringView13strip__suffix(new _M0TPC16string10StringView(self, 0, self.length), suffix);
}
function _M0MPC16string10StringView13strip__prefix(self, prefix) {
  const prefix_len = prefix.end - prefix.start | 0;
  return (self.end - self.start | 0) >= prefix_len && _M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string10StringView12view_2einner(self, 0, prefix_len), prefix) ? _M0MPC16string10StringView12view_2einner(self, prefix_len, undefined) : undefined;
}
function _M0MPC15array5Array13Array_2einnerGcE(capacity) {
  return [];
}
function _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGcE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPB4Iter4foldGcRPB5ArrayGcEE(self, init, f) {
  let acc = init;
  while (true) {
    const _bind = _M0MPB4Iter4nextGcE(self);
    if (_bind === -1) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      acc = f(acc, _x);
      continue;
    }
  }
  return acc;
}
function _M0FPB36string__contains__code__unit__scalar(str, start, end, code) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(str.charCodeAt(i), code)) {
        return true;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPB28string__contains__code__unit(str, start, end, code) {
  return _M0FPB36string__contains__code__unit__scalar(str, start, end, code);
}
function _M0MPC16string10StringView20contains__code__unit(self, code) {
  return _M0FPB28string__contains__code__unit(self.str, self.start, self.end, code);
}
function _M0MPC14char4Char8to__uint(self) {
  return self;
}
function _M0FPB23build__ascii__char__set(chars) {
  let bits0 = 0;
  let bits1 = 0;
  let bits2 = 0;
  let bits3 = 0;
  const _bind = chars.str;
  const _bind$2 = chars.start;
  const _bind$3 = chars.end;
  let _tmp = _bind$2;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$3) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$4 = _bind.charCodeAt(_string_index);
        if (_bind$4 >= 55296 && _bind$4 <= 56319 && (_string_index + 1 | 0) < _bind$3) {
          const _bind$5 = _bind.charCodeAt(_string_index + 1 | 0);
          if (_bind$5 >= 56320 && _bind$5 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$4 - 55296 | 0, 1024) | 0) + _bind$5 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
          break _L;
        }
      }
      const code = _M0MPC14char4Char8to__uint(_decoded_char);
      if (code >>> 0 < 128 >>> 0) {
        const bit = 1 << (code & 31);
        const _bind$4 = code >>> 5 | 0;
        switch (_bind$4) {
          case 0: {
            bits0 = bits0 | bit;
            break;
          }
          case 1: {
            bits1 = bits1 | bit;
            break;
          }
          case 2: {
            bits2 = bits2 | bit;
            break;
          }
          default: {
            bits3 = bits3 | bit;
          }
        }
      } else {
        return undefined;
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return { _0: bits0, _1: bits1, _2: bits2, _3: bits3 };
}
function _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, code) {
  if (code >>> 0 < 128 >>> 0) {
    const bit = 1 << (code & 31);
    const _bind = code >>> 5 | 0;
    switch (_bind) {
      case 0: {
        return (bits0 & bit) !== 0;
      }
      case 1: {
        return (bits1 & bit) !== 0;
      }
      case 2: {
        return (bits2 & bit) !== 0;
      }
      default: {
        return (bits3 & bit) !== 0;
      }
    }
  } else {
    return false;
  }
}
function _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < end && _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _M0MPC16uint166UInt168to__uint(str.charCodeAt(pos)))) {
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = end;
  while (true) {
    const pos = _tmp;
    if (pos > start && _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _M0MPC16uint166UInt168to__uint(str.charCodeAt(pos - 1 | 0)))) {
      _tmp = pos - 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB26string__trim__start__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0FPB24string__trim__end__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0MPC16string10StringView14contains__char(self, c) {
  const len = self.end - self.start | 0;
  if (len > 0) {
    const c$2 = c;
    if (c$2 >= 0 && c$2 <= 65535) {
      return _M0MPC16string10StringView20contains__code__unit(self, c$2 & 65535);
    } else {
      if (c$2 < 0) {
        return false;
      } else {
        if (len >= 2) {
          const adj = c$2 - 65536 | 0;
          const high = 55296 + (adj >> 10) | 0;
          if (high <= 65535) {
            const high$2 = high & 65535;
            const low = (56320 + (adj & 1023) | 0) & 65535;
            let _tmp = 0;
            while (true) {
              const i = _tmp;
              if (i < (len - 1 | 0)) {
                if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + i | 0), high$2)) {
                  if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + (i + 1 | 0) | 0), low)) {
                    return true;
                  }
                  _tmp = i + 2 | 0;
                  continue;
                }
                _tmp = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    return false;
  } else {
    return false;
  }
}
function _M0MPC16string10StringView24trim__start__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 0, x.start, x.end));
      const _tmp$2 = x.str;
      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 1, x.start, x.end);
      let _tmp$3;
      if (_bind === undefined) {
        _tmp$3 = x.end;
      } else {
        const _Some = _bind;
        _tmp$3 = _Some;
      }
      const _x = new _M0TPC16string10StringView(_tmp$2, _tmp$3, x.end);
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView22trim__end__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      const _x = new _M0TPC16string10StringView(x.str, x.start, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView12trim_2einner(self, chars) {
  const _bind = _M0FPB23build__ascii__char__set(chars);
  if (_bind === undefined) {
    return _M0MPC16string10StringView22trim__end__with__chars(_M0MPC16string10StringView24trim__start__with__chars(self, chars), chars);
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _bits0 = _x._0;
    const _bits1 = _x._1;
    const _bits2 = _x._2;
    const _bits3 = _x._3;
    const start = _M0FPB26string__trim__start__ascii(self.str, self.start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    const end = _M0FPB24string__trim__end__ascii(self.str, start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    return new _M0TPC16string10StringView(self.str, start, end);
  }
}
function _M0MPC16string6String12trim_2einner(self, chars) {
  return _M0MPC16string10StringView12trim_2einner(new _M0TPC16string10StringView(self, 0, self.length), chars);
}
function _M0MPC16string6String4trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = new _M0TPC16string10StringView(_M0MPC16string6String4trimN7_2abindS6861, 0, _M0MPC16string6String4trimN7_2abindS6861.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string6String12trim_2einner(self, chars);
}
function _M0MPC16string6String9is__empty(self) {
  return self === "";
}
function _M0MPC16string6String4iter(self) {
  const len = self.length;
  const index = new _M0TPB8MutLocalGiE(0);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < len) {
      const c1 = self.charCodeAt(index.val);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index.val + 1 | 0) < len) {
        const c2 = self.charCodeAt(index.val + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          const c = _M0FPB32code__point__of__surrogate__pair(c1, c2);
          index.val = index.val + 2 | 0;
          return c;
        }
      }
      index.val = index.val + 1 | 0;
      return _M0MPC16uint166UInt1616unsafe__to__char(c1);
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPB4Iter3mapGssE(self, f) {
  return new _M0TPB4IterGsE(() => {
    const _bind = _M0MPB4Iter4nextGsE(self);
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0IPC14char4CharPB4Show10to__string(self) {
  return String.fromCodePoint(self);
}
function _M0IPC16string6StringPB12ToStringView16to__string__view(self) {
  return new _M0TPC16string10StringView(self, 0, self.length);
}
function _M0IPC16string10StringViewPB12ToStringView16to__string__view(self) {
  return self;
}
function _M0MPC16string6String9to__array(self) {
  return _M0MPB4Iter4foldGcRPB5ArrayGcEE(_M0MPC16string6String4iter(self), _M0MPC15array5Array13Array_2einnerGcE(self.length), (rv, c) => {
    _M0MPC15array5Array4pushGcE(rv, c);
    return rv;
  });
}
function _M0IPC14bool4BoolPB4Show10to__string(self) {
  return self ? "true" : "false";
}
function _M0MPC15array9ArrayView4iterGcE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGcE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return -1;
    }
  }, len);
}
function _M0MPC15array9ArrayView4iterGRP211localreview6promql9QueryTypeE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGRP211localreview6promql9QueryTypeE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  }, len);
}
function _M0MPC15array9ArrayView4iterGsE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGsE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  }, len);
}
function _M0MPC15array5Array4iterGcE(self) {
  return _M0MPC15array9ArrayView4iterGcE(new _M0TPB9ArrayViewGcE(self, 0, self.length));
}
function _M0MPC15array5Array4iterGsE(self) {
  return _M0MPC15array9ArrayView4iterGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length));
}
function _M0MPC15array9ArrayView4joinGsE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string6StringPB12ToStringView16to__string__view(_hd);
    const _bind = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        const _bind$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
        _tmp$2 = (size_hint$2 + (_bind$2.end - _bind$2.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC15array9ArrayView4joinGRPC16string10StringViewE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string10StringViewPB12ToStringView16to__string__view(_hd);
    const _bind = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        const _bind$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
        _tmp$2 = (size_hint$2 + (_bind$2.end - _bind$2.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0IPC16option6OptionPB2Eq5equalGsE(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function _M0MPC16option6Option6unwrapGRPB5EntryGsRPC15debug4ReprEE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MPC16option6Option10unwrap__orGRPC16string10StringViewE(self, default_) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(src, allocate_len, len, src_offset, dst_offset) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len);
  return dst;
}
function _M0FPB21calc__grow__threshold(capacity) {
  if (16 === 0) {
    $panic();
  }
  return (Math.imul(capacity, 13) | 0) / 16 | 0;
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0FPB8new__mapGsRPC15debug4ReprE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsRPC15debug4ReprE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPC13int3Int3max(self, other) {
  return self > other ? self : other;
}
function _M0MPB3Map20add__entry__to__tailGsRPC15debug4ReprE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGsRPC15debug4ReprEE(_bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGsRPC15debug4ReprE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10push__awayGsRPC15debug4ReprE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPC15debug4ReprE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPC15debug4ReprE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRPC15debug4ReprE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRPC15debug4ReprE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRPC15debug4ReprE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPC15debug4ReprE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGsRPC15debug4ReprE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRPC15debug4ReprE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPC15debug4ReprE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC15debug4ReprE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRPC15debug4ReprE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPC15debug4ReprE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPC15debug4ReprE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPC15debug4ReprE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPC15debug4ReprE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC15debug4ReprE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGsRPC15debug4ReprE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPC15debug4ReprE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3MapGsRPC15debug4ReprE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPC15debug4ReprE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPC15debug4ReprE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map4iterGsRPC15debug4ReprE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsRPC15debug4ReprEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGsE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind = curr_entry.val;
        if (_bind === undefined) {
          break _L;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _key = _x.key;
          const _value = _x.value;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return { _0: _key, _1: _value };
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0MPB3Map5iter2GsRPC15debug4ReprE(self) {
  return _M0MPB3Map4iterGsRPC15debug4ReprE(self);
}
function _M0MPC15array5Array3mapGUOsRPC15debug4ReprERPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP211localreview6promql4ExprRP211localreview6promql9QueryTypeEHRP211localreview6promql10ParseError(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      const _bind$2 = f(v);
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        return _bind$2;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP211localreview6promql9QueryTypeERP211localreview6promql10ParseErrorE2Ok(arr);
}
function _M0MPC15array5Array3mapGsRPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP211localreview6promql4ExprRPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGUsssERPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug7ContentE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug13ContentParensRPB5ArrayGsEE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGssE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPB4Iter10size__hintGsE(self) {
  return self.size_hint;
}
function _M0MPB4Iter3anyGsE(self, f) {
  while (true) {
    const _bind = _M0MPB4Iter4nextGsE(self);
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (f(_x)) {
        return true;
      }
      continue;
    }
  }
}
function _M0MPB4Iter3allGcE(self, f) {
  while (true) {
    const _bind = _M0MPB4Iter4nextGcE(self);
    if (_bind === -1) {
      return true;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (f(_x)) {
      } else {
        return false;
      }
      continue;
    }
  }
}
function _M0MPB4Iter3allGRP211localreview6promql9QueryTypeE(self, f) {
  while (true) {
    const _bind = _M0MPB4Iter4nextGRP211localreview6promql9QueryTypeE(self);
    if (_bind === undefined) {
      return true;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (f(_x)) {
      } else {
        return false;
      }
      continue;
    }
  }
}
function _M0MPB4Iter4iterGsE(self) {
  return self;
}
function _M0MPB5Iter24nextGsRPC15debug4ReprE(self) {
  return _M0MPB4Iter4nextGsE(self);
}
function _M0MPC13int3Int13is__surrogate(self) {
  return 55296 <= self && self <= 57343;
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0MPC14char4Char7to__hex(char) {
  const code = char;
  return code >= 0 && code <= 255 ? _M0MPC14byte4Byte7to__hex(code & 255) : code <= 65535 ? `${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}` : `${_M0MPC14byte4Byte7to__hex(code >> 16 & 255)}${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}`;
}
function _M0MPC14char4Char11is__control(self) {
  return self >= 0 && self <= 31 ? true : self >= 127 && self <= 159;
}
function _M0MPC14char4Char13is__printable(self) {
  if (_M0MPC14char4Char11is__control(self)) {
    return false;
  }
  const self$2 = self;
  _L: {
    _L$2: {
      if (self$2 >= 57344 && self$2 <= 63743) {
        break _L$2;
      } else {
        if (self$2 >= 983040 && self$2 <= 1048573) {
          break _L$2;
        } else {
          if (self$2 >= 1048576 && self$2 <= 1114109) {
            break _L$2;
          }
        }
      }
      break _L;
    }
    return false;
  }
  _L$2: {
    _L$3: {
      if (self$2 === 173) {
        break _L$3;
      } else {
        if (self$2 >= 1536 && self$2 <= 1541) {
          break _L$3;
        } else {
          if (self$2 === 1564) {
            break _L$3;
          } else {
            if (self$2 === 1757) {
              break _L$3;
            } else {
              if (self$2 === 1807) {
                break _L$3;
              } else {
                if (self$2 >= 2192 && self$2 <= 2193) {
                  break _L$3;
                } else {
                  if (self$2 === 2274) {
                    break _L$3;
                  } else {
                    if (self$2 === 6158) {
                      break _L$3;
                    } else {
                      if (self$2 >= 8203 && self$2 <= 8207) {
                        break _L$3;
                      } else {
                        if (self$2 >= 8234 && self$2 <= 8238) {
                          break _L$3;
                        } else {
                          if (self$2 >= 8288 && self$2 <= 8292) {
                            break _L$3;
                          } else {
                            if (self$2 >= 8294 && self$2 <= 8303) {
                              break _L$3;
                            } else {
                              if (self$2 === 65279) {
                                break _L$3;
                              } else {
                                if (self$2 >= 65529 && self$2 <= 65531) {
                                  break _L$3;
                                } else {
                                  if (self$2 === 69821) {
                                    break _L$3;
                                  } else {
                                    if (self$2 === 69837) {
                                      break _L$3;
                                    } else {
                                      if (self$2 >= 78896 && self$2 <= 78911) {
                                        break _L$3;
                                      } else {
                                        if (self$2 >= 113824 && self$2 <= 113827) {
                                          break _L$3;
                                        } else {
                                          if (self$2 >= 119155 && self$2 <= 119162) {
                                            break _L$3;
                                          } else {
                                            if (self$2 === 917505) {
                                              break _L$3;
                                            } else {
                                              if (self$2 >= 917536 && self$2 <= 917631) {
                                                break _L$3;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$2;
    }
    return false;
  }
  if (_M0MPC13int3Int13is__surrogate(self$2)) {
    return false;
  }
  if (self$2 === 8232 || self$2 === 8233) {
    return false;
  }
  _L$3: {
    _L$4: {
      if (self$2 >= 64976 && self$2 <= 65007) {
        break _L$4;
      } else {
        if (self$2 >= 65534 && self$2 <= 65535) {
          break _L$4;
        } else {
          if (self$2 >= 131070 && self$2 <= 131071) {
            break _L$4;
          } else {
            if (self$2 >= 196606 && self$2 <= 196607) {
              break _L$4;
            } else {
              if (self$2 >= 262142 && self$2 <= 262143) {
                break _L$4;
              } else {
                if (self$2 >= 327678 && self$2 <= 327679) {
                  break _L$4;
                } else {
                  if (self$2 >= 393214 && self$2 <= 393215) {
                    break _L$4;
                  } else {
                    if (self$2 >= 458750 && self$2 <= 458751) {
                      break _L$4;
                    } else {
                      if (self$2 >= 524286 && self$2 <= 524287) {
                        break _L$4;
                      } else {
                        if (self$2 >= 589822 && self$2 <= 589823) {
                          break _L$4;
                        } else {
                          if (self$2 >= 655358 && self$2 <= 655359) {
                            break _L$4;
                          } else {
                            if (self$2 >= 720894 && self$2 <= 720895) {
                              break _L$4;
                            } else {
                              if (self$2 >= 786430 && self$2 <= 786431) {
                                break _L$4;
                              } else {
                                if (self$2 >= 851966 && self$2 <= 851967) {
                                  break _L$4;
                                } else {
                                  if (self$2 >= 917502 && self$2 <= 917503) {
                                    break _L$4;
                                  } else {
                                    if (self$2 >= 983038 && self$2 <= 983039) {
                                      break _L$4;
                                    } else {
                                      if (self$2 >= 1048574 && self$2 <= 1048575) {
                                        break _L$4;
                                      } else {
                                        if (self$2 >= 1114110 && self$2 <= 1114111) {
                                          break _L$4;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$3;
    }
    return false;
  }
  return true;
}
function _M0MPC14char4Char18escape__to_2einner(self, logger, quote) {
  if (quote) {
    logger.method_table.method_3(logger.self, 39);
  }
  _L: {
    _L$2: {
      if (self === 39) {
        break _L$2;
      } else {
        if (self === 92) {
          break _L$2;
        } else {
          if (self === 10) {
            logger.method_table.method_0(logger.self, "\\n");
          } else {
            if (self === 13) {
              logger.method_table.method_0(logger.self, "\\r");
            } else {
              if (self === 8) {
                logger.method_table.method_0(logger.self, "\\b");
              } else {
                if (self === 9) {
                  logger.method_table.method_0(logger.self, "\\t");
                } else {
                  if (self >= 32 && self <= 126) {
                    logger.method_table.method_3(logger.self, self);
                  } else {
                    if (!_M0MPC14char4Char13is__printable(self)) {
                      logger.method_table.method_0(logger.self, "\\u{");
                      logger.method_table.method_0(logger.self, _M0MPC14char4Char7to__hex(self));
                      logger.method_table.method_3(logger.self, 125);
                    } else {
                      logger.method_table.method_3(logger.self, self);
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L;
    }
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, self);
  }
  if (quote) {
    logger.method_table.method_3(logger.self, 39);
    return;
  } else {
    return;
  }
}
function _M0MPC14char4Char14escape_2einner(self, quote) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0MPC14char4Char18escape__to_2einner(self, { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger }, quote);
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC15array5Array12view_2einnerGRP211localreview6promql9QueryTypeE(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    const _bind = self;
    const _bind$2 = end$2 - start | 0;
    return new _M0TPB9ArrayViewGRP211localreview6promql9QueryTypeE(_bind, start, start + _bind$2 | 0);
  } else {
    return _M0FPC15abort5abortGRPB9ArrayViewGRP211localreview6promql9QueryTypeEE("View index out of bounds");
  }
}
function _M0MPC15array5Array17reserve__capacityGsE(self, capacity) {}
function _M0MPC15array5Array6appendGsE(self, other) {
  const old_len = self.length;
  const append_len = other.end - other.start | 0;
  if ((old_len + append_len | 0) >= old_len) {
    _M0MPB7JSArray12append__view(self, other.buf, other.start, append_len);
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array9is__emptyGUsssEE(self) {
  return self.length === 0;
}
function _M0MPC15array5Array2atGcE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGRP211localreview6promql5TokenE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGRP211localreview6promql9QueryTypeE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array3setGsE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0IPC15array5ArrayPB2Eq5equalGRP211localreview6promql9QueryTypeE(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < self_len) {
        if (_M0IP211localreview6promql9QueryTypePB2Eq5equal(self[i], other[i])) {
        } else {
          return false;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
function _M0IPC15array5ArrayPB3Add3addGsE(self, other) {
  const len_self = self.length;
  const len_other = other.length;
  if (len_self === 0) {
    return _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(other, len_other, len_other, 0, 0);
  } else {
    const result = _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(self, len_self + len_other | 0, len_self, 0, 0);
    _M0MPB18UninitializedArray12unsafe__blitGsE(result, len_self, other, 0, len_other);
    return result;
  }
}
function _M0MPC15array5Array3allGsE(self, f) {
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (!f(v)) {
        return false;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC15array5Array6filterGsE(self, f) {
  const arr = [];
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array8containsGsE(self, value) {
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (v === value) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPC15array5Array10push__iterGsE(self, iter) {
  const _bind = _M0MPB4Iter10size__hintGsE(iter);
  if (_bind === undefined) {
  } else {
    const _Some = _bind;
    const _n = _Some;
    _M0MPC15array5Array17reserve__capacityGsE(self, self.length + _n | 0);
  }
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGsE(iter);
    if (_bind$2 === undefined) {
      return;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(self, _x);
      continue;
    }
  }
}
function _M0MPC15array5Array4joinGsE(self, separator) {
  return _M0MPC15array9ArrayView4joinGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), separator);
}
function _M0MPC15array5Array4joinGRPC16string10StringViewE(self, separator) {
  return _M0MPC15array9ArrayView4joinGRPC16string10StringViewE(new _M0TPB9ArrayViewGRPC16string10StringViewE(self, 0, self.length), separator);
}
function _M0IPC15float5FloatPB4Show10to__string(self) {
  return String(self);
}
function _M0MPC15debug4Repr4ReprGRP211localreview6promql10ParseErrorE(value) {
  return _M0IP211localreview6promql10ParseErrorPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGRP211localreview6promql9QueryTypeE(value) {
  return _M0IP211localreview6promql9QueryTypePC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGRP211localreview6promql4ExprE(value) {
  return _M0IP211localreview6promql4ExprPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGsE(value) {
  return _M0IPC16string6StringPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGUsssEE(value) {
  return _M0IPC15tuple6Tuple3PC15debug5Debug8to__reprGsssE(value);
}
function _M0MPC15debug4Repr5tuple(children) {
  return new _M0DTPC15debug4Repr5Tuple(children);
}
function _M0IPC15tuple6Tuple3PC15debug5Debug8to__reprGsssE(self) {
  const _a = self._0;
  const _b = self._1;
  const _c = self._2;
  return _M0MPC15debug4Repr5tuple([_M0MPC15debug4Repr4ReprGsE(_a), _M0MPC15debug4Repr4ReprGsE(_b), _M0MPC15debug4Repr4ReprGsE(_c)]);
}
function _M0MPC15debug4Repr8children(self) {
  let value;
  _L: {
    _L$2: {
      switch (self.$tag) {
        case 0: {
          break _L$2;
        }
        case 1: {
          break _L$2;
        }
        case 2: {
          break _L$2;
        }
        case 3: {
          break _L$2;
        }
        case 4: {
          break _L$2;
        }
        case 5: {
          break _L$2;
        }
        case 6: {
          break _L$2;
        }
        case 15: {
          break _L$2;
        }
        case 17: {
          break _L$2;
        }
        case 7: {
          const _Tuple = self;
          const _xs = _Tuple._0;
          return _xs;
        }
        case 8: {
          const _Array = self;
          const _xs$2 = _Array._0;
          return _xs$2;
        }
        case 9: {
          const _Record = self;
          const _xs$3 = _Record._0;
          return _xs$3;
        }
        case 10: {
          const _Enum = self;
          const _xs$4 = _Enum._1;
          return _xs$4;
        }
        case 11: {
          const _Map = self;
          const _xs$5 = _Map._0;
          return _xs$5;
        }
        case 14: {
          const _Opaque = self;
          const _value = _Opaque._1;
          value = _value;
          break _L;
        }
        case 12: {
          const _RecordField = self;
          const _value$2 = _RecordField._1;
          value = _value$2;
          break _L;
        }
        case 13: {
          const _EnumLabeledArg = self;
          const _value$3 = _EnumLabeledArg._1;
          value = _value$3;
          break _L;
        }
        default: {
          const _MapEntry = self;
          const _key = _MapEntry._0;
          const _value$4 = _MapEntry._1;
          return [_key, _value$4];
        }
      }
    }
    return [];
  }
  return [value];
}
function _M0MPC15debug4Repr14with__children(self, children) {
  _L: {
    switch (self.$tag) {
      case 0: {
        break _L;
      }
      case 1: {
        break _L;
      }
      case 2: {
        break _L;
      }
      case 3: {
        break _L;
      }
      case 4: {
        break _L;
      }
      case 5: {
        break _L;
      }
      case 6: {
        break _L;
      }
      case 15: {
        break _L;
      }
      case 17: {
        break _L;
      }
      case 7: {
        return new _M0DTPC15debug4Repr5Tuple(children);
      }
      case 8: {
        return new _M0DTPC15debug4Repr5Array(children);
      }
      case 9: {
        return new _M0DTPC15debug4Repr6Record(children);
      }
      case 10: {
        const _Enum = self;
        const _name = _Enum._0;
        return new _M0DTPC15debug4Repr4Enum(_name, children);
      }
      case 11: {
        return new _M0DTPC15debug4Repr3Map(children);
      }
      case 12: {
        const _RecordField = self;
        const _name$2 = _RecordField._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr11RecordField(_name$2, _value);
        } else {
          return new _M0DTPC15debug4Repr11RecordField(_name$2, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      case 13: {
        const _EnumLabeledArg = self;
        const _label = _EnumLabeledArg._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr14EnumLabeledArg(_label, _value);
        } else {
          return new _M0DTPC15debug4Repr14EnumLabeledArg(_label, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      case 16: {
        if (children.length === 2) {
          const _key = children[0];
          const _value = children[1];
          return new _M0DTPC15debug4Repr8MapEntry(_key, _value);
        } else {
          return new _M0DTPC15debug4Repr8MapEntry(_M0DTPC15debug4Repr7Omitted__, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      default: {
        const _Opaque = self;
        const _name$3 = _Opaque._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr6Opaque(_name$3, _value);
        } else {
          return new _M0DTPC15debug4Repr6Opaque(_name$3, _M0DTPC15debug4Repr7Omitted__);
        }
      }
    }
  }
  return self;
}
function _M0MPC15debug4Repr4bool(x) {
  return new _M0DTPC15debug4Repr7BoolLit(x);
}
function _M0MPC15debug4Repr6string(x) {
  return new _M0DTPC15debug4Repr9StringLit(x);
}
function _M0MPC15debug4Repr5array(children) {
  return new _M0DTPC15debug4Repr5Array(children);
}
function _M0MPC15debug4Repr6record(fields) {
  const _acc = [];
  const _it = _M0MPB3Map5iter2GsRPC15debug4ReprE(fields);
  let _tmp;
  while (true) {
    const _bind = _M0MPB5Iter24nextGsRPC15debug4ReprE(_it);
    if (_bind === undefined) {
      _tmp = _acc;
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _name = _x._0;
      const _value = _x._1;
      _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(_acc, new _M0DTPC15debug4Repr11RecordField(_name, _value));
      continue;
    }
  }
  return new _M0DTPC15debug4Repr6Record(_tmp);
}
function _M0MPC15debug4Repr7omitted() {
  return _M0DTPC15debug4Repr7Omitted__;
}
function _M0MPC15debug4Repr4ctor(name, args) {
  return new _M0DTPC15debug4Repr4Enum(name, _M0MPC15array5Array3mapGUOsRPC15debug4ReprERPC15debug4ReprE(args, (arg) => {
    const _label = arg._0;
    const _value = arg._1;
    if (_label === undefined) {
      return _value;
    } else {
      const _Some = _label;
      const _label$2 = _Some;
      return new _M0DTPC15debug4Repr14EnumLabeledArg(_label$2, _value);
    }
  }));
}
function _M0MPC15debug4Repr7shallow(self) {
  return _M0MPC15debug4Repr14with__children(self, []);
}
function _M0IPC15debug13ContentParensPB3Add3add(self, other) {
  return new _M0TPC15debug13ContentParens(self.size + other.size | 0, _M0IPC15array5ArrayPB3Add3addGsE(self.lines, other.lines));
}
function _M0FPC15debug14empty__content() {
  return new _M0TPC15debug7Content(0, [], false);
}
function _M0FPC15debug8verbatim(x) {
  return new _M0TPC15debug13ContentParens(1, [x]);
}
function _M0FPC15debug15content__parens(size, lines) {
  return new _M0TPC15debug13ContentParens(size, lines);
}
function _M0FPC15debug12leaf_2einner(x, needs_parens) {
  return new _M0TPC15debug7Content(1, [x], needs_parens);
}
function _M0FPC15debug11with__lines(r, f) {
  return new _M0TPC15debug13ContentParens(r.size, f(r.lines));
}
function _M0MPC15debug7Content20with__lines__content(r, f) {
  return new _M0TPC15debug7Content(r.size, f(r.lines), r.needs_parens);
}
function _M0FPC15debug15surround__lines(start, finish, lines) {
  if (lines.length === 0) {
    return [`${start}${finish}`];
  } else {
    if (lines.length === 1) {
      const _item = lines[0];
      return [`${start}${_item}${finish}`];
    } else {
      const _first = lines[0];
      const _last = lines[lines.length - 1 | 0];
      const _x = new _M0TPB9ArrayViewGsE(lines, 1, lines.length - 1 | 0);
      const _self = [];
      _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(_self, `${start}${_first}`);
      _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x));
      _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(_self, `${_last}${finish}`);
      return _self;
    }
  }
}
function _M0FPC15debug8surround(start, finish, r) {
  return _M0FPC15debug11with__lines(r, (lines) => _M0FPC15debug15surround__lines(start, finish, lines));
}
function _M0MPC15debug7Content8no__wrap(c) {
  return new _M0TPC15debug13ContentParens(c.size, c.lines);
}
function _M0FPC15debug6parens(r) {
  return new _M0TPC15debug7Content(r.size, r.lines, true);
}
function _M0FPC15debug10no__parens(r) {
  return new _M0TPC15debug7Content(r.size, r.lines, false);
}
function _M0FPC15debug14compact__lines(lines) {
  if (lines.length === 0) {
    return [];
  } else {
    if (lines.length === 1) {
      const _x = lines[0];
      return [_x];
    } else {
      const _first = lines[0];
      const _last = lines[lines.length - 1 | 0];
      const _x_end = lines.length - 1 | 0;
      if (_first === "[" && _last === "]" || _first === "{" && _last === "}") {
        const parts = [];
        const _bind = _x_end - 1 | 0;
        let _tmp = 0;
        while (true) {
          const _ = _tmp;
          if (_ < _bind) {
            const m = lines[1 + _ | 0];
            const t = _M0MPC16string6String4trim(m, undefined);
            if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(t, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1134, 0, _M0FPC15debug14compact__linesN7_2abindS1134.length))) {
              _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(parts, t);
            }
            _tmp = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const joined0 = _M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1147, 0, _M0FPC15debug14compact__linesN7_2abindS1147.length));
        const _bind$2 = _M0MPC16string6String13strip__suffix(joined0, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1141, 0, _M0FPC15debug14compact__linesN7_2abindS1141.length));
        let joined;
        if (_bind$2 === undefined) {
          joined = new _M0TPC16string10StringView(joined0, 0, joined0.length);
        } else {
          const _Some = _bind$2;
          joined = _Some;
        }
        if (_first === "{") {
          const s1 = _M0MPC16option6Option10unwrap__orGRPC16string10StringViewE(_M0MPC16string10StringView13strip__prefix(joined, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1139, 0, _M0FPC15debug14compact__linesN7_2abindS1139.length)), joined);
          const inner = _M0MPC16option6Option10unwrap__orGRPC16string10StringViewE(_M0MPC16string10StringView13strip__suffix(s1, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1138, 0, _M0FPC15debug14compact__linesN7_2abindS1138.length)), s1);
          if (_M0IPC16string10StringViewPB2Eq5equal(inner, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1136, 0, _M0FPC15debug14compact__linesN7_2abindS1136.length))) {
            return ["{}"];
          } else {
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(4);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{ ");
            _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, inner);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " }");
            return [_M0MPB13StringBuilder10to__string(_string_builder)];
          }
        } else {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(2);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "[");
          _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, joined);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "]");
          return [_M0MPB13StringBuilder10to__string(_string_builder)];
        }
      } else {
        if (_M0MPC16string6String11has__suffix(_first, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1148, 0, _M0FPC15debug14compact__linesN7_2abindS1148.length)) && _last === ")") {
          const parts = [];
          const _bind = _x_end - 1 | 0;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < _bind) {
              const m = lines[1 + _ | 0];
              const t = _M0MPC16string6String4trim(m, undefined);
              if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(t, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1152, 0, _M0FPC15debug14compact__linesN7_2abindS1152.length))) {
                _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(parts, t);
              }
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          const joined0 = _M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1161, 0, _M0FPC15debug14compact__linesN7_2abindS1161.length));
          const _bind$2 = _M0MPC16string6String13strip__suffix(joined0, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1155, 0, _M0FPC15debug14compact__linesN7_2abindS1155.length));
          let joined;
          if (_bind$2 === undefined) {
            joined = new _M0TPC16string10StringView(joined0, 0, joined0.length);
          } else {
            const _Some = _bind$2;
            joined = _Some;
          }
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(0);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _first);
          _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, joined);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _last);
          return [_M0MPB13StringBuilder10to__string(_string_builder)];
        } else {
          const parts = [new _M0TPC16string10StringView(_first, 0, _first.length)];
          const _bind = _x_end - 1 | 0;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < _bind) {
              const m = lines[1 + _ | 0];
              _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(parts, _M0MPC16string6String4trim(m, undefined));
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(parts, _M0MPC16string6String4trim(_last, undefined));
          return [_M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1166, 0, _M0FPC15debug14compact__linesN7_2abindS1166.length))];
        }
      }
    }
  }
}
function _M0MPC15debug7Content7compact(r) {
  return _M0MPC15debug7Content20with__lines__content(r, _M0FPC15debug14compact__lines);
}
function _M0FPC15debug6indent(prefix, r) {
  return _M0FPC15debug11with__lines(r, (lines) => _M0MPC15array5Array3mapGssE(lines, (line) => `${prefix}${line}`));
}
function _M0FPC15debug14indent__spaces(n, r) {
  return _M0FPC15debug6indent(_M0MPC16string6String6repeat(" ", n), r);
}
function _M0FPC15debug19bracket__seq__lines(open, close, indent_by, contents) {
  if (contents.length === 0) {
    return [`${open}${close}`];
  } else {
    if (contents.length === 1) {
      const _item = contents[0];
      if (_item.length > 1) {
        const lines = _M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines;
        if (!_M0MPC15array5Array9is__emptyGUsssEE(lines)) {
          const last_i = lines.length - 1 | 0;
          _M0MPC15array5Array3setGsE(lines, last_i, `${_M0MPC15array5Array2atGRP211localreview6promql5TokenE(lines, last_i)},`);
        }
        const _self = [];
        _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(_self, open);
        _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(lines));
        _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(_self, close);
        return _self;
      } else {
        const inner = _M0FPC15debug14compact__lines(_item);
        if (inner.length === 0) {
          return [`${open}${close}`];
        } else {
          if (inner.length === 1) {
            const _x = inner[0];
            if (open === "{" && close === "}") {
              const inner$2 = _M0MPC16string6String4trim(_x, undefined);
              if (_M0IPC16string10StringViewPB2Eq5equal(inner$2, new _M0TPC16string10StringView(_M0FPC15debug19bracket__seq__linesN7_2abindS1175, 0, _M0FPC15debug19bracket__seq__linesN7_2abindS1175.length))) {
                return ["{}"];
              } else {
                const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(4);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{ ");
                _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, inner$2);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " }");
                return [_M0MPB13StringBuilder10to__string(_string_builder)];
              }
            } else {
              return [`${open}${_x}${close}`];
            }
          } else {
            const _self = [];
            _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(_self, open);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines));
            _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(_self, close);
            return _self;
          }
        }
      }
    } else {
      const out = [open];
      const _bind = contents.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind) {
          const item = contents[_];
          const item_lines = _M0MPC15array5Array6filterGsE(item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
          if (item_lines.length === 0) {
          } else {
            if (item_lines.length === 1) {
              const _x = item_lines[0];
              _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_x},`);
            } else {
              const _first = item_lines[0];
              const _last = item_lines[item_lines.length - 1 | 0];
              const _x_end = item_lines.length - 1 | 0;
              _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_first}`);
              const _bind$2 = _x_end - 1 | 0;
              let _tmp$2 = 0;
              while (true) {
                const _$2 = _tmp$2;
                if (_$2 < _bind$2) {
                  const mid = item_lines[1 + _$2 | 0];
                  _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${mid}`);
                  _tmp$2 = _$2 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_last},`);
            }
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(out, close);
      return out;
    }
  }
}
function _M0FPC15debug17comma__seq__lines(begin, end, contents) {
  if (begin === "[" && end === "]") {
    return _M0FPC15debug19bracket__seq__lines("[", "]", 2, contents);
  } else {
    if (begin === "{" && end === "}") {
      return _M0FPC15debug19bracket__seq__lines("{", "}", 2, contents);
    } else {
      if (begin === "" && end === "") {
        let lines;
        if (contents.length === 0) {
          lines = [`${begin}${end}`];
        } else {
          if (contents.length === 1) {
            const _item = contents[0];
            lines = _M0FPC15debug15surround__lines(begin, end, _item);
          } else {
            const _first = contents[0];
            const _last = contents[contents.length - 1 | 0];
            const _x_end = contents.length - 1 | 0;
            const space = _M0MPC16string6String6repeat(" ", begin.length);
            const middle_lines = [];
            const _bind = _x_end - 1 | 0;
            let _tmp = 0;
            while (true) {
              const _ = _tmp;
              if (_ < _bind) {
                const item = contents[1 + _ | 0];
                const _bind$2 = _M0FPC15debug15surround__lines(space, ",", item);
                _M0MPC15array5Array6appendGsE(middle_lines, new _M0TPB9ArrayViewGsE(_bind$2, 0, _bind$2.length));
                _tmp = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _self = [];
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug15surround__lines(begin, ",", _first)));
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(middle_lines));
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug15surround__lines(space, end, _last)));
            lines = _self;
          }
        }
        return _M0MPC15array5Array6filterGsE(lines, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
      } else {
        if (contents.length === 0) {
          return [`${begin}${end}`];
        } else {
          if (contents.length === 1) {
            const _item = contents[0];
            const item_lines = _M0MPC15array5Array6filterGsE(_item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
            if (item_lines.length === 0) {
              return [`${begin}${end}`];
            } else {
              if (item_lines.length === 1) {
                const _x = item_lines[0];
                return [`${begin}${_x}${end}`];
              } else {
                const _last_line = item_lines[item_lines.length - 1 | 0];
                const _x = new _M0TPB9ArrayViewGsE(item_lines, 0, item_lines.length - 1 | 0);
                const _self = [];
                _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(_self, begin);
                _M0MPC15array5Array10push__iterGsE(_self, _M0MPB4Iter4iterGsE(_M0MPB4Iter3mapGssE(_M0MPC15array9ArrayView4iterGsE(_x), (line) => `${_M0MPC16string6String6repeat(" ", 2)}${line}`)));
                _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(_self, `${_M0MPC16string6String6repeat(" ", 2)}${_last_line},`);
                _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(_self, end);
                return _self;
              }
            }
          } else {
            const out = [begin];
            const _bind = contents.length;
            let _tmp = 0;
            while (true) {
              const _ = _tmp;
              if (_ < _bind) {
                const item = contents[_];
                const item_lines = _M0MPC15array5Array6filterGsE(item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
                if (item_lines.length === 0) {
                } else {
                  if (item_lines.length === 1) {
                    const _x = item_lines[0];
                    _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_x},`);
                  } else {
                    const _first = item_lines[0];
                    const _last = item_lines[item_lines.length - 1 | 0];
                    const _x_end = item_lines.length - 1 | 0;
                    _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_first}`);
                    const _bind$2 = _x_end - 1 | 0;
                    let _tmp$2 = 0;
                    while (true) {
                      const _$2 = _tmp$2;
                      if (_$2 < _bind$2) {
                        const mid = item_lines[1 + _$2 | 0];
                        _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(out, `${_M0MPC16string6String6repeat(" ", 2)}${mid}`);
                        _tmp$2 = _$2 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_last},`);
                  }
                }
                _tmp = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(out, end);
            return out;
          }
        }
      }
    }
  }
}
function _M0FPC15debug10comma__seq(begin, end, contents) {
  const _bind = contents.length;
  let _tmp = 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp;
    const size = _tmp$2;
    if (_ < _bind) {
      const c = contents[_];
      _tmp = _ + 1 | 0;
      _tmp$2 = size + c.size | 0;
      continue;
    } else {
      return new _M0TPC15debug7Content(size, _M0FPC15debug17comma__seq__lines(begin, end, _M0MPC15array5Array3mapGRPC15debug13ContentParensRPB5ArrayGsEE(contents, (c) => c.lines)), false);
    }
  }
}
function _M0FPC15debug14print__content(r) {
  return _M0MPC15array5Array4joinGsE(r.lines, new _M0TPC16string10StringView(_M0FPC15debug14print__contentN7_2abindS1244, 0, _M0FPC15debug14print__contentN7_2abindS1244.length));
}
function _M0FPC15debug14with__resizing(_root_size, threshold, rendered_children) {
  if (threshold <= 0) {
    return rendered_children;
  } else {
    const compacted = _M0MPC15debug7Content7compact(rendered_children);
    return _M0MPC15array5Array3allGsE(compacted.lines, (line) => line.length <= threshold) ? compacted : rendered_children;
  }
}
function _M0MPC15debug4Repr17info__adds__depth(info) {
  let _tmp;
  switch (info.$tag) {
    case 12: {
      _tmp = true;
      break;
    }
    case 13: {
      _tmp = true;
      break;
    }
    case 16: {
      _tmp = true;
      break;
    }
    default: {
      _tmp = false;
    }
  }
  return !_tmp;
}
function _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, d, node) {
  const children = _M0MPC15debug4Repr8children(node);
  if (d <= 0) {
    return _M0MPC15array5Array9is__emptyGUsssEE(children) ? node : !_M0MPC15debug4Repr17info__adds__depth(node) ? _M0MPC15debug4Repr14with__children(node, _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(children, (child) => _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, d, child))) : replacement;
  } else {
    if (_M0MPC15array5Array9is__emptyGUsssEE(children)) {
      return node;
    } else {
      const next_depth = _M0MPC15debug4Repr17info__adds__depth(node) ? d - 1 | 0 : d;
      return _M0MPC15debug4Repr14with__children(node, _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(children, (child) => _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, next_depth, child)));
    }
  }
}
function _M0MPC15debug4Repr19prune__info_2einner(self, replacement, max_depth) {
  if (max_depth === undefined) {
    return self;
  } else {
    const _Some = max_depth;
    const _depth = _Some;
    return _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, _M0MPC13int3Int3max(1, _depth), self);
  }
}
function _M0MPC15debug4Repr11prune__info(self, replacement$46$opt, max_depth) {
  let replacement;
  if (replacement$46$opt === undefined) {
    replacement = _M0MPC15debug4Repr7omitted();
  } else {
    const _Some = replacement$46$opt;
    replacement = _Some;
  }
  return _M0MPC15debug4Repr19prune__info_2einner(self, replacement, max_depth);
}
function _M0FPC15debug10info__size(info) {
  switch (info.$tag) {
    case 0: {
      return 1;
    }
    case 1: {
      return 1;
    }
    case 2: {
      return 1;
    }
    case 3: {
      return 1;
    }
    case 4: {
      return 1;
    }
    case 5: {
      return 1;
    }
    case 6: {
      const _StringLit = info;
      const _s = _StringLit._0;
      return _s.length <= 15 ? 1 : 2;
    }
    case 7: {
      return 1;
    }
    case 8: {
      return 1;
    }
    case 9: {
      return 2;
    }
    case 12: {
      const _RecordField = info;
      const _name = _RecordField._0;
      return _name.length <= 15 ? 0 : 1;
    }
    case 13: {
      const _EnumLabeledArg = info;
      const _name$2 = _EnumLabeledArg._0;
      return _name$2.length <= 15 ? 0 : 1;
    }
    case 10: {
      const _Enum = info;
      const _name$3 = _Enum._0;
      return _name$3.length <= 15 ? 1 : 2;
    }
    case 14: {
      const _Opaque = info;
      const _name$4 = _Opaque._0;
      return _name$4.length <= 15 ? 1 : 2;
    }
    case 15: {
      const _Literal = info;
      const _s$2 = _Literal._0;
      return _s$2.length <= 15 ? 1 : 2;
    }
    case 11: {
      return 2;
    }
    case 16: {
      return 0;
    }
    default: {
      return 0;
    }
  }
}
function _M0FPC15debug17is__unquoted__key(key) {
  let rest;
  _L: {
    if (key.length >= 1) {
      const _x = key.charCodeAt(0);
      if (_x >= 97 && _x <= 122) {
        const _x$2 = new _M0TPC16string10StringView(key, 1, key.length);
        rest = _x$2;
        break _L;
      } else {
        if (_x === 95) {
          const _x$2 = new _M0TPC16string10StringView(key, 1, key.length);
          rest = _x$2;
          break _L;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  }
  return _M0MPC16string10StringView3all(rest, (c) => c >= 97 && c <= 122 ? true : c >= 65 && c <= 90 ? true : c >= 48 && c <= 57 ? true : c === 95);
}
function _M0FPC15debug20pretty__print__label(name) {
  return _M0FPC15debug17is__unquoted__key(name) ? name : _M0MPC16string6String14escape_2einner(name, true);
}
function _M0MPC15debug4Repr13pretty__print(self, children) {
  switch (self.$tag) {
    case 0: {
      return _M0FPC15debug10comma__seq("(", ")", []);
    }
    case 1: {
      const _Integer = self;
      const _s = _Integer._0;
      let _tmp;
      if (_s.length >= 1) {
        const _x = _s.charCodeAt(0);
        if (_x === 45) {
          _tmp = 1;
        } else {
          _tmp = 0;
        }
      } else {
        _tmp = 0;
      }
      return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp, [_s]));
    }
    case 2: {
      const _DoubleLit = self;
      const _x = _DoubleLit._0;
      const needs_parens = 1 / _x < 0;
      return _M0FPC15debug12leaf_2einner(String(_x), needs_parens);
    }
    case 3: {
      const _FloatLit = self;
      const _x$2 = _FloatLit._0;
      const needs_parens$2 = Math.fround(Math.fround(1) / _x$2) < Math.fround(0);
      return _M0FPC15debug12leaf_2einner(_M0IPC15float5FloatPB4Show10to__string(_x$2), needs_parens$2);
    }
    case 4: {
      const _BoolLit = self;
      const _x$3 = _BoolLit._0;
      return _M0FPC15debug12leaf_2einner(_M0IPC14bool4BoolPB4Show10to__string(_x$3), false);
    }
    case 5: {
      const _CharLit = self;
      const _x$4 = _CharLit._0;
      return _M0FPC15debug12leaf_2einner(_M0MPC14char4Char14escape_2einner(_x$4, true), false);
    }
    case 6: {
      const _StringLit = self;
      const _x$5 = _StringLit._0;
      return _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_M0MPC16string6String14escape_2einner(_x$5, true)));
    }
    case 7: {
      return _M0FPC15debug10comma__seq("(", ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 10: {
      const _Enum = self;
      const _name = _Enum._0;
      return children.length === 0 ? _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_name)) : _name === "Tuple" ? _M0FPC15debug10comma__seq("(", ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x))) : _M0FPC15debug10comma__seq(`${_name}(`, ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 8: {
      return _M0FPC15debug10comma__seq("[", "]", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 9: {
      return _M0FPC15debug10comma__seq("{", "}", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 14: {
      const _Opaque = self;
      const _name$2 = _Opaque._0;
      if (_M0MPC15array5Array9is__emptyGUsssEE(children)) {
        return _M0FPC15debug10no__parens(_M0FPC15debug8surround("<", ">", _M0FPC15debug8verbatim(_name$2)));
      } else {
        const body = _M0IPC15debug13ContentParensPB3Add3add(_M0FPC15debug8verbatim(`${_name$2}:`), _M0FPC15debug6indent("  ", _M0MPC15debug7Content8no__wrap(_M0FPC15debug10comma__seq("", "", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x))))));
        return _M0FPC15debug10no__parens(_M0FPC15debug8surround("<", ">", body));
      }
    }
    case 15: {
      const _Literal = self;
      const _str = _Literal._0;
      return _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_str));
    }
    case 11: {
      return _M0FPC15debug10comma__seq("{", "}", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 16: {
      if (children.length === 2) {
        const _key = children[0];
        const _val = children[1];
        const k = _M0MPC15debug7Content8no__wrap(_key);
        const v = _M0MPC15debug7Content8no__wrap(_val);
        const _bind = v.lines;
        if (_bind.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind.length === 1) {
            const _one = _bind[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens((1 + k.size | 0) + v.size | 0, [`${_M0FPC15debug14print__content(_M0FPC15debug8surround("", ": ", k))}${_one}`]));
          } else {
            const _first = _bind[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind, 1, _bind.length);
            const head = `${_M0FPC15debug14print__content(_M0FPC15debug8surround("", ": ", k))}${_first}`;
            const _tmp$2 = (1 + k.size | 0) + v.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(_self, head);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$2, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    case 13: {
      const _EnumLabeledArg = self;
      const _name$3 = _EnumLabeledArg._0;
      if (children.length === 1) {
        const _val = children[0];
        const _bind = _val.lines;
        if (_bind.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind.length === 1) {
            const _first = _bind[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(1 + _val.size | 0, [`${_name$3}=${_first}`]));
          } else {
            const _first = _bind[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind, 1, _bind.length);
            const _tmp$2 = 1 + _val.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(_self, `${_name$3}=${_first}`);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$2, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    case 12: {
      const _RecordField = self;
      const _name$4 = _RecordField._0;
      if (children.length === 1) {
        const _val = children[0];
        const label = _M0FPC15debug20pretty__print__label(_name$4);
        const v = _M0MPC15debug7Content8no__wrap(_val);
        const _bind = v.lines;
        if (_bind.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind.length === 1) {
            const _one = _bind[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(1 + v.size | 0, [`${label}: ${_one}`]));
          } else {
            const _first = _bind[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind, 1, _bind.length);
            const _tmp$2 = 1 + v.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(_self, `${label}: ${_first}`);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$2, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    default: {
      return _M0FPC15debug6parens(_M0FPC15debug8verbatim("..."));
    }
  }
}
function _M0MPC15debug4Repr12render__repr(self, threshold) {
  const label = _M0MPC15debug4Repr7shallow(self);
  const children = _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug7ContentE(_M0MPC15debug4Repr8children(self), (child) => _M0MPC15debug4Repr12render__repr(child, threshold));
  return _M0FPC15debug14with__resizing(_M0FPC15debug10info__size(label), threshold, _M0MPC15debug4Repr13pretty__print(label, children));
}
function _M0FPC15debug6render(r, max_depth) {
  const max_depth$2 = max_depth === undefined ? _M0FPC15debug6renderN6constrS1705 : max_depth;
  const info = _M0MPC15debug4Repr11prune__info(r, undefined, max_depth$2);
  return _M0FPC15debug14print__content(_M0MPC15debug7Content8no__wrap(_M0MPC15debug4Repr12render__repr(info, 70)));
}
function _M0IPC15debug4ReprPB4Show6output(self, logger) {
  logger.method_table.method_0(logger.self, _M0FPC15debug6render(self, undefined));
}
function _M0IPC14bool4BoolPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr4bool(self);
}
function _M0IPC16string6StringPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr6string(self);
}
function _M0IPC15array5ArrayPC15debug5Debug8to__reprGsE(self) {
  return _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGsRPC15debug4ReprE(self, (x) => _M0MPC15debug4Repr4ReprGsE(x)));
}
function _M0IPC15array5ArrayPC15debug5Debug8to__reprGRP211localreview6promql4ExprE(self) {
  return _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGRP211localreview6promql4ExprRPC15debug4ReprE(self, (x) => _M0MPC15debug4Repr4ReprGRP211localreview6promql4ExprE(x)));
}
function _M0IPC15array5ArrayPC15debug5Debug8to__reprGUsssEE(self) {
  return _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGUsssERPC15debug4ReprE(self, (x) => _M0MPC15debug4Repr4ReprGUsssEE(x)));
}
function _M0IPC16option6OptionPC15debug5Debug8to__reprGsE(self) {
  if (self === undefined) {
    return _M0MPC15debug4Repr4ctor("None", []);
  } else {
    const _Some = self;
    const _x = _Some;
    return _M0MPC15debug4Repr4ctor("Some", [{ _0: undefined, _1: _M0MPC15debug4Repr4ReprGsE(_x) }]);
  }
}
function _M0IP211localreview6promql10ParseErrorPC15debug5Debug8to__repr(_x_366) {
  let _arg_367;
  _L: {
    const _Invalid = _x_366;
    const _$42$arg_367 = _Invalid._0;
    _arg_367 = _$42$arg_367;
    break _L;
  }
  return _M0MPC15debug4Repr4ctor("Invalid", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_367) }]);
}
function _M0IP211localreview6promql4ExprPC15debug5Debug8to__repr(_x_298) {
  let _arg_330;
  let _arg_331;
  _L: {
    let _arg_328;
    let _arg_329;
    _L$2: {
      let _arg_326;
      let _arg_325;
      let _arg_327;
      _L$3: {
        let _arg_323;
        let _arg_321;
        let _arg_320;
        let _arg_322;
        let _arg_324;
        _L$4: {
          let _arg_318;
          let _arg_316;
          let _arg_317;
          let _arg_319;
          _L$5: {
            let _arg_314;
            let _arg_315;
            _L$6: {
              let _arg_312;
              let _arg_311;
              let _arg_313;
              _L$7: {
                let _arg_309;
                let _arg_307;
                let _arg_308;
                let _arg_310;
                _L$8: {
                  let _arg_305;
                  let _arg_306;
                  _L$9: {
                    let _arg_303;
                    let _arg_304;
                    _L$10: {
                      let _arg_301;
                      let _arg_302;
                      _L$11: {
                        let _arg_300;
                        _L$12: {
                          let _arg_299;
                          _L$13: {
                            switch (_x_298.$tag) {
                              case 0: {
                                const _Number = _x_298;
                                const _$42$arg_299 = _Number._0;
                                _arg_299 = _$42$arg_299;
                                break _L$13;
                              }
                              case 1: {
                                const _StringLiteral = _x_298;
                                const _$42$arg_300 = _StringLiteral._0;
                                _arg_300 = _$42$arg_300;
                                break _L$12;
                              }
                              case 2: {
                                const _Selector = _x_298;
                                const _$42$arg_301 = _Selector._0;
                                const _$42$arg_302 = _Selector._1;
                                _arg_301 = _$42$arg_301;
                                _arg_302 = _$42$arg_302;
                                break _L$11;
                              }
                              case 3: {
                                const _Range = _x_298;
                                const _$42$arg_303 = _Range._0;
                                const _$42$arg_304 = _Range._1;
                                _arg_303 = _$42$arg_303;
                                _arg_304 = _$42$arg_304;
                                break _L$10;
                              }
                              case 4: {
                                const _Call = _x_298;
                                const _$42$arg_305 = _Call._0;
                                const _$42$arg_306 = _Call._1;
                                _arg_305 = _$42$arg_305;
                                _arg_306 = _$42$arg_306;
                                break _L$9;
                              }
                              case 5: {
                                const _Aggregate = _x_298;
                                const _$42$arg_307 = _Aggregate._0;
                                const _$42$arg_308 = _Aggregate._1;
                                const _$42$arg_309 = _Aggregate._2;
                                const _$42$arg_310 = _Aggregate._3;
                                _arg_309 = _$42$arg_309;
                                _arg_307 = _$42$arg_307;
                                _arg_308 = _$42$arg_308;
                                _arg_310 = _$42$arg_310;
                                break _L$8;
                              }
                              case 6: {
                                const _Binary = _x_298;
                                const _$42$arg_311 = _Binary._0;
                                const _$42$arg_312 = _Binary._1;
                                const _$42$arg_313 = _Binary._2;
                                _arg_312 = _$42$arg_312;
                                _arg_311 = _$42$arg_311;
                                _arg_313 = _$42$arg_313;
                                break _L$7;
                              }
                              case 7: {
                                const _Unary = _x_298;
                                const _$42$arg_314 = _Unary._0;
                                const _$42$arg_315 = _Unary._1;
                                _arg_314 = _$42$arg_314;
                                _arg_315 = _$42$arg_315;
                                break _L$6;
                              }
                              case 8: {
                                const _BinaryMatch = _x_298;
                                const _$42$arg_316 = _BinaryMatch._0;
                                const _$42$arg_317 = _BinaryMatch._1;
                                const _$42$arg_318 = _BinaryMatch._2;
                                const _$42$arg_319 = _BinaryMatch._3;
                                _arg_318 = _$42$arg_318;
                                _arg_316 = _$42$arg_316;
                                _arg_317 = _$42$arg_317;
                                _arg_319 = _$42$arg_319;
                                break _L$5;
                              }
                              case 9: {
                                const _AggregateParam = _x_298;
                                const _$42$arg_320 = _AggregateParam._0;
                                const _$42$arg_321 = _AggregateParam._1;
                                const _$42$arg_322 = _AggregateParam._2;
                                const _$42$arg_323 = _AggregateParam._3;
                                const _$42$arg_324 = _AggregateParam._4;
                                _arg_323 = _$42$arg_323;
                                _arg_321 = _$42$arg_321;
                                _arg_320 = _$42$arg_320;
                                _arg_322 = _$42$arg_322;
                                _arg_324 = _$42$arg_324;
                                break _L$4;
                              }
                              case 10: {
                                const _Subquery = _x_298;
                                const _$42$arg_325 = _Subquery._0;
                                const _$42$arg_326 = _Subquery._1;
                                const _$42$arg_327 = _Subquery._2;
                                _arg_326 = _$42$arg_326;
                                _arg_325 = _$42$arg_325;
                                _arg_327 = _$42$arg_327;
                                break _L$3;
                              }
                              case 11: {
                                const _Offset = _x_298;
                                const _$42$arg_328 = _Offset._0;
                                const _$42$arg_329 = _Offset._1;
                                _arg_328 = _$42$arg_328;
                                _arg_329 = _$42$arg_329;
                                break _L$2;
                              }
                              default: {
                                const _At = _x_298;
                                const _$42$arg_330 = _At._0;
                                const _$42$arg_331 = _At._1;
                                _arg_330 = _$42$arg_330;
                                _arg_331 = _$42$arg_331;
                                break _L;
                              }
                            }
                          }
                          return _M0MPC15debug4Repr4ctor("Number", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_299) }]);
                        }
                        return _M0MPC15debug4Repr4ctor("StringLiteral", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_300) }]);
                      }
                      return _M0MPC15debug4Repr4ctor("Selector", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_301) }, { _0: undefined, _1: _M0IPC15array5ArrayPC15debug5Debug8to__reprGUsssEE(_arg_302) }]);
                    }
                    return _M0MPC15debug4Repr4ctor("Range", [{ _0: undefined, _1: _M0IP211localreview6promql4ExprPC15debug5Debug8to__repr(_arg_303) }, { _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_304) }]);
                  }
                  return _M0MPC15debug4Repr4ctor("Call", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_305) }, { _0: undefined, _1: _M0IPC15array5ArrayPC15debug5Debug8to__reprGRP211localreview6promql4ExprE(_arg_306) }]);
                }
                return _M0MPC15debug4Repr4ctor("Aggregate", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_307) }, { _0: undefined, _1: _M0IPC15array5ArrayPC15debug5Debug8to__reprGsE(_arg_308) }, { _0: undefined, _1: _M0IPC14bool4BoolPC15debug5Debug8to__repr(_arg_309) }, { _0: undefined, _1: _M0IP211localreview6promql4ExprPC15debug5Debug8to__repr(_arg_310) }]);
              }
              return _M0MPC15debug4Repr4ctor("Binary", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_311) }, { _0: undefined, _1: _M0IP211localreview6promql4ExprPC15debug5Debug8to__repr(_arg_312) }, { _0: undefined, _1: _M0IP211localreview6promql4ExprPC15debug5Debug8to__repr(_arg_313) }]);
            }
            return _M0MPC15debug4Repr4ctor("Unary", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_314) }, { _0: undefined, _1: _M0IP211localreview6promql4ExprPC15debug5Debug8to__repr(_arg_315) }]);
          }
          return _M0MPC15debug4Repr4ctor("BinaryMatch", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_316) }, { _0: undefined, _1: _M0IP211localreview6promql14VectorMatchingPC15debug5Debug8to__repr(_arg_317) }, { _0: undefined, _1: _M0IP211localreview6promql4ExprPC15debug5Debug8to__repr(_arg_318) }, { _0: undefined, _1: _M0IP211localreview6promql4ExprPC15debug5Debug8to__repr(_arg_319) }]);
        }
        return _M0MPC15debug4Repr4ctor("AggregateParam", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_320) }, { _0: undefined, _1: _M0IPC15array5ArrayPC15debug5Debug8to__reprGsE(_arg_321) }, { _0: undefined, _1: _M0IPC14bool4BoolPC15debug5Debug8to__repr(_arg_322) }, { _0: undefined, _1: _M0IP211localreview6promql4ExprPC15debug5Debug8to__repr(_arg_323) }, { _0: undefined, _1: _M0IP211localreview6promql4ExprPC15debug5Debug8to__repr(_arg_324) }]);
      }
      return _M0MPC15debug4Repr4ctor("Subquery", [{ _0: undefined, _1: _M0IP211localreview6promql4ExprPC15debug5Debug8to__repr(_arg_325) }, { _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_326) }, { _0: undefined, _1: _M0IPC16option6OptionPC15debug5Debug8to__reprGsE(_arg_327) }]);
    }
    return _M0MPC15debug4Repr4ctor("Offset", [{ _0: undefined, _1: _M0IP211localreview6promql4ExprPC15debug5Debug8to__repr(_arg_328) }, { _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_329) }]);
  }
  return _M0MPC15debug4Repr4ctor("At", [{ _0: undefined, _1: _M0IP211localreview6promql4ExprPC15debug5Debug8to__repr(_arg_330) }, { _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_331) }]);
}
function _M0IP211localreview6promql9QueryTypePC15debug5Debug8to__repr(_x_160) {
  switch (_x_160) {
    case 0: {
      return _M0MPC15debug4Repr4ctor("Scalar", []);
    }
    case 1: {
      return _M0MPC15debug4Repr4ctor("InstantVector", []);
    }
    case 2: {
      return _M0MPC15debug4Repr4ctor("RangeVector", []);
    }
    default: {
      return _M0MPC15debug4Repr4ctor("StringValue", []);
    }
  }
}
function _M0IP211localreview6promql9QueryTypePB2Eq5equal(_x_156, _x_157) {
  switch (_x_156) {
    case 0: {
      if (_x_157 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_157 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_157 === 2) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_157 === 3) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function _M0IP211localreview6promql14VectorMatchingPC15debug5Debug8to__repr(_x_154) {
  const _bind = [{ _0: "return_bool", _1: _M0IPC14bool4BoolPC15debug5Debug8to__repr(_x_154.return_bool) }, { _0: "mode", _1: _M0IPC16option6OptionPC15debug5Debug8to__reprGsE(_x_154.mode) }, { _0: "labels", _1: _M0IPC15array5ArrayPC15debug5Debug8to__reprGsE(_x_154.labels) }, { _0: "group", _1: _M0IPC16option6OptionPC15debug5Debug8to__reprGsE(_x_154.group) }, { _0: "include_labels", _1: _M0IPC15array5ArrayPC15debug5Debug8to__reprGsE(_x_154.include_labels) }];
  return _M0MPC15debug4Repr6record(_M0MPB3Map3MapGsRPC15debug4ReprE(new _M0TPB9ArrayViewGUsRPC15debug4ReprEE(_bind, 0, 5), undefined));
}
function _M0FP211localreview6promql16temporal__target(expr) {
  let _tmp = expr;
  _L: while (true) {
    const expr$2 = _tmp;
    let v;
    _L$2: {
      switch (expr$2.$tag) {
        case 2: {
          return true;
        }
        case 3: {
          return true;
        }
        case 10: {
          return true;
        }
        case 11: {
          const _Offset = expr$2;
          const _v = _Offset._0;
          v = _v;
          break _L$2;
        }
        case 12: {
          const _At = expr$2;
          const _v$2 = _At._0;
          v = _v$2;
          break _L$2;
        }
        default: {
          return false;
        }
      }
    }
    _tmp = v;
    continue;
  }
}
function _M0FP211localreview6promql15infer__type__at(expr, depth) {
  let _tmp = expr;
  let _tmp$2 = depth;
  _L: while (true) {
    const expr$2 = _tmp;
    const depth$2 = _tmp$2;
    if (depth$2 > 64) {
      return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("type expression depth exceeds 64"));
    }
    let name;
    let args;
    _L$2: {
      let v;
      _L$3: {
        let a;
        let op;
        let b;
        _L$4: {
          let v$2;
          _L$5: {
            let v$3;
            _L$6: {
              let a$2;
              let op$2;
              let matching;
              let b$2;
              _L$7: {
                let parameter;
                let name$2;
                let v$4;
                _L$8: {
                  let v$5;
                  _L$9: {
                    let v$6;
                    _L$10: {
                      switch (expr$2.$tag) {
                        case 0: {
                          return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE2Ok(0);
                        }
                        case 1: {
                          return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE2Ok(3);
                        }
                        case 11: {
                          const _Offset = expr$2;
                          const _v = _Offset._0;
                          v$6 = _v;
                          break _L$10;
                        }
                        case 12: {
                          const _At = expr$2;
                          const _v$2 = _At._0;
                          v$6 = _v$2;
                          break _L$10;
                        }
                        case 10: {
                          const _Subquery = expr$2;
                          const _v$3 = _Subquery._0;
                          v$5 = _v$3;
                          break _L$9;
                        }
                        case 9: {
                          const _AggregateParam = expr$2;
                          const _name = _AggregateParam._0;
                          const _parameter = _AggregateParam._3;
                          const _v$4 = _AggregateParam._4;
                          parameter = _parameter;
                          name$2 = _name;
                          v$4 = _v$4;
                          break _L$8;
                        }
                        case 8: {
                          const _BinaryMatch = expr$2;
                          const _op = _BinaryMatch._0;
                          const _matching = _BinaryMatch._1;
                          const _a = _BinaryMatch._2;
                          const _b = _BinaryMatch._3;
                          a$2 = _a;
                          op$2 = _op;
                          matching = _matching;
                          b$2 = _b;
                          break _L$7;
                        }
                        case 2: {
                          return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE2Ok(1);
                        }
                        case 3: {
                          const _Range = expr$2;
                          const _v$5 = _Range._0;
                          v$3 = _v$5;
                          break _L$6;
                        }
                        case 7: {
                          const _Unary = expr$2;
                          const _v$6 = _Unary._1;
                          v$2 = _v$6;
                          break _L$5;
                        }
                        case 6: {
                          const _Binary = expr$2;
                          const _op$2 = _Binary._0;
                          const _a$2 = _Binary._1;
                          const _b$2 = _Binary._2;
                          a = _a$2;
                          op = _op$2;
                          b = _b$2;
                          break _L$4;
                        }
                        case 5: {
                          const _Aggregate = expr$2;
                          const _v$7 = _Aggregate._3;
                          v = _v$7;
                          break _L$3;
                        }
                        default: {
                          const _Call = expr$2;
                          const _name$2 = _Call._0;
                          const _args = _Call._1;
                          name = _name$2;
                          args = _args;
                          break _L$2;
                        }
                      }
                    }
                    if (!_M0FP211localreview6promql16temporal__target(v$6)) {
                      return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("invalid time modifier target"));
                    }
                    _tmp = v$6;
                    _tmp$2 = depth$2 + 1 | 0;
                    continue;
                  }
                  const _bind = _M0FP211localreview6promql15infer__type__at(v$5, depth$2 + 1 | 0);
                  let _tmp$3;
                  if (_bind.$tag === 1) {
                    const _ok = _bind;
                    _tmp$3 = _ok._0;
                  } else {
                    return _bind;
                  }
                  if (_M0IP016_24default__implPB2Eq10not__equalGRP211localreview6promql9QueryTypeE(_tmp$3, 1)) {
                    return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("subquery requires instant vector"));
                  }
                  return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE2Ok(2);
                }
                const parameter_type = name$2 === "count_values" ? 3 : 0;
                let _tmp$3;
                const _bind = _M0FP211localreview6promql15infer__type__at(parameter, depth$2 + 1 | 0);
                let _tmp$4;
                if (_bind.$tag === 1) {
                  const _ok = _bind;
                  _tmp$4 = _ok._0;
                } else {
                  return _bind;
                }
                if (_M0IP016_24default__implPB2Eq10not__equalGRP211localreview6promql9QueryTypeE(_tmp$4, parameter_type)) {
                  _tmp$3 = true;
                } else {
                  const _bind$2 = _M0FP211localreview6promql15infer__type__at(v$4, depth$2 + 1 | 0);
                  let _tmp$5;
                  if (_bind$2.$tag === 1) {
                    const _ok = _bind$2;
                    _tmp$5 = _ok._0;
                  } else {
                    return _bind$2;
                  }
                  _tmp$3 = _M0IP016_24default__implPB2Eq10not__equalGRP211localreview6promql9QueryTypeE(_tmp$5, 1);
                }
                if (_tmp$3) {
                  return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("aggregation parameter or vector type"));
                }
                return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE2Ok(1);
              }
              return _M0FP211localreview6promql13infer__binary(op$2, a$2, b$2, matching, depth$2);
            }
            const _bind = _M0FP211localreview6promql15infer__type__at(v$3, depth$2 + 1 | 0);
            let _tmp$3;
            if (_bind.$tag === 1) {
              const _ok = _bind;
              _tmp$3 = _ok._0;
            } else {
              return _bind;
            }
            if (_M0IP016_24default__implPB2Eq10not__equalGRP211localreview6promql9QueryTypeE(_tmp$3, 1)) {
              return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("range requires instant vector"));
            }
            return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE2Ok(2);
          }
          const _bind = _M0FP211localreview6promql15infer__type__at(v$2, depth$2 + 1 | 0);
          let t;
          if (_bind.$tag === 1) {
            const _ok = _bind;
            t = _ok._0;
          } else {
            return _bind;
          }
          if (_M0IP211localreview6promql9QueryTypePB2Eq5equal(t, 2) || _M0IP211localreview6promql9QueryTypePB2Eq5equal(t, 3)) {
            return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("unary range expression"));
          }
          return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE2Ok(t);
        }
        return _M0FP211localreview6promql13infer__binary(op, a, b, new _M0TP211localreview6promql14VectorMatching(false, undefined, [], undefined, []), depth$2);
      }
      const _bind = _M0FP211localreview6promql15infer__type__at(v, depth$2 + 1 | 0);
      let _tmp$3;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp$3 = _ok._0;
      } else {
        return _bind;
      }
      if (_M0IP016_24default__implPB2Eq10not__equalGRP211localreview6promql9QueryTypeE(_tmp$3, 1)) {
        return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("aggregation requires instant vector"));
      }
      return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE2Ok(1);
    }
    return _M0FP211localreview6promql11infer__call(name, args, depth$2);
  }
}
function _M0FP211localreview6promql13infer__binary(op, a, b, matching, depth) {
  const _bind = _M0FP211localreview6promql15infer__type__at(a, depth + 1 | 0);
  let x;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    x = _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = _M0FP211localreview6promql15infer__type__at(b, depth + 1 | 0);
  let y;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    y = _ok._0;
  } else {
    return _bind$2;
  }
  const comparison = _M0MPC15array5Array8containsGsE(["==", "!=", ">", "<", ">=", "<="], op);
  const set = _M0MPC15array5Array8containsGsE(["and", "or", "unless"], op);
  if (_M0IP211localreview6promql9QueryTypePB2Eq5equal(x, 2) || (_M0IP211localreview6promql9QueryTypePB2Eq5equal(y, 2) || (_M0IP211localreview6promql9QueryTypePB2Eq5equal(x, 3) || _M0IP211localreview6promql9QueryTypePB2Eq5equal(y, 3)))) {
    return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("binary operands must be scalar or instant vector"));
  }
  if (matching.return_bool && !comparison) {
    return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("bool only applies to comparison"));
  }
  if (comparison && (_M0IP211localreview6promql9QueryTypePB2Eq5equal(x, 0) && (_M0IP211localreview6promql9QueryTypePB2Eq5equal(y, 0) && !matching.return_bool))) {
    return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("scalar comparison requires bool"));
  }
  if ((set || _M0IP016_24default__implPB2Eq10not__equalGOsE(matching.mode, undefined)) && (_M0IP016_24default__implPB2Eq10not__equalGRP211localreview6promql9QueryTypeE(x, 1) || _M0IP016_24default__implPB2Eq10not__equalGRP211localreview6promql9QueryTypeE(y, 1))) {
    return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("set operators and matching require two instant vectors"));
  }
  if (set && _M0IP016_24default__implPB2Eq10not__equalGOsE(matching.group, undefined)) {
    return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("set operators cannot use grouping modifiers"));
  }
  if (_M0IPC16option6OptionPB2Eq5equalGsE(matching.mode, "on") && _M0MPB4Iter3anyGsE(_M0MPC15array5Array4iterGsE(matching.include_labels), (label) => _M0MPC15array5Array8containsGsE(matching.labels, label))) {
    return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("label cannot occur in both on and group include_labels"));
  }
  return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE2Ok(_M0IP211localreview6promql9QueryTypePB2Eq5equal(x, 0) && _M0IP211localreview6promql9QueryTypePB2Eq5equal(y, 0) ? 0 : 1);
}
function _M0FP211localreview6promql11infer__call(name, args, depth) {
  const _bind = _M0MPC15array5Array3mapGRP211localreview6promql4ExprRP211localreview6promql9QueryTypeEHRP211localreview6promql10ParseError(args, (arg) => _M0FP211localreview6promql15infer__type__at(arg, depth + 1 | 0));
  let types;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    types = _ok._0;
  } else {
    return _bind;
  }
  const require = (expected) => {
    if (_M0IP016_24default__implPB2Eq10not__equalGRPB5ArrayGRP211localreview6promql9QueryTypeEE(types, expected)) {
      return new _M0DTPC16result6ResultGuRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid(`function argument types: ${name}`));
    } else {
      return new _M0DTPC16result6ResultGuRP211localreview6promql10ParseErrorE2Ok(undefined);
    }
  };
  _L: {
    _L$2: {
      switch (name) {
        case "time": {
          break _L$2;
        }
        case "pi": {
          break _L$2;
        }
        case "vector": {
          const _bind$2 = require([0]);
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _ok._0;
          } else {
            return _bind$2;
          }
          return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE2Ok(1);
        }
        case "scalar": {
          const _bind$3 = require([1]);
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _ok._0;
          } else {
            return _bind$3;
          }
          return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE2Ok(0);
        }
        case "clamp": {
          const _bind$4 = require([1, 0, 0]);
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _ok._0;
          } else {
            return _bind$4;
          }
          return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE2Ok(1);
        }
        case "clamp_min": {
          break _L;
        }
        case "clamp_max": {
          break _L;
        }
        case "histogram_quantile": {
          const _bind$5 = require([0, 1]);
          if (_bind$5.$tag === 1) {
            const _ok = _bind$5;
            _ok._0;
          } else {
            return _bind$5;
          }
          return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE2Ok(1);
        }
        case "quantile_over_time": {
          const _bind$6 = require([0, 2]);
          if (_bind$6.$tag === 1) {
            const _ok = _bind$6;
            _ok._0;
          } else {
            return _bind$6;
          }
          return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE2Ok(1);
        }
        case "predict_linear": {
          const _bind$7 = require([2, 0]);
          if (_bind$7.$tag === 1) {
            const _ok = _bind$7;
            _ok._0;
          } else {
            return _bind$7;
          }
          return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE2Ok(1);
        }
        case "round": {
          if (_M0IP016_24default__implPB2Eq10not__equalGRPB5ArrayGRP211localreview6promql9QueryTypeEE(types, [1]) && _M0IP016_24default__implPB2Eq10not__equalGRPB5ArrayGRP211localreview6promql9QueryTypeEE(types, [1, 0])) {
            return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("round argument types"));
          }
          return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE2Ok(1);
        }
        case "label_replace": {
          const _bind$8 = require([1, 3, 3, 3, 3]);
          if (_bind$8.$tag === 1) {
            const _ok = _bind$8;
            _ok._0;
          } else {
            return _bind$8;
          }
          return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE2Ok(1);
        }
        case "label_join": {
          if (types.length < 3 || (_M0IP016_24default__implPB2Eq10not__equalGRP211localreview6promql9QueryTypeE(_M0MPC15array5Array2atGRP211localreview6promql9QueryTypeE(types, 0), 1) || !_M0MPB4Iter3allGRP211localreview6promql9QueryTypeE(_M0MPC15array9ArrayView4iterGRP211localreview6promql9QueryTypeE(_M0MPC15array5Array12view_2einnerGRP211localreview6promql9QueryTypeE(types, 1, undefined)), (t) => _M0IP211localreview6promql9QueryTypePB2Eq5equal(t, 3)))) {
            return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("label_join argument types"));
          }
          return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE2Ok(1);
        }
        default: {
          if (_M0MPC15array5Array8containsGsE(["rate", "irate", "increase", "delta", "idelta", "deriv", "changes", "resets", "avg_over_time", "sum_over_time", "min_over_time", "max_over_time", "count_over_time", "stddev_over_time", "stdvar_over_time", "last_over_time", "present_over_time", "absent_over_time"], name)) {
            const _bind$9 = require([2]);
            if (_bind$9.$tag === 1) {
              const _ok = _bind$9;
              _ok._0;
            } else {
              return _bind$9;
            }
          } else {
            if (_M0MPC15array5Array8containsGsE(["abs", "absent", "ceil", "floor", "sqrt", "exp", "ln", "log2", "log10", "sgn", "sin", "cos", "tan", "asin", "acos", "atan", "sinh", "cosh", "tanh", "asinh", "acosh", "atanh", "deg", "rad", "timestamp", "histogram_avg", "histogram_count", "histogram_sum", "sort", "sort_desc"], name)) {
              const _bind$9 = require([1]);
              if (_bind$9.$tag === 1) {
                const _ok = _bind$9;
                _ok._0;
              } else {
                return _bind$9;
              }
            } else {
              return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid(`function signature not implemented: ${name}`));
            }
          }
          return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE2Ok(1);
        }
      }
    }
    const _bind$2 = require([]);
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
    return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE2Ok(0);
  }
  const _bind$2 = require([1, 0]);
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _ok._0;
  } else {
    return _bind$2;
  }
  return new _M0DTPC16result6ResultGRP211localreview6promql9QueryTypeRP211localreview6promql10ParseErrorE2Ok(1);
}
function _M0FP211localreview6promql11infer__type(expr) {
  return _M0FP211localreview6promql15infer__type__at(expr, 0);
}
function _M0FP211localreview6promql14valid__unicode(text) {
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < text.length) {
      const _tmp = i.val;
      const u = _tmp >>> 0 < text.length ? text.charCodeAt(_tmp) : $oob();
      if (u >= 55296 && u <= 56319) {
        if ((i.val + 1 | 0) >= text.length) {
          return false;
        }
        const _tmp$2 = i.val + 1 | 0;
        const next = _tmp$2 >>> 0 < text.length ? text.charCodeAt(_tmp$2) : $oob();
        if (next < 56320 || next > 57343) {
          return false;
        }
        i.val = i.val + 2 | 0;
      } else {
        if (u >= 56320 && u <= 57343) {
          return false;
        }
        i.val = i.val + 1 | 0;
      }
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FP211localreview6promql4word(c) {
  return c >= 97 && c <= 122 || (c >= 65 && c <= 90 || (c === 95 || (c >= 48 && c <= 57 || c > 127)));
}
function _M0FP211localreview6promql10identifier(s) {
  if (_M0MPC16string6String9is__empty(s)) {
    return false;
  }
  const cs = _M0MPC16string6String9to__array(s);
  if (_M0MPC15array5Array2atGcE(cs, 0) >= 48 && _M0MPC15array5Array2atGcE(cs, 0) <= 57) {
    return false;
  }
  return _M0MPB4Iter3allGcE(_M0MPC15array5Array4iterGcE(cs), _M0FP211localreview6promql4word);
}
function _M0FP211localreview6promql10precedence(op) {
  switch (op) {
    case "or": {
      return 1;
    }
    case "and": {
      return 2;
    }
    case "unless": {
      return 2;
    }
    case "==": {
      return 3;
    }
    case "!=": {
      return 3;
    }
    case ">": {
      return 3;
    }
    case "<": {
      return 3;
    }
    case ">=": {
      return 3;
    }
    case "<=": {
      return 3;
    }
    case "+": {
      return 4;
    }
    case "-": {
      return 4;
    }
    case "*": {
      return 5;
    }
    case "/": {
      return 5;
    }
    case "%": {
      return 5;
    }
    case "atan2": {
      return 5;
    }
    case "^": {
      return 6;
    }
    default: {
      return 0;
    }
  }
}
function _M0MP211localreview6promql6Cursor4peek(self) {
  return self.pos < self.tokens.length ? (_M0MPC15array5Array2atGRP211localreview6promql5TokenE(self.tokens, self.pos).quoted ? "<string>" : _M0MPC15array5Array2atGRP211localreview6promql5TokenE(self.tokens, self.pos).text) : "<eof>";
}
function _M0MP211localreview6promql6Cursor3eat(self, text) {
  if (_M0MP211localreview6promql6Cursor4peek(self) === text) {
    self.pos = self.pos + 1 | 0;
    return true;
  } else {
    return false;
  }
}
function _M0MP211localreview6promql6Cursor4need(self, text) {
  if (!_M0MP211localreview6promql6Cursor3eat(self, text)) {
    return new _M0DTPC16result6ResultGuRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid(`expected ${text}, got ${_M0MP211localreview6promql6Cursor4peek(self)}`));
  } else {
    return new _M0DTPC16result6ResultGuRP211localreview6promql10ParseErrorE2Ok(undefined);
  }
}
function _M0MP211localreview6promql6Cursor4take(self) {
  if (self.pos >= self.tokens.length) {
    return new _M0DTPC16result6ResultGRP211localreview6promql5TokenRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("unexpected end"));
  }
  const t = _M0MPC15array5Array2atGRP211localreview6promql5TokenE(self.tokens, self.pos);
  self.pos = self.pos + 1 | 0;
  return new _M0DTPC16result6ResultGRP211localreview6promql5TokenRP211localreview6promql10ParseErrorE2Ok(t);
}
function _M0FP211localreview6promql8grouping(c) {
  const _bind = _M0MP211localreview6promql6Cursor4need(c, "(");
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  const out = [];
  if (_M0MP211localreview6promql6Cursor3eat(c, ")")) {
    return new _M0DTPC16result6ResultGRPB5ArrayGsERP211localreview6promql10ParseErrorE2Ok(out);
  }
  while (true) {
    const _bind$2 = _M0MP211localreview6promql6Cursor4take(c);
    let token;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      token = _ok._0;
    } else {
      return _bind$2;
    }
    if (!_M0FP211localreview6promql10identifier(token.text)) {
      return new _M0DTPC16result6ResultGRPB5ArrayGsERP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("grouping label"));
    }
    _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(out, token.text);
    if (_M0MP211localreview6promql6Cursor3eat(c, ")")) {
      break;
    }
    const _bind$3 = _M0MP211localreview6promql6Cursor4need(c, ",");
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _ok._0;
    } else {
      return _bind$3;
    }
    if (_M0MP211localreview6promql6Cursor3eat(c, ")")) {
      break;
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGsERP211localreview6promql10ParseErrorE2Ok(out);
}
function _M0FP211localreview6promql10aggregator(name) {
  return _M0MPC15array5Array8containsGsE(["sum", "avg", "min", "max", "count", "group", "stddev", "stdvar", "topk", "bottomk", "quantile", "count_values"], name);
}
function _M0FP211localreview6promql8duration(c, positive) {
  const _bind = _M0MP211localreview6promql6Cursor4take(c);
  let token;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    token = _ok._0;
  } else {
    return _bind;
  }
  if (token.quoted) {
    return new _M0DTPC16result6ResultGsRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("duration cannot be quoted"));
  }
  const cs = _M0MPC16string6String9to__array(token.text);
  const i = new _M0TPB8MutLocalGiE(0);
  const previous = new _M0TPB8MutLocalGiE(8);
  const total = new _M0TPB8MutLocalGlE(0n);
  while (true) {
    if (i.val < cs.length) {
      const begin = i.val;
      const amount = new _M0TPB8MutLocalGlE(0n);
      while (true) {
        if (i.val < cs.length && (_M0MPC15array5Array2atGcE(cs, i.val) >= 48 && _M0MPC15array5Array2atGcE(cs, i.val) <= 57)) {
          const digit = BigInt.asUintN(64, BigInt(_M0MPC15array5Array2atGcE(cs, i.val) - 48 | 0));
          const _tmp = amount.val;
          if (10n === 0n) {
            $panic();
          }
          if (BigInt.asIntN(64, _tmp) > BigInt.asIntN(64, BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, 9223372036854n - digit)) / BigInt.asIntN(64, 10n)))) {
            return new _M0DTPC16result6ResultGsRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("duration overflow"));
          }
          amount.val = BigInt.asUintN(64, BigInt.asUintN(64, amount.val * 10n) + digit);
          i.val = i.val + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (i.val === begin || i.val === cs.length) {
        return new _M0DTPC16result6ResultGsRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("duration requires number and unit"));
      }
      let order;
      let multiplier;
      _L: {
        const _bind$2 = _M0MPC15array5Array2atGcE(cs, i.val);
        switch (_bind$2) {
          case 121: {
            order = 7;
            multiplier = 31536000000n;
            break _L;
          }
          case 119: {
            order = 6;
            multiplier = 604800000n;
            break _L;
          }
          case 100: {
            order = 5;
            multiplier = 86400000n;
            break _L;
          }
          case 104: {
            order = 4;
            multiplier = 3600000n;
            break _L;
          }
          case 109: {
            if ((i.val + 1 | 0) < cs.length && _M0MPC15array5Array2atGcE(cs, i.val + 1 | 0) === 115) {
              i.val = i.val + 1 | 0;
              order = 1;
              multiplier = 1n;
              break _L;
            } else {
              order = 3;
              multiplier = 60000n;
              break _L;
            }
          }
          case 115: {
            order = 2;
            multiplier = 1000n;
            break _L;
          }
          default: {
            return new _M0DTPC16result6ResultGsRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("duration unit"));
          }
        }
      }
      i.val = i.val + 1 | 0;
      if (order >= previous.val) {
        return new _M0DTPC16result6ResultGsRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("duration units must be descending without repetition"));
      }
      previous.val = order;
      const _tmp = amount.val;
      if (multiplier === 0n) {
        $panic();
      }
      if (BigInt.asIntN(64, _tmp) > BigInt.asIntN(64, BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, 9223372036854n - total.val)) / BigInt.asIntN(64, multiplier)))) {
        return new _M0DTPC16result6ResultGsRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("duration overflow"));
      }
      total.val = BigInt.asUintN(64, total.val + BigInt.asUintN(64, amount.val * multiplier));
      continue;
    } else {
      break;
    }
  }
  if (i.val === 0 || positive && BigInt.asUintN(64, total.val) === BigInt.asUintN(64, 0n)) {
    return new _M0DTPC16result6ResultGsRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("positive duration required"));
  }
  return new _M0DTPC16result6ResultGsRP211localreview6promql10ParseErrorE2Ok(token.text);
}
function _M0FP211localreview6promql13has__modifier(expr, offset) {
  let _tmp = expr;
  let _tmp$2 = offset;
  _L: while (true) {
    const expr$2 = _tmp;
    const offset$2 = _tmp$2;
    let v;
    _L$2: {
      let v$2;
      _L$3: {
        switch (expr$2.$tag) {
          case 11: {
            const _Offset = expr$2;
            const _v = _Offset._0;
            v$2 = _v;
            break _L$3;
          }
          case 12: {
            const _At = expr$2;
            const _v$2 = _At._0;
            v = _v$2;
            break _L$2;
          }
          default: {
            return false;
          }
        }
      }
      if (offset$2) {
        return true;
      } else {
        _tmp = v$2;
        continue;
      }
    }
    if (!offset$2) {
      return true;
    } else {
      _tmp = v;
      continue;
    }
  }
}
function _M0FP211localreview6promql7postfix(c, initial) {
  const result = new _M0TPB8MutLocalGRP211localreview6promql4ExprE(initial);
  const has_offset = new _M0TPB8MutLocalGbE(_M0FP211localreview6promql13has__modifier(initial, true));
  const has_at = new _M0TPB8MutLocalGbE(_M0FP211localreview6promql13has__modifier(initial, false));
  const count = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (_M0MP211localreview6promql6Cursor4peek(c) === "[" || (_M0MP211localreview6promql6Cursor4peek(c) === "offset" || _M0MP211localreview6promql6Cursor4peek(c) === "@")) {
      count.val = count.val + 1 | 0;
      if (count.val > 64) {
        return new _M0DTPC16result6ResultGRP211localreview6promql4ExprRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("postfix nesting limit"));
      }
      if (_M0MP211localreview6promql6Cursor3eat(c, "[")) {
        const _bind = _M0FP211localreview6promql8duration(c, true);
        let range;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          range = _ok._0;
        } else {
          return _bind;
        }
        if (_M0MP211localreview6promql6Cursor3eat(c, ":")) {
          let resolution;
          if (_M0MP211localreview6promql6Cursor4peek(c) === "]") {
            resolution = undefined;
          } else {
            const _bind$2 = _M0FP211localreview6promql8duration(c, true);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              resolution = _ok._0;
            } else {
              return _bind$2;
            }
          }
          result.val = new _M0DTP211localreview6promql4Expr8Subquery(result.val, range, resolution);
          has_offset.val = false;
          has_at.val = false;
        } else {
          const _bind$2 = result.val;
          if (_bind$2.$tag === 2) {
          } else {
            return new _M0DTPC16result6ResultGRP211localreview6promql4ExprRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("range requires vector selector before modifiers"));
          }
          result.val = new _M0DTP211localreview6promql4Expr5Range(result.val, range);
        }
        const _bind$2 = _M0MP211localreview6promql6Cursor4need(c, "]");
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _ok._0;
        } else {
          return _bind$2;
        }
      } else {
        if (_M0MP211localreview6promql6Cursor3eat(c, "offset")) {
          if (has_offset.val || !_M0FP211localreview6promql16temporal__target(result.val)) {
            return new _M0DTPC16result6ResultGRP211localreview6promql4ExprRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("duplicate or misplaced offset"));
          }
          const negative = _M0MP211localreview6promql6Cursor3eat(c, "-");
          const _bind = _M0FP211localreview6promql8duration(c, false);
          let d;
          if (_bind.$tag === 1) {
            const _ok = _bind;
            d = _ok._0;
          } else {
            return _bind;
          }
          result.val = new _M0DTP211localreview6promql4Expr6Offset(result.val, `${negative ? "-" : ""}${d}`);
          has_offset.val = true;
        } else {
          const _bind = _M0MP211localreview6promql6Cursor4need(c, "@");
          if (_bind.$tag === 1) {
            const _ok = _bind;
            _ok._0;
          } else {
            return _bind;
          }
          if (has_at.val || !_M0FP211localreview6promql16temporal__target(result.val)) {
            return new _M0DTPC16result6ResultGRP211localreview6promql4ExprRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("duplicate or misplaced @"));
          }
          let timestamp;
          if (_M0MP211localreview6promql6Cursor4peek(c) === "start" || _M0MP211localreview6promql6Cursor4peek(c) === "end") {
            const _bind$2 = _M0MP211localreview6promql6Cursor4take(c);
            let _tmp;
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _tmp = _ok._0;
            } else {
              return _bind$2;
            }
            const which = _tmp.text;
            const _bind$3 = _M0MP211localreview6promql6Cursor4need(c, "(");
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _ok._0;
            } else {
              return _bind$3;
            }
            const _bind$4 = _M0MP211localreview6promql6Cursor4need(c, ")");
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _ok._0;
            } else {
              return _bind$4;
            }
            timestamp = `${which}()`;
          } else {
            const sign = _M0MP211localreview6promql6Cursor3eat(c, "-") ? "-" : _M0MP211localreview6promql6Cursor3eat(c, "+") ? "+" : "";
            const _bind$2 = _M0MP211localreview6promql6Cursor4take(c);
            let t;
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              t = _ok._0;
            } else {
              return _bind$2;
            }
            if (t.quoted || (_M0MPC16string6String9is__empty(t.text) || !_M0MPB4Iter3allGcE(_M0MPC16string6String4iter(t.text), (x) => x >= 48 && x <= 57))) {
              return new _M0DTPC16result6ResultGRP211localreview6promql4ExprRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("@ requires numeric timestamp or start()/end()"));
            }
            const value = new _M0TPB8MutLocalGsE(`${sign}${t.text}`);
            if (_M0MP211localreview6promql6Cursor3eat(c, ".")) {
              const _bind$3 = _M0MP211localreview6promql6Cursor4take(c);
              let f;
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                f = _ok._0;
              } else {
                return _bind$3;
              }
              if (f.quoted || !_M0MPB4Iter3allGcE(_M0MPC16string6String4iter(f.text), (x) => x >= 48 && x <= 57)) {
                return new _M0DTPC16result6ResultGRP211localreview6promql4ExprRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("timestamp fraction"));
              }
              value.val = `${value.val}.${f.text}`;
            }
            timestamp = value.val;
          }
          result.val = new _M0DTP211localreview6promql4Expr2At(result.val, timestamp);
          has_at.val = true;
        }
      }
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP211localreview6promql4ExprRP211localreview6promql10ParseErrorE2Ok(result.val);
}
function _M0FP211localreview6promql16vector__matching(c) {
  const return_bool = _M0MP211localreview6promql6Cursor3eat(c, "bool");
  let mode;
  if (_M0MP211localreview6promql6Cursor4peek(c) === "on" || _M0MP211localreview6promql6Cursor4peek(c) === "ignoring") {
    const _bind = _M0MP211localreview6promql6Cursor4take(c);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    mode = _tmp.text;
  } else {
    mode = undefined;
  }
  let labels;
  if (_M0IP016_24default__implPB2Eq10not__equalGOsE(mode, undefined)) {
    const _bind = _M0FP211localreview6promql8grouping(c);
    if (_bind.$tag === 1) {
      const _ok = _bind;
      labels = _ok._0;
    } else {
      return _bind;
    }
  } else {
    labels = [];
  }
  let group;
  if (_M0MP211localreview6promql6Cursor4peek(c) === "group_left" || _M0MP211localreview6promql6Cursor4peek(c) === "group_right") {
    if (_M0IPC16option6OptionPB2Eq5equalGsE(mode, undefined)) {
      return new _M0DTPC16result6ResultGRP211localreview6promql14VectorMatchingRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("group modifier requires on/ignoring"));
    }
    const _bind = _M0MP211localreview6promql6Cursor4take(c);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    group = _tmp.text;
  } else {
    group = undefined;
  }
  let include_labels;
  if (_M0IP016_24default__implPB2Eq10not__equalGOsE(group, undefined) && _M0MP211localreview6promql6Cursor4peek(c) === "(") {
    const _bind = _M0FP211localreview6promql8grouping(c);
    if (_bind.$tag === 1) {
      const _ok = _bind;
      include_labels = _ok._0;
    } else {
      return _bind;
    }
  } else {
    include_labels = [];
  }
  return new _M0DTPC16result6ResultGRP211localreview6promql14VectorMatchingRP211localreview6promql10ParseErrorE2Ok(new _M0TP211localreview6promql14VectorMatching(return_bool, mode, labels, group, include_labels));
}
function _M0FP211localreview6promql10expression(c, min, depth) {
  if (depth > 64) {
    return new _M0DTPC16result6ResultGRP211localreview6promql4ExprRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("nesting limit"));
  }
  const _bind = _M0MP211localreview6promql6Cursor4take(c);
  let t;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    t = _ok._0;
  } else {
    return _bind;
  }
  let _tmp;
  if (t.quoted) {
    _tmp = new _M0DTP211localreview6promql4Expr13StringLiteral(t.text);
  } else {
    if (t.text === "+" || t.text === "-") {
      const _bind$2 = _M0FP211localreview6promql10expression(c, 6, depth + 1 | 0);
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        return _bind$2;
      }
      _tmp = new _M0DTP211localreview6promql4Expr5Unary(t.text, _tmp$2);
    } else {
      if (t.text === "(") {
        const _bind$2 = _M0FP211localreview6promql10expression(c, 1, depth + 1 | 0);
        let e;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          e = _ok._0;
        } else {
          return _bind$2;
        }
        const _bind$3 = _M0MP211localreview6promql6Cursor4need(c, ")");
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _ok._0;
        } else {
          return _bind$3;
        }
        _tmp = e;
      } else {
        if (_M0MPB4Iter3allGcE(_M0MPC15array5Array4iterGcE(_M0MPC16string6String9to__array(t.text)), (x) => x >= 48 && x <= 57)) {
          const n = new _M0TPB8MutLocalGsE(t.text);
          if (_M0MP211localreview6promql6Cursor3eat(c, ".")) {
            const _bind$2 = _M0MP211localreview6promql6Cursor4take(c);
            let f;
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              f = _ok._0;
            } else {
              return _bind$2;
            }
            if (!_M0MPB4Iter3allGcE(_M0MPC15array5Array4iterGcE(_M0MPC16string6String9to__array(f.text)), (x) => x >= 48 && x <= 57)) {
              return new _M0DTPC16result6ResultGRP211localreview6promql4ExprRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("invalid decimal"));
            }
            n.val = `${n.val}.${f.text}`;
          }
          _tmp = new _M0DTP211localreview6promql4Expr6Number(n.val);
        } else {
          let _tmp$2;
          if (t.text === "{") {
            c.pos = c.pos - 1 | 0;
            _tmp$2 = "";
          } else {
            if (!_M0FP211localreview6promql10identifier(t.text)) {
              return new _M0DTPC16result6ResultGRP211localreview6promql4ExprRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("metric/function name"));
            }
            _tmp$2 = t.text;
          }
          const name = new _M0TPB8MutLocalGsE(_tmp$2);
          if (_M0MPC15array5Array8containsGsE(["bool", "on", "ignoring", "group_left", "group_right"], name.val)) {
            return new _M0DTPC16result6ResultGRP211localreview6promql4ExprRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("reserved vector matching keyword cannot be a metric name"));
          }
          while (true) {
            if (_M0MP211localreview6promql6Cursor3eat(c, ":")) {
              const _bind$2 = _M0MP211localreview6promql6Cursor4take(c);
              let part;
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                part = _ok._0;
              } else {
                return _bind$2;
              }
              if (!_M0FP211localreview6promql10identifier(part.text)) {
                return new _M0DTPC16result6ResultGRP211localreview6promql4ExprRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("metric name"));
              }
              name.val = `${name.val}:${part.text}`;
              continue;
            } else {
              break;
            }
          }
          if (_M0FP211localreview6promql10aggregator(name.val) && (_M0MP211localreview6promql6Cursor4peek(c) === "by" || (_M0MP211localreview6promql6Cursor4peek(c) === "without" || _M0MP211localreview6promql6Cursor4peek(c) === "("))) {
            const _bind$2 = _M0FP211localreview6promql9aggregate(c, name.val, depth + 1 | 0);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _tmp = _ok._0;
            } else {
              return _bind$2;
            }
          } else {
            if (_M0MP211localreview6promql6Cursor3eat(c, "(")) {
              const args = [];
              if (!_M0MP211localreview6promql6Cursor3eat(c, ")")) {
                while (true) {
                  const _bind$2 = _M0FP211localreview6promql10expression(c, 1, depth + 1 | 0);
                  let _tmp$3;
                  if (_bind$2.$tag === 1) {
                    const _ok = _bind$2;
                    _tmp$3 = _ok._0;
                  } else {
                    return _bind$2;
                  }
                  _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(args, _tmp$3);
                  if (_M0MP211localreview6promql6Cursor3eat(c, ")")) {
                    break;
                  }
                  const _bind$3 = _M0MP211localreview6promql6Cursor4need(c, ",");
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    _ok._0;
                  } else {
                    return _bind$3;
                  }
                  continue;
                }
              }
              _tmp = new _M0DTP211localreview6promql4Expr4Call(name.val, args);
            } else {
              const labels = [];
              if (_M0MP211localreview6promql6Cursor3eat(c, "{") && !_M0MP211localreview6promql6Cursor3eat(c, "}")) {
                while (true) {
                  const _bind$2 = _M0MP211localreview6promql6Cursor4take(c);
                  let key;
                  if (_bind$2.$tag === 1) {
                    const _ok = _bind$2;
                    key = _ok._0;
                  } else {
                    return _bind$2;
                  }
                  if (key.quoted || !_M0FP211localreview6promql10identifier(key.text)) {
                    return new _M0DTPC16result6ResultGRP211localreview6promql4ExprRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("label name"));
                  }
                  const _bind$3 = _M0MP211localreview6promql6Cursor4take(c);
                  let _tmp$3;
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    _tmp$3 = _ok._0;
                  } else {
                    return _bind$3;
                  }
                  const op = _tmp$3.text;
                  if (_M0IP016_24default__implPB2Eq10not__equalGsE(op, "=") && (_M0IP016_24default__implPB2Eq10not__equalGsE(op, "!=") && (_M0IP016_24default__implPB2Eq10not__equalGsE(op, "=~") && _M0IP016_24default__implPB2Eq10not__equalGsE(op, "!~")))) {
                    return new _M0DTPC16result6ResultGRP211localreview6promql4ExprRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("matcher operator"));
                  }
                  const _bind$4 = _M0MP211localreview6promql6Cursor4take(c);
                  let value;
                  if (_bind$4.$tag === 1) {
                    const _ok = _bind$4;
                    value = _ok._0;
                  } else {
                    return _bind$4;
                  }
                  if (!value.quoted) {
                    return new _M0DTPC16result6ResultGRP211localreview6promql4ExprRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("matcher requires string"));
                  }
                  _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(labels, { _0: key.text, _1: op, _2: value.text });
                  if (_M0MP211localreview6promql6Cursor3eat(c, "}")) {
                    break;
                  }
                  const _bind$5 = _M0MP211localreview6promql6Cursor4need(c, ",");
                  if (_bind$5.$tag === 1) {
                    const _ok = _bind$5;
                    _ok._0;
                  } else {
                    return _bind$5;
                  }
                  if (_M0MP211localreview6promql6Cursor3eat(c, "}")) {
                    break;
                  }
                  continue;
                }
              }
              if (_M0MPC16string6String9is__empty(name.val) && _M0MPC15array5Array9is__emptyGUsssEE(labels)) {
                return new _M0DTPC16result6ResultGRP211localreview6promql4ExprRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("empty selector"));
              }
              _tmp = new _M0DTP211localreview6promql4Expr8Selector(name.val, labels);
            }
          }
        }
      }
    }
  }
  const lhs = new _M0TPB8MutLocalGRP211localreview6promql4ExprE(_tmp);
  const _bind$2 = _M0FP211localreview6promql7postfix(c, lhs.val);
  let _tmp$2;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp$2 = _ok._0;
  } else {
    return _bind$2;
  }
  lhs.val = _tmp$2;
  while (true) {
    const op = _M0MP211localreview6promql6Cursor4peek(c);
    const prec = _M0FP211localreview6promql10precedence(op);
    if (prec === 0 || prec < min) {
      break;
    }
    c.pos = c.pos + 1 | 0;
    const _bind$3 = _M0FP211localreview6promql16vector__matching(c);
    let matching;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      matching = _ok._0;
    } else {
      return _bind$3;
    }
    const _bind$4 = _M0FP211localreview6promql10expression(c, op === "^" ? prec : prec + 1 | 0, depth + 1 | 0);
    let rhs;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      rhs = _ok._0;
    } else {
      return _bind$4;
    }
    lhs.val = matching.return_bool || _M0IP016_24default__implPB2Eq10not__equalGOsE(matching.mode, undefined) ? new _M0DTP211localreview6promql4Expr11BinaryMatch(op, matching, lhs.val, rhs) : new _M0DTP211localreview6promql4Expr6Binary(op, lhs.val, rhs);
    continue;
  }
  return new _M0DTPC16result6ResultGRP211localreview6promql4ExprRP211localreview6promql10ParseErrorE2Ok(lhs.val);
}
function _M0FP211localreview6promql9aggregate(c, name, depth) {
  const before = _M0MP211localreview6promql6Cursor4peek(c) === "by" || _M0MP211localreview6promql6Cursor4peek(c) === "without";
  const without = new _M0TPB8MutLocalGbE(false);
  const labels = new _M0TPB8MutLocalGRPB5ArrayGsEE([]);
  if (before) {
    const _bind = _M0MP211localreview6promql6Cursor4take(c);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    without.val = _tmp.text === "without";
    const _bind$2 = _M0FP211localreview6promql8grouping(c);
    let _tmp$2;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp$2 = _ok._0;
    } else {
      return _bind$2;
    }
    labels.val = _tmp$2;
  }
  const _bind = _M0MP211localreview6promql6Cursor4need(c, "(");
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = _M0FP211localreview6promql10expression(c, 1, depth);
  let first;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    first = _ok._0;
  } else {
    return _bind$2;
  }
  const parameterized = _M0MPC15array5Array8containsGsE(["topk", "bottomk", "quantile", "count_values"], name);
  let body;
  if (parameterized) {
    const _bind$3 = _M0MP211localreview6promql6Cursor4need(c, ",");
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _ok._0;
    } else {
      return _bind$3;
    }
    const _bind$4 = _M0FP211localreview6promql10expression(c, 1, depth);
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      body = _ok._0;
    } else {
      return _bind$4;
    }
  } else {
    body = first;
  }
  const _bind$3 = _M0MP211localreview6promql6Cursor4need(c, ")");
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  if (_M0MP211localreview6promql6Cursor4peek(c) === "by" || _M0MP211localreview6promql6Cursor4peek(c) === "without") {
    if (before) {
      return new _M0DTPC16result6ResultGRP211localreview6promql4ExprRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("duplicate aggregation grouping"));
    }
    const _bind$4 = _M0MP211localreview6promql6Cursor4take(c);
    let _tmp;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _tmp = _ok._0;
    } else {
      return _bind$4;
    }
    without.val = _tmp.text === "without";
    const _bind$5 = _M0FP211localreview6promql8grouping(c);
    let _tmp$2;
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      _tmp$2 = _ok._0;
    } else {
      return _bind$5;
    }
    labels.val = _tmp$2;
  }
  return new _M0DTPC16result6ResultGRP211localreview6promql4ExprRP211localreview6promql10ParseErrorE2Ok(parameterized ? new _M0DTP211localreview6promql4Expr14AggregateParam(name, labels.val, without.val, first, body) : new _M0DTP211localreview6promql4Expr9Aggregate(name, labels.val, without.val, body));
}
function _M0FP211localreview6promql3lex(source, newlines) {
  if (source.length > 100000) {
    return new _M0DTPC16result6ResultGRP211localreview6promql6CursorRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("source limit"));
  }
  const cs = _M0MPC16string6String9to__array(source);
  const ts = [];
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < cs.length) {
      const c = _M0MPC15array5Array2atGcE(cs, i.val);
      if (c === 32 || (c === 9 || c === 13)) {
        i.val = i.val + 1 | 0;
        continue;
      }
      if (c === 10) {
        if (newlines) {
          _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(ts, new _M0TP211localreview6promql5Token(";", false));
        }
        i.val = i.val + 1 | 0;
        continue;
      }
      if (c === 35) {
        while (true) {
          if (i.val < cs.length && _M0MPC15array5Array2atGcE(cs, i.val) !== 10) {
            i.val = i.val + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        continue;
      }
      if (c === 34 || c === 39) {
        const quote = c;
        i.val = i.val + 1 | 0;
        const s = new _M0TPB8MutLocalGsE("");
        const closed = new _M0TPB8MutLocalGbE(false);
        while (true) {
          if (i.val < cs.length) {
            const ch = _M0MPC15array5Array2atGcE(cs, i.val);
            i.val = i.val + 1 | 0;
            if (ch === quote) {
              closed.val = true;
              break;
            }
            if (ch === 92) {
              if (i.val >= cs.length) {
                return new _M0DTPC16result6ResultGRP211localreview6promql6CursorRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("truncated escape"));
              }
              const _tmp = s.val;
              const _bind = _M0MPC15array5Array2atGcE(cs, i.val);
              let _tmp$2;
              switch (_bind) {
                case 110: {
                  _tmp$2 = "\n";
                  break;
                }
                case 114: {
                  _tmp$2 = "\r";
                  break;
                }
                case 116: {
                  _tmp$2 = "\t";
                  break;
                }
                case 92: {
                  _tmp$2 = "\\";
                  break;
                }
                case 34: {
                  _tmp$2 = "\"";
                  break;
                }
                case 39: {
                  _tmp$2 = "'";
                  break;
                }
                default: {
                  return new _M0DTPC16result6ResultGRP211localreview6promql6CursorRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("unsupported escape"));
                }
              }
              s.val = `${_tmp}${_tmp$2}`;
              i.val = i.val + 1 | 0;
            } else {
              s.val = `${s.val}${_M0IPC14char4CharPB4Show10to__string(ch)}`;
            }
            continue;
          } else {
            break;
          }
        }
        if (!closed.val) {
          return new _M0DTPC16result6ResultGRP211localreview6promql6CursorRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("unterminated string"));
        }
        _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(ts, new _M0TP211localreview6promql5Token(s.val, true));
        continue;
      }
      if (_M0FP211localreview6promql4word(c)) {
        const s = new _M0TPB8MutLocalGsE("");
        while (true) {
          if (i.val < cs.length && _M0FP211localreview6promql4word(_M0MPC15array5Array2atGcE(cs, i.val))) {
            s.val = `${s.val}${_M0IPC14char4CharPB4Show10to__string(_M0MPC15array5Array2atGcE(cs, i.val))}`;
            i.val = i.val + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(ts, new _M0TP211localreview6promql5Token(s.val, false));
        continue;
      }
      const s = new _M0TPB8MutLocalGsE(_M0IPC14char4CharPB4Show10to__string(c));
      i.val = i.val + 1 | 0;
      if (i.val < cs.length) {
        const pair = `${s.val}${_M0IPC14char4CharPB4Show10to__string(_M0MPC15array5Array2atGcE(cs, i.val))}`;
        if (pair === "==" || (pair === "!=" || (pair === ">=" || (pair === "<=" || (pair === "=~" || (pair === "!~" || (pair === "+=" || (pair === "&&" || pair === "||")))))))) {
          s.val = pair;
          i.val = i.val + 1 | 0;
        }
      }
      _M0MPC15array5Array4pushGRP211localreview6promql5TokenE(ts, new _M0TP211localreview6promql5Token(s.val, false));
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP211localreview6promql6CursorRP211localreview6promql10ParseErrorE2Ok(new _M0TP211localreview6promql6Cursor(ts, 0));
}
function _M0FP211localreview6promql5parse(source) {
  if (!_M0FP211localreview6promql14valid__unicode(source)) {
    return new _M0DTPC16result6ResultGRP211localreview6promql4ExprRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid("ill-formed UTF-16 input"));
  }
  const _bind = _M0FP211localreview6promql3lex(source, false);
  let c;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    c = _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = _M0FP211localreview6promql10expression(c, 1, 0);
  let e;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    e = _ok._0;
  } else {
    return _bind$2;
  }
  if (c.pos !== c.tokens.length) {
    return new _M0DTPC16result6ResultGRP211localreview6promql4ExprRP211localreview6promql10ParseErrorE3Err(new _M0DTPC15error5Error43localreview_2fpromql_2eParseError_2eInvalid(`unsupported/trailing syntax: ${_M0MP211localreview6promql6Cursor4peek(c)}`));
  }
  return new _M0DTPC16result6ResultGRP211localreview6promql4ExprRP211localreview6promql10ParseErrorE2Ok(e);
}
function _M0FP411localreview6promql3cmd3web3run(input) {
  let _try_err;
  _L: {
    const _bind = _M0FP211localreview6promql5parse(input);
    let ast;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      ast = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    const _bind$2 = _M0FP211localreview6promql11infer__type(ast);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
    return `Type: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP211localreview6promql9QueryTypeE(_tmp))}\nAST: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP211localreview6promql4ExprE(ast))}`;
  }
  const e = _try_err;
  return `ERROR: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP211localreview6promql10ParseErrorE(e))}`;
}
(() => {
})();
export { _M0FP411localreview6promql3cmd3web3run as run }
//# sourceMappingURL=web.js.map
