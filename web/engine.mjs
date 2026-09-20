function _M0DTPB4Json4Null() {}
_M0DTPB4Json4Null.prototype.$tag = 0;
const _M0DTPB4Json4Null__ = new _M0DTPB4Json4Null();
function _M0DTPB4Json4True() {}
_M0DTPB4Json4True.prototype.$tag = 1;
const _M0DTPB4Json4True__ = new _M0DTPB4Json4True();
function _M0DTPB4Json5False() {}
_M0DTPB4Json5False.prototype.$tag = 2;
const _M0DTPB4Json5False__ = new _M0DTPB4Json5False();
function _M0DTPB4Json6Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPB4Json6Number.prototype.$tag = 3;
function _M0DTPB4Json6String(param0) {
  this._0 = param0;
}
_M0DTPB4Json6String.prototype.$tag = 4;
function _M0DTPB4Json5Array(param0) {
  this._0 = param0;
}
_M0DTPB4Json5Array.prototype.$tag = 5;
function _M0DTPB4Json6Object(param0) {
  this._0 = param0;
}
_M0DTPB4Json6Object.prototype.$tag = 6;
const $reinterpret_view = new DataView(new ArrayBuffer(8));
function $i64_reinterpret_f64(a) {
  $reinterpret_view.setBigUint64(0, BigInt.asUintN(64, a), false);
  return $reinterpret_view.getFloat64(0, false);
}
function _M0TPC28internal7strconv9FloatInfo(param0, param1, param2) {
  this.mantissa_bits = param0;
  this.exponent_bits = param1;
  this.bias = param2;
}
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
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
const _M0FPB21int64__to__string__js = (num, radix) => BigInt.asIntN(64, num).toString(radix);
function _M0TPB4IterGUsRPB4JsonEE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGcE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function _M0TPB9ArrayViewGkE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $makebytes(a, b) {
  const arr = new Uint8Array(a);
  if (b !== 0) {
    arr.fill(b);
  }
  return arr;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function _M0TPB4IterGsE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB9ArrayViewGRP212zhou_2dwei976promql9RegexInfoE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGcE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $bytes_equal(a, b) {
    if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
function _M0TPB3MapGsRPB4JsonE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGsRPB4JsonE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPC15debug4ReprE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB8MutLocalGORPB5EntryGsRPB4JsonEE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRPB5ArrayGRPB4JsonERP212zhou_2dwei976promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRPB4JsonERP212zhou_2dwei976promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRPB4JsonERP212zhou_2dwei976promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRPB4JsonERP212zhou_2dwei976promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGUsssEERP212zhou_2dwei976promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGUsssEERP212zhou_2dwei976promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGUsssEERP212zhou_2dwei976promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGUsssEERP212zhou_2dwei976promql10ParseErrorE2Ok.prototype.$tag = 1;
const $bytes_literal$0 = new Uint8Array();
const _M0MPB7JSArray11set__length = (arr, len) => { arr.length = len; };
const _M0MPB7JSArray12append__view = (dst, src, src_offset, len) => {
   for (let i = 0; i < len; i++) {
     dst.push(src[src_offset + i]);
   }
 };
const _M0MPB7JSArray3pop = (arr) => arr.pop();
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
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
const _M0FPC28encoding4utf816encode__utf8__js = (() => {
   const encoder = new TextEncoder();
   return function(src, start, len, bom) {
     const end = start + len;
     const encoded = encoder.encode(src.slice(start, end));
     if (!bom) {
       return encoded;
     }
     const result = new Uint8Array(encoded.length + 3);
     result[0] = 0xEF;
     result[1] = 0xBB;
     result[2] = 0xBF;
     result.set(encoded, 3);
     return result;
   };
 })();
const _M0FPC28encoding4utf816decode__utf8__js = ((preserveBOMDecoder, dropBOMDecoder) => function(bytes, start, len, preserveBOM) {
   try {
     const end = start + len;
     const slice = bytes.subarray(start, end);
     const decoder = preserveBOM ? preserveBOMDecoder : dropBOMDecoder;
     return [decoder.decode(slice)];
   } catch (_) {
     return [];
   }
 })(
   new TextDecoder("utf-8", { fatal: true, ignoreBOM: true }),
   new TextDecoder("utf-8", { fatal: true, ignoreBOM: false }),
 );
function _M0TPC15bytes9BytesView(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGsRPC28encoding4utf89MalformedE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC28encoding4utf89MalformedE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRPC28encoding4utf89MalformedE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC28encoding4utf89MalformedE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar.prototype.$tag = 8;
function _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof() {}
_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof.prototype.$tag = 7;
const _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__ = new _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof();
function _M0DTPC15error5Error54moonbitlang_2fcore_2fjson_2eParseError_2eInvalidNumber(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error54moonbitlang_2fcore_2fjson_2eParseError_2eInvalidNumber.prototype.$tag = 6;
function _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eInvalidIdentEscape(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eInvalidIdentEscape.prototype.$tag = 5;
function _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded() {}
_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded.prototype.$tag = 4;
const _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__ = new _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded();
function _M0DTPC15error5Error60moonbitlang_2fcore_2fencoding_2futf8_2eMalformed_2eMalformed(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error60moonbitlang_2fcore_2fencoding_2futf8_2eMalformed_2eMalformed.prototype.$tag = 3;
function _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure.prototype.$tag = 2;
function _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid.prototype.$tag = 1;
function _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eLocated(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eLocated.prototype.$tag = 0;
function _M0TPB9ArrayViewGyE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPC16buffer6Buffer(param0, param1) {
  this.data = param0;
  this.len = param1;
}
function _M0DTPC16result6ResultGuRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGdRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0TPC28internal7strconv6Number(param0, param1, param2, param3) {
  this.exponent = param0;
  this.mantissa = param1;
  this.negative = param2;
  this.many_digits = param3;
}
function _M0DTPC16result6ResultGdRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPC15error5ErrorE2Ok.prototype.$tag = 1;
function $i64_clz(a) {
  a = BigInt.asUintN(64, a);
  if (a === 0n) return 64;
  const hi = Number(a >> 32n);
  if (hi !== 0) {
    return Math.clz32(hi);
  }
  return 32 + Math.clz32(Number(a & 0xffffffffn));
}
function _M0TPC28internal7strconv12EiselProduct(param0, param1) {
  this.lo = param0;
  this.hi = param1;
}
function _M0TPC28internal7strconv7Decimal(param0, param1, param2, param3, param4, param5) {
  this.digits = param0;
  this.digits_num = param1;
  this.decimal_point = param2;
  this.negative = param3;
  this.truncated = param4;
  this.overflowed = param5;
}
function _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok.prototype.$tag = 1;
function $f64_convert_i64_u(a) {
  return Number(a);
}
function _M0DTPC16option6OptionGdE4None() {}
_M0DTPC16option6OptionGdE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGdE4None__ = new _M0DTPC16option6OptionGdE4None();
function _M0DTPC16option6OptionGdE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGdE4Some.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsRPC15debug4ReprEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPC14json8Position(param0, param1) {
  this.line = param0;
  this.column = param1;
}
function _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPC14json12ParseContext(param0, param1, param2) {
  this.offset = param0;
  this.input = param1;
  this.end_offset = param2;
}
function $f64_convert_i64(a) {
  return Number(BigInt.asIntN(64, a));
}
function _M0TPC14json11LexedNumber(param0, param1) {
  this.repr = param0;
  this.value = param1;
}
function _M0TPC14json14JsonNumberScan(param0, param1, param2, param3, param4) {
  this.negative = param0;
  this.is_integer = param1;
  this.mantissa = param2;
  this.exponent = param3;
  this.many_digits = param4;
}
function _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC14json5Token4Null() {}
_M0DTPC14json5Token4Null.prototype.$tag = 0;
const _M0DTPC14json5Token4Null__ = new _M0DTPC14json5Token4Null();
function _M0DTPC14json5Token4True() {}
_M0DTPC14json5Token4True.prototype.$tag = 1;
const _M0DTPC14json5Token4True__ = new _M0DTPC14json5Token4True();
function _M0DTPC14json5Token5False() {}
_M0DTPC14json5Token5False.prototype.$tag = 2;
const _M0DTPC14json5Token5False__ = new _M0DTPC14json5Token5False();
function _M0DTPC14json5Token6Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json5Token6Number.prototype.$tag = 3;
function _M0DTPC14json5Token6String(param0) {
  this._0 = param0;
}
_M0DTPC14json5Token6String.prototype.$tag = 4;
function _M0DTPC14json5Token6LBrace() {}
_M0DTPC14json5Token6LBrace.prototype.$tag = 5;
const _M0DTPC14json5Token6LBrace__ = new _M0DTPC14json5Token6LBrace();
function _M0DTPC14json5Token6RBrace() {}
_M0DTPC14json5Token6RBrace.prototype.$tag = 6;
const _M0DTPC14json5Token6RBrace__ = new _M0DTPC14json5Token6RBrace();
function _M0DTPC14json5Token8LBracket() {}
_M0DTPC14json5Token8LBracket.prototype.$tag = 7;
const _M0DTPC14json5Token8LBracket__ = new _M0DTPC14json5Token8LBracket();
function _M0DTPC14json5Token8RBracket() {}
_M0DTPC14json5Token8RBracket.prototype.$tag = 8;
const _M0DTPC14json5Token8RBracket__ = new _M0DTPC14json5Token8RBracket();
function _M0DTPC14json5Token5Comma() {}
_M0DTPC14json5Token5Comma.prototype.$tag = 9;
const _M0DTPC14json5Token5Comma__ = new _M0DTPC14json5Token5Comma();
function _M0TPB9ArrayViewGUsRPB4JsonEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC14json10WriteFrame5Array(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json10WriteFrame5Array.prototype.$tag = 0;
function _M0DTPC14json10WriteFrame6Object(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json10WriteFrame6Object.prototype.$tag = 1;
const $bytes_literal$1 = new Uint8Array([65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,48,49,50,51,52,53,54,55,56,57,43,47]);
function _M0TP212zhou_2dwei976promql17FunctionSignature(param0, param1, param2, param3, param4, param5) {
  this.name = param0;
  this.arguments = param1;
  this.min_args = param2;
  this.max_args = param3;
  this.result = param4;
  this.experimental = param5;
}
function _M0DTPC16result6ResultGuRP212zhou_2dwei976promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP212zhou_2dwei976promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRP212zhou_2dwei976promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP212zhou_2dwei976promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGUbOiERP212zhou_2dwei976promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUbOiERP212zhou_2dwei976promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUbOiERP212zhou_2dwei976promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUbOiERP212zhou_2dwei976promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGbE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGOiRP212zhou_2dwei976promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOiRP212zhou_2dwei976promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGOiRP212zhou_2dwei976promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOiRP212zhou_2dwei976promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP212zhou_2dwei976promql9RegexInfoRP212zhou_2dwei976promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP212zhou_2dwei976promql9RegexInfoRP212zhou_2dwei976promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP212zhou_2dwei976promql9RegexInfoRP212zhou_2dwei976promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP212zhou_2dwei976promql9RegexInfoRP212zhou_2dwei976promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TP212zhou_2dwei976promql9RegexInfo(param0, param1) {
  this.nullable = param0;
  this.repeats = param1;
}
function _M0DTPC16result6ResultGOUiiERP212zhou_2dwei976promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOUiiERP212zhou_2dwei976promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGOUiiERP212zhou_2dwei976promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOUiiERP212zhou_2dwei976promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORP212zhou_2dwei976promql9RegexInfoRP212zhou_2dwei976promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORP212zhou_2dwei976promql9RegexInfoRP212zhou_2dwei976promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORP212zhou_2dwei976promql9RegexInfoRP212zhou_2dwei976promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORP212zhou_2dwei976promql9RegexInfoRP212zhou_2dwei976promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGbRP212zhou_2dwei976promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGbRP212zhou_2dwei976promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGbRP212zhou_2dwei976promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGbRP212zhou_2dwei976promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TP212zhou_2dwei976promql11RegexReader(param0, param1, param2) {
  this.cs = param0;
  this.i = param1;
  this.nodes = param2;
}
const $bytes_literal$2 = new Uint8Array([95,95,110,97,109,101,95,95]);
function _M0TPB8MutLocalGlE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGlRP212zhou_2dwei976promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRP212zhou_2dwei976promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGlRP212zhou_2dwei976promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRP212zhou_2dwei976promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGdRP212zhou_2dwei976promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRP212zhou_2dwei976promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRP212zhou_2dwei976promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRP212zhou_2dwei976promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TP212zhou_2dwei976promql14VectorMatching(param0, param1, param2, param3, param4) {
  this.return_bool = param0;
  this.mode = param1;
  this.labels = param2;
  this.group = param3;
  this.include_labels = param4;
}
function _M0TP212zhou_2dwei976promql13ParserOptions(param0, param1, param2, param3) {
  this.experimental_functions = param0;
  this.duration_expressions = param1;
  this.extended_ranges = param2;
  this.fill_modifiers = param3;
}
function _M0TP212zhou_2dwei976promql10SourceSpan(param0, param1, param2, param3) {
  this.start = param0;
  this.end = param1;
  this.line = param2;
  this.column = param3;
}
function _M0DTPC16result6ResultGRP212zhou_2dwei976promql5TokenRP212zhou_2dwei976promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP212zhou_2dwei976promql5TokenRP212zhou_2dwei976promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP212zhou_2dwei976promql5TokenRP212zhou_2dwei976promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP212zhou_2dwei976promql5TokenRP212zhou_2dwei976promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTP212zhou_2dwei976promql4Expr6Number(param0) {
  this._0 = param0;
}
_M0DTP212zhou_2dwei976promql4Expr6Number.prototype.$tag = 0;
function _M0DTP212zhou_2dwei976promql4Expr13StringLiteral(param0) {
  this._0 = param0;
}
_M0DTP212zhou_2dwei976promql4Expr13StringLiteral.prototype.$tag = 1;
function _M0DTP212zhou_2dwei976promql4Expr11StringBytes(param0) {
  this._0 = param0;
}
_M0DTP212zhou_2dwei976promql4Expr11StringBytes.prototype.$tag = 2;
function _M0DTP212zhou_2dwei976promql4Expr8Selector(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP212zhou_2dwei976promql4Expr8Selector.prototype.$tag = 3;
function _M0DTP212zhou_2dwei976promql4Expr13SelectorBytes(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP212zhou_2dwei976promql4Expr13SelectorBytes.prototype.$tag = 4;
function _M0DTP212zhou_2dwei976promql4Expr13Parenthesized(param0) {
  this._0 = param0;
}
_M0DTP212zhou_2dwei976promql4Expr13Parenthesized.prototype.$tag = 5;
function _M0DTP212zhou_2dwei976promql4Expr5Range(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP212zhou_2dwei976promql4Expr5Range.prototype.$tag = 6;
function _M0DTP212zhou_2dwei976promql4Expr4Call(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP212zhou_2dwei976promql4Expr4Call.prototype.$tag = 7;
function _M0DTP212zhou_2dwei976promql4Expr9Aggregate(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
_M0DTP212zhou_2dwei976promql4Expr9Aggregate.prototype.$tag = 8;
function _M0DTP212zhou_2dwei976promql4Expr6Binary(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP212zhou_2dwei976promql4Expr6Binary.prototype.$tag = 9;
function _M0DTP212zhou_2dwei976promql4Expr5Unary(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP212zhou_2dwei976promql4Expr5Unary.prototype.$tag = 10;
function _M0DTP212zhou_2dwei976promql4Expr11BinaryMatch(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
_M0DTP212zhou_2dwei976promql4Expr11BinaryMatch.prototype.$tag = 11;
function _M0DTP212zhou_2dwei976promql4Expr10BinaryFill(param0, param1, param2, param3, param4, param5) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
  this._5 = param5;
}
_M0DTP212zhou_2dwei976promql4Expr10BinaryFill.prototype.$tag = 12;
function _M0DTP212zhou_2dwei976promql4Expr14AggregateParam(param0, param1, param2, param3, param4) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
}
_M0DTP212zhou_2dwei976promql4Expr14AggregateParam.prototype.$tag = 13;
function _M0DTP212zhou_2dwei976promql4Expr8Subquery(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP212zhou_2dwei976promql4Expr8Subquery.prototype.$tag = 14;
function _M0DTP212zhou_2dwei976promql4Expr6Offset(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP212zhou_2dwei976promql4Expr6Offset.prototype.$tag = 15;
function _M0DTP212zhou_2dwei976promql4Expr2At(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP212zhou_2dwei976promql4Expr2At.prototype.$tag = 16;
function _M0DTP212zhou_2dwei976promql4Expr15RangeExpression(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP212zhou_2dwei976promql4Expr15RangeExpression.prototype.$tag = 17;
function _M0DTP212zhou_2dwei976promql4Expr18SubqueryExpression(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP212zhou_2dwei976promql4Expr18SubqueryExpression.prototype.$tag = 18;
function _M0DTP212zhou_2dwei976promql4Expr16OffsetExpression(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP212zhou_2dwei976promql4Expr16OffsetExpression.prototype.$tag = 19;
function _M0DTP212zhou_2dwei976promql4Expr13ExtendedRange(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP212zhou_2dwei976promql4Expr13ExtendedRange.prototype.$tag = 20;
function _M0DTPC16result6ResultGUsssERP212zhou_2dwei976promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUsssERP212zhou_2dwei976promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUsssERP212zhou_2dwei976promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUsssERP212zhou_2dwei976promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGsERP212zhou_2dwei976promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGsERP212zhou_2dwei976promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGsERP212zhou_2dwei976promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGsERP212zhou_2dwei976promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGOsE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGUOsOsERP212zhou_2dwei976promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUOsOsERP212zhou_2dwei976promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUOsOsERP212zhou_2dwei976promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUOsOsERP212zhou_2dwei976promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTP212zhou_2dwei976promql12DurationExpr13DurationValue(param0) {
  this._0 = param0;
}
_M0DTP212zhou_2dwei976promql12DurationExpr13DurationValue.prototype.$tag = 0;
function _M0DTP212zhou_2dwei976promql12DurationExpr13DurationUnary(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP212zhou_2dwei976promql12DurationExpr13DurationUnary.prototype.$tag = 1;
function _M0DTP212zhou_2dwei976promql12DurationExpr14DurationBinary(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP212zhou_2dwei976promql12DurationExpr14DurationBinary.prototype.$tag = 2;
function _M0DTP212zhou_2dwei976promql12DurationExpr12DurationCall(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP212zhou_2dwei976promql12DurationExpr12DurationCall.prototype.$tag = 3;
function _M0DTPC16result6ResultGRP212zhou_2dwei976promql12DurationExprRP212zhou_2dwei976promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP212zhou_2dwei976promql12DurationExprRP212zhou_2dwei976promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP212zhou_2dwei976promql12DurationExprRP212zhou_2dwei976promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP212zhou_2dwei976promql12DurationExprRP212zhou_2dwei976promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGRP212zhou_2dwei976promql12DurationExprE(param0) {
  this.val = param0;
}
function $i64_trunc_f64(a) {
  if (Number.isNaN(a)) return 0n;
  if (a >= 9223372036854775807) return 9223372036854775807n;
  if (a <= -9223372036854775808) return 9223372036854775808n;
  return BigInt.asUintN(64, BigInt(Math.trunc(a)));
}
function _M0TPB8MutLocalGRP212zhou_2dwei976promql4ExprE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRP212zhou_2dwei976promql14VectorMatchingRP212zhou_2dwei976promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP212zhou_2dwei976promql14VectorMatchingRP212zhou_2dwei976promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP212zhou_2dwei976promql14VectorMatchingRP212zhou_2dwei976promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP212zhou_2dwei976promql14VectorMatchingRP212zhou_2dwei976promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGRPB5ArrayGsEE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRP212zhou_2dwei976promql6CursorRP212zhou_2dwei976promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP212zhou_2dwei976promql6CursorRP212zhou_2dwei976promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP212zhou_2dwei976promql6CursorRP212zhou_2dwei976promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP212zhou_2dwei976promql6CursorRP212zhou_2dwei976promql10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TP212zhou_2dwei976promql5Token(param0, param1, param2, param3, param4, param5) {
  this.text = param0;
  this.quoted = param1;
  this.kind = param2;
  this.raw_bytes = param3;
  this.start = param4;
  this.end = param5;
}
function _M0TPB8MutLocalGsE(param0) {
  this.val = param0;
}
function _M0TP212zhou_2dwei976promql6Cursor(param0, param1, param2, param3) {
  this.tokens = param0;
  this.pos = param1;
  this.source = param2;
  this.options = param3;
}
function _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok.prototype.$tag = 1;
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
function _M0FP15Error8to__repr(_e) {
  switch (_e.$tag) {
    case 1: {
      return _M0IP212zhou_2dwei976promql10ParseErrorPC15debug5Debug8to__reprGRP212zhou_2dwei976promql10ParseErrorE(_e);
    }
    case 3: {
      return _M0IPC28encoding4utf89MalformedPC15debug5Debug8to__reprGRPC28encoding4utf89MalformedE(_e);
    }
    case 6: {
      return _M0IPC14json10ParseErrorPC15debug5Debug8to__reprGRPC14json10ParseErrorE(_e);
    }
    case 2: {
      return _M0IPB7FailurePC15debug5Debug8to__reprGRPB7FailureE(_e);
    }
    case 7: {
      return _M0IPC14json10ParseErrorPC15debug5Debug8to__reprGRPC14json10ParseErrorE(_e);
    }
    case 8: {
      return _M0IPC14json10ParseErrorPC15debug5Debug8to__reprGRPC14json10ParseErrorE(_e);
    }
    case 0: {
      return _M0IP212zhou_2dwei976promql10ParseErrorPC15debug5Debug8to__reprGRP212zhou_2dwei976promql10ParseErrorE(_e);
    }
    case 5: {
      return _M0IPC14json10ParseErrorPC15debug5Debug8to__reprGRPC14json10ParseErrorE(_e);
    }
    default: {
      return _M0IPC14json10ParseErrorPC15debug5Debug8to__reprGRPC14json10ParseErrorE(_e);
    }
  }
}
const _M0MPC16string6String4trimN7_2abindS6861 = "\t\n\r ";
const _M0FPB4null = _M0DTPB4Json4Null__;
const _M0FPB18double__max__value = $i64_reinterpret_f64(9218868437227405311n);
const _M0FPB18double__min__value = $i64_reinterpret_f64(18442240474082181119n);
const _M0MPB4Iter4nextN6constrS9855GUsRPB4JsonEE = 0;
const _M0MPB4Iter4nextN6constrS9856GUsRPB4JsonEE = 0;
const _M0MPB4Iter4nextN6constrS9855GcE = 0;
const _M0MPB4Iter4nextN6constrS9856GcE = 0;
const _M0MPB4Iter3newN6constrS9863GUsRPB4JsonEE = 0;
const _M0MPB4Iter3newN6constrS9863GcE = 0;
const _M0FPC16double14not__a__number = $i64_reinterpret_f64(9221120237041090561n);
const _M0FPC16double8infinity = $i64_reinterpret_f64(9218868437227405312n);
const _M0FPC16double13neg__infinity = $i64_reinterpret_f64(18442240474082181120n);
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
const _M0FPC28internal7strconv15range__err__str = "value out of range";
const _M0FPC28internal7strconv16syntax__err__str = "invalid syntax";
const _M0FPC28internal7strconv17min__19digit__int = 1000000000000000000n;
const _M0FPC28internal7strconv17parse__scientificN8exp__numS354 = 0n;
const _M0FPC28internal7strconv27eisel__lemire__pow10__table = [18054884314459144840n, 1671618768450675795n, 11284302696536965525n, 1044761730281672372n, 14105378370671206906n, 5917638181279478369n, 17631722963339008632n, 16620419763454123769n, 11019826852086880395n, 10387762352158827356n, 13774783565108600494n, 8373016921771146291n, 17218479456385750618n, 1242899115359157055n, 10761549660241094136n, 5388497965526861063n, 13451937075301367670n, 6735622456908576329n, 16814921344126709587n, 17642900107990496220n, 10509325840079193492n, 8720969558280366185n, 13136657300098991865n, 10901211947850457732n, 16420821625123739831n, 18238200953240460069n, 10263013515702337394n, 18316404623416369399n, 12828766894627921743n, 13672133742415685941n, 16035958618284902179n, 12478481159592219522n, 10022474136428063862n, 5493207715531443249n, 12528092670535079827n, 16089881681269079869n, 15660115838168849784n, 15500666083158961933n, 9787572398855531115n, 9687916301974351208n, 12234465498569413894n, 7498209359040551106n, 15293081873211767368n, 149389661945913074n, 9558176170757354605n, 93368538716195671n, 11947720213446693256n, 4728396691822632493n, 14934650266808366570n, 5910495864778290617n, 9334156416755229106n, 8305745933913819539n, 11667695520944036383n, 1158810380537498616n, 14584619401180045478n, 15283571030954036982n, 18230774251475056848n, 9881091751837770420n, 11394233907171910530n, 6175682344898606512n, 14242792383964888162n, 16942974967978033949n, 17803490479956110203n, 11955346673117766628n, 11127181549972568877n, 5166248661484910190n, 13908976937465711096n, 11069496845283525642n, 17386221171832138870n, 13836871056604407053n, 10866388232395086794n, 4036358391950366504n, 13582985290493858492n, 14268820026792733938n, 16978731613117323115n, 17836025033490917422n, 10611707258198326947n, 8841672636718129437n, 13264634072747908684n, 6440404777470273892n, 16580792590934885855n, 8050505971837842365n, 10362995369334303659n, 11949095260039733334n, 12953744211667879574n, 10324683056622278764n, 16192180264584849468n, 3682481783923072647n, 10120112665365530917n, 11524923151806696212n, 12650140831706913647n, 571095884476206553n, 15812676039633642058n, 14548927910877421904n, 9882922524771026286n, 13704765962725776594n, 12353653155963782858n, 7907585416552444934n, 15442066444954728573n, 661109733835780360n, 9651291528096705358n, 2719036592861056677n, 12064114410120881697n, 12622167777931096654n, 15080143012651102122n, 1942651667131707105n, 9425089382906938826n, 5825843310384704845n, 11781361728633673532n, 16505676174835656864n, 14726702160792091916n, 2185351144835019464n, 18408377700990114895n, 2731688931043774330n, 11505236063118821809n, 8624834609543440812n, 14381545078898527261n, 15392729280356688919n, 17976931348623159077n, 5405853545163697437n, 11235582092889474423n, 5684501474941004850n, 14044477616111843029n, 2493940825248868159n, 17555597020139803786n, 7729112049988473103n, 10972248137587377366n, 9442381049670183593n, 13715310171984221708n, 2579604275232953683n, 17144137714980277135n, 3224505344041192104n, 10715086071862673209n, 8932844867666826921n, 13393857589828341511n, 15777742103010921555n, 16742321987285426889n, 15110491610336264040n, 10463951242053391806n, 2526528228819083169n, 13079939052566739757n, 12381532322878629770n, 16349923815708424697n, 1641857348316123500n, 10218702384817765435n, 12555375888766046947n, 12773377981022206794n, 11082533842530170780n, 15966722476277758493n, 4629795266307937667n, 9979201547673599058n, 5199465050656154994n, 12474001934591998822n, 15722703350174969551n, 15592502418239998528n, 10430007150863936130n, 9745314011399999080n, 6518754469289960081n, 12181642514249998850n, 8148443086612450102n, 15227053142812498563n, 962181821410786819n, 9516908214257811601n, 16742264702877599426n, 11896135267822264502n, 7092772823314835570n, 14870169084777830627n, 18089338065998320271n, 9293855677986144142n, 8999993282035256217n, 11617319597482680178n, 2026619565689294464n, 14521649496853350222n, 11756646493966393888n, 18152061871066687778n, 5472436080603216552n, 11345038669416679861n, 8031958568804398249n, 14181298336770849826n, 14651634229432885715n, 17726622920963562283n, 9091170749936331336n, 11079139325602226427n, 3376138709496513133n, 13848924157002783033n, 18055231442152805128n, 17311155196253478792n, 8733981247408842698n, 10819471997658424245n, 5458738279630526686n, 13524339997073030306n, 11435108867965546262n, 16905424996341287883n, 5070514048102157020n, 10565890622713304927n, 863228270850154185n, 13207363278391631158n, 14914093393844856443n, 16509204097989538948n, 9419244705451294746n, 10318252561243461842n, 15110399977761835024n, 12897815701554327303n, 9664627935347517973n, 16122269626942909129n, 7469098900757009562n, 10076418516839318205n, 16197401859041600736n, 12595523146049147757n, 6411694268519837208n, 15744403932561434696n, 12626303854077184414n, 9840252457850896685n, 7891439908798240259n, 12300315572313620856n, 14475985904425188227n, 15375394465392026070n, 18094982380531485284n, 9609621540870016294n, 6697677969404790399n, 12012026926087520367n, 17595469498610763806n, 15015033657609400459n, 17382650854836066854n, 9384396036005875287n, 8558313775058847832n, 11730495045007344109n, 6086206200396171886n, 14663118806259180136n, 12219443768922602761n, 18328898507823975170n, 15274304711153253452n, 11455561567389984481n, 14158126462898171311n, 14319451959237480602n, 3862600023340550427n, 17899314949046850752n, 14051622066030463842n, 11187071843154281720n, 8782263791269039901n, 13983839803942852150n, 10977829739086299876n, 17479799754928565188n, 4498915137003099037n, 10924874846830353242n, 12035193997481712706n, 13656093558537941553n, 5820620459997365075n, 17070116948172426941n, 11887461593424094248n, 10668823092607766838n, 9735506505103752857n, 13336028865759708548n, 2946011094524915263n, 16670036082199635685n, 3682513868156144079n, 10418772551374772303n, 4607414176811284001n, 13023465689218465379n, 1147581702586717097n, 16279332111523081723n, 15269535183515560084n, 10174582569701926077n, 7237616480483531100n, 12718228212127407596n, 13658706619031801779n, 15897785265159259495n, 17073383273789752224n, 9936115790724537184n, 17588393573759676996n, 12420144738405671481n, 3538747893490044629n, 15525180923007089351n, 9035120885289943691n, 9703238076879430844n, 12564479580947296663n, 12129047596099288555n, 15705599476184120828n, 15161309495124110694n, 15020313326802763131n, 9475818434452569184n, 4776009810824339053n, 11844773043065711480n, 5970012263530423816n, 14805966303832139350n, 7462515329413029771n, 9253728939895087094n, 52386062455755702n, 11567161174868858867n, 9288854614924470436n, 14458951468586073584n, 6999382250228200141n, 18073689335732591980n, 8749227812785250177n, 11296055834832869987n, 14691639419845557168n, 14120069793541087484n, 13752863256379558556n, 17650087241926359355n, 17191079070474448196n, 11031304526203974597n, 8438581409832836170n, 13789130657754968246n, 15159912780718433117n, 17236413322193710308n, 9726518939043265588n, 10772758326371068942n, 15302446373756816800n, 13465947907963836178n, 9904685930341245193n, 16832434884954795223n, 3157485376071780683n, 10520271803096747014n, 8890957387685944783n, 13150339753870933768n, 1890324697752655170n, 16437924692338667210n, 2362905872190818963n, 10273702932711667006n, 6088502188546649756n, 12842128665889583757n, 16833999772538088003n, 16052660832361979697n, 7207441660390446292n, 10032913020226237310n, 16033866083812498692n, 12541141275282796638n, 10818960567910847557n, 15676426594103495798n, 4300328673033783639n, 9797766621314684873n, 16522763475928278486n, 12247208276643356092n, 6818396289628184396n, 15309010345804195115n, 8522995362035230495n, 9568131466127621947n, 3021029092058325107n, 11960164332659527433n, 17611344420355070096n, 14950205415824409292n, 8179122470161673908n, 9343878384890255807n, 14335323580705822000n, 11679847981112819759n, 13307468457454889596n, 14599809976391024699n, 12022649553391224092n, 18249762470488780874n, 10416625923311642211n, 11406101544055488046n, 11122077220497164286n, 14257626930069360058n, 4679224488766679549n, 17822033662586700072n, 15072402647813125244n, 11138771039116687545n, 9420251654883203278n, 13923463798895859431n, 16387000587031392001n, 17404329748619824289n, 15872064715361852097n, 10877706092887390181n, 3002511419460075705n, 13597132616109237726n, 8364825292752482535n, 16996415770136547158n, 1232659579085827361n, 10622759856335341973n, 14605470292210805812n, 13278449820419177467n, 4421779809981343554n, 16598062275523971834n, 915538744049291538n, 10373788922202482396n, 5183897733458195115n, 12967236152753102995n, 6479872166822743894n, 16209045190941378744n, 3488154190101041964n, 10130653244338361715n, 2180096368813151227n, 12663316555422952143n, 16560178516298602746n, 15829145694278690179n, 16088537126945865529n, 9893216058924181362n, 7749492695127472003n, 12366520073655226703n, 463493832054564196n, 15458150092069033378n, 14414425345350368957n, 9661343807543145861n, 13620701859271368502n, 12076679759428932327n, 3190819268807046916n, 15095849699286165408n, 17823582141290972357n, 9434906062053853380n, 11139738838306857723n, 11793632577567316725n, 13924673547883572154n, 14742040721959145907n, 3570783879572301480n, 18427550902448932383n, 18298537904747540562n, 11517219314030582739n, 18354115218108294707n, 14396524142538228424n, 18330958004207980480n, 17995655178172785531n, 4466953431550423984n, 11247284486357990957n, 486002885505321038n, 14059105607947488696n, 5219189625309039202n, 17573882009934360870n, 6523987031636299002n, 10983676256208975543n, 17912549950054850588n, 13729595320261219429n, 17779001419141175331n, 17161994150326524287n, 8388693718644305452n, 10726246343954077679n, 12160462601793772764n, 13407807929942597099n, 10588892233814828051n, 16759759912428246374n, 8624429273841147159n, 10474849945267653984n, 778582277723329070n, 13093562431584567480n, 973227847154161338n, 16366953039480709350n, 1216534808942701673n, 10229345649675443343n, 14595392310871352257n, 12786682062094304179n, 13632554370161802418n, 15983352577617880224n, 12429006944274865118n, 9989595361011175140n, 7768129340171790699n, 12486994201263968925n, 9710161675214738374n, 15608742751579961156n, 16749388112445810871n, 9755464219737475723n, 1244995533423855986n, 12194330274671844653n, 15391302472061983695n, 15242912843339805817n, 5404070034795315907n, 9526820527087378635n, 14906758817815542202n, 11908525658859223294n, 14021762503842039848n, 14885657073574029118n, 8303831092947774002n, 9303535670983768199n, 578208414664970847n, 11629419588729710248n, 14557818573613377271n, 14536774485912137810n, 18197273217016721589n, 18170968107390172263n, 13523219484416126178n, 11356855067118857664n, 15369541205401160717n, 14196068833898572081n, 765182433041899281n, 17745086042373215101n, 5568164059729762005n, 11090678776483259438n, 5785945546544795205n, 13863348470604074297n, 16455803970035769814n, 17329185588255092872n, 6734696907262548556n, 10830740992659433045n, 4209185567039092847n, 13538426240824291306n, 9873167977226253963n, 16923032801030364133n, 3118087934678041646n, 10576895500643977583n, 4254647968387469981n, 13221119375804971979n, 706623942056949572n, 16526399219756214973n, 14718337982853350677n, 10328999512347634358n, 11504804248497038125n, 12911249390434542948n, 5157633273766521849n, 16139061738043178685n, 6447041592208152311n, 10086913586276986678n, 6335244004343789146n, 12608641982846233347n, 17142427042284512241n, 15760802478557791684n, 16816347784428252397n, 9850501549098619803n, 1286845328412881940n, 12313126936373274753n, 15443614715798266137n, 15391408670466593442n, 5469460339465668959n, 9619630419041620901n, 8030098730593431003n, 12024538023802026126n, 14649309431669176658n, 15030672529752532658n, 9088264752731695015n, 9394170331095332911n, 10291851488884697288n, 11742712913869166139n, 8253128342678483706n, 14678391142336457674n, 5704724409920716729n, 18347988927920572092n, 16354277549255671720n, 11467493079950357558n, 998051431430019017n, 14334366349937946947n, 10470936326142299579n, 17917957937422433684n, 8476984389250486570n, 11198723710889021052n, 14521487280136329914n, 13998404638611276315n, 18151859100170412392n, 17498005798264095394n, 18078137856785627587n, 10936253623915059621n, 15910522178918405146n, 13670317029893824527n, 6053094668365842720n, 17087896287367280659n, 2954682317029915496n, 10679935179604550411n, 17987577512639554849n, 13349918974505688014n, 17872785872372055657n, 16687398718132110018n, 13117610303610293764n, 10429624198832568761n, 12810192458183821506n, 13037030248540710952n, 2177682517447613171n, 16296287810675888690n, 2722103146809516464n, 10185179881672430431n, 6313000485183335694n, 12731474852090538039n, 3279564588051781713n, 15914343565113172548n, 17934513790346890853n, 9946464728195732843n, 1985699082112030975n, 12433080910244666053n, 16317181907922202431n, 15541351137805832567n, 6561419329620589327n, 9713344461128645354n, 11018416108653950185n, 12141680576410806693n, 4549648098962661924n, 15177100720513508366n, 10298746142130715309n, 9485687950320942729n, 1825030320404309164n, 11857109937901178411n, 6892973918932774359n, 14821387422376473014n, 4004531380238580045n, 9263367138985295633n, 16337890167931276240n, 11579208923731619542n, 6587304654631931588n, 14474011154664524427n, 17457502855144690293n, 18092513943330655534n, 17210192550503474962n, 11307821214581659709n, 6144684325637283947n, 14134776518227074636n, 12292541425473992838n, 17668470647783843295n, 15365676781842491048n, 11042794154864902059n, 16521077016292638761n, 13803492693581127574n, 16039660251938410547n, 17254365866976409468n, 10826203278068237376n, 10783978666860255917n, 15989749085647424168n, 13479973333575319897n, 6152128301777116498n, 16849966666969149871n, 12301846395648783526n, 10531229166855718669n, 14606183024921571560n, 13164036458569648337n, 4422670725869800738n, 16455045573212060421n, 10140024425764638826n, 10284403483257537763n, 8643358275316593218n, 12855504354071922204n, 6192511825718353619n, 16069380442589902755n, 7740639782147942024n, 10043362776618689222n, 2532056854628769813n, 12554203470773361527n, 12388443105140738074n, 15692754338466701909n, 10873867862998534689n, 9807971461541688693n, 9102010423587778132n, 12259964326927110866n, 15989199047912110569n, 15324955408658888583n, 10763126773035362404n, 9578097130411805364n, 13644483260788183358n, 11972621413014756705n, 17055604075985229198n, 14965776766268445882n, 7484447039699372786n, 9353610478917778676n, 9289465418239495895n, 11692013098647223345n, 11611831772799369869n, 14615016373309029182n, 679731660717048624n, 18268770466636286477n, 10073036612751086588n, 11417981541647679048n, 8601490892183123069n, 14272476927059598810n, 10751863615228903837n, 17840596158824498513n, 4216457482181353988n, 11150372599265311570n, 14164500972431816002n, 13937965749081639463n, 8482254178684994195n, 17422457186352049329n, 5991131704928854840n, 10889035741470030830n, 15273672361649004035n, 13611294676837538538n, 9868718415206479236n, 17014118346046923173n, 3112525982153323237n, 10633823966279326983n, 4251171748059520975n, 13292279957849158729n, 702278666647013314n, 16615349947311448411n, 5489534351736154547n, 10384593717069655257n, 1125115960621402640n, 12980742146337069071n, 6018080969204141204n, 16225927682921336339n, 2910915193077788601n, 10141204801825835211n, 17960223060169475539n, 12676506002282294014n, 17838592806784456520n, 15845632502852867518n, 13074868971625794843n, 9903520314283042199n, 3560107088838733872n, 12379400392853802748n, 18285191916330581053n, 15474250491067253436n, 4409745821703674700n, 9671406556917033397n, 11979463175419572495n, 12089258196146291747n, 1139270913992301907n, 15111572745182864683n, 15259146697772541096n, 9444732965739290427n, 7231123676894144233n, 11805916207174113034n, 4427218577690292387n, 14757395258967641292n, 14757395258967641292n, 9223372036854775808n, 0n, 11529215046068469760n, 0n, 14411518807585587200n, 0n, 18014398509481984000n, 0n, 11258999068426240000n, 0n, 14073748835532800000n, 0n, 17592186044416000000n, 0n, 10995116277760000000n, 0n, 13743895347200000000n, 0n, 17179869184000000000n, 0n, 10737418240000000000n, 0n, 13421772800000000000n, 0n, 16777216000000000000n, 0n, 10485760000000000000n, 0n, 13107200000000000000n, 0n, 16384000000000000000n, 0n, 10240000000000000000n, 0n, 12800000000000000000n, 0n, 16000000000000000000n, 0n, 10000000000000000000n, 0n, 12500000000000000000n, 0n, 15625000000000000000n, 0n, 9765625000000000000n, 0n, 12207031250000000000n, 0n, 15258789062500000000n, 0n, 9536743164062500000n, 0n, 11920928955078125000n, 0n, 14901161193847656250n, 0n, 9313225746154785156n, 4611686018427387904n, 11641532182693481445n, 5764607523034234880n, 14551915228366851806n, 11817445422220181504n, 18189894035458564758n, 5548434740920451072n, 11368683772161602973n, 17302829768357445632n, 14210854715202003717n, 7793479155164643328n, 17763568394002504646n, 14353534962383192064n, 11102230246251565404n, 4359273333062107136n, 13877787807814456755n, 5449091666327633920n, 17347234759768070944n, 2199678564482154496n, 10842021724855044340n, 1374799102801346560n, 13552527156068805425n, 1718498878501683200n, 16940658945086006781n, 6759809616554491904n, 10587911840678754238n, 6530724019560251392n, 13234889800848442797n, 17386777061305090048n, 16543612251060553497n, 7898413271349198848n, 10339757656912845935n, 16465723340661719040n, 12924697071141057419n, 15970468157399760896n, 16155871338926321774n, 15351399178322313216n, 10097419586828951109n, 4982938468024057856n, 12621774483536188886n, 10840359103457460224n, 15777218104420236108n, 4327076842467049472n, 9860761315262647567n, 11927795063396681728n, 12325951644078309459n, 10298057810818464256n, 15407439555097886824n, 8260886245095692416n, 9629649721936179265n, 5163053903184807760n, 12037062152420224081n, 11065503397408397604n, 15046327690525280101n, 18443565265187884909n, 9403954806578300063n, 13833071299956122020n, 11754943508222875079n, 12679653106517764621n, 14693679385278593849n, 11237880364719817872n, 18367099231598242312n, 212292400617608628n, 11479437019748901445n, 132682750386005392n, 14349296274686126806n, 4777539456409894645n, 17936620343357658507n, 15195296357367144114n, 11210387714598536567n, 7191217214140771119n, 14012984643248170709n, 4377335499248575995n, 17516230804060213386n, 10083355392488107898n, 10947644252537633366n, 10913783138732455340n, 13684555315672041708n, 4418856886560793367n, 17105694144590052135n, 5523571108200991709n, 10691058840368782584n, 10369760970266701674n, 13363823550460978230n, 12962201212833377092n, 16704779438076222788n, 6979379479186945558n, 10440487148797639242n, 13585484211346616781n, 13050608935997049053n, 7758483227328495169n, 16313261169996311316n, 14309790052588006865n, 10195788231247694572n, 18166990819722280098n, 12744735289059618216n, 4261994450943298507n, 15930919111324522770n, 5327493063679123134n, 9956824444577826731n, 7941369183226839863n, 12446030555722283414n, 5315025460606161924n, 15557538194652854267n, 15867153862612478214n, 9723461371658033917n, 7611128154919104931n, 12154326714572542396n, 14125596212076269068n, 15192908393215677995n, 17656995265095336336n, 9495567745759798747n, 8729779031470891258n, 11869459682199748434n, 6300537770911226168n, 14836824602749685542n, 17099044250493808518n, 9273015376718553464n, 6075216638131242420n, 11591269220898191830n, 7594020797664053025n, 14489086526122739788n, 269153960225290473n, 18111358157653424735n, 336442450281613091n, 11319598848533390459n, 7127805559067090038n, 14149498560666738074n, 4298070930406474644n, 17686873200833422592n, 14595960699862869113n, 11054295750520889120n, 9122475437414293195n, 13817869688151111400n, 11403094296767866494n, 17272337110188889250n, 14253867870959833118n, 10795210693868055781n, 13520353437777283602n, 13494013367335069727n, 3065383741939440791n, 16867516709168837158n, 17666787732706464701n, 10542197943230523224n, 6430056314514152534n, 13177747429038154030n, 8037570393142690668n, 16472184286297692538n, 823590954573587527n, 10295115178936057836n, 5126430365035880108n, 12868893973670072295n, 6408037956294850135n, 16086117467087590369n, 3398361426941174765n, 10053823416929743980n, 13653190937906703988n, 12567279271162179975n, 17066488672383379985n, 15709099088952724969n, 16721424822051837077n, 9818186930595453106n, 3533361486141316317n, 12272733663244316382n, 13640073894531421205n, 15340917079055395478n, 7826720331309500698n, 9588073174409622174n, 280014188641050032n, 11985091468012027717n, 9573389772656088348n, 14981364335015034646n, 16578423234247498339n, 9363352709384396654n, 5749828502977298558n, 11704190886730495817n, 16410657665576399005n, 14630238608413119772n, 6678264026688335045n, 18287798260516399715n, 8347830033360418806n, 11429873912822749822n, 2911550761636567802n, 14287342391028437277n, 12862810488900485560n, 17859177988785546597n, 2243455055843443238n, 11161986242990966623n, 3708002419115845976n, 13952482803738708279n, 23317005467419566n, 17440603504673385348n, 13864204312116438170n, 10900377190420865842n, 17888499731927549664n, 13625471488026082303n, 13137252628054661272n, 17031839360032602879n, 11809879766640938686n, 10644899600020376799n, 14298703881791668535n, 13306124500025470999n, 13261693833812197764n, 16632655625031838749n, 11965431273837859301n, 10395409765644899218n, 9784237555362356015n, 12994262207056124023n, 3006924907348169211n, 16242827758820155028n, 17593714189467375226n, 10151767349262596893n, 1772699331562333708n, 12689709186578246116n, 6827560182880305039n, 15862136483222807645n, 8534450228600381299n, 9913835302014254778n, 7639874402088932264n, 12392294127517818473n, 326470965756389522n, 15490367659397273091n, 5019774725622874806n, 9681479787123295682n, 831516194300602802n, 12101849733904119602n, 10262767279730529310n, 15127312167380149503n, 3605087062808385830n, 9454570104612593439n, 9170708441896323000n, 11818212630765741799n, 6851699533943015846n, 14772765788457177249n, 3952938399001381903n, 9232978617785735780n, 13999801545444333449n, 11541223272232169725n, 17499751931805416812n, 14426529090290212157n, 8039631859474607303n, 18033161362862765196n, 14661225842770647033n, 11270725851789228247n, 18386638188586430203n, 14088407314736535309n, 18371611717305649850n, 17610509143420669137n, 9129456591349898601n, 11006568214637918210n, 17235125415662156385n, 13758210268297397763n, 12320534732722919674n, 17197762835371747204n, 10788982397476261688n, 10748601772107342002n, 15966486035277439363n, 13435752215134177503n, 10734735507242023396n, 16794690268917721879n, 8806733365625141341n, 10496681418073576174n, 12421737381156795194n, 13120851772591970218n, 6303799689591218185n, 16401064715739962772n, 17103121648843798539n, 10250665447337476733n, 1466078993672598279n, 12813331809171845916n, 6444284760518135752n, 16016664761464807395n, 8055355950647669691n, 10010415475915504622n, 2728754459941099604n, 12513019344894380777n, 12634315111781150314n, 15641274181117975972n, 1957835834444274180n, 9775796363198734982n, 10447019433382447170n, 12219745453998418728n, 3835402254873283155n, 15274681817498023410n, 4794252818591603944n, 9546676135936264631n, 7608094030047140369n, 11933345169920330789n, 4898431519131537557n, 14916681462400413486n, 10734725417341809851n, 9322925914000258429n, 2097517367411243253n, 11653657392500323036n, 7233582727691441970n, 14567071740625403795n, 9041978409614302462n, 18208839675781754744n, 6690786993590490174n, 11380524797363596715n, 4181741870994056359n, 14225655996704495894n, 615491320315182544n, 17782069995880619867n, 9992736187248753989n, 11113793747425387417n, 3939617107816777291n, 13892242184281734271n, 9536207403198359517n, 17365302730352167839n, 7308573235570561493n, 10853314206470104899n, 11485387299872682789n, 13566642758087631124n, 9745048106413465582n, 16958303447609538905n, 12181310133016831978n, 10598939654755961816n, 695789805494438130n, 13248674568444952270n, 869737256868047663n, 16560843210556190337n, 10310543607939835386n, 10350527006597618960n, 17973304801030866876n, 12938158758247023701n, 4019886927579031980n, 16172698447808779626n, 9636544677901177879n, 10107936529880487266n, 10634526442115624078n, 12634920662350609083n, 4069786015789754290n, 15793650827938261354n, 475546501309804958n, 9871031767461413346n, 4908902581746016003n, 12338789709326766682n, 15359500264037295811n, 15423487136658458353n, 9976003293191843956n, 9639679460411536470n, 17764217104313372233n, 12049599325514420588n, 12981899343536939483n, 15061999156893025735n, 16227374179421174354n, 9413749473058141084n, 17059637889779315827n, 11767186841322676356n, 2877803288514593168n, 14708983551653345445n, 3597254110643241460n, 18386229439566681806n, 9108253656731439729n, 11491393399729176129n, 1080972517029761926n, 14364241749661470161n, 5962901664714590312n, 17955302187076837701n, 12065313099320625794n, 11222063866923023563n, 9846663696289085073n, 14027579833653779454n, 7696643601933968437n, 17534474792067224318n, 397432465562684739n, 10959046745042015198n, 14083453346258841674n, 13698808431302518998n, 8380944645968776284n, 17123510539128148748n, 1252808770606194547n, 10702194086955092967n, 10006377518483647400n, 13377742608693866209n, 7896285879677171346n, 16722178260867332761n, 14482043368023852087n, 10451361413042082976n, 2133748077373825698n, 13064201766302603720n, 2667185096717282123n, 16330252207878254650n, 3333981370896602653n, 10206407629923909156n, 6695424375237764562n, 12758009537404886445n, 8369280469047205703n, 15947511921756108056n, 15073286604736395033n, 9967194951097567535n, 9420804127960246895n, 12458993688871959419n, 7164319141522920715n, 15573742111089949274n, 4343712908476262990n, 9733588819431218296n, 7326506586225052273n, 12166986024289022870n, 9158133232781315341n, 15208732530361278588n, 2224294504121868368n, 9505457831475799117n, 10613556101930943538n, 11881822289344748896n, 17878631145841067327n, 14852277861680936121n, 3901544858591782542n, 9282673663550585075n, 13967680582688333849n, 11603342079438231344n, 12847914709933029407n, 14504177599297789180n, 16059893387416286759n, 18130221999122236476n, 1628122660560806833n, 11331388749451397797n, 10240948699705280078n, 14164235936814247246n, 17412871893058988002n, 17705294921017809058n, 12542717829468959195n, 11065809325636130661n, 12450884661845487401n, 13832261657045163327n, 1728547772024695539n, 17290327071306454158n, 15995742770313033136n, 10806454419566533849n, 5385653213018257806n, 13508068024458167311n, 11343752534700210161n, 16885085030572709139n, 9568004649947874797n, 10553178144107943212n, 3674159897003727796n, 13191472680134929015n, 4592699871254659745n, 16489340850168661269n, 1129188820640936778n, 10305838031355413293n, 3011586022114279438n, 12882297539194266616n, 8376168546070237202n, 16102871923992833270n, 10470210682587796502n, 10064294952495520794n, 1932195658189984910n, 12580368690619400992n, 11638616609592256945n, 15725460863274251240n, 14548270761990321182n, 9828413039546407025n, 9092669226243950738n, 12285516299433008781n, 15977522551232326327n, 15356895374291260977n, 6136845133758244197n, 9598059608932038110n, 15364743254667372383n, 11997574511165047638n, 9982557031479439671n, 14996968138956309548n, 3254824252494523781n, 9373105086847693467n, 11257637194663853171n, 11716381358559616834n, 9460360474902428559n, 14645476698199521043n, 2602078556773259891n, 18306845872749401303n, 17087656251248738576n, 11441778670468375814n, 17597314184671543466n, 14302223338085469768n, 12773270693984653525n, 17877779172606837210n, 15966588367480816906n, 11173611982879273256n, 14590803748102898470n, 13967014978599091570n, 18238504685128623088n, 17458768723248864463n, 13574758819556003052n, 10911730452030540289n, 15401753289863583763n, 13639663065038175362n, 5417133557047315992n, 17049578831297719202n, 15994788983163920798n, 10655986769561074501n, 14608429132904838403n, 13319983461951343127n, 4425478360848884291n, 16649979327439178909n, 920161932633717460n, 10406237079649486818n, 2880944217109767365n, 13007796349561858522n, 12824552308241985014n, 16259745436952323153n, 6807318348447705459n, 10162340898095201970n, 15783789013848285672n, 12702926122619002463n, 10506364230455581282n, 15878657653273753079n, 8521269269642088699n, 9924161033296095674n, 12243322321167387293n, 12405201291620119593n, 6080780864604458308n, 15506501614525149491n, 12212662099182960789n, 9691563509078218432n, 5327070802775656541n, 12114454386347773040n, 6658838503469570676n, 15143067982934716300n, 8323548129336963345n, 9464417489334197687n, 14425589617690377899n, 11830521861667747109n, 13420301003685584469n, 14788152327084683887n, 2940318199324816875n, 9242595204427927429n, 8755227902219092403n, 11553244005534909286n, 15555720896201253407n, 14441555006918636608n, 10221279083396790951n, 18051943758648295760n, 12776598854245988689n, 11282464849155184850n, 7985374283903742931n, 14103081061443981063n, 758345818024902856n, 17628851326804976328n, 14782990327813292282n, 11018032079253110205n, 9239368954883307676n, 13772540099066387756n, 16160897212031522499n, 17215675123832984696n, 1754377441329851508n, 10759796952395615435n, 1096485900831157192n, 13449746190494519293n, 15205665431321110202n, 16812182738118149117n, 5172023733869224041n, 10507614211323843198n, 5538357842881958977n, 13134517764154803997n, 16146319340457224530n, 16418147205193504997n, 6347841120289366950n, 10261342003245940623n, 6273243709394548296n, 12826677504057425779n, 3229868618315797466n, 16033346880071782223n, 17872393828176910545n, 10020841800044863889n, 18087775170251650946n, 12526052250056079862n, 8774660907532399971n, 15657565312570099828n, 1744954097560724156n, 9785978320356312392n, 10313968347830228405n, 12232472900445390490n, 12892460434787785506n, 15290591125556738113n, 6892203506629956075n, 9556619453472961320n, 15836842237712192307n, 11945774316841201651n, 1349308723430688768n, 14932217896051502063n, 15521693959570524672n, 9332636185032188789n, 16618587752372659776n, 11665795231290235987n, 6938176635183661008n, 14582244039112794984n, 4061034775552188356n, 18227805048890993730n, 5076293469440235445n, 11392378155556871081n, 7784369436827535057n, 14240472694446088851n, 14342147814461806725n, 17800590868057611064n, 13315998749649870503n, 11125369292536006915n, 8322499218531169064n, 13906711615670008644n, 5791438004736573426n, 17383389519587510805n, 7239297505920716783n, 10864618449742194253n, 6830403950414141941n, 13580773062177742816n, 13149690956445065330n, 16975966327722178520n, 16437113695556331663n, 10609978954826361575n, 10273196059722707289n, 13262473693532951969n, 8229809056225996208n, 16578092116916189961n, 14898947338709883164n, 10361307573072618726n, 2394313059052595121n, 12951634466340773407n, 12216263360670519709n, 16189543082925966759n, 10658643182410761733n, 10118464426828729224n, 13579181016647807939n, 12648080533535911530n, 16973976270809759924n, 15810100666919889413n, 11994098301657424097n, 9881312916824930883n, 9802154447749584012n, 12351641146031163604n, 7641007041259592112n, 15439551432538954505n, 9551258801574490140n, 9649719645336846565n, 17498751797052526097n, 12062149556671058207n, 8038381691033493909n, 15077686945838822759n, 5436291095364479483n];
const _M0FPC28internal7strconv12double__info = new _M0TPC28internal7strconv9FloatInfo(52, 11, -1023);
const _M0FPC28internal7strconv25min__exponent__fast__path = 18446744073709551594n;
const _M0FPC28internal7strconv25max__exponent__fast__path = 22n;
const _M0FPC28internal7strconv36max__exponent__disguised__fast__path = 37n;
const _M0FPC28internal7strconv25max__mantissa__fast__path = 9007199254740992n;
const _M0FPC28internal7strconv6powtab = [1, 3, 6, 9, 13, 16, 19, 23, 26, 29, 33, 36, 39, 43, 46, 49, 53, 56, 59];
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1023 = { _0: 0, _1: "" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1024 = { _0: 1, _1: "5" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1025 = { _0: 1, _1: "25" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1026 = { _0: 1, _1: "125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1027 = { _0: 2, _1: "625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1028 = { _0: 2, _1: "3125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1029 = { _0: 2, _1: "15625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1030 = { _0: 3, _1: "78125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1031 = { _0: 3, _1: "390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1032 = { _0: 3, _1: "1953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1033 = { _0: 4, _1: "9765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1034 = { _0: 4, _1: "48828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1035 = { _0: 4, _1: "244140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1036 = { _0: 4, _1: "1220703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1037 = { _0: 5, _1: "6103515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1038 = { _0: 5, _1: "30517578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1039 = { _0: 5, _1: "152587890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1040 = { _0: 6, _1: "762939453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1041 = { _0: 6, _1: "3814697265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1042 = { _0: 6, _1: "19073486328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1043 = { _0: 7, _1: "95367431640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1044 = { _0: 7, _1: "476837158203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1045 = { _0: 7, _1: "2384185791015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1046 = { _0: 7, _1: "11920928955078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1047 = { _0: 8, _1: "59604644775390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1048 = { _0: 8, _1: "298023223876953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1049 = { _0: 8, _1: "1490116119384765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1050 = { _0: 9, _1: "7450580596923828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1051 = { _0: 9, _1: "37252902984619140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1052 = { _0: 9, _1: "186264514923095703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1053 = { _0: 10, _1: "931322574615478515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1054 = { _0: 10, _1: "4656612873077392578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1055 = { _0: 10, _1: "23283064365386962890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1056 = { _0: 10, _1: "116415321826934814453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1057 = { _0: 11, _1: "582076609134674072265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1058 = { _0: 11, _1: "2910383045673370361328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1059 = { _0: 11, _1: "14551915228366851806640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1060 = { _0: 12, _1: "72759576141834259033203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1061 = { _0: 12, _1: "363797880709171295166015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1062 = { _0: 12, _1: "1818989403545856475830078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1063 = { _0: 13, _1: "9094947017729282379150390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1064 = { _0: 13, _1: "45474735088646411895751953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1065 = { _0: 13, _1: "227373675443232059478759765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1066 = { _0: 13, _1: "1136868377216160297393798828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1067 = { _0: 14, _1: "5684341886080801486968994140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1068 = { _0: 14, _1: "28421709430404007434844970703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1069 = { _0: 14, _1: "142108547152020037174224853515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1070 = { _0: 15, _1: "710542735760100185871124267578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1071 = { _0: 15, _1: "3552713678800500929355621337890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1072 = { _0: 15, _1: "17763568394002504646778106689453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1073 = { _0: 16, _1: "88817841970012523233890533447265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1074 = { _0: 16, _1: "444089209850062616169452667236328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1075 = { _0: 16, _1: "2220446049250313080847263336181640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1076 = { _0: 16, _1: "11102230246251565404236316680908203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1077 = { _0: 17, _1: "55511151231257827021181583404541015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1078 = { _0: 17, _1: "277555756156289135105907917022705078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1079 = { _0: 17, _1: "1387778780781445675529539585113525390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1080 = { _0: 18, _1: "6938893903907228377647697925567626953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1081 = { _0: 18, _1: "34694469519536141888238489627838134765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1082 = { _0: 18, _1: "173472347597680709441192448139190673828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1083 = { _0: 19, _1: "867361737988403547205962240695953369140625" };
const _M0FPC28internal7strconv19left__shift__cheats = [_M0FPC28internal7strconv19left__shift__cheatsN5tupleS1023, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1024, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1025, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1026, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1027, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1028, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1029, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1030, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1031, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1032, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1033, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1034, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1035, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1036, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1037, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1038, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1039, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1040, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1041, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1042, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1043, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1044, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1045, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1046, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1047, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1048, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1049, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1050, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1051, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1052, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1053, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1054, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1055, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1056, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1057, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1058, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1059, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1060, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1061, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1062, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1063, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1064, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1065, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1066, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1067, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1068, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1069, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1070, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1071, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1072, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1073, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1074, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1075, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1076, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1077, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1078, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1079, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1080, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1081, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1082, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1083];
const _M0FPC28internal7strconv10int__pow10 = [1n, 10n, 100n, 1000n, 10000n, 100000n, 1000000n, 10000000n, 100000000n, 1000000000n, 10000000000n, 100000000000n, 1000000000000n, 10000000000000n, 100000000000000n, 1000000000000000n];
const _M0FPC28internal7strconv5table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+012, 1e+013, 1e+014, 1e+015, 1e+016, 1e+017, 1e+018, 1e+019, 1e+020, 1e+021, 1e+022, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const _M0FPC28internal7strconv12checked__mulN6constrS1164 = 0n;
const _M0FPC14json17int__pow10__table = [1n, 10n, 100n, 1000n, 10000n, 100000n, 1000000n, 10000000n, 100000000n, 1000000000n, 10000000000n, 100000000000n, 1000000000000n, 10000000000000n, 100000000000000n, 1000000000000000n];
const _M0FPC14json12pow10__table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+012, 1e+013, 1e+014, 1e+015, 1e+016, 1e+017, 1e+018, 1e+019, 1e+020, 1e+021, 1e+022, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const _M0FPC14json12checked__mulN6constrS1891 = 0n;
const _M0FPC28internal7strconv17check__underscoreN25_2atransition__table__222S230 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 0, 1, 2, 5];
const _M0FPC28internal7strconv15parse__inf__nanN25_2atransition__table__304S312 = [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 3, 4, 14, 14, 14, 14, 14, 14, 14, 7, 14, 14, 14, 14, 5, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 6, 14, 14, 14, 0, 14, 14, 14, 14, 14, 14, 14, 14, 14, 8, 14, 14, 14, 14, 14, 1, 14, 14, 9, 14, 14, 14, 14, 14, 14, 14, 14, 10, 14, 14, 14, 14, 14, 14, 11, 14, 14, 14, 14, 14, 14, 14, 14, 14, 12, 14, 14, 14, 14, 14, 14, 14, 14, 13, 14, 1, 14, 14, 14, 14, 14, 14, 14];
const _M0MPC16string10StringView4findN6constrS9865 = 0;
const _M0FPC15debug6renderN6constrS1705 = 16;
const _M0FPB4seed = _M0FPB12random__seed();
function _M0FPC15abort5abortGsE(msg) {
  return $panic();
}
function _M0FPC15abort5abortGuE(msg) {
  $panic();
}
function _M0FPC15abort5abortGOiE(msg) {
  return $panic();
}
function _M0MPC14json4Json5array(array) {
  return new _M0DTPB4Json5Array(array);
}
function _M0IPC16string6StringPB6ToJson8to__json(self) {
  return new _M0DTPB4Json6String(self);
}
function _M0FPB4rotl(x, r) {
  return x << r | (x >>> (32 - r | 0) | 0);
}
function _M0FPB13consume4__acc(acc, input) {
  return Math.imul(_M0FPB4rotl((acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0, 17), 668265263) | 0;
}
function _M0MPC15array10FixedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, len) {
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
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGyEE(dst, dst_offset, src, src_offset, len) {
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
function _M0MPB18UninitializedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGyEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGsEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB18UninitializedArray23unsafe__make__and__blitGyE(src, allocate_len, src_offset, dst_offset, blit_len) {
  const dst = new Uint8Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, blit_len);
  return dst;
}
function _M0MPB13StringBuilder13write__objectGdE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGdE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
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
function _M0MPC15array13ReadOnlyArray11unsafe__getGiE(self, index) {
  return self[index];
}
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0)) ? new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0) : _M0FPC15abort5abortGsE("Invalid index for View");
}
function _M0MPC16uint646UInt648to__byte(self) {
  return (Number(BigInt.asIntN(32, self)) | 0) & 255;
}
function _M0IPC16uint166UInt16PB2Eq5equal(self, that) {
  return self === that;
}
function _M0IPC16uint166UInt16PB2Eq10not__equal(self, that) {
  return self !== that;
}
function _M0MPC14json4Json6number(number, repr) {
  return new _M0DTPB4Json6Number(number, repr);
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
function _M0IP016_24default__implPB2Eq10not__equalGRP212zhou_2dwei976promql9QueryTypeE(x, y) {
  return !_M0IP212zhou_2dwei976promql9QueryTypePB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGOiE(x, y) {
  return !_M0IPC16option6OptionPB2Eq5equalGiE(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGOzE(x, y) {
  return !_M0IPC16option6OptionPB2Eq5equalGzE(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGbE(x, y) {
  return !(x === y);
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
function _M0MPC16string10StringView4data(self) {
  return self.str;
}
function _M0MPC16string10StringView13start__offset(self) {
  return self.start;
}
function _M0IP016_24default__implPB4Show6outputGdE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16double6DoublePB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGiE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC13int3IntPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16string6StringPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(self) {
  const logger = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPC15debug4ReprPB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MPB13StringBuilder10to__string(logger);
}
function _M0MPB4Iter4nextGUsRPB4JsonEE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9856GUsRPB4JsonEE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9855GUsRPB4JsonEE;
    }
  }
  return result;
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
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPC15int645Int6418to__string_2einner(self, radix) {
  return _M0FPB21int64__to__string__js(self, radix);
}
function _M0MPB4Iter3newGUsRPB4JsonEE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9863GUsRPB4JsonEE;
  }
  return new _M0TPB4IterGUsRPB4JsonEE(f, size_hint$2);
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
function _M0MPC15array10FixedArray5makeiGkE(length, value) {
  if (length <= 0) {
    return [];
  } else {
    const array = $make_array_len_and_init(length, value(0));
    let _tmp = 1;
    while (true) {
      const i = _tmp;
      if (i < length) {
        if (i >>> 0 < array.length) {
          array[i] = value(i);
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return array;
  }
}
function _M0MPC16string10StringView11code__units(self) {
  const _bind = _M0MPC15array10FixedArray5makeiGkE(self.str.length, (i) => self.str.charCodeAt(i));
  const _bind$2 = self.start;
  const _bind$3 = self.end;
  const _bind$4 = _bind.length;
  if (_bind$2 < 0 || (_bind$2 > _bind$3 || _bind$3 > _bind$4)) {
    $panic();
  }
  return new _M0TPB9ArrayViewGkE(_bind, _bind$2, _bind$3);
}
function _M0MPC14uint4UInt8to__byte(self) {
  return self & 255;
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
function _M0MPC16string6String12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length) ? new _M0TPC16string10StringView(self, start_offset, end_offset$2) : _M0FPC15abort5abortGsE("Invalid index for View");
}
function _M0MPC16string6String24char__length__ge_2einner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index + 1 | 0) < end_offset$2) {
        const c2 = self.charCodeAt(index + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          _M0FPC15abort5abortGuE("invalid surrogate pair");
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count >= len;
    }
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
function _M0FPB19kmp__failure__table(pattern) {
  const m = pattern.end - pattern.start | 0;
  const table = $make_array_len_and_init(m, 0);
  let k = 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < m) {
      const c = pattern.str.charCodeAt(pattern.start + i | 0);
      while (true) {
        if (k > 0 && _M0IPC16uint166UInt16PB2Eq10not__equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
          const _tmp$2 = k - 1 | 0;
          k = _tmp$2 >>> 0 < table.length ? table[_tmp$2] : $oob();
          continue;
        } else {
          break;
        }
      }
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
        k = k + 1 | 0;
      }
      if (i >>> 0 < table.length) {
        table[i] = k;
      } else {
        $oob();
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return table;
}
function _M0FPB24find__pattern__kmp__from(target, pattern, start) {
  const n = target.end - target.start | 0;
  const m = pattern.end - pattern.start | 0;
  const table = _M0FPB19kmp__failure__table(pattern);
  let k = 0;
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < n) {
      const c = target.str.charCodeAt(target.start + i | 0);
      while (true) {
        if (k > 0 && _M0IPC16uint166UInt16PB2Eq10not__equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
          const _tmp$2 = k - 1 | 0;
          k = _tmp$2 >>> 0 < table.length ? table[_tmp$2] : $oob();
          continue;
        } else {
          break;
        }
      }
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
        k = k + 1 | 0;
      }
      if (k === m) {
        return (i - m | 0) + 1 | 0;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < candidate_end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos), first) && _M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos + last_offset | 0), last)) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB42find__two__anchor__candidate__from__string(data, start, candidate_end, first, last_offset, last) {
  return _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last);
}
function _M0FPB21string__ranges__equal(left, left_start, right, right_start, length) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < length) {
      if (_M0IPC16uint166UInt16PB2Eq10not__equal(left.charCodeAt(left_start + i | 0), right.charCodeAt(right_start + i | 0))) {
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
function _M0FPB29two__anchor__should__fallback(failures, scanned) {
  if (failures > 64) {
    return true;
  } else {
    if (8 === 0) {
      $panic();
    }
    return failures > (4 + (scanned / 8 | 0) | 0);
  }
}
function _M0FPB22find__by__two__anchors(target, pattern) {
  const target_len = target.end - target.start | 0;
  const pattern_len = pattern.end - pattern.start | 0;
  const target_start = _M0MPC16string10StringView13start__offset(target);
  const pattern_start = _M0MPC16string10StringView13start__offset(pattern);
  const last_offset = pattern_len - 1 | 0;
  const candidate_end = ((target_start + target_len | 0) - pattern_len | 0) + 1 | 0;
  const first = pattern.str.charCodeAt(pattern.start);
  const last = pattern.str.charCodeAt(pattern.start + last_offset | 0);
  const middle_len = last_offset - 1 | 0;
  let _tmp = target_start;
  let _tmp$2 = 0;
  while (true) {
    const pos = _tmp;
    const failures = _tmp$2;
    if (pos < candidate_end) {
      const found = _M0FPB42find__two__anchor__candidate__from__string(_M0MPC16string10StringView4data(target), pos, candidate_end, first, last_offset, last);
      if (found < 0) {
        return undefined;
      }
      if (_M0FPB21string__ranges__equal(_M0MPC16string10StringView4data(target), found + 1 | 0, _M0MPC16string10StringView4data(pattern), pattern_start + 1 | 0, middle_len)) {
        return found - target_start | 0;
      }
      const failures$2 = failures + 1 | 0;
      const scanned = found - target_start | 0;
      if (_M0FPB29two__anchor__should__fallback(failures$2, scanned)) {
        return _M0FPB24find__pattern__kmp__from(target, pattern, scanned + 1 | 0);
      }
      _tmp = found + 1 | 0;
      _tmp$2 = failures$2;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0FPB24find__code__unit__scalar(data, start, end, code) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos), code)) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB30find__code__unit__from__string(data, start, end, code) {
  return _M0FPB24find__code__unit__scalar(data, start, end, code);
}
function _M0FPB28find__code__unit__from__view(target, start, end, code) {
  const target_start = _M0MPC16string10StringView13start__offset(target);
  const found = _M0FPB30find__code__unit__from__string(_M0MPC16string10StringView4data(target), target_start + start | 0, target_start + end | 0, code);
  return found < 0 ? -1 : found - target_start | 0;
}
function _M0MPC16string10StringView4find(self, str) {
  const pattern_len = str.end - str.start | 0;
  switch (pattern_len) {
    case 0: {
      return _M0MPC16string10StringView4findN6constrS9865;
    }
    case 1: {
      const found = _M0FPB28find__code__unit__from__view(self, 0, self.end - self.start | 0, str.str.charCodeAt(str.start));
      return found < 0 ? undefined : found;
    }
    default: {
      return pattern_len > (self.end - self.start | 0) ? undefined : _M0FPB22find__by__two__anchors(self, str);
    }
  }
}
function _M0MPC16string6String4find(self, str) {
  return _M0MPC16string10StringView4find(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0IPC16string6StringPB4Show10to__string(self) {
  return self;
}
function _M0MPC16string6String6repeat(self, n) {
  if (n < 0) {
    return _M0FPC15abort5abortGsE("negative repeat count");
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
          return _M0FPC15abort5abortGsE("repeat result too large");
        }
      }
    }
  }
}
function _M0MPC14char4Char10utf16__len(self) {
  const code = self;
  return code <= 65535 ? 1 : 2;
}
function _M0MPC16string10StringView8find__by(self, pred) {
  const _bind = self.str;
  const _bind$2 = self.start;
  const _bind$3 = self.end;
  let _tmp = _bind$2;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp;
    const offset = _tmp$2;
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
      if (pred(_decoded_char)) {
        return offset;
      }
      _tmp = _decoded_next_string_index;
      _tmp$2 = offset + _M0MPC14char4Char10utf16__len(_decoded_char) | 0;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0MPC16string6String8find__by(self, pred) {
  return _M0MPC16string10StringView8find__by(new _M0TPC16string10StringView(self, 0, self.length), pred);
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
function _M0MPC16string10StringView11has__prefix(self, str) {
  const str_len = str.end - str.start | 0;
  return str_len <= (self.end - self.start | 0) ? (str_len === 0 || _M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start), str.str.charCodeAt(str.start)) ? _M0MPC16string6String20unsafe__range__equal(self.str, self.start, str.str, str.start, str_len) : false) : false;
}
function _M0MPC16string6String11has__prefix(self, str) {
  return _M0MPC16string10StringView11has__prefix(new _M0TPC16string10StringView(self, 0, self.length), str);
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
function _M0MPC15array5Array4pushGRPC14json10WriteFrameE(self, value) {
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
function _M0MPC16string10StringView9is__empty(self) {
  return (self.end - self.start | 0) === 0;
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
    const _bind = _M0MPB4Iter4nextGUsRPB4JsonEE(self);
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
function _M0MPC16string6String12replace__all(self, old, new_) {
  const len = self.length;
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(len);
  const old_len = old.end - old.start | 0;
  const new$2 = _M0MPC16string10StringView9to__owned(new_);
  if (old_len === 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
    const _bind = self.length;
    let _tmp = 0;
    while (true) {
      const _string_index = _tmp;
      if (_string_index < _bind) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$2 = self.charCodeAt(_string_index);
          if (_bind$2 >= 55296 && _bind$2 <= 56319 && (_string_index + 1 | 0) < _bind) {
            const _bind$3 = self.charCodeAt(_string_index + 1 | 0);
            if (_bind$3 >= 56320 && _bind$3 <= 57343) {
              _decoded_next_string_index = _string_index + 2 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$2 - 55296 | 0, 1024) | 0) + _bind$3 | 0) - 56320 | 0) + 65536 | 0);
              break _L;
            } else {
              _decoded_next_string_index = _string_index + 1 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$2);
              break _L;
            }
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$2);
            break _L;
          }
        }
        _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
        _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
        _tmp = _decoded_next_string_index;
        continue;
      } else {
        break;
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  } else {
    const first_end = _M0MPC16string6String4find(self, old);
    if (first_end === undefined) {
      return self;
    } else {
      const _Some = first_end;
      const _end = _Some;
      let _tmp = new _M0TPC16string10StringView(self, 0, self.length);
      let _tmp$2 = _end;
      while (true) {
        const view = _tmp;
        const end = _tmp$2;
        const seg = _M0MPC16string10StringView12view_2einner(view, 0, end);
        _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, _M0MPC16string10StringView4data(seg), _M0MPC16string10StringView13start__offset(seg), seg.end - seg.start | 0);
        _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
        if ((end + old_len | 0) <= len) {
          const next_view = _M0MPC16string10StringView12view_2einner(view, end + old_len | 0, undefined);
          const _bind = _M0MPC16string10StringView4find(next_view, old);
          if (_bind === undefined) {
            _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, _M0MPC16string10StringView4data(next_view), _M0MPC16string10StringView13start__offset(next_view), next_view.end - next_view.start | 0);
            break;
          } else {
            const _Some$2 = _bind;
            const _next_end = _Some$2;
            _tmp = next_view;
            _tmp$2 = _next_end;
            continue;
          }
        } else {
          break;
        }
      }
      return _M0MPB13StringBuilder10to__string(buf);
    }
  }
}
function _M0MPC14char4Char20is__ascii__uppercase(self) {
  return self >= 65 && self <= 90;
}
function _M0MPC16string6String9to__lower(self) {
  const _bind = _M0MPC16string6String8find__by(self, (c) => _M0MPC14char4Char20is__ascii__uppercase(c));
  if (_bind === undefined) {
    return self;
  } else {
    const _Some = _bind;
    const _idx = _Some;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(self.length);
    const head = _M0MPC16string6String12view_2einner(self, 0, _idx);
    _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, _M0MPC16string10StringView4data(head), _M0MPC16string10StringView13start__offset(head), head.end - head.start | 0);
    const _bind$2 = _M0MPC16string6String12view_2einner(self, _idx, undefined);
    const _bind$3 = _bind$2.str;
    const _bind$4 = _bind$2.start;
    const _bind$5 = _bind$2.end;
    let _tmp = _bind$4;
    while (true) {
      const _string_index = _tmp;
      if (_string_index < _bind$5) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$6 = _bind$3.charCodeAt(_string_index);
          if (_bind$6 >= 55296 && _bind$6 <= 56319 && (_string_index + 1 | 0) < _bind$5) {
            const _bind$7 = _bind$3.charCodeAt(_string_index + 1 | 0);
            if (_bind$7 >= 56320 && _bind$7 <= 57343) {
              _decoded_next_string_index = _string_index + 2 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$6 - 55296 | 0, 1024) | 0) + _bind$7 | 0) - 56320 | 0) + 65536 | 0);
              break _L;
            } else {
              _decoded_next_string_index = _string_index + 1 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$6);
              break _L;
            }
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$6);
            break _L;
          }
        }
        if (_M0MPC14char4Char20is__ascii__uppercase(_decoded_char)) {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char + 32 | 0);
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
        }
        _tmp = _decoded_next_string_index;
        continue;
      } else {
        break;
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC16string10StringView9get__char(self, idx) {
  if (idx >= 0 && idx < (self.end - self.start | 0)) {
    const c = self.str.charCodeAt(self.start + idx | 0);
    if (_M0MPC16uint166UInt1622is__leading__surrogate(c)) {
      if ((idx + 1 | 0) < (self.end - self.start | 0)) {
        const next = self.str.charCodeAt(self.start + (idx + 1 | 0) | 0);
        return _M0MPC16uint166UInt1623is__trailing__surrogate(next) ? _M0FPB32code__point__of__surrogate__pair(c, next) : -1;
      } else {
        return -1;
      }
    } else {
      return _M0MPC16uint166UInt1623is__trailing__surrogate(c) ? -1 : _M0MPC16uint166UInt1616unsafe__to__char(c);
    }
  } else {
    return -1;
  }
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
function _M0IPC13int3IntPB4Show10to__string(self) {
  return _M0MPC13int3Int18to__string_2einner(self, 10);
}
function _M0MPC15array9ArrayView4iterGRP212zhou_2dwei976promql9RegexInfoE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  }, len);
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
function _M0MPC15array5Array4iterGRP212zhou_2dwei976promql9RegexInfoE(self) {
  return _M0MPC15array9ArrayView4iterGRP212zhou_2dwei976promql9RegexInfoE(new _M0TPB9ArrayViewGRP212zhou_2dwei976promql9RegexInfoE(self, 0, self.length));
}
function _M0MPC15array5Array4iterGcE(self) {
  return _M0MPC15array9ArrayView4iterGcE(new _M0TPB9ArrayViewGcE(self, 0, self.length));
}
function _M0MPC15array13ReadOnlyArray2atGmE(self, index) {
  return index >>> 0 < self.length ? self[index] : $oob();
}
function _M0MPC15array13ReadOnlyArray2atGiE(self, index) {
  return index >>> 0 < self.length ? self[index] : $oob();
}
function _M0MPC15array13ReadOnlyArray2atGdE(self, index) {
  return index >>> 0 < self.length ? self[index] : $oob();
}
function _M0MPC15array13ReadOnlyArray6lengthGiE(self) {
  return self.length;
}
function _M0MPC13int3Int3min(self, other) {
  return self < other ? self : other;
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
function _M0IPC16option6OptionPB2Eq5equalGiE(self, other) {
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
function _M0IPC16option6OptionPB2Eq5equalGzE(self, other) {
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
      return $bytes_equal(_x, _y);
    }
  }
}
function _M0MPC16option6Option6unwrapGRP212zhou_2dwei976promql17FunctionSignatureE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MPC16option6Option6unwrapGiE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MPC16option6Option10unwrap__orGsE(self, default_) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option10unwrap__orGcE(self, default_) {
  if (self === -1) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option16unwrap__or__elseGzE(self, default_) {
  if (self === undefined) {
    return default_();
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option3mapGRPC16string10StringViewsE(self, f) {
  if (self === undefined) {
    return undefined;
  } else {
    const _Some = self;
    const _t = _Some;
    return f(_t);
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
function _M0FPB8new__mapGsRPB4JsonE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsRPB4JsonE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
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
function _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRP212zhou_2dwei976promql17FunctionSignatureE(_bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGsRPB4JsonE(self, entry, new_idx) {
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
function _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, entry) {
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
      _M0MPB3Map10set__entryGsRPB4JsonE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPB4JsonE(self, entry$2, idx$2);
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
function _M0MPB3Map20rehash__place__entryGsRPB4JsonE(self, outer) {
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
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGsRPB4JsonE(self) {
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
      _M0MPB3Map20rehash__place__entryGsRPB4JsonE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
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
          _M0MPB3Map4growGsRPB4JsonE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
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
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRPC15debug4ReprE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
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
          _M0MPB3Map4growGsRPB4JsonE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPC15debug4ReprE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGsRPB4JsonE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPC15debug4ReprE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPC15debug4ReprE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3MapGsRPB4JsonE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB4JsonE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
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
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
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
function _M0MPB3Map3getGsRPB4JsonE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map12contains__kvGsRPB4JsonE(self, key, value) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && (_entry.key === key && _M0IPC14json4JsonPB2Eq5equal(_entry.value, value))) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map9is__emptyGsRPB4JsonE(self) {
  return self.size === 0;
}
function _M0MPB3Map4iterGsRPB4JsonE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsRPB4JsonEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
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
  return _M0MPB3Map4iterGsRPB4JsonE(self);
}
function _M0IPB3MapPB2Eq5equalGsRPB4JsonE(self, that) {
  if (self.size === that.size) {
    const _it = _M0MPB3Map5iter2GsRPC15debug4ReprE(self);
    while (true) {
      const _bind = _M0MPB5Iter24nextGsRPC15debug4ReprE(_it);
      if (_bind === undefined) {
        return true;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _k = _x._0;
        const _v = _x._1;
        if (_M0MPB3Map12contains__kvGsRPB4JsonE(that, _k, _v)) {
        } else {
          return false;
        }
        continue;
      }
    }
  } else {
    return false;
  }
}
function _M0IPC14byte4BytePB2Eq5equal(self, that) {
  return self === that;
}
function _M0IPC14json4JsonPB2Eq5equal(a, b) {
  switch (a.$tag) {
    case 0: {
      if (b.$tag === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (b.$tag === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (b.$tag === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      const _Number = a;
      const _a_num = _Number._0;
      if (b.$tag === 3) {
        const _Number$2 = b;
        const _b_num = _Number$2._0;
        return _a_num === _b_num;
      } else {
        return false;
      }
    }
    case 4: {
      const _String = a;
      const _a_str = _String._0;
      if (b.$tag === 4) {
        const _String$2 = b;
        const _b_str = _String$2._0;
        return _a_str === _b_str;
      } else {
        return false;
      }
    }
    case 5: {
      const _Array = a;
      const _a_arr = _Array._0;
      if (b.$tag === 5) {
        const _Array$2 = b;
        const _b_arr = _Array$2._0;
        return _M0IPC15array5ArrayPB2Eq5equalGRPB4JsonE(_a_arr, _b_arr);
      } else {
        return false;
      }
    }
    default: {
      const _Object = a;
      const _a_obj = _Object._0;
      if (b.$tag === 6) {
        const _Object$2 = b;
        const _b_obj = _Object$2._0;
        return _M0IPB3MapPB2Eq5equalGsRPB4JsonE(_a_obj, _b_obj);
      } else {
        return false;
      }
    }
  }
}
function _M0MPC14json4Json4null() {
  return _M0DTPB4Json4Null__;
}
function _M0MPC14json4Json6string(string) {
  return new _M0DTPB4Json6String(string);
}
function _M0MPC14json4Json7boolean(boolean) {
  return boolean ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__;
}
function _M0MPC14json4Json6object(object) {
  return new _M0DTPB4Json6Object(object);
}
function _M0IPC14bool4BoolPB6ToJson8to__json(self) {
  return self ? _M0MPC14json4Json7boolean(true) : _M0MPC14json4Json7boolean(false);
}
function _M0IPC13int3IntPB6ToJson8to__json(self) {
  return _M0MPC14json4Json6number(self + 0, undefined);
}
function _M0MPC15array5Array3mapGRP212zhou_2dwei976promql17FunctionSignatureRPB4JsonE(self, f) {
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
function _M0MPC15array5Array3mapGsRP212zhou_2dwei976promql17FunctionSignatureE(self, f) {
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
function _M0MPC15array5Array3mapGUsssEUzszEE(self, f) {
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
function _M0MPC15array5Array3mapGRP212zhou_2dwei976promql4ExprRPB4JsonEHRP212zhou_2dwei976promql10ParseError(self, f) {
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
  return new _M0DTPC16result6ResultGRPB5ArrayGRPB4JsonERP212zhou_2dwei976promql10ParseErrorE2Ok(arr);
}
function _M0MPC15array5Array3mapGUzszERPB4JsonE(self, f) {
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
function _M0MPC15array5Array3mapGsRPB4JsonE(self, f) {
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
function _M0MPC15array5Array3mapGRPB4JsonRPB4JsonE(self, f) {
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
function _M0MPC15array5Array3mapGRP212zhou_2dwei976promql4ExprRPC15debug4ReprE(self, f) {
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
function _M0MPC15array5Array3mapGUzszERPC15debug4ReprE(self, f) {
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
function _M0MPC15array5Array3mapGyRPC15debug4ReprE(self, f) {
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
function _M0MPC15array5Array3mapGRP212zhou_2dwei976promql9QueryTypeRPB4JsonE(self, f) {
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
function _M0MPC15array5Array3mapGUzszEUsssEEHRP212zhou_2dwei976promql10ParseError(self, f) {
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
  return new _M0DTPC16result6ResultGRPB5ArrayGUsssEERP212zhou_2dwei976promql10ParseErrorE2Ok(arr);
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
function _M0MPC15array5Array3mapGRP212zhou_2dwei976promql12DurationExprRPC15debug4ReprE(self, f) {
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
function _M0IPC15array5ArrayPB6ToJson8to__jsonGRP212zhou_2dwei976promql17FunctionSignatureE(self) {
  return new _M0DTPB4Json5Array(_M0MPC15array5Array3mapGRP212zhou_2dwei976promql17FunctionSignatureRPB4JsonE(self, (x) => _M0IP212zhou_2dwei976promql17FunctionSignaturePB6ToJson8to__json(x)));
}
function _M0IPC15array5ArrayPB6ToJson8to__jsonGsE(self) {
  return new _M0DTPB4Json5Array(_M0MPC15array5Array3mapGsRPB4JsonE(self, (x) => _M0IPC16string6StringPB6ToJson8to__json(x)));
}
function _M0IPC15array5ArrayPB6ToJson8to__jsonGRPB4JsonE(self) {
  return new _M0DTPB4Json5Array(_M0MPC15array5Array3mapGRPB4JsonRPB4JsonE(self, (x) => _M0IPC14json4JsonPB6ToJson8to__json(x)));
}
function _M0IPC15array5ArrayPB6ToJson8to__jsonGRP212zhou_2dwei976promql9QueryTypeE(self) {
  return new _M0DTPB4Json5Array(_M0MPC15array5Array3mapGRP212zhou_2dwei976promql9QueryTypeRPB4JsonE(self, (x) => _M0IP212zhou_2dwei976promql9QueryTypePB6ToJson8to__json(x)));
}
function _M0MPB4Iter10size__hintGsE(self) {
  return self.size_hint;
}
function _M0MPB4Iter3anyGcE(self, f) {
  while (true) {
    const _bind = _M0MPB4Iter4nextGcE(self);
    if (_bind === -1) {
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
function _M0MPB4Iter3anyGsE(self, f) {
  while (true) {
    const _bind = _M0MPB4Iter4nextGUsRPB4JsonEE(self);
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
function _M0MPB4Iter3allGRP212zhou_2dwei976promql9RegexInfoE(self, f) {
  while (true) {
    const _bind = _M0MPB4Iter4nextGUsRPB4JsonEE(self);
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
function _M0MPB4Iter4iterGsE(self) {
  return self;
}
function _M0MPB5Iter24nextGsRPC15debug4ReprE(self) {
  return _M0MPB4Iter4nextGUsRPB4JsonEE(self);
}
function _M0MPC14byte4Byte9to__int64(self) {
  return BigInt.asUintN(64, BigInt(self));
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
function _M0MPB18UninitializedArray19unsafe__blit__fixedGyE(dst, dst_offset, src, src_offset, len) {
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
function _M0MPC15array10FixedArray23unsafe__make__and__blitGyE(src, allocate_len, init, src_offset, dst_offset, blit_len) {
  const dst = $makebytes(allocate_len, init);
  _M0MPC15array10FixedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, blit_len);
  return dst;
}
function _M0MPC15array10FixedArray23make__and__blit_2einnerGyE(src, allocate_len, init, len, src_offset, dst_offset) {
  if (allocate_len >= 0 && (len >= 0 && (src_offset >= 0 && (dst_offset >= 0 && ((src_offset + len | 0) <= src.length && (dst_offset + len | 0) <= allocate_len))))) {
    return _M0MPC15array10FixedArray23unsafe__make__and__blitGyE(src, allocate_len, init, src_offset, dst_offset, len);
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(89);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "bounds check failed: allocate_len = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, allocate_len);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", src_offset = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, src_offset);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", dst_offset = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, dst_offset);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", len = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, len);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", src.length = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, src.length);
    return _M0FPC15abort5abortGsE(_M0MPB13StringBuilder10to__string(_string_builder));
  }
}
function _M0MPC16double6Double5floor(_tmp) {
  return Math.floor(_tmp);
}
function _M0MPC16double6Double7is__nan(self) {
  return self !== self;
}
function _M0MPC16double6Double7is__inf(self) {
  return self > _M0FPB18double__max__value || self < _M0FPB18double__min__value;
}
function _M0IPC16double6DoublePB4Show10to__string(self) {
  return String(self);
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
function _M0MPC15bytes9BytesView4data(self) {
  return self.buf;
}
function _M0MPC15bytes9BytesView13start__offset(self) {
  return self.start;
}
function _M0MPC15bytes5Bytes11from__array(arr) {
  const len = arr.end - arr.start | 0;
  if (len === 0) {
    return $bytes_literal$0;
  }
  const result = _M0MPB18UninitializedArray23unsafe__make__and__blitGyE(arr.buf, len, arr.start, 0, len);
  return result;
}
function _M0MPC15array5Array44unsafe__make__and__blit__from__fixed_2einnerGyE(src, allocate_len, len, src_offset, dst_offset) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray19unsafe__blit__fixedGyE(dst, dst_offset, src, src_offset, len);
  return dst;
}
function _M0MPC15bytes5Bytes9to__array(self) {
  const len = self.length;
  return _M0MPC15array5Array44unsafe__make__and__blit__from__fixed_2einnerGyE(self, len, len, 0, 0);
}
function _M0MPC15bytes9BytesView9to__array(self) {
  const len = self.end - self.start | 0;
  return _M0MPC15array5Array44unsafe__make__and__blit__from__fixed_2einnerGyE(_M0MPC15bytes9BytesView4data(self), len, len, _M0MPC15bytes9BytesView13start__offset(self), 0);
}
function _M0MPC15bytes5Bytes9is__empty(self) {
  return self.length === 0;
}
function _M0MPC15array5Array28unsafe__truncate__to__lengthGRP212zhou_2dwei976promql9RegexInfoE(self, new_len) {
  _M0MPB7JSArray11set__length(self, new_len);
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
function _M0MPC15array5Array9is__emptyGRPB4JsonE(self) {
  return self.length === 0;
}
function _M0MPC15array5Array9is__emptyGcE(self) {
  return self.length === 0;
}
function _M0MPC15array5Array11unsafe__popGRPC14json10WriteFrameE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array3popGRPC14json10WriteFrameE(self) {
  if (_M0MPC15array5Array9is__emptyGRPB4JsonE(self)) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGRPC14json10WriteFrameE(self);
    return v;
  }
}
function _M0MPC15array5Array2atGRPB4JsonE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGcE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGRP212zhou_2dwei976promql9QueryTypeE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array3setGRP212zhou_2dwei976promql9RegexInfoE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0IPC15array5ArrayPB2Eq5equalGRPB4JsonE(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < self_len) {
        if (_M0IPC14json4JsonPB2Eq5equal(self[i], other[i])) {
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
function _M0MPC15array5Array5clearGRP212zhou_2dwei976promql9RegexInfoE(self) {
  _M0MPC15array5Array28unsafe__truncate__to__lengthGRP212zhou_2dwei976promql9RegexInfoE(self, 0);
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
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array8containsGcE(self, value) {
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
function _M0MPC15array5Array8containsGiE(self, value) {
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
    const _bind$2 = _M0MPB4Iter4nextGUsRPB4JsonEE(iter);
    if (_bind$2 === undefined) {
      return;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(self, _x);
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
function _M0FPC16double5floor(d) {
  return _M0MPC16double6Double5floor(d);
}
function _M0IPC15float5FloatPB4Show10to__string(self) {
  return String(self);
}
function _M0MPC15debug4Repr4ReprGRP212zhou_2dwei976promql10ParseErrorE(value) {
  return _M0IP212zhou_2dwei976promql10ParseErrorPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGRP212zhou_2dwei976promql9QueryTypeE(value) {
  return _M0IP212zhou_2dwei976promql9QueryTypePC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGRP212zhou_2dwei976promql4ExprE(value) {
  return _M0IP212zhou_2dwei976promql4ExprPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGRPC15error5ErrorE(value) {
  return _M0IPC15error5ErrorPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGRP212zhou_2dwei976promql12DurationExprE(value) {
  return _M0IP212zhou_2dwei976promql12DurationExprPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGsE(value) {
  return _M0IPC16string6StringPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGUzszEE(value) {
  return _M0IPC15tuple6Tuple3PC15debug5Debug8to__reprGzszE(value);
}
function _M0MPC15debug4Repr4ReprGUsssEE(value) {
  return _M0IPC15tuple6Tuple3PC15debug5Debug8to__reprGsssE(value);
}
function _M0MPC15debug4Repr4ReprGyE(value) {
  return _M0IPC14byte4BytePC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGzE(value) {
  return _M0IPC15bytes5BytesPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr5tuple(children) {
  return new _M0DTPC15debug4Repr5Tuple(children);
}
function _M0IPC15tuple6Tuple3PC15debug5Debug8to__reprGzszE(self) {
  const _a = self._0;
  const _b = self._1;
  const _c = self._2;
  return _M0MPC15debug4Repr5tuple([_M0MPC15debug4Repr4ReprGzE(_a), _M0MPC15debug4Repr4ReprGsE(_b), _M0MPC15debug4Repr4ReprGzE(_c)]);
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
function _M0MPC15debug4Repr7integer(x) {
  return new _M0DTPC15debug4Repr7Integer(x);
}
function _M0MPC15debug4Repr4bool(x) {
  return new _M0DTPC15debug4Repr7BoolLit(x);
}
function _M0MPC15debug4Repr4char(x) {
  return new _M0DTPC15debug4Repr7CharLit(x);
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
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_acc, new _M0DTPC15debug4Repr11RecordField(_name, _value));
      continue;
    }
  }
  return new _M0DTPC15debug4Repr6Record(_tmp);
}
function _M0MPC15debug4Repr8opaque__(name, children) {
  return new _M0DTPC15debug4Repr6Opaque(name, children);
}
function _M0MPC15debug4Repr7literal(value) {
  return new _M0DTPC15debug4Repr7Literal(value);
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
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, `${start}${_first}`);
      _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGRP212zhou_2dwei976promql9RegexInfoE(_x));
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, `${_last}${finish}`);
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
              _M0MPC15array5Array4pushGRPC14json10WriteFrameE(parts, t);
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
          const s1 = _M0MPC16option6Option10unwrap__orGsE(_M0MPC16string10StringView13strip__prefix(joined, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1139, 0, _M0FPC15debug14compact__linesN7_2abindS1139.length)), joined);
          const inner = _M0MPC16option6Option10unwrap__orGsE(_M0MPC16string10StringView13strip__suffix(s1, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1138, 0, _M0FPC15debug14compact__linesN7_2abindS1138.length)), s1);
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
                _M0MPC15array5Array4pushGRPC14json10WriteFrameE(parts, t);
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
              _M0MPC15array5Array4pushGRPC14json10WriteFrameE(parts, _M0MPC16string6String4trim(m, undefined));
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPC15array5Array4pushGRPC14json10WriteFrameE(parts, _M0MPC16string6String4trim(_last, undefined));
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
        if (!_M0MPC15array5Array9is__emptyGRPB4JsonE(lines)) {
          const last_i = lines.length - 1 | 0;
          _M0MPC15array5Array3setGRP212zhou_2dwei976promql9RegexInfoE(lines, last_i, `${_M0MPC15array5Array2atGRPB4JsonE(lines, last_i)},`);
        }
        const _self = [];
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, open);
        _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGRP212zhou_2dwei976promql9RegexInfoE(lines));
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, close);
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
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, open);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGRP212zhou_2dwei976promql9RegexInfoE(_M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines));
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, close);
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
              _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_x},`);
            } else {
              const _first = item_lines[0];
              const _last = item_lines[item_lines.length - 1 | 0];
              const _x_end = item_lines.length - 1 | 0;
              _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_first}`);
              const _bind$2 = _x_end - 1 | 0;
              let _tmp$2 = 0;
              while (true) {
                const _$2 = _tmp$2;
                if (_$2 < _bind$2) {
                  const mid = item_lines[1 + _$2 | 0];
                  _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${mid}`);
                  _tmp$2 = _$2 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_last},`);
            }
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, close);
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
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGRP212zhou_2dwei976promql9RegexInfoE(_M0FPC15debug15surround__lines(begin, ",", _first)));
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGRP212zhou_2dwei976promql9RegexInfoE(middle_lines));
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGRP212zhou_2dwei976promql9RegexInfoE(_M0FPC15debug15surround__lines(space, end, _last)));
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
                _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, begin);
                _M0MPC15array5Array10push__iterGsE(_self, _M0MPB4Iter4iterGsE(_M0MPB4Iter3mapGssE(_M0MPC15array9ArrayView4iterGRP212zhou_2dwei976promql9RegexInfoE(_x), (line) => `${_M0MPC16string6String6repeat(" ", 2)}${line}`)));
                _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, `${_M0MPC16string6String6repeat(" ", 2)}${_last_line},`);
                _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, end);
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
                    _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_x},`);
                  } else {
                    const _first = item_lines[0];
                    const _last = item_lines[item_lines.length - 1 | 0];
                    const _x_end = item_lines.length - 1 | 0;
                    _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_first}`);
                    const _bind$2 = _x_end - 1 | 0;
                    let _tmp$2 = 0;
                    while (true) {
                      const _$2 = _tmp$2;
                      if (_$2 < _bind$2) {
                        const mid = item_lines[1 + _$2 | 0];
                        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_M0MPC16string6String6repeat(" ", 2)}${mid}`);
                        _tmp$2 = _$2 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_last},`);
                  }
                }
                _tmp = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, end);
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
    return _M0MPC15array5Array9is__emptyGRPB4JsonE(children) ? node : !_M0MPC15debug4Repr17info__adds__depth(node) ? _M0MPC15debug4Repr14with__children(node, _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(children, (child) => _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, d, child))) : replacement;
  } else {
    if (_M0MPC15array5Array9is__emptyGRPB4JsonE(children)) {
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
      if (_M0MPC15array5Array9is__emptyGRPB4JsonE(children)) {
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
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, head);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGRP212zhou_2dwei976promql9RegexInfoE(_x$6));
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
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, `${_name$3}=${_first}`);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGRP212zhou_2dwei976promql9RegexInfoE(_x$6));
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
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(_self, `${label}: ${_first}`);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGRP212zhou_2dwei976promql9RegexInfoE(_x$6));
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
function _M0IPC13int3IntPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr7integer(_M0MPC13int3Int18to__string_2einner(self, 10));
}
function _M0IPC14bool4BoolPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr4bool(self);
}
function _M0IPC14byte4BytePC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr7literal(`0x${_M0MPC14byte4Byte7to__hex(self)}`);
}
function _M0IPC14char4CharPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr4char(self);
}
function _M0IPC16string6StringPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr6string(self);
}
function _M0IPC15bytes5BytesPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr8opaque__("Bytes", _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGyRPC15debug4ReprE(_M0MPC15bytes5Bytes9to__array(self), (x) => _M0MPC15debug4Repr4ReprGyE(x))));
}
function _M0IPC15bytes9BytesViewPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr8opaque__("BytesView", _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGyRPC15debug4ReprE(_M0MPC15bytes9BytesView9to__array(self), (x) => _M0MPC15debug4Repr4ReprGyE(x))));
}
function _M0IPC15array5ArrayPC15debug5Debug8to__reprGsE(self) {
  return _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGsRPC15debug4ReprE(self, (x) => _M0MPC15debug4Repr4ReprGsE(x)));
}
function _M0IPC15array5ArrayPC15debug5Debug8to__reprGRP212zhou_2dwei976promql4ExprE(self) {
  return _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGRP212zhou_2dwei976promql4ExprRPC15debug4ReprE(self, (x) => _M0MPC15debug4Repr4ReprGRP212zhou_2dwei976promql4ExprE(x)));
}
function _M0IPC15array5ArrayPC15debug5Debug8to__reprGUzszEE(self) {
  return _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGUzszERPC15debug4ReprE(self, (x) => _M0MPC15debug4Repr4ReprGUzszEE(x)));
}
function _M0IPC15array5ArrayPC15debug5Debug8to__reprGUsssEE(self) {
  return _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGUsssERPC15debug4ReprE(self, (x) => _M0MPC15debug4Repr4ReprGUsssEE(x)));
}
function _M0IPC15array5ArrayPC15debug5Debug8to__reprGRP212zhou_2dwei976promql12DurationExprE(self) {
  return _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGRP212zhou_2dwei976promql12DurationExprRPC15debug4ReprE(self, (x) => _M0MPC15debug4Repr4ReprGRP212zhou_2dwei976promql12DurationExprE(x)));
}
function _M0IPC16option6OptionPC15debug5Debug8to__reprGRP212zhou_2dwei976promql12DurationExprE(self) {
  if (self === undefined) {
    return _M0MPC15debug4Repr4ctor("None", []);
  } else {
    const _Some = self;
    const _x = _Some;
    return _M0MPC15debug4Repr4ctor("Some", [{ _0: undefined, _1: _M0MPC15debug4Repr4ReprGRP212zhou_2dwei976promql12DurationExprE(_x) }]);
  }
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
function _M0IPB7FailurePC15debug5Debug8to__reprGRPB7FailureE(self) {
  const _Failure = self;
  const _msg = _Failure._0;
  return _M0MPC15debug4Repr4ctor("Failure", [{ _0: undefined, _1: _M0MPC15debug4Repr6string(_msg) }]);
}
function _M0IPC28encoding4utf89MalformedPC15debug5Debug8to__reprGRPC28encoding4utf89MalformedE(_x_46) {
  const _Malformed = _x_46;
  const _$42$arg_47 = _Malformed._0;
  return _M0MPC15debug4Repr4ctor("Malformed", [{ _0: undefined, _1: _M0IPC15bytes9BytesViewPC15debug5Debug8to__repr(_$42$arg_47) }]);
}
function _M0FPC28encoding4utf814encode_2einner(str, bom) {
  return _M0FPC28encoding4utf816encode__utf8__js(_M0MPC16string10StringView4data(str), _M0MPC16string10StringView13start__offset(str), str.end - str.start | 0, bom);
}
function _M0FPC28encoding4utf821utf8__find__malformed(src, src_offset, src_length) {
  const _bind = src_offset + src_length | 0;
  const _bind$2 = src.length;
  if (src_offset < 0 || (src_offset > _bind || _bind > _bind$2)) {
    $panic();
  }
  const view = new _M0TPC15bytes9BytesView(src, src_offset, _bind);
  let _tmp = view;
  while (true) {
    const bytes = _tmp;
    let malformed;
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            let rest$4;
            _L$5: {
              if ((bytes.end - bytes.start | 0) === 0) {
                return -1;
              } else {
                if ((bytes.end - bytes.start | 0) >= 8) {
                  const _x = bytes.buf[bytes.start];
                  if (_x <= 127) {
                    const _x$2 = bytes.buf[bytes.start + 1 | 0];
                    if (_x$2 <= 127) {
                      const _x$3 = bytes.buf[bytes.start + 2 | 0];
                      if (_x$3 <= 127) {
                        const _x$4 = bytes.buf[bytes.start + 3 | 0];
                        if (_x$4 <= 127) {
                          const _x$5 = bytes.buf[bytes.start + 4 | 0];
                          if (_x$5 <= 127) {
                            const _x$6 = bytes.buf[bytes.start + 5 | 0];
                            if (_x$6 <= 127) {
                              const _x$7 = bytes.buf[bytes.start + 6 | 0];
                              if (_x$7 <= 127) {
                                const _x$8 = bytes.buf[bytes.start + 7 | 0];
                                if (_x$8 <= 127) {
                                  const _x$9 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 8 | 0, bytes.end);
                                  _tmp = _x$9;
                                  continue;
                                } else {
                                  const _x$9 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                                  rest$4 = _x$9;
                                  break _L$5;
                                }
                              } else {
                                const _x$8 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                                rest$4 = _x$8;
                                break _L$5;
                              }
                            } else {
                              const _x$7 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                              rest$4 = _x$7;
                              break _L$5;
                            }
                          } else {
                            const _x$6 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                            rest$4 = _x$6;
                            break _L$5;
                          }
                        } else {
                          const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                          rest$4 = _x$5;
                          break _L$5;
                        }
                      } else {
                        const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                        rest$4 = _x$4;
                        break _L$5;
                      }
                    } else {
                      const _x$3 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                      rest$4 = _x$3;
                      break _L$5;
                    }
                  } else {
                    if (_x >= 194 && _x <= 223) {
                      const _x$2 = bytes.buf[bytes.start + 1 | 0];
                      if (_x$2 >= 128 && _x$2 <= 191) {
                        const _x$3 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 2 | 0, bytes.end);
                        rest$3 = _x$3;
                        break _L$4;
                      } else {
                        malformed = bytes;
                        break _L;
                      }
                    } else {
                      if (_x === 224) {
                        const _x$2 = bytes.buf[bytes.start + 1 | 0];
                        if (_x$2 >= 160 && _x$2 <= 191) {
                          const _x$3 = bytes.buf[bytes.start + 2 | 0];
                          if (_x$3 >= 128 && _x$3 <= 191) {
                            const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                            rest$2 = _x$4;
                            break _L$3;
                          } else {
                            malformed = bytes;
                            break _L;
                          }
                        } else {
                          malformed = bytes;
                          break _L;
                        }
                      } else {
                        if (_x >= 225 && _x <= 236) {
                          const _x$2 = bytes.buf[bytes.start + 1 | 0];
                          if (_x$2 >= 128 && _x$2 <= 191) {
                            const _x$3 = bytes.buf[bytes.start + 2 | 0];
                            if (_x$3 >= 128 && _x$3 <= 191) {
                              const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                              rest$2 = _x$4;
                              break _L$3;
                            } else {
                              malformed = bytes;
                              break _L;
                            }
                          } else {
                            malformed = bytes;
                            break _L;
                          }
                        } else {
                          if (_x === 237) {
                            const _x$2 = bytes.buf[bytes.start + 1 | 0];
                            if (_x$2 >= 128 && _x$2 <= 159) {
                              const _x$3 = bytes.buf[bytes.start + 2 | 0];
                              if (_x$3 >= 128 && _x$3 <= 191) {
                                const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                                rest$2 = _x$4;
                                break _L$3;
                              } else {
                                malformed = bytes;
                                break _L;
                              }
                            } else {
                              malformed = bytes;
                              break _L;
                            }
                          } else {
                            if (_x >= 238 && _x <= 239) {
                              const _x$2 = bytes.buf[bytes.start + 1 | 0];
                              if (_x$2 >= 128 && _x$2 <= 191) {
                                const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                if (_x$3 >= 128 && _x$3 <= 191) {
                                  const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                                  rest$2 = _x$4;
                                  break _L$3;
                                } else {
                                  malformed = bytes;
                                  break _L;
                                }
                              } else {
                                malformed = bytes;
                                break _L;
                              }
                            } else {
                              if (_x === 240) {
                                const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                if (_x$2 >= 144 && _x$2 <= 191) {
                                  const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                  if (_x$3 >= 128 && _x$3 <= 191) {
                                    const _x$4 = bytes.buf[bytes.start + 3 | 0];
                                    if (_x$4 >= 128 && _x$4 <= 191) {
                                      const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 4 | 0, bytes.end);
                                      rest = _x$5;
                                      break _L$2;
                                    } else {
                                      malformed = bytes;
                                      break _L;
                                    }
                                  } else {
                                    malformed = bytes;
                                    break _L;
                                  }
                                } else {
                                  malformed = bytes;
                                  break _L;
                                }
                              } else {
                                if (_x >= 241 && _x <= 243) {
                                  const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                  if (_x$2 >= 128 && _x$2 <= 191) {
                                    const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                    if (_x$3 >= 128 && _x$3 <= 191) {
                                      const _x$4 = bytes.buf[bytes.start + 3 | 0];
                                      if (_x$4 >= 128 && _x$4 <= 191) {
                                        const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 4 | 0, bytes.end);
                                        rest = _x$5;
                                        break _L$2;
                                      } else {
                                        malformed = bytes;
                                        break _L;
                                      }
                                    } else {
                                      malformed = bytes;
                                      break _L;
                                    }
                                  } else {
                                    malformed = bytes;
                                    break _L;
                                  }
                                } else {
                                  if (_x === 244) {
                                    const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                    if (_x$2 >= 128 && _x$2 <= 143) {
                                      const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                      if (_x$3 >= 128 && _x$3 <= 191) {
                                        const _x$4 = bytes.buf[bytes.start + 3 | 0];
                                        if (_x$4 >= 128 && _x$4 <= 191) {
                                          const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 4 | 0, bytes.end);
                                          rest = _x$5;
                                          break _L$2;
                                        } else {
                                          malformed = bytes;
                                          break _L;
                                        }
                                      } else {
                                        malformed = bytes;
                                        break _L;
                                      }
                                    } else {
                                      malformed = bytes;
                                      break _L;
                                    }
                                  } else {
                                    malformed = bytes;
                                    break _L;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                } else {
                  const _x = bytes.buf[bytes.start];
                  if (_x >= 0 && _x <= 127) {
                    const _x$2 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                    rest$4 = _x$2;
                    break _L$5;
                  } else {
                    if ((bytes.end - bytes.start | 0) >= 2) {
                      if (_x >= 194 && _x <= 223) {
                        const _x$2 = bytes.buf[bytes.start + 1 | 0];
                        if (_x$2 >= 128 && _x$2 <= 191) {
                          const _x$3 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 2 | 0, bytes.end);
                          rest$3 = _x$3;
                          break _L$4;
                        } else {
                          (bytes.end - bytes.start | 0) >= 3;
                          malformed = bytes;
                          break _L;
                        }
                      } else {
                        if ((bytes.end - bytes.start | 0) >= 3) {
                          if (_x === 224) {
                            const _x$2 = bytes.buf[bytes.start + 1 | 0];
                            if (_x$2 >= 160 && _x$2 <= 191) {
                              const _x$3 = bytes.buf[bytes.start + 2 | 0];
                              if (_x$3 >= 128 && _x$3 <= 191) {
                                const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                                rest$2 = _x$4;
                                break _L$3;
                              } else {
                                malformed = bytes;
                                break _L;
                              }
                            } else {
                              malformed = bytes;
                              break _L;
                            }
                          } else {
                            if (_x >= 225 && _x <= 236) {
                              const _x$2 = bytes.buf[bytes.start + 1 | 0];
                              if (_x$2 >= 128 && _x$2 <= 191) {
                                const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                if (_x$3 >= 128 && _x$3 <= 191) {
                                  const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                                  rest$2 = _x$4;
                                  break _L$3;
                                } else {
                                  malformed = bytes;
                                  break _L;
                                }
                              } else {
                                malformed = bytes;
                                break _L;
                              }
                            } else {
                              if (_x === 237) {
                                const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                if (_x$2 >= 128 && _x$2 <= 159) {
                                  const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                  if (_x$3 >= 128 && _x$3 <= 191) {
                                    const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                                    rest$2 = _x$4;
                                    break _L$3;
                                  } else {
                                    malformed = bytes;
                                    break _L;
                                  }
                                } else {
                                  malformed = bytes;
                                  break _L;
                                }
                              } else {
                                if (_x >= 238 && _x <= 239) {
                                  const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                  if (_x$2 >= 128 && _x$2 <= 191) {
                                    const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                    if (_x$3 >= 128 && _x$3 <= 191) {
                                      const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                                      rest$2 = _x$4;
                                      break _L$3;
                                    } else {
                                      malformed = bytes;
                                      break _L;
                                    }
                                  } else {
                                    malformed = bytes;
                                    break _L;
                                  }
                                } else {
                                  if ((bytes.end - bytes.start | 0) >= 4) {
                                    if (_x === 240) {
                                      const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                      if (_x$2 >= 144 && _x$2 <= 191) {
                                        const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                        if (_x$3 >= 128 && _x$3 <= 191) {
                                          const _x$4 = bytes.buf[bytes.start + 3 | 0];
                                          if (_x$4 >= 128 && _x$4 <= 191) {
                                            const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 4 | 0, bytes.end);
                                            rest = _x$5;
                                            break _L$2;
                                          } else {
                                            malformed = bytes;
                                            break _L;
                                          }
                                        } else {
                                          malformed = bytes;
                                          break _L;
                                        }
                                      } else {
                                        malformed = bytes;
                                        break _L;
                                      }
                                    } else {
                                      if (_x >= 241 && _x <= 243) {
                                        const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                        if (_x$2 >= 128 && _x$2 <= 191) {
                                          const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                          if (_x$3 >= 128 && _x$3 <= 191) {
                                            const _x$4 = bytes.buf[bytes.start + 3 | 0];
                                            if (_x$4 >= 128 && _x$4 <= 191) {
                                              const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 4 | 0, bytes.end);
                                              rest = _x$5;
                                              break _L$2;
                                            } else {
                                              malformed = bytes;
                                              break _L;
                                            }
                                          } else {
                                            malformed = bytes;
                                            break _L;
                                          }
                                        } else {
                                          malformed = bytes;
                                          break _L;
                                        }
                                      } else {
                                        if (_x === 244) {
                                          const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                          if (_x$2 >= 128 && _x$2 <= 143) {
                                            const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                            if (_x$3 >= 128 && _x$3 <= 191) {
                                              const _x$4 = bytes.buf[bytes.start + 3 | 0];
                                              if (_x$4 >= 128 && _x$4 <= 191) {
                                                const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 4 | 0, bytes.end);
                                                rest = _x$5;
                                                break _L$2;
                                              } else {
                                                malformed = bytes;
                                                break _L;
                                              }
                                            } else {
                                              malformed = bytes;
                                              break _L;
                                            }
                                          } else {
                                            malformed = bytes;
                                            break _L;
                                          }
                                        } else {
                                          malformed = bytes;
                                          break _L;
                                        }
                                      }
                                    }
                                  } else {
                                    malformed = bytes;
                                    break _L;
                                  }
                                }
                              }
                            }
                          }
                        } else {
                          malformed = bytes;
                          break _L;
                        }
                      }
                    } else {
                      malformed = bytes;
                      break _L;
                    }
                  }
                }
              }
            }
            _tmp = rest$4;
            continue;
          }
          _tmp = rest$3;
          continue;
        }
        _tmp = rest$2;
        continue;
      }
      _tmp = rest;
      continue;
    }
    return _M0MPC15bytes9BytesView13start__offset(malformed) - src_offset | 0;
  }
}
function _M0FPC28encoding4utf825strict__malformed__suffix(bytes) {
  const input = _M0MPC15bytes9BytesView4data(bytes);
  const src_offset = _M0MPC15bytes9BytesView13start__offset(bytes);
  const src_length = bytes.end - bytes.start | 0;
  const malformed_offset = _M0FPC28encoding4utf821utf8__find__malformed(input, src_offset, src_length);
  const _bind = bytes.end - bytes.start | 0;
  if (malformed_offset < 0 || malformed_offset > _bind) {
    $panic();
  }
  return new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + malformed_offset | 0, bytes.start + _bind | 0);
}
function _M0FPC28encoding4utf815drop__utf8__bom(bytes, ignore_bom) {
  _L: {
    if (ignore_bom) {
      _L$2: {
        if ((bytes.end - bytes.start | 0) >= 3) {
          const _x = bytes.buf[bytes.start];
          if (_x === 239) {
            const _x$2 = bytes.buf[bytes.start + 1 | 0];
            if (_x$2 === 187) {
              const _x$3 = bytes.buf[bytes.start + 2 | 0];
              if (_x$3 === 191) {
                return new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
              } else {
                break _L$2;
              }
            } else {
              break _L$2;
            }
          } else {
            break _L$2;
          }
        } else {
          break _L$2;
        }
      }
      break _L;
    } else {
      break _L;
    }
  }
  return bytes;
}
function _M0FPC28encoding4utf814decode_2einner(bytes, ignore_bom) {
  const result = _M0FPC28encoding4utf816decode__utf8__js(_M0MPC15bytes9BytesView4data(bytes), _M0MPC15bytes9BytesView13start__offset(bytes), bytes.end - bytes.start | 0, !ignore_bom);
  if (result.length === 1) {
    return new _M0DTPC16result6ResultGsRPC28encoding4utf89MalformedE2Ok(0 >>> 0 < result.length ? result[0] : $oob());
  } else {
    const bytes$2 = _M0FPC28encoding4utf815drop__utf8__bom(bytes, ignore_bom);
    return new _M0DTPC16result6ResultGsRPC28encoding4utf89MalformedE3Err(new _M0DTPC15error5Error60moonbitlang_2fcore_2fencoding_2futf8_2eMalformed_2eMalformed(_M0FPC28encoding4utf825strict__malformed__suffix(bytes$2)));
  }
}
function _M0IPC15error5ErrorPC15debug5Debug8to__repr(self) {
  return _M0FP15Error8to__repr(self);
}
function _M0FPC16buffer24buffer__growth__capacity(current, len, required) {
  if (required < len) {
    _M0FPC15abort5abortGuE("Buffer capacity overflow");
  }
  const start = current <= 0 ? 1 : current;
  let _tmp = start;
  while (true) {
    const space = _tmp;
    if (space >= required) {
      return space;
    }
    const next = Math.imul(space, 2) | 0;
    if (next <= space) {
      return required;
    }
    _tmp = next;
    continue;
  }
}
function _M0MPC16buffer6Buffer4grow(self, required) {
  const new_capacity = _M0FPC16buffer24buffer__growth__capacity(self.data.length, self.len, required);
  const new_data = _M0MPC15array10FixedArray23make__and__blit_2einnerGyE(self.data, new_capacity, 0, self.len, 0, 0);
  self.data = new_data;
}
function _M0MPC16buffer6Buffer9to__bytes(self) {
  const _bind = self.data;
  const _bind$2 = self.len;
  const _bind$3 = _bind.length;
  if (0 > _bind$2 || _bind$2 > _bind$3) {
    $panic();
  }
  return _M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(_bind, 0, _bind$2));
}
function _M0MPC16buffer6Buffer14Buffer_2einner(size_hint) {
  const initial = size_hint < 1 ? 1 : size_hint;
  const data = $makebytes(initial, 0);
  return new _M0TPC16buffer6Buffer(data, 0);
}
function _M0MPC16buffer6Buffer17write__char__utf8(buf, value) {
  const code = _M0MPC14char4Char8to__uint(value);
  if (code >>> 0 < 128 >>> 0) {
    if (buf.len >= buf.data.length) {
      _M0MPC16buffer6Buffer4grow(buf, buf.len + 1 | 0);
    }
    buf.data[buf.len] = _M0MPC14uint4UInt8to__byte(code & 127 | 0);
    buf.len = buf.len + 1 | 0;
    return;
  } else {
    if (code >>> 0 < 2048 >>> 0) {
      if ((buf.data.length - buf.len | 0) < 2) {
        _M0MPC16buffer6Buffer4grow(buf, buf.len + 2 | 0);
      }
      const data = buf.data;
      const offset = buf.len;
      data[offset] = _M0MPC14uint4UInt8to__byte((code >>> 6 | 0) & 31 | 192);
      data[offset + 1 | 0] = _M0MPC14uint4UInt8to__byte(code & 63 | 128);
      buf.len = buf.len + 2 | 0;
      return;
    } else {
      if (code >>> 0 < 65536 >>> 0) {
        if ((buf.data.length - buf.len | 0) < 3) {
          _M0MPC16buffer6Buffer4grow(buf, buf.len + 3 | 0);
        }
        const data = buf.data;
        const offset = buf.len;
        data[offset] = _M0MPC14uint4UInt8to__byte((code >>> 12 | 0) & 15 | 224);
        data[offset + 1 | 0] = _M0MPC14uint4UInt8to__byte((code >>> 6 | 0) & 63 | 128);
        data[offset + 2 | 0] = _M0MPC14uint4UInt8to__byte(code & 63 | 128);
        buf.len = buf.len + 3 | 0;
        return;
      } else {
        if (code >>> 0 < 1114112 >>> 0) {
          if ((buf.data.length - buf.len | 0) < 4) {
            _M0MPC16buffer6Buffer4grow(buf, buf.len + 4 | 0);
          }
          const data = buf.data;
          const offset = buf.len;
          data[offset] = _M0MPC14uint4UInt8to__byte((code >>> 18 | 0) & 7 | 240);
          data[offset + 1 | 0] = _M0MPC14uint4UInt8to__byte((code >>> 12 | 0) & 63 | 128);
          data[offset + 2 | 0] = _M0MPC14uint4UInt8to__byte((code >>> 6 | 0) & 63 | 128);
          data[offset + 3 | 0] = _M0MPC14uint4UInt8to__byte(code & 63 | 128);
          buf.len = buf.len + 4 | 0;
          return;
        } else {
          _M0FPC15abort5abortGuE("Char out of range");
          return;
        }
      }
    }
  }
}
function _M0MPC16buffer6Buffer11write__byte(self, value) {
  if (self.len >= self.data.length) {
    _M0MPC16buffer6Buffer4grow(self, self.len + 1 | 0);
  }
  self.data[self.len] = value;
  self.len = self.len + 1 | 0;
}
function _M0FPC28internal7strconv10range__errGuE() {
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv15range__err__str));
}
function _M0FPC28internal7strconv11syntax__errGdE() {
  return new _M0DTPC16result6ResultGdRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGORPC28internal7strconv6NumberE() {
  return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGuE() {
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE() {
  return new _M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(self, init, f) {
  let _tmp = self;
  let _tmp$2 = init;
  let _tmp$3 = 0;
  while (true) {
    const str = _tmp;
    const ret = _tmp$2;
    const len = _tmp$3;
    _L: {
      if ((str.end - str.start | 0) >= 1) {
        const _x = str.str.charCodeAt(str.start);
        if (_x >= 48 && _x <= 57) {
          const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          _tmp = _x$2;
          _tmp$2 = f(_x - 48 | 0, ret);
          _tmp$3 = len + 1 | 0;
          continue;
        } else {
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            _tmp = _x$2;
            continue;
          } else {
            break _L;
          }
        }
      } else {
        break _L;
      }
    }
    return { _0: str, _1: ret, _2: len };
  }
}
function _M0FPC28internal7strconv13parse__digits(s, x) {
  return _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s, x, (digit, acc) => BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + BigInt.asUintN(64, BigInt(digit >>> 0))));
}
function _M0FPC28internal7strconv20try__parse__19digits(s, x) {
  let x$2 = x;
  let len = 0;
  let _tmp = s;
  while (true) {
    const s$2 = _tmp;
    let s$3;
    _L: {
      if ((s$2.end - s$2.start | 0) >= 1) {
        const _x = s$2.str.charCodeAt(s$2.start);
        if (_x >= 48 && _x <= 57) {
          const _x$2 = new _M0TPC16string10StringView(s$2.str, s$2.start + 1 | 0, s$2.end);
          if (BigInt.asUintN(64, x$2) < BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
            len = len + 1 | 0;
            x$2 = BigInt.asUintN(64, BigInt.asUintN(64, x$2 * 10n) + BigInt.asUintN(64, BigInt((_x - 48 | 0) >>> 0)));
            _tmp = _x$2;
            continue;
          } else {
            s$3 = s$2;
            break _L;
          }
        } else {
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(s$2.str, s$2.start + 1 | 0, s$2.end);
            _tmp = _x$2;
            continue;
          } else {
            s$3 = s$2;
            break _L;
          }
        }
      } else {
        s$3 = s$2;
        break _L;
      }
    }
    return { _0: s$3, _1: x$2, _2: len };
  }
}
function _M0FPC28internal7strconv17parse__scientific(s) {
  let s$2 = s;
  let neg_exp = false;
  let rest;
  let ch;
  _L: {
    _L$2: {
      const _bind = s$2;
      if ((_bind.end - _bind.start | 0) >= 1) {
        const _x = _bind.str.charCodeAt(_bind.start);
        switch (_x) {
          case 43: {
            const _x$2 = new _M0TPC16string10StringView(_bind.str, _bind.start + 1 | 0, _bind.end);
            rest = _x$2;
            ch = _x;
            break _L$2;
          }
          case 45: {
            const _x$3 = new _M0TPC16string10StringView(_bind.str, _bind.start + 1 | 0, _bind.end);
            rest = _x$3;
            ch = _x;
            break _L$2;
          }
        }
      }
      break _L;
    }
    neg_exp = ch === 45;
    s$2 = rest;
  }
  _L$2: {
    const _bind = s$2;
    if ((_bind.end - _bind.start | 0) >= 1) {
      const _x = _bind.str.charCodeAt(_bind.start);
      if (_x >= 48 && _x <= 57) {
        const _bind$2 = _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s$2, _M0FPC28internal7strconv17parse__scientificN8exp__numS354, (digit, exp_num) => BigInt.asIntN(64, exp_num) < BigInt.asIntN(64, 65536n) ? BigInt.asUintN(64, BigInt.asUintN(64, 10n * exp_num) + BigInt.asUintN(64, BigInt(digit))) : exp_num);
        const _s = _bind$2._0;
        const _exp_num = _bind$2._1;
        return neg_exp ? { _0: _s, _1: BigInt.asUintN(64, -_exp_num) } : { _0: _s, _1: _exp_num };
      } else {
        break _L$2;
      }
    } else {
      break _L$2;
    }
  }
  return undefined;
}
function _M0FPC28internal7strconv13parse__number(s) {
  let s$2;
  let negative;
  _L: {
    let rest;
    _L$2: {
      if ((s.end - s.start | 0) >= 1) {
        const _x = s.str.charCodeAt(s.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(s.str, s.start + 1 | 0, s.end);
            s$2 = _x$2;
            negative = true;
            break _L;
          }
          case 43: {
            const _x$3 = new _M0TPC16string10StringView(s.str, s.start + 1 | 0, s.end);
            rest = _x$3;
            break _L$2;
          }
          default: {
            rest = s;
            break _L$2;
          }
        }
      } else {
        rest = s;
        break _L$2;
      }
    }
    s$2 = rest;
    negative = false;
    break _L;
  }
  if (_M0MPC16string10StringView9is__empty(s$2)) {
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
  }
  const _bind = _M0FPC28internal7strconv13parse__digits(s$2, 0n);
  const _s = _bind._0;
  const _mantissa = _bind._1;
  const _consumed = _bind._2;
  let mantissa = _mantissa;
  let s$3 = _s;
  let n_digits = _consumed;
  let n_after_dot = 0;
  let exponent = 0n;
  const _bind$2 = s$3;
  if ((_bind$2.end - _bind$2.start | 0) >= 1) {
    const _x = _bind$2.str.charCodeAt(_bind$2.start);
    if (_x === 46) {
      const _x$2 = new _M0TPC16string10StringView(_bind$2.str, _bind$2.start + 1 | 0, _bind$2.end);
      s$3 = _x$2;
      const _bind$3 = _M0FPC28internal7strconv13parse__digits(s$3, mantissa);
      const _new_s = _bind$3._0;
      const _new_mantissa = _bind$3._1;
      const _consumed_digit = _bind$3._2;
      s$3 = _new_s;
      mantissa = _new_mantissa;
      n_after_dot = _consumed_digit;
      exponent = BigInt.asUintN(64, -BigInt.asUintN(64, BigInt(n_after_dot)));
    }
  }
  n_digits = n_digits + n_after_dot | 0;
  if (n_digits === 0) {
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
  }
  let exp_number = 0n;
  let rest;
  _L$2: {
    _L$3: {
      const _bind$3 = s$3;
      if ((_bind$3.end - _bind$3.start | 0) >= 1) {
        const _x = _bind$3.str.charCodeAt(_bind$3.start);
        switch (_x) {
          case 101: {
            const _x$2 = new _M0TPC16string10StringView(_bind$3.str, _bind$3.start + 1 | 0, _bind$3.end);
            rest = _x$2;
            break _L$3;
          }
          case 69: {
            const _x$3 = new _M0TPC16string10StringView(_bind$3.str, _bind$3.start + 1 | 0, _bind$3.end);
            rest = _x$3;
            break _L$3;
          }
        }
      }
      break _L$2;
    }
    const _bind$3 = _M0FPC28internal7strconv17parse__scientific(rest);
    let _bind$4;
    if (_bind$3 === undefined) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
    } else {
      const _Some = _bind$3;
      _bind$4 = _Some;
    }
    const _new_s = _bind$4._0;
    const _exp_number_val = _bind$4._1;
    s$3 = _new_s;
    exp_number = _exp_number_val;
    exponent = BigInt.asUintN(64, exponent + exp_number);
  }
  const _bind$3 = s$3;
  if ((_bind$3.end - _bind$3.start | 0) === 0) {
    if (n_digits <= 19) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(new _M0TPC28internal7strconv6Number(exponent, mantissa, negative, false));
    }
    n_digits = n_digits - 19 | 0;
    let many_digits = false;
    let _tmp = s.str;
    let _tmp$2 = s.start;
    let _tmp$3 = s.end;
    _L$3: while (true) {
      const s_str = _tmp;
      const s_start = _tmp$2;
      const s_end = _tmp$3;
      _L$4: {
        let rest$2;
        let ch;
        _L$5: {
          if ((s_end - s_start | 0) >= 1) {
            const _x = s_str.charCodeAt(s_start);
            switch (_x) {
              case 48: {
                const _x$2 = new _M0TPC16string10StringView(s_str, s_start + 1 | 0, s_end);
                rest$2 = _x$2;
                ch = _x;
                break _L$5;
              }
              case 46: {
                const _x$3 = new _M0TPC16string10StringView(s_str, s_start + 1 | 0, s_end);
                rest$2 = _x$3;
                ch = _x;
                break _L$5;
              }
              default: {
                break _L$4;
              }
            }
          } else {
            break _L$4;
          }
        }
        const _tmp$4 = n_digits;
        if (2 === 0) {
          $panic();
        }
        n_digits = _tmp$4 - ((ch - 46 | 0) / 2 | 0) | 0;
        _tmp = rest$2.str;
        _tmp$2 = rest$2.start;
        _tmp$3 = rest$2.end;
        continue;
      }
      break;
    }
    let mantissa$2 = mantissa;
    if (n_digits > 0) {
      many_digits = true;
      mantissa$2 = 0n;
      const _bind$4 = _M0FPC28internal7strconv20try__parse__19digits(s, mantissa$2);
      const _s$2 = _bind$4._0;
      const _new_mantissa = _bind$4._1;
      const _consumed_digit = _bind$4._2;
      mantissa$2 = _new_mantissa;
      let _tmp$4;
      if (BigInt.asUintN(64, mantissa$2) >= BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
        _tmp$4 = _consumed_digit;
      } else {
        if (_M0MPC16string6String24char__length__ge_2einner(_s$2.str, 1, _s$2.start, _s$2.end)) {
          const _tmp$5 = _s$2.str;
          const _bind$5 = _M0MPC16string6String29offset__of__nth__char_2einner(_s$2.str, 1, _s$2.start, _s$2.end);
          let _tmp$6;
          if (_bind$5 === undefined) {
            _tmp$6 = _s$2.end;
          } else {
            const _Some = _bind$5;
            _tmp$6 = _Some;
          }
          const _x = new _M0TPC16string10StringView(_tmp$5, _tmp$6, _s$2.end);
          const _bind$6 = _M0FPC28internal7strconv20try__parse__19digits(_x, mantissa$2);
          const _new_mantissa$2 = _bind$6._1;
          const _consumed_digit$2 = _bind$6._2;
          mantissa$2 = _new_mantissa$2;
          _tmp$4 = _consumed_digit$2;
        } else {
          return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
        }
      }
      exponent = BigInt.asUintN(64, BigInt(_tmp$4));
      exponent = BigInt.asUintN(64, exponent + exp_number);
    }
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(new _M0TPC28internal7strconv6Number(exponent, mantissa$2, negative, many_digits));
  } else {
    return _M0FPC28internal7strconv11syntax__errGORPC28internal7strconv6NumberE();
  }
}
function _M0FPC28internal7strconv15parse__inf__nan(rest) {
  let pos;
  let rest$2;
  _L: {
    let rest$3;
    _L$2: {
      if ((rest.end - rest.start | 0) >= 1) {
        const _x = rest.str.charCodeAt(rest.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
            pos = false;
            rest$2 = _x$2;
            break _L;
          }
          case 43: {
            const _x$3 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
            rest$3 = _x$3;
            break _L$2;
          }
          default: {
            rest$3 = rest;
            break _L$2;
          }
        }
      } else {
        rest$3 = rest;
        break _L$2;
      }
    }
    pos = true;
    rest$2 = rest$3;
    break _L;
  }
  let _cursor_295 = 0;
  const _input_end_297 = rest$2.end - rest$2.start | 0;
  const _start_296 = _cursor_295;
  let _accept_state_298 = -1;
  let _match_end_299 = -1;
  let _state_300 = 2;
  while (true) {
    if (_state_300 !== 14) {
      if (_state_300 < 2) {
        _accept_state_298 = _state_300;
        _match_end_299 = _cursor_295;
      }
      const _tmp = Math.imul(_state_300, 8) | 0;
      let _next_char_303;
      if (_cursor_295 < _input_end_297) {
        const _char_302 = rest$2.str.charCodeAt(rest$2.start + _cursor_295 | 0);
        _cursor_295 = _cursor_295 + 1 | 0;
        _next_char_303 = _char_302;
      } else {
        _next_char_303 = -1;
      }
      _state_300 = _M0MPC15array13ReadOnlyArray11unsafe__getGiE(_M0FPC28internal7strconv15parse__inf__nanN25_2atransition__table__304S312, _tmp + (_next_char_303 < 90 ? (_next_char_303 < 73 ? (_next_char_303 < 66 ? (_next_char_303 < 0 ? 0 : _next_char_303 > 64 ? 1 : 7) : _next_char_303 > 69 ? (_next_char_303 < 71 ? 2 : 7) : 7) : _next_char_303 > 73 ? (_next_char_303 < 84 ? (_next_char_303 < 78 ? 7 : _next_char_303 > 78 ? 7 : 4) : _next_char_303 > 84 ? (_next_char_303 < 89 ? 7 : 6) : 5) : 3) : _next_char_303 > 96 ? (_next_char_303 < 110 ? (_next_char_303 < 103 ? (_next_char_303 < 98 ? 1 : _next_char_303 > 101 ? 2 : 7) : _next_char_303 > 104 ? (_next_char_303 < 106 ? 3 : 7) : 7) : _next_char_303 > 110 ? (_next_char_303 < 117 ? (_next_char_303 < 116 ? 7 : 5) : _next_char_303 > 120 ? (_next_char_303 < 122 ? 6 : 7) : 7) : 4) : 7) | 0);
      continue;
    } else {
      break;
    }
  }
  const _bind = _accept_state_298;
  switch (_bind) {
    case 0: {
      _cursor_295 = _match_end_299;
      return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double14not__a__number);
    }
    case 1: {
      _cursor_295 = _match_end_299;
      return pos ? new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double8infinity) : new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double13neg__infinity);
    }
    default: {
      _cursor_295 = _start_296;
      return _M0FPC28internal7strconv11syntax__errGdE();
    }
  }
}
function _M0FPC28internal7strconv12checked__mul(a, b) {
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 0n) || BigInt.asUintN(64, b) === BigInt.asUintN(64, 0n)) {
    return _M0FPC28internal7strconv12checked__mulN6constrS1164;
  }
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 1n)) {
    return b;
  }
  if (BigInt.asUintN(64, b) === BigInt.asUintN(64, 1n)) {
    return a;
  }
  if ($i64_clz(b) === 0 || $i64_clz(a) === 0) {
    return undefined;
  }
  if (b === 0n) {
    $panic();
  }
  const quotient = BigInt.asUintN(64, BigInt.asUintN(64, 18446744073709551615n) / BigInt.asUintN(64, b));
  if (BigInt.asUintN(64, a) > BigInt.asUintN(64, quotient)) {
    return undefined;
  }
  return BigInt.asUintN(64, a * b);
}
function _M0FPC28internal7strconv17check__underscore(str) {
  if (_M0MPC16string10StringView20contains__code__unit(str, 95)) {
    let rest;
    if ((str.end - str.start | 0) >= 1) {
      const _x = str.str.charCodeAt(str.start);
      switch (_x) {
        case 43: {
          const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          rest = _x$2;
          break;
        }
        case 45: {
          const _x$3 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          rest = _x$3;
          break;
        }
        default: {
          rest = str;
        }
      }
    } else {
      rest = str;
    }
    let rest$2;
    let allow_underscore;
    let hex;
    _L: {
      let _cursor_213 = 0;
      const _input_end_215 = rest.end - rest.start | 0;
      const _start_214 = _cursor_213;
      let _accept_state_216 = -1;
      let _match_end_217 = -1;
      let _state_218 = 3;
      while (true) {
        if (_state_218 !== 5) {
          if (_state_218 < 3) {
            _accept_state_216 = _state_218;
            _match_end_217 = _cursor_213;
          }
          const _tmp = Math.imul(_state_218, 5) | 0;
          let _next_char_221;
          if (_cursor_213 < _input_end_215) {
            const _char_220 = rest.str.charCodeAt(rest.start + _cursor_213 | 0);
            _cursor_213 = _cursor_213 + 1 | 0;
            _next_char_221 = _char_220;
          } else {
            _next_char_221 = -1;
          }
          _state_218 = _M0MPC15array13ReadOnlyArray11unsafe__getGiE(_M0FPC28internal7strconv17check__underscoreN25_2atransition__table__222S230, _tmp + (_next_char_221 < 88 ? (_next_char_221 < 66 ? (_next_char_221 < 48 ? 4 : _next_char_221 > 48 ? 4 : 0) : _next_char_221 > 66 ? (_next_char_221 < 79 ? 4 : _next_char_221 > 79 ? 4 : 2) : 1) : _next_char_221 > 88 ? (_next_char_221 < 111 ? (_next_char_221 < 98 ? 4 : _next_char_221 > 98 ? 4 : 1) : _next_char_221 > 111 ? (_next_char_221 < 120 ? 4 : _next_char_221 > 120 ? 4 : 3) : 2) : 3) | 0);
          continue;
        } else {
          break;
        }
      }
      const _bind = _accept_state_216;
      switch (_bind) {
        case 0: {
          _cursor_213 = _match_end_217;
          const rest$3 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$3;
          allow_underscore = true;
          hex = false;
          break _L;
        }
        case 1: {
          _cursor_213 = _match_end_217;
          const rest$4 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$4;
          allow_underscore = true;
          hex = false;
          break _L;
        }
        case 2: {
          _cursor_213 = _match_end_217;
          const rest$5 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$5;
          allow_underscore = true;
          hex = true;
          break _L;
        }
        default: {
          _cursor_213 = _start_214;
          rest$2 = rest;
          allow_underscore = false;
          hex = false;
          break _L;
        }
      }
    }
    let _tmp = rest$2.str;
    let _tmp$2 = rest$2.start;
    let _tmp$3 = rest$2.end;
    let _tmp$4 = allow_underscore;
    let _tmp$5 = false;
    while (true) {
      const rest_str = _tmp;
      const rest_start = _tmp$2;
      const rest_end = _tmp$3;
      const allow_underscore$2 = _tmp$4;
      const follow_underscore = _tmp$5;
      let rest$3;
      _L$2: {
        _L$3: {
          let rest$4;
          _L$4: {
            _L$5: {
              let rest$5;
              _L$6: {
                let rest$6;
                _L$7: {
                  if ((rest_end - rest_start | 0) === 0) {
                    return true;
                  } else {
                    if ((rest_end - rest_start | 0) === 1) {
                      const _x = rest_str.charCodeAt(rest_start);
                      if (_x === 95) {
                        return false;
                      } else {
                        if (_x >= 48 && _x <= 57) {
                          const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                          rest$6 = _x$2;
                          break _L$7;
                        } else {
                          if (_x >= 97 && _x <= 102) {
                            const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                            if (hex) {
                              rest$5 = _x$2;
                              break _L$6;
                            } else {
                              if (_x === 101) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (follow_underscore === true) {
                                  break _L$3;
                                } else {
                                  rest$3 = _x$2;
                                  break _L$2;
                                }
                              }
                            }
                          } else {
                            if (_x >= 65 && _x <= 70) {
                              const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                              if (hex) {
                                rest$5 = _x$2;
                                break _L$6;
                              } else {
                                if (_x === 69) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (follow_underscore === true) {
                                    break _L$3;
                                  } else {
                                    rest$3 = _x$2;
                                    break _L$2;
                                  }
                                }
                              }
                            } else {
                              if (_x === 46) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (_x === 43) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (_x === 45) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                      rest$4 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (follow_underscore === true) {
                                      break _L$3;
                                    } else {
                                      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(rest_str, 1, rest_start, rest_end);
                                      let _tmp$6;
                                      if (_bind === undefined) {
                                        _tmp$6 = rest_end;
                                      } else {
                                        const _Some = _bind;
                                        _tmp$6 = _Some;
                                      }
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, _tmp$6, rest_end);
                                      rest$3 = _x$2;
                                      break _L$2;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    } else {
                      const _x = rest_str.charCodeAt(rest_start);
                      if (_x === 95) {
                        if (allow_underscore$2 === false) {
                          return false;
                        } else {
                          const _bind = rest_start + 1 | 0;
                          _tmp$2 = _bind;
                          _tmp$4 = false;
                          _tmp$5 = true;
                          continue;
                        }
                      } else {
                        if (_x >= 48 && _x <= 57) {
                          const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                          rest$6 = _x$2;
                          break _L$7;
                        } else {
                          if (_x >= 97 && _x <= 102) {
                            const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                            if (hex) {
                              rest$5 = _x$2;
                              break _L$6;
                            } else {
                              if (_x === 101) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (follow_underscore === true) {
                                  break _L$3;
                                } else {
                                  rest$3 = _x$2;
                                  break _L$2;
                                }
                              }
                            }
                          } else {
                            if (_x >= 65 && _x <= 70) {
                              const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                              if (hex) {
                                rest$5 = _x$2;
                                break _L$6;
                              } else {
                                if (_x === 69) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (follow_underscore === true) {
                                    break _L$3;
                                  } else {
                                    rest$3 = _x$2;
                                    break _L$2;
                                  }
                                }
                              }
                            } else {
                              if (_x === 46) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (_x === 43) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (_x === 45) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                      rest$4 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (follow_underscore === true) {
                                      break _L$3;
                                    } else {
                                      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(rest_str, 1, rest_start, rest_end);
                                      let _tmp$6;
                                      if (_bind === undefined) {
                                        _tmp$6 = rest_end;
                                      } else {
                                        const _Some = _bind;
                                        _tmp$6 = _Some;
                                      }
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, _tmp$6, rest_end);
                                      rest$3 = _x$2;
                                      break _L$2;
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
                _tmp = rest$6.str;
                _tmp$2 = rest$6.start;
                _tmp$3 = rest$6.end;
                _tmp$4 = true;
                _tmp$5 = false;
                continue;
              }
              _tmp = rest$5.str;
              _tmp$2 = rest$5.start;
              _tmp$3 = rest$5.end;
              _tmp$4 = true;
              _tmp$5 = false;
              continue;
            }
            return false;
          }
          _tmp = rest$4.str;
          _tmp$2 = rest$4.start;
          _tmp$3 = rest$4.end;
          _tmp$4 = false;
          _tmp$5 = false;
          continue;
        }
        return false;
      }
      _tmp = rest$3.str;
      _tmp$2 = rest$3.start;
      _tmp$3 = rest$3.end;
      _tmp$4 = false;
      _tmp$5 = false;
      continue;
    }
  } else {
    return true;
  }
}
function _M0FPC28internal7strconv14eisel__umul128(a, b) {
  const a_lo = BigInt.asUintN(64, a & 4294967295n);
  const a_hi = BigInt.asUintN(64, BigInt.asUintN(64, a) >> BigInt(32 & 63));
  const b_lo = BigInt.asUintN(64, b & 4294967295n);
  const b_hi = BigInt.asUintN(64, BigInt.asUintN(64, b) >> BigInt(32 & 63));
  const x = BigInt.asUintN(64, a_lo * b_lo);
  const y = BigInt.asUintN(64, BigInt.asUintN(64, a_hi * b_lo) + BigInt.asUintN(64, BigInt.asUintN(64, x) >> BigInt(32 & 63)));
  const z = BigInt.asUintN(64, BigInt.asUintN(64, a_lo * b_hi) + BigInt.asUintN(64, y & 4294967295n));
  const hi = BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, a_hi * b_hi) + BigInt.asUintN(64, BigInt.asUintN(64, y) >> BigInt(32 & 63))) + BigInt.asUintN(64, BigInt.asUintN(64, z) >> BigInt(32 & 63)));
  return new _M0TPC28internal7strconv12EiselProduct(BigInt.asUintN(64, a * b), hi);
}
function _M0FPC28internal7strconv20eisel__mul__log2__10(exponent) {
  return (Math.imul(exponent, 108853) | 0) >> 15;
}
function _M0FPC28internal7strconv20try__eisel__lemire64(mantissa, exponent, negative) {
  if (BigInt.asUintN(64, mantissa) === BigInt.asUintN(64, 0n)) {
    return negative ? $i64_reinterpret_f64(9223372036854775808n) : 0;
  }
  if (BigInt.asIntN(64, exponent) < BigInt.asIntN(64, 18446744073709551268n) || BigInt.asIntN(64, exponent) > BigInt.asIntN(64, 347n)) {
    return _M0FPC16double14not__a__number;
  }
  const exponent$2 = Number(BigInt.asIntN(32, exponent)) | 0;
  const table_index = Math.imul(exponent$2 - -348 | 0, 2) | 0;
  const pow_hi = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv27eisel__lemire__pow10__table, table_index);
  const pow_lo = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv27eisel__lemire__pow10__table, table_index + 1 | 0);
  const pow_exp2 = 1 + _M0FPC28internal7strconv20eisel__mul__log2__10(exponent$2) | 0;
  const leading_zeros = $i64_clz(mantissa);
  const normalized = BigInt.asUintN(64, mantissa << BigInt(leading_zeros & 63));
  let result_exp2 = ((pow_exp2 + 63 | 0) + 1023 | 0) - leading_zeros | 0;
  const product = _M0FPC28internal7strconv14eisel__umul128(normalized, pow_hi);
  let product_hi = product.hi;
  let product_lo = product.lo;
  if (BigInt.asUintN(64, BigInt.asUintN(64, product_hi & 511n)) === BigInt.asUintN(64, 511n) && BigInt.asUintN(64, BigInt.asUintN(64, product_lo + normalized)) < BigInt.asUintN(64, normalized)) {
    const wider = _M0FPC28internal7strconv14eisel__umul128(normalized, pow_lo);
    let merged_hi = product_hi;
    const merged_lo = BigInt.asUintN(64, product_lo + wider.hi);
    if (BigInt.asUintN(64, merged_lo) < BigInt.asUintN(64, product_lo)) {
      merged_hi = BigInt.asUintN(64, merged_hi + 1n);
    }
    if (BigInt.asUintN(64, BigInt.asUintN(64, merged_hi & 511n)) === BigInt.asUintN(64, 511n) && (BigInt.asUintN(64, BigInt.asUintN(64, merged_lo + 1n)) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, BigInt.asUintN(64, wider.lo + normalized)) < BigInt.asUintN(64, normalized))) {
      return _M0FPC16double14not__a__number;
    }
    product_hi = merged_hi;
    product_lo = merged_lo;
  }
  const top_bit = Number(BigInt.asIntN(32, BigInt.asUintN(64, BigInt.asUintN(64, product_hi) >> BigInt(63 & 63)))) | 0;
  let result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, product_hi) >> BigInt((top_bit + 9 | 0) & 63));
  result_exp2 = result_exp2 - (1 - top_bit | 0) | 0;
  if (BigInt.asUintN(64, product_lo) === BigInt.asUintN(64, 0n) && (BigInt.asUintN(64, BigInt.asUintN(64, product_hi & 511n)) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa & 3n)) === BigInt.asUintN(64, 1n))) {
    return _M0FPC16double14not__a__number;
  }
  result_mantissa = BigInt.asUintN(64, result_mantissa + BigInt.asUintN(64, result_mantissa & 1n));
  result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(1 & 63));
  if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(53 & 63))) > BigInt.asUintN(64, 0n)) {
    result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(1 & 63));
    result_exp2 = result_exp2 + 1 | 0;
  }
  if (result_exp2 <= 0 || result_exp2 >= 2047) {
    return _M0FPC16double14not__a__number;
  }
  const exponent_bits = BigInt.asUintN(64, BigInt.asUintN(64, BigInt(result_exp2 >>> 0)) << BigInt(52 & 63));
  let result_bits = BigInt.asUintN(64, exponent_bits | BigInt.asUintN(64, result_mantissa & 4503599627370495n));
  if (negative) {
    result_bits = BigInt.asUintN(64, result_bits | 9223372036854775808n);
  }
  return $i64_reinterpret_f64(result_bits);
}
function _M0MPC28internal7strconv7Decimal9new__priv() {
  return new _M0TPC28internal7strconv7Decimal($makebytes(800, 0), 0, 0, false, false, 0);
}
function _M0MPC28internal7strconv7Decimal4trim(self) {
  while (true) {
    let _tmp;
    if (self.digits_num > 0) {
      const _tmp$2 = self.digits;
      const _tmp$3 = self.digits_num - 1 | 0;
      _tmp = _M0IPC14byte4BytePB2Eq5equal(_tmp$3 >>> 0 < _tmp$2.length ? _tmp$2[_tmp$3] : $oob(), 0);
    } else {
      _tmp = false;
    }
    if (_tmp) {
      self.digits_num = self.digits_num - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (self.digits_num === 0) {
    self.decimal_point = 0;
    return;
  } else {
    return;
  }
}
function _M0FPC28internal7strconv26parse__decimal__from__view(str) {
  const d = _M0MPC28internal7strconv7Decimal9new__priv();
  let has_dp = false;
  let has_digits = false;
  let rest;
  _L: {
    _L$2: {
      if ((str.end - str.start | 0) >= 1) {
        const _x = str.str.charCodeAt(str.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            d.negative = true;
            rest = _x$2;
            break;
          }
          case 43: {
            rest = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            break;
          }
          default: {
            break _L$2;
          }
        }
      } else {
        break _L$2;
      }
      break _L;
    }
    rest = str;
  }
  let rest$2;
  let _tmp = rest;
  while (true) {
    const rest$3 = _tmp;
    let rest$4;
    _L$2: {
      _L$3: {
        if ((rest$3.end - rest$3.start | 0) >= 1) {
          const _x = rest$3.str.charCodeAt(rest$3.start);
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
            _tmp = _x$2;
            continue;
          } else {
            if (_x === 46) {
              const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
              if (!has_dp) {
                has_dp = true;
                d.decimal_point = d.digits_num;
                _tmp = _x$2;
                continue;
              } else {
                const _bind = _M0FPC28internal7strconv11syntax__errGuE();
                if (_bind.$tag === 1) {
                  const _ok = _bind;
                  _ok._0;
                } else {
                  return _bind;
                }
              }
            } else {
              if (_x >= 48 && _x <= 57) {
                const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                has_digits = true;
                if (_x === 48 && d.digits_num === 0) {
                  d.decimal_point = d.decimal_point - 1 | 0;
                  _tmp = _x$2;
                  continue;
                }
                if (d.digits_num < d.digits.length) {
                  const _tmp$2 = d.digits;
                  const _tmp$3 = d.digits_num;
                  if (_tmp$3 >>> 0 < _tmp$2.length) {
                    _tmp$2[_tmp$3] = (_x - 48 | 0) & 255;
                  } else {
                    $oob();
                  }
                  d.digits_num = d.digits_num + 1 | 0;
                } else {
                  if (!has_dp) {
                    d.overflowed = d.overflowed + 1 | 0;
                  }
                  if (_x !== 48) {
                    d.truncated = true;
                  }
                }
                _tmp = _x$2;
                continue;
              } else {
                rest$4 = rest$3;
                break _L$3;
              }
            }
          }
        } else {
          rest$4 = rest$3;
          break _L$3;
        }
        break _L$2;
      }
      rest$2 = rest$4;
      break;
    }
    continue;
  }
  if (has_digits) {
    if (!has_dp) {
      d.decimal_point = d.digits_num;
    }
    let rest$3;
    let rest$4;
    _L$2: {
      _L$3: {
        if ((rest$2.end - rest$2.start | 0) >= 1) {
          const _x = rest$2.str.charCodeAt(rest$2.start);
          switch (_x) {
            case 101: {
              const _x$2 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
              rest$4 = _x$2;
              break _L$3;
            }
            case 69: {
              const _x$3 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
              rest$4 = _x$3;
              break _L$3;
            }
            default: {
              rest$3 = rest$2;
            }
          }
        } else {
          rest$3 = rest$2;
        }
        break _L$2;
      }
      let exp_sign = 1;
      let rest$5;
      if ((rest$4.end - rest$4.start | 0) >= 1) {
        const _x = rest$4.str.charCodeAt(rest$4.start);
        switch (_x) {
          case 43: {
            rest$5 = new _M0TPC16string10StringView(rest$4.str, rest$4.start + 1 | 0, rest$4.end);
            break;
          }
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(rest$4.str, rest$4.start + 1 | 0, rest$4.end);
            exp_sign = -1;
            rest$5 = _x$2;
            break;
          }
          default: {
            rest$5 = rest$4;
          }
        }
      } else {
        rest$5 = rest$4;
      }
      _L$4: {
        _L$5: {
          if ((rest$5.end - rest$5.start | 0) >= 1) {
            const _x = rest$5.str.charCodeAt(rest$5.start);
            if (_x >= 48 && _x <= 57) {
              const effective_dp = d.decimal_point + d.overflowed | 0;
              const exp_limit = exp_sign > 0 ? (effective_dp < 311 ? 311 - effective_dp | 0 : 0) : effective_dp > -331 ? effective_dp + 331 | 0 : 0;
              let exp = 0;
              let rest$6;
              let _tmp$2 = rest$5;
              while (true) {
                const rest$7 = _tmp$2;
                let rest$8;
                _L$6: {
                  if ((rest$7.end - rest$7.start | 0) >= 1) {
                    const _x$2 = rest$7.str.charCodeAt(rest$7.start);
                    if (_x$2 === 95) {
                      const _x$3 = new _M0TPC16string10StringView(rest$7.str, rest$7.start + 1 | 0, rest$7.end);
                      _tmp$2 = _x$3;
                      continue;
                    } else {
                      if (_x$2 >= 48 && _x$2 <= 57) {
                        const _x$3 = new _M0TPC16string10StringView(rest$7.str, rest$7.start + 1 | 0, rest$7.end);
                        if (exp < exp_limit) {
                          exp = (Math.imul(exp, 10) | 0) + (_x$2 - 48 | 0) | 0;
                          if (exp > exp_limit) {
                            exp = exp_limit;
                          }
                        }
                        _tmp$2 = _x$3;
                        continue;
                      } else {
                        rest$8 = rest$7;
                        break _L$6;
                      }
                    }
                  } else {
                    rest$8 = rest$7;
                    break _L$6;
                  }
                }
                rest$6 = rest$8;
                break;
              }
              d.decimal_point = d.decimal_point + (Math.imul(exp_sign, exp) | 0) | 0;
              rest$3 = rest$6;
            } else {
              break _L$5;
            }
          } else {
            break _L$5;
          }
          break _L$4;
        }
        const _bind = _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE();
        if (_bind.$tag === 1) {
          const _ok = _bind;
          rest$3 = _ok._0;
        } else {
          return _bind;
        }
      }
    }
    if ((rest$3.end - rest$3.start | 0) === 0) {
      _M0MPC28internal7strconv7Decimal4trim(d);
      return new _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok(d);
    } else {
      return _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE();
    }
  } else {
    return _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE();
  }
}
function _M0FPC28internal7strconv20parse__decimal__priv(str) {
  return _M0FPC28internal7strconv26parse__decimal__from__view(str);
}
function _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, negative) {
  const biased_exp = exponent - _M0FPC28internal7strconv12double__info.bias | 0;
  let bits = BigInt.asUintN(64, mantissa & BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)) - 1n));
  const exp_bits = BigInt.asUintN(64, BigInt(biased_exp & ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)));
  bits = BigInt.asUintN(64, bits | BigInt.asUintN(64, exp_bits << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)));
  if (negative) {
    bits = BigInt.asUintN(64, bits | BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)) << BigInt(_M0FPC28internal7strconv12double__info.exponent_bits & 63)));
  }
  return bits;
}
function _M0MPC28internal7strconv7Decimal17should__round__up(self, d) {
  if (d < 0 || d >= self.digits_num) {
    return false;
  }
  let _tmp;
  const _tmp$2 = self.digits;
  if ((d >>> 0 < _tmp$2.length ? _tmp$2[d] : $oob()) === 5) {
    _tmp = (d + 1 | 0) === self.digits_num;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    if (self.truncated) {
      return true;
    }
    let _tmp$3;
    if (d > 0) {
      const _tmp$4 = self.digits;
      const _tmp$5 = d - 1 | 0;
      if (2 === 0) {
        $panic();
      }
      _tmp$3 = ((_tmp$5 >>> 0 < _tmp$4.length ? _tmp$4[_tmp$5] : $oob()) % 2 | 0) !== 0;
    } else {
      _tmp$3 = false;
    }
    return _tmp$3;
  }
  const _tmp$3 = self.digits;
  return (d >>> 0 < _tmp$3.length ? _tmp$3[d] : $oob()) >= 5;
}
function _M0MPC28internal7strconv7Decimal16rounded__integer(self) {
  if (self.decimal_point > 20) {
    return 18446744073709551615n;
  }
  let _tmp = 0n;
  let _tmp$2 = 0;
  while (true) {
    const n = _tmp;
    const i = _tmp$2;
    if (i < self.decimal_point && i < self.digits_num) {
      const _tmp$3 = BigInt.asUintN(64, n * 10n);
      const _tmp$4 = self.digits;
      _tmp = BigInt.asUintN(64, _tmp$3 + _M0MPC14byte4Byte9to__int64(i >>> 0 < _tmp$4.length ? _tmp$4[i] : $oob()));
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      let n$2;
      let _tmp$3 = n;
      let _tmp$4 = i;
      while (true) {
        const n$3 = _tmp$3;
        const i$2 = _tmp$4;
        if (i$2 < self.decimal_point) {
          _tmp$3 = BigInt.asUintN(64, n$3 * 10n);
          _tmp$4 = i$2 + 1 | 0;
          continue;
        } else {
          n$2 = n$3;
          break;
        }
      }
      return _M0MPC28internal7strconv7Decimal17should__round__up(self, self.decimal_point) ? BigInt.asUintN(64, n$2 + 1n) : n$2;
    }
  }
}
function _M0MPC28internal7strconv7Decimal11new__digits(self, s) {
  const new_digits = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv19left__shift__cheats, s)._0;
  const cheat_num = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv19left__shift__cheats, s)._1;
  const _bind = cheat_num.length;
  let less;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const code_unit = cheat_num.charCodeAt(i);
      if (i >= self.digits_num) {
        less = true;
        break;
      }
      const d = code_unit - 48 | 0;
      const _tmp$2 = self.digits;
      if ((i >>> 0 < _tmp$2.length ? _tmp$2[i] : $oob()) !== d) {
        const _tmp$3 = self.digits;
        less = (i >>> 0 < _tmp$3.length ? _tmp$3[i] : $oob()) < d;
        break;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      less = false;
      break;
    }
  }
  return less ? new_digits - 1 | 0 : new_digits;
}
function _M0MPC28internal7strconv7Decimal11left__shift(self, s) {
  const new_digits = _M0MPC28internal7strconv7Decimal11new__digits(self, s);
  let read_index = self.digits_num;
  let write_index = self.digits_num + new_digits | 0;
  let acc = 0n;
  read_index = read_index - 1 | 0;
  while (true) {
    if (read_index >= 0) {
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      const d = _M0MPC14byte4Byte9to__int64(_tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob());
      acc = BigInt.asUintN(64, acc + BigInt.asUintN(64, d << BigInt(s & 63)));
      if (10n === 0n) {
        $panic();
      }
      const quo = BigInt.asUintN(64, BigInt.asIntN(64, acc) / BigInt.asIntN(64, 10n));
      const rem = Number(BigInt.asIntN(32, BigInt.asUintN(64, acc - BigInt.asUintN(64, quo * 10n)))) | 0;
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp$3 = self.digits;
        const _tmp$4 = write_index;
        if (_tmp$4 >>> 0 < _tmp$3.length) {
          _tmp$3[_tmp$4] = rem & 255;
        } else {
          $oob();
        }
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      read_index = read_index - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (BigInt.asIntN(64, acc) > BigInt.asIntN(64, 0n)) {
      if (10n === 0n) {
        $panic();
      }
      const quo = BigInt.asUintN(64, BigInt.asIntN(64, acc) / BigInt.asIntN(64, 10n));
      const rem = Number(BigInt.asIntN(32, BigInt.asUintN(64, acc - BigInt.asUintN(64, 10n * quo)))) | 0;
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        if (_tmp$2 >>> 0 < _tmp.length) {
          _tmp[_tmp$2] = rem & 255;
        } else {
          $oob();
        }
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      continue;
    } else {
      break;
    }
  }
  self.digits_num = self.digits_num + new_digits | 0;
  if (self.digits_num > self.digits.length) {
    self.digits_num = self.digits.length;
  }
  self.decimal_point = self.decimal_point + new_digits | 0;
  _M0MPC28internal7strconv7Decimal4trim(self);
}
function _M0MPC28internal7strconv7Decimal12right__shift(self, s) {
  let read_index = 0;
  let write_index = 0;
  let acc = 0n;
  while (true) {
    if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63))) === BigInt.asUintN(64, 0n)) {
      if (read_index >= self.digits_num) {
        while (true) {
          if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63))) === BigInt.asUintN(64, 0n)) {
            acc = BigInt.asUintN(64, acc * 10n);
            read_index = read_index + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break;
      }
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      const d = _tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob();
      acc = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + _M0MPC14byte4Byte9to__int64(d));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.decimal_point = self.decimal_point - (read_index - 1 | 0) | 0;
  const mask = BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(s & 63)) - 1n);
  while (true) {
    if (read_index < self.digits_num) {
      const out = BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63));
      const _tmp = self.digits;
      const _tmp$2 = write_index;
      if (_tmp$2 >>> 0 < _tmp.length) {
        _tmp[_tmp$2] = _M0MPC16uint646UInt648to__byte(out);
      } else {
        $oob();
      }
      write_index = write_index + 1 | 0;
      acc = BigInt.asUintN(64, acc & mask);
      const _tmp$3 = self.digits;
      const _tmp$4 = read_index;
      const d = _tmp$4 >>> 0 < _tmp$3.length ? _tmp$3[_tmp$4] : $oob();
      acc = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + _M0MPC14byte4Byte9to__int64(d));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (BigInt.asUintN(64, acc) > BigInt.asUintN(64, 0n)) {
      const out = BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63));
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        if (_tmp$2 >>> 0 < _tmp.length) {
          _tmp[_tmp$2] = _M0MPC16uint646UInt648to__byte(out);
        } else {
          $oob();
        }
        write_index = write_index + 1 | 0;
      } else {
        if (BigInt.asUintN(64, out) > BigInt.asUintN(64, 0n)) {
          self.truncated = true;
        }
      }
      acc = BigInt.asUintN(64, acc & mask);
      acc = BigInt.asUintN(64, acc * 10n);
      continue;
    } else {
      break;
    }
  }
  self.digits_num = write_index;
  _M0MPC28internal7strconv7Decimal4trim(self);
}
function _M0MPC28internal7strconv7Decimal11shift__priv(self, s) {
  if (self.digits_num === 0) {
    return undefined;
  }
  let s$2 = s;
  if (s$2 > 0) {
    while (true) {
      if (s$2 > 59) {
        _M0MPC28internal7strconv7Decimal11left__shift(self, 59);
        s$2 = s$2 - 59 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC28internal7strconv7Decimal11left__shift(self, s$2);
  }
  if (s$2 < 0) {
    while (true) {
      if (s$2 < -59) {
        _M0MPC28internal7strconv7Decimal12right__shift(self, 59);
        s$2 = s$2 + 59 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC28internal7strconv7Decimal12right__shift(self, -s$2 | 0);
    return;
  } else {
    return;
  }
}
function _M0MPC28internal7strconv7Decimal16to__double__priv(self) {
  let exponent = 0;
  let mantissa = 0n;
  const effective_dp = self.decimal_point + self.overflowed | 0;
  if (self.digits_num === 0 || effective_dp < -330) {
    mantissa = 0n;
    exponent = _M0FPC28internal7strconv12double__info.bias;
    const bits = _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, self.negative);
    return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok($i64_reinterpret_f64(bits));
  }
  if (self.decimal_point > 310) {
    const _bind = _M0FPC28internal7strconv10range__errGuE();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
  }
  self.decimal_point = self.decimal_point + self.overflowed | 0;
  while (true) {
    if (self.decimal_point > 0) {
      let n = 0;
      if (self.decimal_point >= _M0MPC15array13ReadOnlyArray6lengthGiE(_M0FPC28internal7strconv6powtab)) {
        n = 60;
      } else {
        n = _M0MPC15array13ReadOnlyArray2atGiE(_M0FPC28internal7strconv6powtab, self.decimal_point);
      }
      _M0MPC28internal7strconv7Decimal11shift__priv(self, -n | 0);
      exponent = exponent + n | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    let _tmp;
    if (self.decimal_point < 0) {
      _tmp = true;
    } else {
      let _tmp$2;
      if (self.decimal_point === 0) {
        const _tmp$3 = self.digits;
        _tmp$2 = (0 >>> 0 < _tmp$3.length ? _tmp$3[0] : $oob()) < 5;
      } else {
        _tmp$2 = false;
      }
      _tmp = _tmp$2;
    }
    if (_tmp) {
      let n = 0;
      if ((-self.decimal_point | 0) >= _M0MPC15array13ReadOnlyArray6lengthGiE(_M0FPC28internal7strconv6powtab)) {
        n = 60;
      } else {
        n = _M0MPC15array13ReadOnlyArray2atGiE(_M0FPC28internal7strconv6powtab, -self.decimal_point | 0);
      }
      _M0MPC28internal7strconv7Decimal11shift__priv(self, n);
      exponent = exponent - n | 0;
      continue;
    } else {
      break;
    }
  }
  exponent = exponent - 1 | 0;
  if (exponent < (_M0FPC28internal7strconv12double__info.bias + 1 | 0)) {
    const n = (_M0FPC28internal7strconv12double__info.bias + 1 | 0) - exponent | 0;
    _M0MPC28internal7strconv7Decimal11shift__priv(self, -n | 0);
    exponent = exponent + n | 0;
  }
  if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
    const _bind = _M0FPC28internal7strconv10range__errGuE();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
  }
  _M0MPC28internal7strconv7Decimal11shift__priv(self, _M0FPC28internal7strconv12double__info.mantissa_bits + 1 | 0);
  mantissa = _M0MPC28internal7strconv7Decimal16rounded__integer(self);
  if (BigInt.asUintN(64, mantissa) === BigInt.asUintN(64, BigInt.asUintN(64, 2n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) {
    mantissa = BigInt.asUintN(64, BigInt.asIntN(64, mantissa) >> BigInt(1 & 63));
    exponent = exponent + 1 | 0;
    if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
      const _bind = _M0FPC28internal7strconv10range__errGuE();
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _ok._0;
      } else {
        return _bind;
      }
    }
  }
  if (BigInt.asUintN(64, BigInt.asUintN(64, mantissa & BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) === BigInt.asUintN(64, 0n)) {
    exponent = _M0FPC28internal7strconv12double__info.bias;
  }
  const bits = _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, self.negative);
  return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok($i64_reinterpret_f64(bits));
}
function _M0FPC28internal7strconv17pow10__fast__path(exponent) {
  return _M0MPC15array13ReadOnlyArray2atGdE(_M0FPC28internal7strconv5table, exponent & 31);
}
function _M0MPC28internal7strconv6Number14is__fast__path(self) {
  return BigInt.asIntN(64, _M0FPC28internal7strconv25min__exponent__fast__path) <= BigInt.asIntN(64, self.exponent) && (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, _M0FPC28internal7strconv36max__exponent__disguised__fast__path) && (BigInt.asUintN(64, self.mantissa) <= BigInt.asUintN(64, _M0FPC28internal7strconv25max__mantissa__fast__path) && !self.many_digits));
}
function _M0MPC28internal7strconv6Number15try__fast__path(self) {
  if (_M0MPC28internal7strconv6Number14is__fast__path(self)) {
    let value;
    if (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, _M0FPC28internal7strconv25max__exponent__fast__path)) {
      const value$2 = $f64_convert_i64_u(BigInt.asUintN(64, self.mantissa));
      value = BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 0n) ? value$2 / _M0FPC28internal7strconv17pow10__fast__path(-(Number(BigInt.asIntN(32, self.exponent)) | 0) | 0) : value$2 * _M0FPC28internal7strconv17pow10__fast__path(Number(BigInt.asIntN(32, self.exponent)) | 0);
    } else {
      const shift = BigInt.asUintN(64, self.exponent - _M0FPC28internal7strconv25max__exponent__fast__path);
      const _bind = _M0FPC28internal7strconv12checked__mul(self.mantissa, _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv10int__pow10, Number(BigInt.asIntN(32, shift)) | 0));
      if (_bind === undefined) {
        return _M0DTPC16option6OptionGdE4None__;
      } else {
        const _Some = _bind;
        const _mantissa = _Some;
        if (BigInt.asUintN(64, _mantissa) > BigInt.asUintN(64, _M0FPC28internal7strconv25max__mantissa__fast__path)) {
          return _M0DTPC16option6OptionGdE4None__;
        }
        value = $f64_convert_i64_u(BigInt.asUintN(64, _mantissa)) * _M0FPC28internal7strconv17pow10__fast__path(Number(BigInt.asIntN(32, _M0FPC28internal7strconv25max__exponent__fast__path)) | 0);
      }
    }
    if (self.negative) {
      value = -value;
    }
    return new _M0DTPC16option6OptionGdE4Some(value);
  } else {
    return _M0DTPC16option6OptionGdE4None__;
  }
}
function _M0FPC28internal7strconv13parse__double(str) {
  if (!_M0MPC16string10StringView9is__empty(str)) {
    if (_M0FPC28internal7strconv17check__underscore(str)) {
      const _bind = _M0FPC28internal7strconv13parse__number(str);
      let _bind$2;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _bind$2 = _ok._0;
      } else {
        return _bind;
      }
      if (_bind$2 === undefined) {
        return _M0FPC28internal7strconv15parse__inf__nan(str);
      } else {
        const _Some = _bind$2;
        const _num = _Some;
        const _bind$3 = _M0MPC28internal7strconv6Number15try__fast__path(_num);
        if (_bind$3.$tag === 1) {
          const _Some$2 = _bind$3;
          const _value = _Some$2._0;
          return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_value);
        } else {
          const fast = _num.many_digits ? _M0FPC16double14not__a__number : _M0FPC28internal7strconv20try__eisel__lemire64(_num.mantissa, _num.exponent, _num.negative);
          if (_M0MPC16double6Double7is__nan(fast)) {
            const _bind$4 = _M0FPC28internal7strconv20parse__decimal__priv(str);
            let _tmp;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _tmp = _ok._0;
            } else {
              return _bind$4;
            }
            return _M0MPC28internal7strconv7Decimal16to__double__priv(_tmp);
          } else {
            return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(fast);
          }
        }
      }
    } else {
      return _M0FPC28internal7strconv11syntax__errGdE();
    }
  } else {
    return _M0FPC28internal7strconv11syntax__errGdE();
  }
}
function _M0IPC14json10ParseErrorPC15debug5Debug8to__reprGRPC14json10ParseErrorE(_x_813) {
  switch (_x_813.$tag) {
    case 8: {
      const _InvalidChar = _x_813;
      const _$42$arg_814 = _InvalidChar._0;
      const _$42$arg_815 = _InvalidChar._1;
      return _M0MPC15debug4Repr4ctor("InvalidChar", [{ _0: undefined, _1: _M0IPC14json8PositionPC15debug5Debug8to__repr(_$42$arg_814) }, { _0: undefined, _1: _M0IPC14char4CharPC15debug5Debug8to__repr(_$42$arg_815) }]);
    }
    case 7: {
      return _M0MPC15debug4Repr4ctor("InvalidEof", []);
    }
    case 6: {
      const _InvalidNumber = _x_813;
      const _$42$arg_816 = _InvalidNumber._0;
      const _$42$arg_817 = _InvalidNumber._1;
      return _M0MPC15debug4Repr4ctor("InvalidNumber", [{ _0: undefined, _1: _M0IPC14json8PositionPC15debug5Debug8to__repr(_$42$arg_816) }, { _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_$42$arg_817) }]);
    }
    case 5: {
      const _InvalidIdentEscape = _x_813;
      const _$42$arg_818 = _InvalidIdentEscape._0;
      return _M0MPC15debug4Repr4ctor("InvalidIdentEscape", [{ _0: undefined, _1: _M0IPC14json8PositionPC15debug5Debug8to__repr(_$42$arg_818) }]);
    }
    default: {
      return _M0MPC15debug4Repr4ctor("DepthLimitExceeded", []);
    }
  }
}
function _M0IPC14json8PositionPC15debug5Debug8to__repr(_x_774) {
  const _bind = [{ _0: "line", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_x_774.line) }, { _0: "column", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_x_774.column) }];
  return _M0MPC15debug4Repr6record(_M0MPB3Map3MapGsRPC15debug4ReprE(new _M0TPB9ArrayViewGUsRPC15debug4ReprEE(_bind, 0, 2), undefined));
}
function _M0FPC14json20offset__to__position(input, offset) {
  const _bind = _M0MPC16string10StringView11code__units(input);
  const _bind$2 = _bind.end - _bind.start | 0;
  if (offset < 0 || offset > _bind$2) {
    $panic();
  }
  const _bind$3 = new _M0TPB9ArrayViewGkE(_bind.buf, _bind.start, offset + _bind.start | 0);
  const _bind$4 = _bind$3.end - _bind$3.start | 0;
  let _tmp = 0;
  let _tmp$2 = 1;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp;
    const line = _tmp$2;
    const column = _tmp$3;
    if (_ < _bind$4) {
      const code_unit = _bind$3.buf[_bind$3.start + _ | 0];
      if (_M0IPC16uint166UInt16PB2Eq5equal(code_unit, 10)) {
        _tmp = _ + 1 | 0;
        _tmp$2 = line + 1 | 0;
        _tmp$3 = 0;
        continue;
      } else {
        _tmp = _ + 1 | 0;
        _tmp$3 = column + 1 | 0;
        continue;
      }
    } else {
      return new _M0TPC14json8Position(line, column);
    }
  }
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGiE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21lex__skip__whitespace(ctx) {
  const end = ctx.end_offset;
  let _tmp;
  let _tmp$2 = ctx.offset;
  _L: while (true) {
    const offset = _tmp$2;
    if (offset >= end) {
      _tmp = offset;
      break;
    }
    _L$2: {
      const _bind = ctx.input;
      const _bind$2 = _bind.str.charCodeAt(_bind.start + offset | 0);
      switch (_bind$2) {
        case 32: {
          break _L$2;
        }
        case 9: {
          break _L$2;
        }
        case 13: {
          break _L$2;
        }
        case 10: {
          break _L$2;
        }
        default: {
          _tmp = offset;
          break _L;
        }
      }
    }
    _tmp$2 = offset + 1 | 0;
    continue;
  }
  ctx.offset = _tmp;
}
function _M0MPC14json12ParseContext4make(input) {
  return new _M0TPC14json12ParseContext(0, input, input.end - input.start | 0);
}
function _M0MPC14json12ParseContext19expect__ascii__char(ctx, c) {
  if (ctx.offset < ctx.end_offset) {
    const _bind = ctx.input;
    const c1 = _bind.str.charCodeAt(_bind.start + ctx.offset | 0);
    ctx.offset = ctx.offset + 1 | 0;
    return c !== c1 ? _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1) : new _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(undefined);
  } else {
    return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  }
}
function _M0FPC14json12checked__mul(a, b) {
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 0n) || BigInt.asUintN(64, b) === BigInt.asUintN(64, 0n)) {
    return _M0FPC14json12checked__mulN6constrS1891;
  }
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 1n)) {
    return b;
  }
  if (BigInt.asUintN(64, b) === BigInt.asUintN(64, 1n)) {
    return a;
  }
  if ($i64_clz(b) === 0 || $i64_clz(a) === 0) {
    return undefined;
  }
  if (b === 0n) {
    $panic();
  }
  const quotient = BigInt.asUintN(64, BigInt.asUintN(64, 18446744073709551615n) / BigInt.asUintN(64, b));
  return BigInt.asUintN(64, a) > BigInt.asUintN(64, quotient) ? undefined : BigInt.asUintN(64, a * b);
}
function _M0FPC14json23json__pow10__fast__path(exponent) {
  return _M0MPC15array13ReadOnlyArray2atGdE(_M0FPC14json12pow10__table, exponent & 31);
}
function _M0MPC14json14JsonNumberScan17try__fast__double(self) {
  if (BigInt.asUintN(64, self.mantissa) === BigInt.asUintN(64, 0n)) {
    return self.negative ? -0 : 0;
  }
  if (self.many_digits || (BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 18446744073709551594n) || (BigInt.asIntN(64, self.exponent) > BigInt.asIntN(64, 37n) || BigInt.asUintN(64, self.mantissa) > BigInt.asUintN(64, 9007199254740992n)))) {
    return _M0FPC16double14not__a__number;
  }
  let value;
  if (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, 22n)) {
    const value$2 = $f64_convert_i64_u(BigInt.asUintN(64, self.mantissa));
    value = BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 0n) ? value$2 / _M0FPC14json23json__pow10__fast__path(-(Number(BigInt.asIntN(32, self.exponent)) | 0) | 0) : value$2 * _M0FPC14json23json__pow10__fast__path(Number(BigInt.asIntN(32, self.exponent)) | 0);
  } else {
    const shift = BigInt.asUintN(64, self.exponent - 22n);
    const _bind = _M0FPC14json12checked__mul(self.mantissa, _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC14json17int__pow10__table, Number(BigInt.asIntN(32, shift)) | 0));
    if (_bind === undefined) {
      return _M0FPC16double14not__a__number;
    } else {
      const _Some = _bind;
      const _mantissa = _Some;
      if (BigInt.asUintN(64, _mantissa) > BigInt.asUintN(64, 9007199254740992n)) {
        return _M0FPC16double14not__a__number;
      }
      value = $f64_convert_i64_u(BigInt.asUintN(64, _mantissa)) * _M0FPC14json23json__pow10__fast__path(22);
    }
  }
  return self.negative ? -value : value;
}
function _M0MPC14json12ParseContext17lex__integer__end(ctx, start, end) {
  const _bind = ctx.input;
  const negative = _M0IPC16uint166UInt16PB2Eq5equal(_bind.str.charCodeAt(_bind.start + start | 0), 45);
  const number_start = negative ? start + 1 | 0 : start;
  let _tmp = number_start;
  let _tmp$2 = 0n;
  while (true) {
    const i = _tmp;
    const acc = _tmp$2;
    if (i >= end) {
      const value = negative ? BigInt.asUintN(64, -acc) : acc;
      const _bind$2 = $f64_convert_i64(BigInt.asIntN(64, value));
      const _bind$3 = undefined;
      return new _M0TPC14json11LexedNumber(_bind$3, _bind$2);
    }
    const _bind$2 = ctx.input;
    const digit = BigInt.asUintN(64, BigInt(_bind$2.str.charCodeAt(_bind$2.start + i | 0) - 48 | 0));
    if (10n === 0n) {
      $panic();
    }
    if (BigInt.asIntN(64, acc) > BigInt.asIntN(64, BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, 9007199254740991n - digit)) / BigInt.asIntN(64, 10n)))) {
      const s = _M0MPC16string10StringView12view_2einner(ctx.input, start, end);
      let _try_err;
      _L: {
        const _bind$3 = _M0FPC28internal7strconv13parse__double(s);
        let value;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          value = _ok._0;
        } else {
          const _err = _bind$3;
          _try_err = _err._0;
          break _L;
        }
        const _bind$4 = s;
        return new _M0TPC14json11LexedNumber(_bind$4, value);
      }
      let _tmp$3;
      if (negative) {
        const _bind$3 = s;
        _tmp$3 = new _M0TPC14json11LexedNumber(_bind$3, _M0FPC16double13neg__infinity);
      } else {
        const _bind$3 = s;
        _tmp$3 = new _M0TPC14json11LexedNumber(_bind$3, _M0FPC16double8infinity);
      }
      return _tmp$3;
    }
    _tmp = i + 1 | 0;
    _tmp$2 = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + digit);
    continue;
  }
}
function _M0MPC14json12ParseContext18scan__json__number(ctx, start, end) {
  const _bind = ctx.input;
  const negative = _M0IPC16uint166UInt16PB2Eq5equal(_bind.str.charCodeAt(_bind.start + start | 0), 45);
  let has_decimal = false;
  let has_exponent = false;
  let exponent_negative = false;
  let exponent_part = 0n;
  let fractional_digits = 0;
  let mantissa = 0n;
  let significant_digits = 0;
  let seen_nonzero = false;
  const _bind$2 = negative ? start + 1 | 0 : start;
  let _tmp = _bind$2;
  while (true) {
    const i = _tmp;
    if (i < end) {
      _L: {
        _L$2: {
          const _bind$3 = ctx.input;
          const _bind$4 = _bind$3.str.charCodeAt(_bind$3.start + i | 0);
          if (_bind$4 >= 48 && _bind$4 <= 57) {
            const digit = _bind$4 - 48 | 0;
            if (has_exponent) {
              if (BigInt.asIntN(64, exponent_part) < BigInt.asIntN(64, 100000n)) {
                const next_exponent = BigInt.asUintN(64, BigInt.asUintN(64, exponent_part * 10n) + BigInt.asUintN(64, BigInt(digit)));
                exponent_part = BigInt.asIntN(64, next_exponent) > BigInt.asIntN(64, 100000n) ? 100000n : next_exponent;
              }
            } else {
              if (has_decimal) {
                fractional_digits = fractional_digits + 1 | 0;
              }
              if (digit !== 0 || seen_nonzero) {
                seen_nonzero = true;
                significant_digits = significant_digits + 1 | 0;
                if (significant_digits <= 19) {
                  mantissa = BigInt.asUintN(64, BigInt.asUintN(64, mantissa * 10n) + BigInt.asUintN(64, BigInt(digit >>> 0)));
                }
              }
            }
          } else {
            if (_bind$4 === 46) {
              has_decimal = true;
            } else {
              if (_bind$4 === 101) {
                break _L$2;
              } else {
                if (_bind$4 === 69) {
                  break _L$2;
                }
              }
            }
          }
          break _L;
        }
        has_exponent = true;
        if ((i + 1 | 0) < end) {
          const _bind$3 = ctx.input;
          const next = _bind$3.str.charCodeAt(_bind$3.start + (i + 1 | 0) | 0);
          if (_M0IPC16uint166UInt16PB2Eq5equal(next, 45)) {
            exponent_negative = true;
          }
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const exponent_part$2 = exponent_negative ? BigInt.asUintN(64, -exponent_part) : exponent_part;
  return new _M0TPC14json14JsonNumberScan(negative, !has_decimal && !has_exponent, mantissa, BigInt.asUintN(64, exponent_part$2 - BigInt.asUintN(64, BigInt(fractional_digits))), significant_digits > 19);
}
function _M0MPC14json12ParseContext16lex__number__end(ctx, start, end) {
  const scan = _M0MPC14json12ParseContext18scan__json__number(ctx, start, end);
  if (scan.is_integer) {
    if (!scan.many_digits && (BigInt.asUintN(64, scan.exponent) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, scan.mantissa) <= BigInt.asUintN(64, 9007199254740991n))) {
      const v = $f64_convert_i64(BigInt.asIntN(64, scan.mantissa));
      const value = scan.negative ? -v : v;
      const _bind = undefined;
      return new _M0TPC14json11LexedNumber(_bind, value);
    }
    return _M0MPC14json12ParseContext17lex__integer__end(ctx, start, end);
  }
  const fast = _M0MPC14json14JsonNumberScan17try__fast__double(scan);
  if (!_M0MPC16double6Double7is__nan(fast)) {
    const _bind = undefined;
    return new _M0TPC14json11LexedNumber(_bind, fast);
  }
  if (!scan.many_digits) {
    const fast$2 = _M0FPC28internal7strconv20try__eisel__lemire64(scan.mantissa, scan.exponent, scan.negative);
    if (!_M0MPC16double6Double7is__nan(fast$2)) {
      const _bind = undefined;
      return new _M0TPC14json11LexedNumber(_bind, fast$2);
    }
  }
  const s = _M0MPC16string10StringView12view_2einner(ctx.input, start, end);
  let _try_err;
  _L: {
    const _bind = _M0FPC28internal7strconv13parse__double(s);
    let d;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      d = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    const _bind$2 = undefined;
    return new _M0TPC14json11LexedNumber(_bind$2, d);
  }
  if (scan.negative) {
    const _bind = s;
    return new _M0TPC14json11LexedNumber(_bind, _M0FPC16double13neg__infinity);
  } else {
    const _bind = s;
    return new _M0TPC14json11LexedNumber(_bind, _M0FPC16double8infinity);
  }
}
function _M0MPC14json12ParseContext10read__char(ctx) {
  if (ctx.offset < ctx.end_offset) {
    const _bind = ctx.input;
    const c1 = _bind.str.charCodeAt(_bind.start + ctx.offset | 0);
    ctx.offset = ctx.offset + 1 | 0;
    if (c1 >= 55296 && c1 <= 56319) {
      if (ctx.offset < ctx.end_offset) {
        const _bind$2 = ctx.input;
        const c2 = _bind$2.str.charCodeAt(_bind$2.start + ctx.offset | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          ctx.offset = ctx.offset + 1 | 0;
          const c3 = ((c1 << 10) + c2 | 0) - 56613888 | 0;
          return c3;
        }
      }
    }
    return c1;
  } else {
    return -1;
  }
}
function _M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start) {
  while (true) {
    const _bind = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind === -1) {
      return _M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset);
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x >= 48 && _x <= 57) {
        continue;
      } else {
        ctx.offset = ctx.offset - 1 | 0;
        return _M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset);
      }
    }
  }
}
function _M0MPC14json12ParseContext28lex__decimal__exponent__sign(ctx, start) {
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x >= 48 && _x <= 57) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start));
    } else {
      ctx.offset = ctx.offset - 1 | 0;
      return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
    }
  }
}
function _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start) {
  _L: {
    const _bind = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind === -1) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x === 43) {
        break _L;
      } else {
        if (_x === 45) {
          break _L;
        } else {
          if (_x >= 48 && _x <= 57) {
            return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start));
          } else {
            ctx.offset = ctx.offset - 1 | 0;
            return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
          }
        }
      }
    }
  }
  const _bind = _M0MPC14json12ParseContext28lex__decimal__exponent__sign(ctx, start);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext22lex__decimal__fraction(ctx, start) {
  while (true) {
    _L: {
      const _bind = _M0MPC14json12ParseContext10read__char(ctx);
      if (_bind === -1) {
        return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
      } else {
        const _Some = _bind;
        const _x = _Some;
        if (_x === 101) {
          break _L;
        } else {
          if (_x === 69) {
            break _L;
          } else {
            if (_x >= 48 && _x <= 57) {
              continue;
            } else {
              ctx.offset = ctx.offset - 1 | 0;
              return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
            }
          }
        }
      }
    }
    const _bind = _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
  }
}
function _M0MPC14json12ParseContext19lex__decimal__point(ctx, start) {
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    return _x >= 48 && _x <= 57 ? _M0MPC14json12ParseContext22lex__decimal__fraction(ctx, start) : _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
  }
}
function _M0MPC14json12ParseContext21lex__decimal__integer(ctx, start) {
  while (true) {
    _L: {
      const _bind = _M0MPC14json12ParseContext10read__char(ctx);
      if (_bind === -1) {
        return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
      } else {
        const _Some = _bind;
        const _x = _Some;
        if (_x === 46) {
          const _bind$2 = _M0MPC14json12ParseContext19lex__decimal__point(ctx, start);
          let _tmp;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _tmp = _ok._0;
          } else {
            return _bind$2;
          }
          return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
        } else {
          if (_x === 101) {
            break _L;
          } else {
            if (_x === 69) {
              break _L;
            } else {
              if (_x >= 48 && _x <= 57) {
                continue;
              } else {
                ctx.offset = ctx.offset - 1 | 0;
                return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
              }
            }
          }
        }
      }
    }
    const _bind = _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
  }
}
function _M0MPC14json12ParseContext16lex__hex__digits(ctx, n) {
  let _tmp;
  let _tmp$2 = 0;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$2;
    const r = _tmp$3;
    if (_ < n) {
      const _bind = _M0MPC14json12ParseContext10read__char(ctx);
      let d;
      if (_bind === -1) {
        return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
      } else {
        const _Some = _bind;
        const _x = _Some;
        if (_x >= 48 && _x <= 57) {
          d = _x - 48 | 0;
        } else {
          if (_x >= 65 && _x <= 70) {
            d = (_x - 65 | 0) + 10 | 0;
          } else {
            if (_x >= 97 && _x <= 102) {
              d = (_x - 97 | 0) + 10 | 0;
            } else {
              const _bind$2 = _M0MPC14json12ParseContext21invalid__char_2einnerGiE(ctx, -_M0MPC14char4Char10utf16__len(_x) | 0);
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                d = _ok._0;
              } else {
                return _bind$2;
              }
            }
          }
        }
      }
      _tmp$2 = _ + 1 | 0;
      _tmp$3 = r << 4 | d;
      continue;
    } else {
      _tmp = r;
      break;
    }
  }
  return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start) {
  return _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, escape_start - ctx.offset | 0);
}
function _M0MPC14json12ParseContext17lex__string__slowN5flushS353(_env, end) {
  const ctx = _env._2;
  const start = _env._1;
  const buf = _env._0;
  if (start.val > 0 && end > start.val) {
    _M0IPB13StringBuilderPB6Logger11write__view(buf, _M0MPC16string10StringView11sub_2einner(ctx.input, start.val, end));
    return;
  } else {
    return;
  }
}
function _M0MPC14json12ParseContext17lex__string__slow(ctx) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const start = new _M0TPB8MutLocalGiE(ctx.offset);
  const _env = { _0: buf, _1: start, _2: ctx };
  _L: while (true) {
    const _bind = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind === -1) {
      return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
    } else {
      const _Some = _bind;
      const _x = _Some;
      switch (_x) {
        case 34: {
          _M0MPC14json12ParseContext17lex__string__slowN5flushS353(_env, ctx.offset - 1 | 0);
          break _L;
        }
        case 92: {
          _M0MPC14json12ParseContext17lex__string__slowN5flushS353(_env, ctx.offset - 1 | 0);
          const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
          if (_bind$2 === -1) {
            return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
          } else {
            const _Some$2 = _bind$2;
            const _x$2 = _Some$2;
            switch (_x$2) {
              case 98: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 8);
                break;
              }
              case 102: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 12);
                break;
              }
              case 110: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 10);
                break;
              }
              case 114: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 13);
                break;
              }
              case 116: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 9);
                break;
              }
              case 34: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
                break;
              }
              case 92: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 92);
                break;
              }
              case 47: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 47);
                break;
              }
              case 117: {
                const escape_start = ctx.offset - 2 | 0;
                const _bind$3 = _M0MPC14json12ParseContext16lex__hex__digits(ctx, 4);
                let c;
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  c = _ok._0;
                } else {
                  return _bind$3;
                }
                if (c >= 55296 && c <= 56319) {
                  const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$4 === -1) {
                    return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$3 = _bind$4;
                    const _x$3 = _Some$3;
                    if (_x$3 === 92) {
                    } else {
                      const _bind$5 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                      if (_bind$5.$tag === 1) {
                        const _ok = _bind$5;
                        _ok._0;
                      } else {
                        return _bind$5;
                      }
                    }
                  }
                  const _bind$5 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$5 === -1) {
                    return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$3 = _bind$5;
                    const _x$3 = _Some$3;
                    if (_x$3 === 117) {
                    } else {
                      const _bind$6 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                      if (_bind$6.$tag === 1) {
                        const _ok = _bind$6;
                        _ok._0;
                      } else {
                        return _bind$6;
                      }
                    }
                  }
                  const _bind$6 = _M0MPC14json12ParseContext16lex__hex__digits(ctx, 4);
                  let c2;
                  if (_bind$6.$tag === 1) {
                    const _ok = _bind$6;
                    c2 = _ok._0;
                  } else {
                    return _bind$6;
                  }
                  if (c2 >= 56320 && c2 <= 57343) {
                    const combined = ((c << 10) + c2 | 0) - 56613888 | 0;
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, combined);
                  } else {
                    const _bind$7 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                    if (_bind$7.$tag === 1) {
                      const _ok = _bind$7;
                      _ok._0;
                    } else {
                      return _bind$7;
                    }
                  }
                } else {
                  if (c >= 56320 && c <= 57343) {
                    const _bind$4 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                    if (_bind$4.$tag === 1) {
                      const _ok = _bind$4;
                      _ok._0;
                    } else {
                      return _bind$4;
                    }
                  } else {
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, c);
                  }
                }
                break;
              }
              default: {
                const _bind$4 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -_M0MPC14char4Char10utf16__len(_x$2) | 0);
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
              }
            }
          }
          start.val = ctx.offset;
          break;
        }
        default: {
          if (_x < 32) {
            const _bind$3 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _ok._0;
            } else {
              return _bind$3;
            }
          } else {
            continue _L;
          }
        }
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_M0MPB13StringBuilder10to__string(buf));
}
function _M0MPC14json12ParseContext11lex__string(ctx) {
  const string_start = ctx.offset;
  const _bind = ctx.end_offset;
  let _tmp = string_start;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const _bind$2 = ctx.input;
      const c = _bind$2.str.charCodeAt(_bind$2.start + i | 0);
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, 34)) {
        ctx.offset = i + 1 | 0;
        return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_M0MPC16string10StringView9to__owned(_M0MPC16string10StringView12view_2einner(ctx.input, string_start, i)));
      } else {
        if (_M0IPC16uint166UInt16PB2Eq5equal(c, 92)) {
          const _bind$3 = _M0MPC14json12ParseContext17lex__string__slow(ctx);
          let _tmp$2;
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _tmp$2 = _ok._0;
          } else {
            return _bind$3;
          }
          return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_tmp$2);
        } else {
          if (c < 32) {
            ctx.offset = i + 1 | 0;
            const _bind$3 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _ok._0;
            } else {
              return _bind$3;
            }
          }
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
}
function _M0MPC14json12ParseContext9lex__zero(ctx, start) {
  _L: {
    const _bind = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind === -1) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x === 46) {
        return _M0MPC14json12ParseContext19lex__decimal__point(ctx, start);
      } else {
        if (_x === 101) {
          break _L;
        } else {
          if (_x === 69) {
            break _L;
          } else {
            if (_x >= 48 && _x <= 57) {
              ctx.offset = ctx.offset - 1 | 0;
              return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
            } else {
              ctx.offset = ctx.offset - 1 | 0;
              return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
            }
          }
        }
      }
    }
  }
  return _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
}
function _M0MPC14json12ParseContext10lex__value(ctx, allow_rbracket) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === 123) {
      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6LBrace__);
    } else {
      if (_x === 91) {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8LBracket__);
      } else {
        if (_x === 93) {
          if (allow_rbracket) {
            return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8RBracket__);
          } else {
            return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
          }
        } else {
          if (_x === 110) {
            const _bind$2 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 117);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
            const _bind$3 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _ok._0;
            } else {
              return _bind$3;
            }
            const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _ok._0;
            } else {
              return _bind$4;
            }
            return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token4Null__);
          } else {
            if (_x === 116) {
              const _bind$2 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 114);
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _ok._0;
              } else {
                return _bind$2;
              }
              const _bind$3 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 117);
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _ok._0;
              } else {
                return _bind$3;
              }
              const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 101);
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _ok._0;
              } else {
                return _bind$4;
              }
              return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token4True__);
            } else {
              if (_x === 102) {
                const _bind$2 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 97);
                if (_bind$2.$tag === 1) {
                  const _ok = _bind$2;
                  _ok._0;
                } else {
                  return _bind$2;
                }
                const _bind$3 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  _ok._0;
                } else {
                  return _bind$3;
                }
                const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 115);
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
                const _bind$5 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 101);
                if (_bind$5.$tag === 1) {
                  const _ok = _bind$5;
                  _ok._0;
                } else {
                  return _bind$5;
                }
                return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5False__);
              } else {
                if (_x === 45) {
                  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$2 === -1) {
                    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$2 = _bind$2;
                    const _x$2 = _Some$2;
                    if (_x$2 === 48) {
                      const _bind$3 = _M0MPC14json12ParseContext9lex__zero(ctx, ctx.offset - 2 | 0);
                      let _bind$4;
                      if (_bind$3.$tag === 1) {
                        const _ok = _bind$3;
                        _bind$4 = _ok._0;
                      } else {
                        return _bind$3;
                      }
                      const _n = _bind$4.value;
                      const _repr = _bind$4.repr;
                      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                    } else {
                      if (_x$2 >= 49 && _x$2 <= 57) {
                        const _bind$3 = _M0MPC14json12ParseContext21lex__decimal__integer(ctx, ctx.offset - 2 | 0);
                        let _bind$4;
                        if (_bind$3.$tag === 1) {
                          const _ok = _bind$3;
                          _bind$4 = _ok._0;
                        } else {
                          return _bind$3;
                        }
                        const _n = _bind$4.value;
                        const _repr = _bind$4.repr;
                        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                      } else {
                        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
                      }
                    }
                  }
                } else {
                  if (_x === 48) {
                    const _bind$2 = _M0MPC14json12ParseContext9lex__zero(ctx, ctx.offset - 1 | 0);
                    let _bind$3;
                    if (_bind$2.$tag === 1) {
                      const _ok = _bind$2;
                      _bind$3 = _ok._0;
                    } else {
                      return _bind$2;
                    }
                    const _n = _bind$3.value;
                    const _repr = _bind$3.repr;
                    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                  } else {
                    if (_x >= 49 && _x <= 57) {
                      const _bind$2 = _M0MPC14json12ParseContext21lex__decimal__integer(ctx, ctx.offset - 1 | 0);
                      let _bind$3;
                      if (_bind$2.$tag === 1) {
                        const _ok = _bind$2;
                        _bind$3 = _ok._0;
                      } else {
                        return _bind$2;
                      }
                      const _n = _bind$3.value;
                      const _repr = _bind$3.repr;
                      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                    } else {
                      if (_x === 34) {
                        const _bind$2 = _M0MPC14json12ParseContext11lex__string(ctx);
                        let s;
                        if (_bind$2.$tag === 1) {
                          const _ok = _bind$2;
                          s = _ok._0;
                        } else {
                          return _bind$2;
                        }
                        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
                      } else {
                        const shift = -_M0MPC14char4Char10utf16__len(_x) | 0;
                        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, shift);
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
function _M0MPC14json12ParseContext24lex__after__array__value(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 93: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8RBracket__);
      }
      case 44: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5Comma__);
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext25lex__after__object__value(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6RBrace__);
      }
      case 44: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5Comma__);
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext26lex__after__property__name(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === 58) {
      return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(undefined);
    } else {
      return _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
    }
  }
}
function _M0MPC14json12ParseContext19lex__property__name(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6RBrace__);
      }
      case 34: {
        const _bind$2 = _M0MPC14json12ParseContext11lex__string(ctx);
        let s;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          s = _ok._0;
        } else {
          return _bind$2;
        }
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext20lex__property__name2(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === 34) {
      const _bind$2 = _M0MPC14json12ParseContext11lex__string(ctx);
      let s;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        s = _ok._0;
      } else {
        return _bind$2;
      }
      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
    } else {
      return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
    }
  }
}
function _M0MPC14json12ParseContext12parse__value(ctx, remaining_available_depth) {
  const _bind = _M0MPC14json12ParseContext10lex__value(ctx, false);
  let tok;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    tok = _ok._0;
  } else {
    return _bind;
  }
  return _M0MPC14json12ParseContext13parse__value2(ctx, tok, remaining_available_depth);
}
function _M0MPC14json12ParseContext13parse__value2(ctx, tok, remaining_available_depth) {
  _L: {
    switch (tok.$tag) {
      case 0: {
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0FPB4null);
      }
      case 1: {
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json7boolean(true));
      }
      case 2: {
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json7boolean(false));
      }
      case 3: {
        const _Number = tok;
        const _n = _Number._0;
        const _repr = _Number._1;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json6number(_n, _repr));
      }
      case 4: {
        const _String = tok;
        const _s = _String._0;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json6string(_s));
      }
      case 5: {
        return _M0MPC14json12ParseContext13parse__object(ctx, remaining_available_depth);
      }
      case 7: {
        return _M0MPC14json12ParseContext12parse__array(ctx, remaining_available_depth);
      }
      case 8: {
        break _L;
      }
      case 6: {
        break _L;
      }
      default: {
        break _L;
      }
    }
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0FPC15abort5abortGsE("unreachable"));
}
function _M0MPC14json12ParseContext12parse__array(ctx, remaining_available_depth) {
  if (remaining_available_depth <= 0) {
    return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__);
  }
  const child_remaining_available_depth = remaining_available_depth - 1 | 0;
  const vec = [];
  let _tmp;
  const _bind = _M0MPC14json12ParseContext10lex__value(ctx, true);
  let _tmp$2;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp$2 = _ok._0;
  } else {
    return _bind;
  }
  let _tmp$3 = _tmp$2;
  _L: while (true) {
    const x = _tmp$3;
    if (x.$tag === 8) {
      _tmp = _M0MPC14json4Json5array(vec);
      break;
    } else {
      const _bind$2 = _M0MPC14json12ParseContext13parse__value2(ctx, x, child_remaining_available_depth);
      let _tmp$4;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$4 = _ok._0;
      } else {
        return _bind$2;
      }
      _M0MPC15array5Array4pushGRPC14json10WriteFrameE(vec, _tmp$4);
      const _bind$3 = _M0MPC14json12ParseContext24lex__after__array__value(ctx);
      let tok2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        tok2 = _ok._0;
      } else {
        return _bind$3;
      }
      switch (tok2.$tag) {
        case 9: {
          const _bind$4 = _M0MPC14json12ParseContext10lex__value(ctx, false);
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp$3 = _ok._0;
          } else {
            return _bind$4;
          }
          continue _L;
        }
        case 8: {
          _tmp = _M0MPC14json4Json5array(vec);
          break _L;
        }
        default: {
          _M0FPC15abort5abortGuE("unreachable");
        }
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext13parse__object(ctx, remaining_available_depth) {
  if (remaining_available_depth <= 0) {
    return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__);
  }
  const child_remaining_available_depth = remaining_available_depth - 1 | 0;
  const _bind = [];
  const map = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 0), undefined);
  let _tmp;
  const _bind$2 = _M0MPC14json12ParseContext19lex__property__name(ctx);
  let _tmp$2;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp$2 = _ok._0;
  } else {
    return _bind$2;
  }
  let _tmp$3 = _tmp$2;
  _L: while (true) {
    const x = _tmp$3;
    switch (x.$tag) {
      case 6: {
        _tmp = _M0MPC14json4Json6object(map);
        break _L;
      }
      case 4: {
        const _String = x;
        const _name = _String._0;
        const _bind$3 = _M0MPC14json12ParseContext26lex__after__property__name(ctx);
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _ok._0;
        } else {
          return _bind$3;
        }
        const _bind$4 = _M0MPC14json12ParseContext12parse__value(ctx, child_remaining_available_depth);
        let _tmp$4;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _tmp$4 = _ok._0;
        } else {
          return _bind$4;
        }
        _M0MPB3Map3setGsRPB4JsonE(map, _name, _tmp$4);
        const _bind$5 = _M0MPC14json12ParseContext25lex__after__object__value(ctx);
        let _bind$6;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _bind$6 = _ok._0;
        } else {
          return _bind$5;
        }
        switch (_bind$6.$tag) {
          case 9: {
            const _bind$7 = _M0MPC14json12ParseContext20lex__property__name2(ctx);
            if (_bind$7.$tag === 1) {
              const _ok = _bind$7;
              _tmp$3 = _ok._0;
            } else {
              return _bind$7;
            }
            continue _L;
          }
          case 6: {
            _tmp = _M0MPC14json4Json6object(map);
            break _L;
          }
          default: {
            _M0FPC15abort5abortGuE("unreachable");
          }
        }
        break;
      }
      default: {
        _M0FPC15abort5abortGuE("unreachable");
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0FPC14json13parse_2einner(input, max_nesting_depth) {
  const ctx = _M0MPC14json12ParseContext4make(input);
  const _bind = _M0MPC14json12ParseContext12parse__value(ctx, max_nesting_depth);
  let val;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    val = _ok._0;
  } else {
    return _bind;
  }
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  return ctx.offset >= ctx.end_offset ? new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(val) : _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
}
function _M0FPC14json20need__escape__scalar(str, escape_slash, start, end) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      const code = str.charCodeAt(i);
      if (_M0IPC16uint166UInt16PB2Eq5equal(code, 34) || (_M0IPC16uint166UInt16PB2Eq5equal(code, 92) || (code < 32 || escape_slash && _M0IPC16uint166UInt16PB2Eq5equal(code, 47)))) {
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
function _M0FPC14json12need__escape(str, escape_slash) {
  return _M0FPC14json20need__escape__scalar(str, escape_slash, 0, str.length);
}
function _M0FPC14json14write__escaped(buf, str, escape_slash) {
  if (!_M0FPC14json12need__escape(str, escape_slash)) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
    return undefined;
  }
  const _bind = str.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const code = str.charCodeAt(_);
      switch (code) {
        case 34: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\\"");
          break;
        }
        case 92: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\\\");
          break;
        }
        case 47: {
          if (escape_slash) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\/");
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 47);
          }
          break;
        }
        case 10: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\n");
          break;
        }
        case 13: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\r");
          break;
        }
        case 8: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\b");
          break;
        }
        case 9: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\t");
          break;
        }
        case 12: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\f");
          break;
        }
        default: {
          if (code < 32) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\u00");
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0MPC14byte4Byte7to__hex(code & 255));
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, _M0MPC16uint166UInt1616unsafe__to__char(code));
          }
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPC14json13write__indent(buf, cache, level, indent) {
  while (true) {
    if (cache.length <= level) {
      if (cache.length >= 1) {
        const _last = cache[cache.length - 1 | 0];
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(cache, `${_last}${_M0MPC16string6String6repeat(" ", indent)}`);
      } else {
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(cache, "\n");
      }
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0MPC15array5Array2atGRPB4JsonE(cache, level));
}
function _M0MPC14json4Json17stringify_2einner(self, escape_slash, indent, replacer) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const indent_cache = [];
  const stack = [];
  let depth = 0;
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      if (stack.length === 0) {
        break;
      } else {
        const _x = stack[stack.length - 1 | 0];
        if (_x.$tag === 0) {
          const _Array = _x;
          const _arr = _Array._0;
          const _i = _Array._1;
          if (_i < _arr.length) {
            const element = _M0MPC15array5Array2atGRPB4JsonE(_arr, _i);
            _Array._1 = _i + 1 | 0;
            if (_i > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 44);
              if (indent > 0) {
                _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
              }
            }
            _tmp = element;
            continue;
          } else {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(stack);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 93);
            _tmp = undefined;
            continue;
          }
        } else {
          const _Object = _x;
          const _iterator = _Object._0;
          const _first = _Object._1;
          const _bind = _M0MPB4Iter4nextGUsRPB4JsonEE(_iterator);
          if (_bind === undefined) {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(stack);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 125);
            _tmp = undefined;
            continue;
          } else {
            const _Some = _bind;
            const _x$2 = _Some;
            const _k = _x$2._0;
            const _v = _x$2._1;
            let v2 = _v;
            if (replacer === undefined) {
            } else {
              const _Some$2 = replacer;
              const _replacer = _Some$2;
              const _func = _replacer.f;
              const _bind$2 = _func(_k, _v);
              if (_bind$2 === undefined) {
                _tmp = undefined;
                continue;
              } else {
                const _Some$3 = _bind$2;
                const _v$2 = _Some$3;
                v2 = _v$2;
              }
            }
            if (!_first) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 44);
              if (indent > 0) {
                _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
              }
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
            _M0FPC14json14write__escaped(buf, _k, escape_slash);
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 58);
            if (indent > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 32);
            }
            _Object._1 = false;
            _tmp = v2;
            continue;
          }
        }
      }
    } else {
      const _Some = x;
      const _value = _Some;
      switch (_value.$tag) {
        case 6: {
          const _Object = _value;
          const _members = _Object._0;
          if (_M0MPB3Map9is__emptyGsRPB4JsonE(_members)) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "{}");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 123);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(stack, new _M0DTPC14json10WriteFrame6Object(_M0MPB3Map4iterGsRPB4JsonE(_members), true));
          }
          break;
        }
        case 5: {
          const _Array = _value;
          const _arr = _Array._0;
          if (_M0MPC15array5Array9is__emptyGRPB4JsonE(_arr)) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "[]");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 91);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(stack, new _M0DTPC14json10WriteFrame5Array(_arr, 0));
          }
          break;
        }
        case 4: {
          const _String = _value;
          const _s = _String._0;
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
          _M0FPC14json14write__escaped(buf, _s, escape_slash);
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
          break;
        }
        case 3: {
          const _Number = _value;
          const _n = _Number._0;
          const _repr = _Number._1;
          if (_repr === undefined) {
            _M0MPB13StringBuilder13write__objectGdE(buf, _n);
          } else {
            const _Some$2 = _repr;
            const _r = _Some$2;
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _r);
          }
          break;
        }
        case 1: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "true");
          break;
        }
        case 2: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "false");
          break;
        }
        default: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "null");
        }
      }
      _tmp = undefined;
      continue;
    }
  }
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0IPC14json4JsonPB6ToJson8to__json(self) {
  return self;
}
function _M0FPC28encoding6base6422encode__scalar_2einner(bytes, padding) {
  if (3 === 0) {
    $panic();
  }
  const full_groups = (bytes.end - bytes.start | 0) / 3 | 0;
  if (3 === 0) {
    $panic();
  }
  const remainder = (bytes.end - bytes.start | 0) % 3 | 0;
  let size_hint = Math.imul(full_groups, 4) | 0;
  if (remainder !== 0) {
    const _tmp = size_hint;
    let _tmp$2;
    if (padding === true) {
      _tmp$2 = 4;
    } else {
      _tmp$2 = remainder + 1 | 0;
    }
    size_hint = _tmp + _tmp$2 | 0;
  }
  const builder = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint);
  const _bind = bytes.buf;
  const _bind$2 = bytes.start;
  const _bind$3 = bytes.end;
  let _tmp = _bind$2;
  while (true) {
    const remaining_start = _tmp;
    if ((_bind$3 - remaining_start | 0) >= 3) {
      const _b0 = _bind[remaining_start];
      const _b1 = _bind[remaining_start + 1 | 0];
      const _b2 = _bind[remaining_start + 2 | 0];
      const _bind$4 = remaining_start + 3 | 0;
      const n = _b0 << 16 | _b1 << 8 | _b2;
      const _tmp$2 = $bytes_literal$1;
      const _tmp$3 = n >> 18 & 63;
      _M0IPB13StringBuilderPB6Logger11write__char(builder, _M0MPC14byte4Byte8to__char(_tmp$3 >>> 0 < _tmp$2.length ? _tmp$2[_tmp$3] : $oob()));
      const _tmp$4 = $bytes_literal$1;
      const _tmp$5 = n >> 12 & 63;
      _M0IPB13StringBuilderPB6Logger11write__char(builder, _M0MPC14byte4Byte8to__char(_tmp$5 >>> 0 < _tmp$4.length ? _tmp$4[_tmp$5] : $oob()));
      const _tmp$6 = $bytes_literal$1;
      const _tmp$7 = n >> 6 & 63;
      _M0IPB13StringBuilderPB6Logger11write__char(builder, _M0MPC14byte4Byte8to__char(_tmp$7 >>> 0 < _tmp$6.length ? _tmp$6[_tmp$7] : $oob()));
      const _tmp$8 = $bytes_literal$1;
      const _tmp$9 = n & 63;
      _M0IPB13StringBuilderPB6Logger11write__char(builder, _M0MPC14byte4Byte8to__char(_tmp$9 >>> 0 < _tmp$8.length ? _tmp$8[_tmp$9] : $oob()));
      _tmp = _bind$4;
      continue;
    } else {
      if ((_bind$3 - remaining_start | 0) === 2) {
        const _b0 = _bind[remaining_start];
        const _b1 = _bind[remaining_start + 1 | 0];
        const n = _b0 << 16 | _b1 << 8;
        const _tmp$2 = $bytes_literal$1;
        const _tmp$3 = n >> 18 & 63;
        _M0IPB13StringBuilderPB6Logger11write__char(builder, _M0MPC14byte4Byte8to__char(_tmp$3 >>> 0 < _tmp$2.length ? _tmp$2[_tmp$3] : $oob()));
        const _tmp$4 = $bytes_literal$1;
        const _tmp$5 = n >> 12 & 63;
        _M0IPB13StringBuilderPB6Logger11write__char(builder, _M0MPC14byte4Byte8to__char(_tmp$5 >>> 0 < _tmp$4.length ? _tmp$4[_tmp$5] : $oob()));
        const _tmp$6 = $bytes_literal$1;
        const _tmp$7 = n >> 6 & 63;
        _M0IPB13StringBuilderPB6Logger11write__char(builder, _M0MPC14byte4Byte8to__char(_tmp$7 >>> 0 < _tmp$6.length ? _tmp$6[_tmp$7] : $oob()));
        if (padding === true) {
          _M0IPB13StringBuilderPB6Logger11write__char(builder, 61);
        }
        break;
      } else {
        if ((_bind$3 - remaining_start | 0) === 1) {
          const _b0 = _bind[remaining_start];
          const n = _b0 << 16;
          const _tmp$2 = $bytes_literal$1;
          const _tmp$3 = n >> 18 & 63;
          _M0IPB13StringBuilderPB6Logger11write__char(builder, _M0MPC14byte4Byte8to__char(_tmp$3 >>> 0 < _tmp$2.length ? _tmp$2[_tmp$3] : $oob()));
          const _tmp$4 = $bytes_literal$1;
          const _tmp$5 = n >> 12 & 63;
          _M0IPB13StringBuilderPB6Logger11write__char(builder, _M0MPC14byte4Byte8to__char(_tmp$5 >>> 0 < _tmp$4.length ? _tmp$4[_tmp$5] : $oob()));
          if (padding === true) {
            _M0IPB13StringBuilderPB6Logger13write__string(builder, "==");
          }
          break;
        } else {
          break;
        }
      }
    }
  }
  return _M0MPB13StringBuilder10to__string(builder);
}
function _M0FPC28encoding6base6414encode_2einner(bytes, padding) {
  return _M0FPC28encoding6base6422encode__scalar_2einner(bytes, padding);
}
function _M0IP212zhou_2dwei976promql17FunctionSignaturePB6ToJson8to__json(_x_842) {
  const _bind = [];
  const $36$map = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 0), undefined);
  _M0MPB3Map3setGsRPB4JsonE($36$map, "name", _M0IPC16string6StringPB6ToJson8to__json(_x_842.name));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "arguments", _M0IPC15array5ArrayPB6ToJson8to__jsonGRP212zhou_2dwei976promql9QueryTypeE(_x_842.arguments));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "min_args", _M0IPC13int3IntPB6ToJson8to__json(_x_842.min_args));
  let $36$inner;
  _L: {
    _L$2: {
      const _bind$2 = _x_842.max_args;
      if (_bind$2 === undefined) {
      } else {
        const _Some = _bind$2;
        const _$36$inner = _Some;
        $36$inner = _$36$inner;
        break _L$2;
      }
      break _L;
    }
    _M0MPB3Map3setGsRPB4JsonE($36$map, "max_args", _M0IPC13int3IntPB6ToJson8to__json($36$inner));
  }
  _M0MPB3Map3setGsRPB4JsonE($36$map, "result", _M0IP212zhou_2dwei976promql9QueryTypePB6ToJson8to__json(_x_842.result));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "experimental", _M0IPC14bool4BoolPB6ToJson8to__json(_x_842.experimental));
  return _M0MPC14json4Json6object($36$map);
}
function _M0IP212zhou_2dwei976promql10ParseErrorPC15debug5Debug8to__repr(_x_834) {
  let _arg_836;
  let _arg_837;
  _L: {
    let _arg_835;
    _L$2: {
      if (_x_834.$tag === 1) {
        const _Invalid = _x_834;
        const _$42$arg_835 = _Invalid._0;
        _arg_835 = _$42$arg_835;
        break _L$2;
      } else {
        const _Located = _x_834;
        const _$42$arg_836 = _Located._0;
        const _$42$arg_837 = _Located._1;
        _arg_836 = _$42$arg_836;
        _arg_837 = _$42$arg_837;
        break _L;
      }
    }
    return _M0MPC15debug4Repr4ctor("Invalid", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_835) }]);
  }
  return _M0MPC15debug4Repr4ctor("Located", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_836) }, { _0: undefined, _1: _M0IP212zhou_2dwei976promql10SourceSpanPC15debug5Debug8to__repr(_arg_837) }]);
}
function _M0IP212zhou_2dwei976promql10ParseErrorPC15debug5Debug8to__reprGRP212zhou_2dwei976promql10ParseErrorE(_x_834) {
  let _arg_836;
  let _arg_837;
  _L: {
    let _arg_835;
    _L$2: {
      if (_x_834.$tag === 1) {
        const _Invalid = _x_834;
        const _$42$arg_835 = _Invalid._0;
        _arg_835 = _$42$arg_835;
        break _L$2;
      } else {
        const _Located = _x_834;
        const _$42$arg_836 = _Located._0;
        const _$42$arg_837 = _Located._1;
        _arg_836 = _$42$arg_836;
        _arg_837 = _$42$arg_837;
        break _L;
      }
    }
    return _M0MPC15debug4Repr4ctor("Invalid", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_835) }]);
  }
  return _M0MPC15debug4Repr4ctor("Located", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_836) }, { _0: undefined, _1: _M0IP212zhou_2dwei976promql10SourceSpanPC15debug5Debug8to__repr(_arg_837) }]);
}
function _M0IP212zhou_2dwei976promql4ExprPC15debug5Debug8to__repr(_x_728) {
  let _arg_779;
  let _arg_780;
  _L: {
    let _arg_777;
    let _arg_778;
    _L$2: {
      let _arg_775;
      let _arg_774;
      let _arg_776;
      _L$3: {
        let _arg_772;
        let _arg_773;
        _L$4: {
          let _arg_770;
          let _arg_771;
          _L$5: {
            let _arg_768;
            let _arg_769;
            _L$6: {
              let _arg_766;
              let _arg_765;
              let _arg_767;
              _L$7: {
                let _arg_763;
                let _arg_761;
                let _arg_760;
                let _arg_762;
                let _arg_764;
                _L$8: {
                  let _arg_758;
                  let _arg_756;
                  let _arg_754;
                  let _arg_755;
                  let _arg_757;
                  let _arg_759;
                  _L$9: {
                    let _arg_752;
                    let _arg_750;
                    let _arg_751;
                    let _arg_753;
                    _L$10: {
                      let _arg_748;
                      let _arg_749;
                      _L$11: {
                        let _arg_746;
                        let _arg_745;
                        let _arg_747;
                        _L$12: {
                          let _arg_743;
                          let _arg_741;
                          let _arg_742;
                          let _arg_744;
                          _L$13: {
                            let _arg_739;
                            let _arg_740;
                            _L$14: {
                              let _arg_737;
                              let _arg_738;
                              _L$15: {
                                let _arg_736;
                                _L$16: {
                                  let _arg_734;
                                  let _arg_735;
                                  _L$17: {
                                    let _arg_732;
                                    let _arg_733;
                                    _L$18: {
                                      let _arg_731;
                                      _L$19: {
                                        let _arg_730;
                                        _L$20: {
                                          let _arg_729;
                                          _L$21: {
                                            switch (_x_728.$tag) {
                                              case 0: {
                                                const _Number = _x_728;
                                                const _$42$arg_729 = _Number._0;
                                                _arg_729 = _$42$arg_729;
                                                break _L$21;
                                              }
                                              case 1: {
                                                const _StringLiteral = _x_728;
                                                const _$42$arg_730 = _StringLiteral._0;
                                                _arg_730 = _$42$arg_730;
                                                break _L$20;
                                              }
                                              case 2: {
                                                const _StringBytes = _x_728;
                                                const _$42$arg_731 = _StringBytes._0;
                                                _arg_731 = _$42$arg_731;
                                                break _L$19;
                                              }
                                              case 3: {
                                                const _Selector = _x_728;
                                                const _$42$arg_732 = _Selector._0;
                                                const _$42$arg_733 = _Selector._1;
                                                _arg_732 = _$42$arg_732;
                                                _arg_733 = _$42$arg_733;
                                                break _L$18;
                                              }
                                              case 4: {
                                                const _SelectorBytes = _x_728;
                                                const _$42$arg_734 = _SelectorBytes._0;
                                                const _$42$arg_735 = _SelectorBytes._1;
                                                _arg_734 = _$42$arg_734;
                                                _arg_735 = _$42$arg_735;
                                                break _L$17;
                                              }
                                              case 5: {
                                                const _Parenthesized = _x_728;
                                                const _$42$arg_736 = _Parenthesized._0;
                                                _arg_736 = _$42$arg_736;
                                                break _L$16;
                                              }
                                              case 6: {
                                                const _Range = _x_728;
                                                const _$42$arg_737 = _Range._0;
                                                const _$42$arg_738 = _Range._1;
                                                _arg_737 = _$42$arg_737;
                                                _arg_738 = _$42$arg_738;
                                                break _L$15;
                                              }
                                              case 7: {
                                                const _Call = _x_728;
                                                const _$42$arg_739 = _Call._0;
                                                const _$42$arg_740 = _Call._1;
                                                _arg_739 = _$42$arg_739;
                                                _arg_740 = _$42$arg_740;
                                                break _L$14;
                                              }
                                              case 8: {
                                                const _Aggregate = _x_728;
                                                const _$42$arg_741 = _Aggregate._0;
                                                const _$42$arg_742 = _Aggregate._1;
                                                const _$42$arg_743 = _Aggregate._2;
                                                const _$42$arg_744 = _Aggregate._3;
                                                _arg_743 = _$42$arg_743;
                                                _arg_741 = _$42$arg_741;
                                                _arg_742 = _$42$arg_742;
                                                _arg_744 = _$42$arg_744;
                                                break _L$13;
                                              }
                                              case 9: {
                                                const _Binary = _x_728;
                                                const _$42$arg_745 = _Binary._0;
                                                const _$42$arg_746 = _Binary._1;
                                                const _$42$arg_747 = _Binary._2;
                                                _arg_746 = _$42$arg_746;
                                                _arg_745 = _$42$arg_745;
                                                _arg_747 = _$42$arg_747;
                                                break _L$12;
                                              }
                                              case 10: {
                                                const _Unary = _x_728;
                                                const _$42$arg_748 = _Unary._0;
                                                const _$42$arg_749 = _Unary._1;
                                                _arg_748 = _$42$arg_748;
                                                _arg_749 = _$42$arg_749;
                                                break _L$11;
                                              }
                                              case 11: {
                                                const _BinaryMatch = _x_728;
                                                const _$42$arg_750 = _BinaryMatch._0;
                                                const _$42$arg_751 = _BinaryMatch._1;
                                                const _$42$arg_752 = _BinaryMatch._2;
                                                const _$42$arg_753 = _BinaryMatch._3;
                                                _arg_752 = _$42$arg_752;
                                                _arg_750 = _$42$arg_750;
                                                _arg_751 = _$42$arg_751;
                                                _arg_753 = _$42$arg_753;
                                                break _L$10;
                                              }
                                              case 12: {
                                                const _BinaryFill = _x_728;
                                                const _$42$arg_754 = _BinaryFill._0;
                                                const _$42$arg_755 = _BinaryFill._1;
                                                const _$42$arg_756 = _BinaryFill._2;
                                                const _$42$arg_757 = _BinaryFill._3;
                                                const _$42$arg_758 = _BinaryFill._4;
                                                const _$42$arg_759 = _BinaryFill._5;
                                                _arg_758 = _$42$arg_758;
                                                _arg_756 = _$42$arg_756;
                                                _arg_754 = _$42$arg_754;
                                                _arg_755 = _$42$arg_755;
                                                _arg_757 = _$42$arg_757;
                                                _arg_759 = _$42$arg_759;
                                                break _L$9;
                                              }
                                              case 13: {
                                                const _AggregateParam = _x_728;
                                                const _$42$arg_760 = _AggregateParam._0;
                                                const _$42$arg_761 = _AggregateParam._1;
                                                const _$42$arg_762 = _AggregateParam._2;
                                                const _$42$arg_763 = _AggregateParam._3;
                                                const _$42$arg_764 = _AggregateParam._4;
                                                _arg_763 = _$42$arg_763;
                                                _arg_761 = _$42$arg_761;
                                                _arg_760 = _$42$arg_760;
                                                _arg_762 = _$42$arg_762;
                                                _arg_764 = _$42$arg_764;
                                                break _L$8;
                                              }
                                              case 14: {
                                                const _Subquery = _x_728;
                                                const _$42$arg_765 = _Subquery._0;
                                                const _$42$arg_766 = _Subquery._1;
                                                const _$42$arg_767 = _Subquery._2;
                                                _arg_766 = _$42$arg_766;
                                                _arg_765 = _$42$arg_765;
                                                _arg_767 = _$42$arg_767;
                                                break _L$7;
                                              }
                                              case 15: {
                                                const _Offset = _x_728;
                                                const _$42$arg_768 = _Offset._0;
                                                const _$42$arg_769 = _Offset._1;
                                                _arg_768 = _$42$arg_768;
                                                _arg_769 = _$42$arg_769;
                                                break _L$6;
                                              }
                                              case 16: {
                                                const _At = _x_728;
                                                const _$42$arg_770 = _At._0;
                                                const _$42$arg_771 = _At._1;
                                                _arg_770 = _$42$arg_770;
                                                _arg_771 = _$42$arg_771;
                                                break _L$5;
                                              }
                                              case 17: {
                                                const _RangeExpression = _x_728;
                                                const _$42$arg_772 = _RangeExpression._0;
                                                const _$42$arg_773 = _RangeExpression._1;
                                                _arg_772 = _$42$arg_772;
                                                _arg_773 = _$42$arg_773;
                                                break _L$4;
                                              }
                                              case 18: {
                                                const _SubqueryExpression = _x_728;
                                                const _$42$arg_774 = _SubqueryExpression._0;
                                                const _$42$arg_775 = _SubqueryExpression._1;
                                                const _$42$arg_776 = _SubqueryExpression._2;
                                                _arg_775 = _$42$arg_775;
                                                _arg_774 = _$42$arg_774;
                                                _arg_776 = _$42$arg_776;
                                                break _L$3;
                                              }
                                              case 19: {
                                                const _OffsetExpression = _x_728;
                                                const _$42$arg_777 = _OffsetExpression._0;
                                                const _$42$arg_778 = _OffsetExpression._1;
                                                _arg_777 = _$42$arg_777;
                                                _arg_778 = _$42$arg_778;
                                                break _L$2;
                                              }
                                              default: {
                                                const _ExtendedRange = _x_728;
                                                const _$42$arg_779 = _ExtendedRange._0;
                                                const _$42$arg_780 = _ExtendedRange._1;
                                                _arg_779 = _$42$arg_779;
                                                _arg_780 = _$42$arg_780;
                                                break _L;
                                              }
                                            }
                                          }
                                          return _M0MPC15debug4Repr4ctor("Number", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_729) }]);
                                        }
                                        return _M0MPC15debug4Repr4ctor("StringLiteral", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_730) }]);
                                      }
                                      return _M0MPC15debug4Repr4ctor("StringBytes", [{ _0: undefined, _1: _M0IPC15bytes5BytesPC15debug5Debug8to__repr(_arg_731) }]);
                                    }
                                    return _M0MPC15debug4Repr4ctor("Selector", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_732) }, { _0: undefined, _1: _M0IPC15array5ArrayPC15debug5Debug8to__reprGUsssEE(_arg_733) }]);
                                  }
                                  return _M0MPC15debug4Repr4ctor("SelectorBytes", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_734) }, { _0: undefined, _1: _M0IPC15array5ArrayPC15debug5Debug8to__reprGUzszEE(_arg_735) }]);
                                }
                                return _M0MPC15debug4Repr4ctor("Parenthesized", [{ _0: undefined, _1: _M0IP212zhou_2dwei976promql4ExprPC15debug5Debug8to__repr(_arg_736) }]);
                              }
                              return _M0MPC15debug4Repr4ctor("Range", [{ _0: undefined, _1: _M0IP212zhou_2dwei976promql4ExprPC15debug5Debug8to__repr(_arg_737) }, { _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_738) }]);
                            }
                            return _M0MPC15debug4Repr4ctor("Call", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_739) }, { _0: undefined, _1: _M0IPC15array5ArrayPC15debug5Debug8to__reprGRP212zhou_2dwei976promql4ExprE(_arg_740) }]);
                          }
                          return _M0MPC15debug4Repr4ctor("Aggregate", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_741) }, { _0: undefined, _1: _M0IPC15array5ArrayPC15debug5Debug8to__reprGsE(_arg_742) }, { _0: undefined, _1: _M0IPC14bool4BoolPC15debug5Debug8to__repr(_arg_743) }, { _0: undefined, _1: _M0IP212zhou_2dwei976promql4ExprPC15debug5Debug8to__repr(_arg_744) }]);
                        }
                        return _M0MPC15debug4Repr4ctor("Binary", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_745) }, { _0: undefined, _1: _M0IP212zhou_2dwei976promql4ExprPC15debug5Debug8to__repr(_arg_746) }, { _0: undefined, _1: _M0IP212zhou_2dwei976promql4ExprPC15debug5Debug8to__repr(_arg_747) }]);
                      }
                      return _M0MPC15debug4Repr4ctor("Unary", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_748) }, { _0: undefined, _1: _M0IP212zhou_2dwei976promql4ExprPC15debug5Debug8to__repr(_arg_749) }]);
                    }
                    return _M0MPC15debug4Repr4ctor("BinaryMatch", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_750) }, { _0: undefined, _1: _M0IP212zhou_2dwei976promql14VectorMatchingPC15debug5Debug8to__repr(_arg_751) }, { _0: undefined, _1: _M0IP212zhou_2dwei976promql4ExprPC15debug5Debug8to__repr(_arg_752) }, { _0: undefined, _1: _M0IP212zhou_2dwei976promql4ExprPC15debug5Debug8to__repr(_arg_753) }]);
                  }
                  return _M0MPC15debug4Repr4ctor("BinaryFill", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_754) }, { _0: undefined, _1: _M0IP212zhou_2dwei976promql14VectorMatchingPC15debug5Debug8to__repr(_arg_755) }, { _0: undefined, _1: _M0IPC16option6OptionPC15debug5Debug8to__reprGsE(_arg_756) }, { _0: undefined, _1: _M0IPC16option6OptionPC15debug5Debug8to__reprGsE(_arg_757) }, { _0: undefined, _1: _M0IP212zhou_2dwei976promql4ExprPC15debug5Debug8to__repr(_arg_758) }, { _0: undefined, _1: _M0IP212zhou_2dwei976promql4ExprPC15debug5Debug8to__repr(_arg_759) }]);
                }
                return _M0MPC15debug4Repr4ctor("AggregateParam", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_760) }, { _0: undefined, _1: _M0IPC15array5ArrayPC15debug5Debug8to__reprGsE(_arg_761) }, { _0: undefined, _1: _M0IPC14bool4BoolPC15debug5Debug8to__repr(_arg_762) }, { _0: undefined, _1: _M0IP212zhou_2dwei976promql4ExprPC15debug5Debug8to__repr(_arg_763) }, { _0: undefined, _1: _M0IP212zhou_2dwei976promql4ExprPC15debug5Debug8to__repr(_arg_764) }]);
              }
              return _M0MPC15debug4Repr4ctor("Subquery", [{ _0: undefined, _1: _M0IP212zhou_2dwei976promql4ExprPC15debug5Debug8to__repr(_arg_765) }, { _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_766) }, { _0: undefined, _1: _M0IPC16option6OptionPC15debug5Debug8to__reprGsE(_arg_767) }]);
            }
            return _M0MPC15debug4Repr4ctor("Offset", [{ _0: undefined, _1: _M0IP212zhou_2dwei976promql4ExprPC15debug5Debug8to__repr(_arg_768) }, { _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_769) }]);
          }
          return _M0MPC15debug4Repr4ctor("At", [{ _0: undefined, _1: _M0IP212zhou_2dwei976promql4ExprPC15debug5Debug8to__repr(_arg_770) }, { _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_771) }]);
        }
        return _M0MPC15debug4Repr4ctor("RangeExpression", [{ _0: undefined, _1: _M0IP212zhou_2dwei976promql4ExprPC15debug5Debug8to__repr(_arg_772) }, { _0: undefined, _1: _M0IP212zhou_2dwei976promql12DurationExprPC15debug5Debug8to__repr(_arg_773) }]);
      }
      return _M0MPC15debug4Repr4ctor("SubqueryExpression", [{ _0: undefined, _1: _M0IP212zhou_2dwei976promql4ExprPC15debug5Debug8to__repr(_arg_774) }, { _0: undefined, _1: _M0IP212zhou_2dwei976promql12DurationExprPC15debug5Debug8to__repr(_arg_775) }, { _0: undefined, _1: _M0IPC16option6OptionPC15debug5Debug8to__reprGRP212zhou_2dwei976promql12DurationExprE(_arg_776) }]);
    }
    return _M0MPC15debug4Repr4ctor("OffsetExpression", [{ _0: undefined, _1: _M0IP212zhou_2dwei976promql4ExprPC15debug5Debug8to__repr(_arg_777) }, { _0: undefined, _1: _M0IP212zhou_2dwei976promql12DurationExprPC15debug5Debug8to__repr(_arg_778) }]);
  }
  return _M0MPC15debug4Repr4ctor("ExtendedRange", [{ _0: undefined, _1: _M0IP212zhou_2dwei976promql4ExprPC15debug5Debug8to__repr(_arg_779) }, { _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_780) }]);
}
function _M0IP212zhou_2dwei976promql12DurationExprPC15debug5Debug8to__repr(_x_498) {
  let _arg_505;
  let _arg_506;
  _L: {
    let _arg_503;
    let _arg_502;
    let _arg_504;
    _L$2: {
      let _arg_500;
      let _arg_501;
      _L$3: {
        let _arg_499;
        _L$4: {
          switch (_x_498.$tag) {
            case 0: {
              const _DurationValue = _x_498;
              const _$42$arg_499 = _DurationValue._0;
              _arg_499 = _$42$arg_499;
              break _L$4;
            }
            case 1: {
              const _DurationUnary = _x_498;
              const _$42$arg_500 = _DurationUnary._0;
              const _$42$arg_501 = _DurationUnary._1;
              _arg_500 = _$42$arg_500;
              _arg_501 = _$42$arg_501;
              break _L$3;
            }
            case 2: {
              const _DurationBinary = _x_498;
              const _$42$arg_502 = _DurationBinary._0;
              const _$42$arg_503 = _DurationBinary._1;
              const _$42$arg_504 = _DurationBinary._2;
              _arg_503 = _$42$arg_503;
              _arg_502 = _$42$arg_502;
              _arg_504 = _$42$arg_504;
              break _L$2;
            }
            default: {
              const _DurationCall = _x_498;
              const _$42$arg_505 = _DurationCall._0;
              const _$42$arg_506 = _DurationCall._1;
              _arg_505 = _$42$arg_505;
              _arg_506 = _$42$arg_506;
              break _L;
            }
          }
        }
        return _M0MPC15debug4Repr4ctor("DurationValue", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_499) }]);
      }
      return _M0MPC15debug4Repr4ctor("DurationUnary", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_500) }, { _0: undefined, _1: _M0IP212zhou_2dwei976promql12DurationExprPC15debug5Debug8to__repr(_arg_501) }]);
    }
    return _M0MPC15debug4Repr4ctor("DurationBinary", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_502) }, { _0: undefined, _1: _M0IP212zhou_2dwei976promql12DurationExprPC15debug5Debug8to__repr(_arg_503) }, { _0: undefined, _1: _M0IP212zhou_2dwei976promql12DurationExprPC15debug5Debug8to__repr(_arg_504) }]);
  }
  return _M0MPC15debug4Repr4ctor("DurationCall", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_505) }, { _0: undefined, _1: _M0IPC15array5ArrayPC15debug5Debug8to__reprGRP212zhou_2dwei976promql12DurationExprE(_arg_506) }]);
}
function _M0IP212zhou_2dwei976promql9QueryTypePC15debug5Debug8to__repr(_x_451) {
  switch (_x_451) {
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
function _M0IP212zhou_2dwei976promql9QueryTypePB2Eq5equal(_x_447, _x_448) {
  switch (_x_447) {
    case 0: {
      if (_x_448 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_448 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_448 === 2) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_448 === 3) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function _M0IP212zhou_2dwei976promql9QueryTypePB6ToJson8to__json(_x_445) {
  switch (_x_445) {
    case 0: {
      return _M0IPC16string6StringPB6ToJson8to__json("Scalar");
    }
    case 1: {
      return _M0IPC16string6StringPB6ToJson8to__json("InstantVector");
    }
    case 2: {
      return _M0IPC16string6StringPB6ToJson8to__json("RangeVector");
    }
    default: {
      return _M0IPC16string6StringPB6ToJson8to__json("StringValue");
    }
  }
}
function _M0IP212zhou_2dwei976promql10SourceSpanPC15debug5Debug8to__repr(_x_443) {
  const _bind = [{ _0: "start", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_x_443.start) }, { _0: "end", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_x_443.end) }, { _0: "line", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_x_443.line) }, { _0: "column", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_x_443.column) }];
  return _M0MPC15debug4Repr6record(_M0MPB3Map3MapGsRPC15debug4ReprE(new _M0TPB9ArrayViewGUsRPC15debug4ReprEE(_bind, 0, 4), undefined));
}
function _M0IP212zhou_2dwei976promql10SourceSpanPB6ToJson8to__json(_x_436) {
  const _bind = [];
  const $36$map = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 0), undefined);
  _M0MPB3Map3setGsRPB4JsonE($36$map, "start", _M0IPC13int3IntPB6ToJson8to__json(_x_436.start));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "end", _M0IPC13int3IntPB6ToJson8to__json(_x_436.end));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "line", _M0IPC13int3IntPB6ToJson8to__json(_x_436.line));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "column", _M0IPC13int3IntPB6ToJson8to__json(_x_436.column));
  return _M0MPC14json4Json6object($36$map);
}
function _M0IP212zhou_2dwei976promql14VectorMatchingPC15debug5Debug8to__repr(_x_434) {
  const _bind = [{ _0: "return_bool", _1: _M0IPC14bool4BoolPC15debug5Debug8to__repr(_x_434.return_bool) }, { _0: "mode", _1: _M0IPC16option6OptionPC15debug5Debug8to__reprGsE(_x_434.mode) }, { _0: "labels", _1: _M0IPC15array5ArrayPC15debug5Debug8to__reprGsE(_x_434.labels) }, { _0: "group", _1: _M0IPC16option6OptionPC15debug5Debug8to__reprGsE(_x_434.group) }, { _0: "include_labels", _1: _M0IPC15array5ArrayPC15debug5Debug8to__reprGsE(_x_434.include_labels) }];
  return _M0MPC15debug4Repr6record(_M0MPB3Map3MapGsRPC15debug4ReprE(new _M0TPB9ArrayViewGUsRPC15debug4ReprEE(_bind, 0, 5), undefined));
}
function _M0FP212zhou_2dwei976promql16direct__selector(expr) {
  let _tmp = expr;
  _L: while (true) {
    const expr$2 = _tmp;
    let v;
    _L$2: {
      switch (expr$2.$tag) {
        case 3: {
          return true;
        }
        case 4: {
          return true;
        }
        case 20: {
          const _ExtendedRange = expr$2;
          const _v = _ExtendedRange._0;
          v = _v;
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
function _M0FP212zhou_2dwei976promql16extended__target(expr) {
  let _tmp = expr;
  _L: while (true) {
    const expr$2 = _tmp;
    let v;
    _L$2: {
      switch (expr$2.$tag) {
        case 3: {
          return true;
        }
        case 4: {
          return true;
        }
        case 6: {
          return true;
        }
        case 17: {
          return true;
        }
        case 15: {
          const _Offset = expr$2;
          const _v = _Offset._0;
          v = _v;
          break _L$2;
        }
        case 16: {
          const _At = expr$2;
          const _v$2 = _At._0;
          v = _v$2;
          break _L$2;
        }
        case 19: {
          const _OffsetExpression = expr$2;
          const _v$3 = _OffsetExpression._0;
          v = _v$3;
          break _L$2;
        }
        case 20: {
          const _ExtendedRange = expr$2;
          const _v$4 = _ExtendedRange._0;
          v = _v$4;
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
function _M0FP212zhou_2dwei976promql10precedence(op) {
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
function _M0FP212zhou_2dwei976promql19function__signature(name) {
  switch (name) {
    case "abs": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "absent": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "absent_over_time": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [2], 1, 1, 1, false);
    }
    case "acos": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "acosh": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "asin": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "asinh": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "atan": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "atanh": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "avg_over_time": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [2], 1, 1, 1, false);
    }
    case "ceil": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "changes": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [2], 1, 1, 1, false);
    }
    case "clamp": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1, 0, 0], 3, 3, 1, false);
    }
    case "clamp_max": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1, 0], 2, 2, 1, false);
    }
    case "clamp_min": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1, 0], 2, 2, 1, false);
    }
    case "cos": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "cosh": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "count_over_time": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [2], 1, 1, 1, false);
    }
    case "day_of_month": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 0, 1, 1, false);
    }
    case "day_of_week": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 0, 1, 1, false);
    }
    case "day_of_year": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 0, 1, 1, false);
    }
    case "days_in_month": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 0, 1, 1, false);
    }
    case "deg": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "delta": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [2], 1, 1, 1, false);
    }
    case "deriv": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [2], 1, 1, 1, false);
    }
    case "double_exponential_smoothing": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [2, 0, 0], 3, 3, 1, true);
    }
    case "end": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [], 0, 0, 0, true);
    }
    case "exp": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "first_over_time": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [2], 1, 1, 1, false);
    }
    case "floor": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "histogram_avg": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "histogram_count": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "histogram_fraction": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [0, 0, 1], 3, 3, 1, false);
    }
    case "histogram_quantile": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [0, 1], 2, 2, 1, false);
    }
    case "histogram_quantiles": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1, 3, 0, 0], 3, 12, 1, true);
    }
    case "histogram_stddev": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "histogram_stdvar": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "histogram_sum": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "hour": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 0, 1, 1, false);
    }
    case "idelta": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [2], 1, 1, 1, false);
    }
    case "increase": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [2], 1, 1, 1, false);
    }
    case "info": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1, 1], 1, 2, 1, true);
    }
    case "irate": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [2], 1, 1, 1, false);
    }
    case "label_join": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1, 3, 3, 3], 3, undefined, 1, false);
    }
    case "label_replace": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1, 3, 3, 3, 3], 5, 5, 1, false);
    }
    case "last_over_time": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [2], 1, 1, 1, false);
    }
    case "ln": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "log10": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "log2": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "mad_over_time": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [2], 1, 1, 1, true);
    }
    case "max_of": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [0, 0], 2, 2, 0, true);
    }
    case "max_over_time": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [2], 1, 1, 1, false);
    }
    case "min_of": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [0, 0], 2, 2, 0, true);
    }
    case "min_over_time": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [2], 1, 1, 1, false);
    }
    case "minute": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 0, 1, 1, false);
    }
    case "month": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 0, 1, 1, false);
    }
    case "pi": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [], 0, 0, 0, false);
    }
    case "predict_linear": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [2, 0], 2, 2, 1, false);
    }
    case "present_over_time": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [2], 1, 1, 1, false);
    }
    case "quantile_over_time": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [0, 2], 2, 2, 1, false);
    }
    case "rad": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "range": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [], 0, 0, 0, true);
    }
    case "rate": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [2], 1, 1, 1, false);
    }
    case "resets": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [2], 1, 1, 1, false);
    }
    case "round": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1, 0], 1, 2, 1, false);
    }
    case "scalar": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 0, false);
    }
    case "sgn": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "sin": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "sinh": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "sort": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "sort_by_label": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1, 3], 1, undefined, 1, true);
    }
    case "sort_by_label_desc": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1, 3], 1, undefined, 1, true);
    }
    case "sort_desc": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "sqrt": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "start": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [], 0, 0, 0, true);
    }
    case "start_timestamp": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, true);
    }
    case "stddev_over_time": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [2], 1, 1, 1, false);
    }
    case "stdvar_over_time": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [2], 1, 1, 1, false);
    }
    case "step": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [], 0, 0, 0, true);
    }
    case "sum_over_time": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [2], 1, 1, 1, false);
    }
    case "tan": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "tanh": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "time": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [], 0, 0, 0, false);
    }
    case "timestamp": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 1, 1, 1, false);
    }
    case "ts_of_first_over_time": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [2], 1, 1, 1, true);
    }
    case "ts_of_last_over_time": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [2], 1, 1, 1, true);
    }
    case "ts_of_max_over_time": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [2], 1, 1, 1, true);
    }
    case "ts_of_min_over_time": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [2], 1, 1, 1, true);
    }
    case "vector": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [0], 1, 1, 1, false);
    }
    case "year": {
      return new _M0TP212zhou_2dwei976promql17FunctionSignature(name, [1], 0, 1, 1, false);
    }
    default: {
      return undefined;
    }
  }
}
function _M0FP212zhou_2dwei976promql12ascii__alpha(c) {
  return c >= 97 && c <= 122 || (c >= 65 && c <= 90 || c === 95);
}
function _M0FP212zhou_2dwei976promql5digit(c) {
  return c >= 48 && c <= 57;
}
function _M0FP212zhou_2dwei976promql4word(c) {
  return _M0FP212zhou_2dwei976promql12ascii__alpha(c) || _M0FP212zhou_2dwei976promql5digit(c);
}
function _M0FP212zhou_2dwei976promql18metric__identifier(s) {
  const cs = _M0MPC16string6String9to__array(s);
  return !_M0MPC15array5Array9is__emptyGcE(cs) && ((_M0FP212zhou_2dwei976promql12ascii__alpha(_M0MPC15array5Array2atGcE(cs, 0)) || _M0MPC15array5Array2atGcE(cs, 0) === 58) && _M0MPB4Iter3allGcE(_M0MPC15array5Array4iterGcE(cs), (c) => _M0FP212zhou_2dwei976promql4word(c) || c === 58));
}
function _M0FP212zhou_2dwei976promql12slice__chars(cs, start, end) {
  const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      _M0IPB13StringBuilderPB6Logger11write__char(out, _M0MPC15array5Array2atGcE(cs, i));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPB13StringBuilder10to__string(out);
}
function _M0FP212zhou_2dwei976promql10hex__digit(c) {
  return _M0FP212zhou_2dwei976promql5digit(c) ? c - 48 | 0 : c >= 97 && c <= 102 ? c - 87 | 0 : c >= 65 && c <= 70 ? c - 55 | 0 : -1;
}
function _M0MP212zhou_2dwei976promql11RegexReader3has(self, value) {
  const chars = _M0MPC16string6String9to__array(value);
  if ((self.i + chars.length | 0) > self.cs.length) {
    return false;
  }
  const _bind = chars.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const c = chars[i];
      if (_M0MPC15array5Array2atGcE(self.cs, self.i + i | 0) !== c) {
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
function _M0MP212zhou_2dwei976promql11RegexReader4peek(self) {
  return self.i < self.cs.length ? _M0MPC15array5Array2atGcE(self.cs, self.i) : 0;
}
function _M0FP212zhou_2dwei976promql15regex__property(name) {
  return _M0MPC15array5Array8containsGsE(["Adlam", "Ahom", "Anatolian_Hieroglyphs", "Any", "Arabic", "Armenian", "Avestan", "Balinese", "Bamum", "Bassa_Vah", "Batak", "Bengali", "Bhaiksuki", "Bopomofo", "Brahmi", "Braille", "Buginese", "Buhid", "C", "Canadian_Aboriginal", "Carian", "Caucasian_Albanian", "Cc", "Cf", "Chakma", "Cham", "Cherokee", "Chorasmian", "Cn", "Co", "Common", "Coptic", "Cs", "Cuneiform", "Cypriot", "Cypro_Minoan", "Cyrillic", "Deseret", "Devanagari", "Dives_Akuru", "Dogra", "Duployan", "Egyptian_Hieroglyphs", "Elbasan", "Elymaic", "Ethiopic", "Georgian", "Glagolitic", "Gothic", "Grantha", "Greek", "Gujarati", "Gunjala_Gondi", "Gurmukhi", "Han", "Hangul", "Hanifi_Rohingya", "Hanunoo", "Hatran", "Hebrew", "Hiragana", "Imperial_Aramaic", "Inherited", "Inscriptional_Pahlavi", "Inscriptional_Parthian", "Javanese", "Kaithi", "Kannada", "Katakana", "Kawi", "Kayah_Li", "Kharoshthi", "Khitan_Small_Script", "Khmer", "Khojki", "Khudawadi", "L", "LC", "Lao", "Latin", "Lepcha", "Limbu", "Linear_A", "Linear_B", "Lisu", "Ll", "Lm", "Lo", "Lt", "Lu", "Lycian", "Lydian", "M", "Mahajani", "Makasar", "Malayalam", "Mandaic", "Manichaean", "Marchen", "Masaram_Gondi", "Mc", "Me", "Medefaidrin", "Meetei_Mayek", "Mende_Kikakui", "Meroitic_Cursive", "Meroitic_Hieroglyphs", "Miao", "Mn", "Modi", "Mongolian", "Mro", "Multani", "Myanmar", "N", "Nabataean", "Nag_Mundari", "Nandinagari", "Nd", "New_Tai_Lue", "Newa", "Nko", "Nl", "No", "Nushu", "Nyiakeng_Puachue_Hmong", "Ogham", "Ol_Chiki", "Old_Hungarian", "Old_Italic", "Old_North_Arabian", "Old_Permic", "Old_Persian", "Old_Sogdian", "Old_South_Arabian", "Old_Turkic", "Old_Uyghur", "Oriya", "Osage", "Osmanya", "P", "Pahawh_Hmong", "Palmyrene", "Pau_Cin_Hau", "Pc", "Pd", "Pe", "Pf", "Phags_Pa", "Phoenician", "Pi", "Po", "Ps", "Psalter_Pahlavi", "Rejang", "Runic", "S", "Samaritan", "Saurashtra", "Sc", "Sharada", "Shavian", "Siddham", "SignWriting", "Sinhala", "Sk", "Sm", "So", "Sogdian", "Sora_Sompeng", "Soyombo", "Sundanese", "Syloti_Nagri", "Syriac", "Tagalog", "Tagbanwa", "Tai_Le", "Tai_Tham", "Tai_Viet", "Takri", "Tamil", "Tangsa", "Tangut", "Telugu", "Thaana", "Thai", "Tibetan", "Tifinagh", "Tirhuta", "Toto", "Ugaritic", "Vai", "Vithkuqi", "Wancho", "Warang_Citi", "Yezidi", "Yi", "Z", "Zanabazar_Square", "Zl", "Zp", "Zs"], name);
}
function _M0MP212zhou_2dwei976promql11RegexReader8property(self) {
  let name;
  if (_M0MP212zhou_2dwei976promql11RegexReader4peek(self) === 123) {
    self.i = self.i + 1 | 0;
    const start = self.i;
    while (true) {
      if (self.i < self.cs.length && _M0MP212zhou_2dwei976promql11RegexReader4peek(self) !== 125) {
        self.i = self.i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (self.i === self.cs.length) {
      return new _M0DTPC16result6ResultGuRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("unterminated regex Unicode property"));
    }
    const value = _M0FP212zhou_2dwei976promql12slice__chars(self.cs, start, self.i);
    self.i = self.i + 1 | 0;
    name = value;
  } else {
    if (self.i === self.cs.length) {
      return new _M0DTPC16result6ResultGuRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("missing regex Unicode property"));
    }
    const c = _M0MPC15array5Array2atGcE(self.cs, self.i);
    self.i = self.i + 1 | 0;
    name = _M0IPC14char4CharPB4Show10to__string(c);
  }
  let actual;
  const _bind = "^";
  if (_M0MPC16string6String11has__prefix(name, new _M0TPC16string10StringView(_bind, 0, _bind.length))) {
    actual = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(name, 1, undefined));
  } else {
    actual = name;
  }
  if (!_M0FP212zhou_2dwei976promql15regex__property(actual)) {
    return new _M0DTPC16result6ResultGuRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid(`unknown regex Unicode property: ${name}`));
  } else {
    return new _M0DTPC16result6ResultGuRP212zhou_2dwei976promql10ParseErrorE2Ok(undefined);
  }
}
function _M0MP212zhou_2dwei976promql11RegexReader6escape(self, in_class) {
  self.i = self.i + 1 | 0;
  if (self.i === self.cs.length) {
    return new _M0DTPC16result6ResultGUbOiERP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("trailing regex backslash"));
  }
  const c = _M0MPC15array5Array2atGcE(self.cs, self.i);
  self.i = self.i + 1 | 0;
  if (_M0MPC15array5Array8containsGcE([100, 68, 115, 83, 119, 87], c)) {
    return new _M0DTPC16result6ResultGUbOiERP212zhou_2dwei976promql10ParseErrorE2Ok({ _0: false, _1: undefined });
  }
  if (c === 112 || c === 80) {
    const _bind = _M0MP212zhou_2dwei976promql11RegexReader8property(self);
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
    return new _M0DTPC16result6ResultGUbOiERP212zhou_2dwei976promql10ParseErrorE2Ok({ _0: false, _1: undefined });
  }
  if (_M0MPC15array5Array8containsGcE([65, 122, 98, 66], c)) {
    if (in_class) {
      return new _M0DTPC16result6ResultGUbOiERP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("assertion escape in regex character class"));
    }
    return new _M0DTPC16result6ResultGUbOiERP212zhou_2dwei976promql10ParseErrorE2Ok({ _0: c !== 98, _1: undefined });
  }
  if (c === 81) {
    if (in_class) {
      return new _M0DTPC16result6ResultGUbOiERP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("quoted regex escape in character class"));
    }
    const empty = new _M0TPB8MutLocalGbE(true);
    while (true) {
      if (self.i < self.cs.length && !_M0MP212zhou_2dwei976promql11RegexReader3has(self, "\\E")) {
        empty.val = false;
        self.i = self.i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (_M0MP212zhou_2dwei976promql11RegexReader3has(self, "\\E")) {
      self.i = self.i + 2 | 0;
    }
    return new _M0DTPC16result6ResultGUbOiERP212zhou_2dwei976promql10ParseErrorE2Ok({ _0: empty.val, _1: undefined });
  }
  let simple;
  switch (c) {
    case 97: {
      simple = 7;
      break;
    }
    case 102: {
      simple = 12;
      break;
    }
    case 110: {
      simple = 10;
      break;
    }
    case 114: {
      simple = 13;
      break;
    }
    case 116: {
      simple = 9;
      break;
    }
    case 118: {
      simple = 11;
      break;
    }
    default: {
      simple = undefined;
    }
  }
  let n;
  _L: {
    _L$2: {
      if (simple === undefined) {
      } else {
        const _Some = simple;
        const _n = _Some;
        n = _n;
        break _L$2;
      }
      break _L;
    }
    return new _M0DTPC16result6ResultGUbOiERP212zhou_2dwei976promql10ParseErrorE2Ok({ _0: false, _1: n });
  }
  if (c === 120) {
    const braced = _M0MP212zhou_2dwei976promql11RegexReader4peek(self) === 123;
    if (braced) {
      self.i = self.i + 1 | 0;
    }
    const n$2 = new _M0TPB8MutLocalGiE(0);
    const count = new _M0TPB8MutLocalGiE(0);
    while (true) {
      if (self.i < self.cs.length && (braced ? _M0MP212zhou_2dwei976promql11RegexReader4peek(self) !== 125 : count.val < 2)) {
        const d = _M0FP212zhou_2dwei976promql10hex__digit(_M0MP212zhou_2dwei976promql11RegexReader4peek(self));
        let _tmp;
        if (d < 0) {
          _tmp = true;
        } else {
          const _tmp$2 = n$2.val;
          if (16 === 0) {
            $panic();
          }
          _tmp = _tmp$2 > ((1114111 - d | 0) / 16 | 0);
        }
        if (_tmp) {
          return new _M0DTPC16result6ResultGUbOiERP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("invalid regex hex escape"));
        }
        n$2.val = (Math.imul(n$2.val, 16) | 0) + d | 0;
        count.val = count.val + 1 | 0;
        self.i = self.i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (count.val === 0 || (!braced && count.val !== 2 || braced && _M0MP212zhou_2dwei976promql11RegexReader4peek(self) !== 125)) {
      return new _M0DTPC16result6ResultGUbOiERP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("truncated regex hex escape"));
    }
    if (braced) {
      self.i = self.i + 1 | 0;
    }
    return new _M0DTPC16result6ResultGUbOiERP212zhou_2dwei976promql10ParseErrorE2Ok({ _0: false, _1: n$2.val });
  }
  if (c >= 48 && c <= 55) {
    const n$2 = new _M0TPB8MutLocalGiE(c - 48 | 0);
    const count = new _M0TPB8MutLocalGiE(1);
    while (true) {
      if (count.val < 3 && (self.i < self.cs.length && (_M0MP212zhou_2dwei976promql11RegexReader4peek(self) >= 48 && _M0MP212zhou_2dwei976promql11RegexReader4peek(self) <= 55))) {
        n$2.val = ((Math.imul(n$2.val, 8) | 0) + _M0MP212zhou_2dwei976promql11RegexReader4peek(self) | 0) - 48 | 0;
        count.val = count.val + 1 | 0;
        self.i = self.i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (count.val === 1 && c !== 48) {
      return new _M0DTPC16result6ResultGUbOiERP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("regex backreferences are not supported"));
    }
    return new _M0DTPC16result6ResultGUbOiERP212zhou_2dwei976promql10ParseErrorE2Ok({ _0: false, _1: n$2.val });
  }
  if (c < 128 && !(c >= 97 && c <= 122 || (c >= 65 && c <= 90 || _M0FP212zhou_2dwei976promql5digit(c)))) {
    return new _M0DTPC16result6ResultGUbOiERP212zhou_2dwei976promql10ParseErrorE2Ok({ _0: false, _1: c });
  }
  return new _M0DTPC16result6ResultGUbOiERP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid(`invalid RE2 escape: \\${_M0IPC14char4CharPB4Show10to__string(c)}`));
}
function _M0MP212zhou_2dwei976promql11RegexReader11class__atom(self) {
  if (self.i >= self.cs.length) {
    return new _M0DTPC16result6ResultGOiRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("unterminated regex class"));
  }
  let _tmp;
  if (_M0MP212zhou_2dwei976promql11RegexReader3has(self, "[:")) {
    self.i = self.i + 2 | 0;
    const start = self.i;
    while (true) {
      if (self.i < self.cs.length && !_M0MP212zhou_2dwei976promql11RegexReader3has(self, ":]")) {
        self.i = self.i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (!_M0MP212zhou_2dwei976promql11RegexReader3has(self, ":]")) {
      return new _M0DTPC16result6ResultGOiRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("unterminated POSIX character class"));
    }
    const name = _M0FP212zhou_2dwei976promql12slice__chars(self.cs, start, self.i);
    let plain;
    const _bind = "^";
    if (_M0MPC16string6String11has__prefix(name, new _M0TPC16string10StringView(_bind, 0, _bind.length))) {
      plain = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(name, 1, undefined));
    } else {
      plain = name;
    }
    if (!_M0MPC15array5Array8containsGsE(["alnum", "alpha", "ascii", "blank", "cntrl", "digit", "graph", "lower", "print", "punct", "space", "upper", "word", "xdigit"], plain)) {
      return new _M0DTPC16result6ResultGOiRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("unknown POSIX character class"));
    }
    self.i = self.i + 2 | 0;
    _tmp = undefined;
  } else {
    if (_M0MP212zhou_2dwei976promql11RegexReader4peek(self) === 92) {
      const _bind = _M0MP212zhou_2dwei976promql11RegexReader6escape(self, true);
      let _tmp$2;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp$2 = _ok._0;
      } else {
        return _bind;
      }
      _tmp = _tmp$2._1;
    } else {
      const c = _M0MP212zhou_2dwei976promql11RegexReader4peek(self);
      self.i = self.i + 1 | 0;
      _tmp = c;
    }
  }
  return new _M0DTPC16result6ResultGOiRP212zhou_2dwei976promql10ParseErrorE2Ok(_tmp);
}
function _M0MP212zhou_2dwei976promql11RegexReader16character__class(self) {
  self.i = self.i + 1 | 0;
  if (_M0MP212zhou_2dwei976promql11RegexReader4peek(self) === 94) {
    self.i = self.i + 1 | 0;
  }
  const first = new _M0TPB8MutLocalGbE(true);
  while (true) {
    if (self.i < self.cs.length) {
      if (_M0MP212zhou_2dwei976promql11RegexReader4peek(self) === 93 && !first.val) {
        self.i = self.i + 1 | 0;
        return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9RegexInfoRP212zhou_2dwei976promql10ParseErrorE2Ok(new _M0TP212zhou_2dwei976promql9RegexInfo(false, 1));
      }
      const _bind = _M0MP212zhou_2dwei976promql11RegexReader11class__atom(self);
      let left;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        left = _ok._0;
      } else {
        return _bind;
      }
      first.val = false;
      if (_M0IP016_24default__implPB2Eq10not__equalGOiE(left, undefined) && (_M0MP212zhou_2dwei976promql11RegexReader4peek(self) === 45 && ((self.i + 1 | 0) < self.cs.length && _M0MPC15array5Array2atGcE(self.cs, self.i + 1 | 0) !== 93))) {
        self.i = self.i + 1 | 0;
        const _bind$2 = _M0MP212zhou_2dwei976promql11RegexReader11class__atom(self);
        let right;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          right = _ok._0;
        } else {
          return _bind$2;
        }
        if (_M0IPC16option6OptionPB2Eq5equalGiE(right, undefined) || _M0MPC16option6Option6unwrapGiE(left) > _M0MPC16option6Option6unwrapGiE(right)) {
          return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9RegexInfoRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("invalid regex class range"));
        }
      }
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9RegexInfoRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("unterminated regex character class"));
}
function _M0MP212zhou_2dwei976promql11RegexReader10repetition(self) {
  const _bind = _M0MP212zhou_2dwei976promql11RegexReader4peek(self);
  switch (_bind) {
    case 42: {
      self.i = self.i + 1 | 0;
      return new _M0DTPC16result6ResultGOUiiERP212zhou_2dwei976promql10ParseErrorE2Ok({ _0: 0, _1: -1 });
    }
    case 43: {
      self.i = self.i + 1 | 0;
      return new _M0DTPC16result6ResultGOUiiERP212zhou_2dwei976promql10ParseErrorE2Ok({ _0: 1, _1: -1 });
    }
    case 63: {
      self.i = self.i + 1 | 0;
      return new _M0DTPC16result6ResultGOUiiERP212zhou_2dwei976promql10ParseErrorE2Ok({ _0: 0, _1: 1 });
    }
    case 123: {
      break;
    }
    default: {
      return new _M0DTPC16result6ResultGOUiiERP212zhou_2dwei976promql10ParseErrorE2Ok(undefined);
    }
  }
  const pos = new _M0TPB8MutLocalGiE(self.i + 1 | 0);
  const begin = pos.val;
  const minimum = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (pos.val < self.cs.length && _M0FP212zhou_2dwei976promql5digit(_M0MPC15array5Array2atGcE(self.cs, pos.val))) {
      minimum.val = _M0MPC13int3Int3min(((Math.imul(minimum.val, 10) | 0) + _M0MPC15array5Array2atGcE(self.cs, pos.val) | 0) - 48 | 0, 10001);
      pos.val = pos.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (pos.val === begin || pos.val > (begin + 1 | 0) && _M0MPC15array5Array2atGcE(self.cs, begin) === 48) {
    return new _M0DTPC16result6ResultGOUiiERP212zhou_2dwei976promql10ParseErrorE2Ok(undefined);
  }
  const maximum = new _M0TPB8MutLocalGiE(minimum.val);
  if (pos.val < self.cs.length && _M0MPC15array5Array2atGcE(self.cs, pos.val) === 44) {
    pos.val = pos.val + 1 | 0;
    const start = pos.val;
    maximum.val = 0;
    while (true) {
      if (pos.val < self.cs.length && _M0FP212zhou_2dwei976promql5digit(_M0MPC15array5Array2atGcE(self.cs, pos.val))) {
        maximum.val = _M0MPC13int3Int3min(((Math.imul(maximum.val, 10) | 0) + _M0MPC15array5Array2atGcE(self.cs, pos.val) | 0) - 48 | 0, 10001);
        pos.val = pos.val + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (pos.val === start) {
      maximum.val = -1;
    } else {
      if (pos.val > (start + 1 | 0) && _M0MPC15array5Array2atGcE(self.cs, start) === 48) {
        return new _M0DTPC16result6ResultGOUiiERP212zhou_2dwei976promql10ParseErrorE2Ok(undefined);
      }
    }
  }
  if (pos.val >= self.cs.length || _M0MPC15array5Array2atGcE(self.cs, pos.val) !== 125) {
    return new _M0DTPC16result6ResultGOUiiERP212zhou_2dwei976promql10ParseErrorE2Ok(undefined);
  }
  self.i = pos.val + 1 | 0;
  if (minimum.val > 1000 || (maximum.val > 1000 || maximum.val >= 0 && maximum.val < minimum.val)) {
    return new _M0DTPC16result6ResultGOUiiERP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("invalid regex repetition bounds"));
  }
  return new _M0DTPC16result6ResultGOUiiERP212zhou_2dwei976promql10ParseErrorE2Ok({ _0: minimum.val, _1: maximum.val });
}
function _M0FP212zhou_2dwei976promql17regex__expression(r, depth) {
  if (depth > 64) {
    return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9RegexInfoRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("regex nesting exceeds 64"));
  }
  const any_empty = new _M0TPB8MutLocalGbE(false);
  const largest_repeat = new _M0TPB8MutLocalGiE(1);
  const terms = [];
  const repeated = new _M0TPB8MutLocalGbE(false);
  while (true) {
    if (r.i < r.cs.length && _M0MP212zhou_2dwei976promql11RegexReader4peek(r) !== 41) {
      if (_M0MP212zhou_2dwei976promql11RegexReader3has(r, "\\Q")) {
        r.i = r.i + 2 | 0;
        while (true) {
          if (r.i < r.cs.length && !_M0MP212zhou_2dwei976promql11RegexReader3has(r, "\\E")) {
            r.nodes = r.nodes + 1 | 0;
            if (r.nodes > 10000) {
              return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9RegexInfoRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("regex node limit"));
            }
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(terms, new _M0TP212zhou_2dwei976promql9RegexInfo(false, 1));
            repeated.val = false;
            r.i = r.i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (_M0MP212zhou_2dwei976promql11RegexReader3has(r, "\\E")) {
          r.i = r.i + 2 | 0;
        }
        continue;
      }
      if (_M0MP212zhou_2dwei976promql11RegexReader4peek(r) === 124) {
        any_empty.val = any_empty.val || _M0MPB4Iter3allGRP212zhou_2dwei976promql9RegexInfoE(_M0MPC15array5Array4iterGRP212zhou_2dwei976promql9RegexInfoE(terms), (x) => x.nullable);
        const _bind = terms.length;
        let _tmp = 0;
        while (true) {
          const _ = _tmp;
          if (_ < _bind) {
            const term = terms[_];
            largest_repeat.val = _M0MPC13int3Int3max(largest_repeat.val, term.repeats);
            _tmp = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _M0MPC15array5Array5clearGRP212zhou_2dwei976promql9RegexInfoE(terms);
        repeated.val = false;
        r.i = r.i + 1 | 0;
        continue;
      }
      const _bind = _M0MP212zhou_2dwei976promql11RegexReader10repetition(r);
      let repeat;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        repeat = _ok._0;
      } else {
        return _bind;
      }
      let minimum;
      let maximum;
      _L: {
        _L$2: {
          if (repeat === undefined) {
          } else {
            const _Some = repeat;
            const _x = _Some;
            const _minimum = _x._0;
            const _maximum = _x._1;
            minimum = _minimum;
            maximum = _maximum;
            break _L$2;
          }
          break _L;
        }
        if (_M0MPC15array5Array9is__emptyGRPB4JsonE(terms) || repeated.val) {
          return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9RegexInfoRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("missing regex repetition argument or nested repetition"));
        }
        const previous = _M0MPC15array5Array2atGRPB4JsonE(terms, terms.length - 1 | 0);
        const factor = maximum < 0 ? minimum : maximum;
        const count = Math.imul(previous.repeats, factor) | 0;
        if (count > 1000) {
          return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9RegexInfoRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("nested regex repetition exceeds 1000"));
        }
        _M0MPC15array5Array3setGRP212zhou_2dwei976promql9RegexInfoE(terms, terms.length - 1 | 0, new _M0TP212zhou_2dwei976promql9RegexInfo(minimum === 0 || previous.nullable, count));
        if (_M0MP212zhou_2dwei976promql11RegexReader4peek(r) === 63) {
          r.i = r.i + 1 | 0;
        }
        repeated.val = true;
        continue;
      }
      r.nodes = r.nodes + 1 | 0;
      if (r.nodes > 10000) {
        return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9RegexInfoRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("regex node limit"));
      }
      let atom;
      _L$2: {
        _L$3: {
          const _bind$2 = _M0MP212zhou_2dwei976promql11RegexReader4peek(r);
          switch (_bind$2) {
            case 40: {
              const _bind$3 = _M0MP212zhou_2dwei976promql11RegexReader5group(r, depth);
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                atom = _ok._0;
              } else {
                return _bind$3;
              }
              break;
            }
            case 91: {
              const _bind$4 = _M0MP212zhou_2dwei976promql11RegexReader16character__class(r);
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                atom = _ok._0;
              } else {
                return _bind$4;
              }
              break;
            }
            case 92: {
              let empty;
              _L$4: {
                const _bind$5 = _M0MP212zhou_2dwei976promql11RegexReader6escape(r, false);
                let _bind$6;
                if (_bind$5.$tag === 1) {
                  const _ok = _bind$5;
                  _bind$6 = _ok._0;
                } else {
                  return _bind$5;
                }
                const _empty = _bind$6._0;
                empty = _empty;
                break _L$4;
              }
              atom = new _M0TP212zhou_2dwei976promql9RegexInfo(empty, 1);
              break;
            }
            case 94: {
              break _L$3;
            }
            case 36: {
              break _L$3;
            }
            default: {
              r.i = r.i + 1 | 0;
              atom = new _M0TP212zhou_2dwei976promql9RegexInfo(false, 1);
            }
          }
          break _L$2;
        }
        r.i = r.i + 1 | 0;
        atom = new _M0TP212zhou_2dwei976promql9RegexInfo(true, 1);
      }
      let info;
      _L$3: {
        _L$4: {
          if (atom === undefined) {
          } else {
            const _Some = atom;
            const _info = _Some;
            info = _info;
            break _L$4;
          }
          break _L$3;
        }
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(terms, info);
        repeated.val = false;
      }
      continue;
    } else {
      break;
    }
  }
  const _bind = terms.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const term = terms[_];
      largest_repeat.val = _M0MPC13int3Int3max(largest_repeat.val, term.repeats);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9RegexInfoRP212zhou_2dwei976promql10ParseErrorE2Ok(new _M0TP212zhou_2dwei976promql9RegexInfo(any_empty.val || _M0MPB4Iter3allGRP212zhou_2dwei976promql9RegexInfoE(_M0MPC15array5Array4iterGRP212zhou_2dwei976promql9RegexInfoE(terms), (x) => x.nullable), largest_repeat.val));
}
function _M0MP212zhou_2dwei976promql11RegexReader5group(self, depth) {
  self.i = self.i + 1 | 0;
  if (_M0MP212zhou_2dwei976promql11RegexReader4peek(self) === 63) {
    self.i = self.i + 1 | 0;
    if (_M0MP212zhou_2dwei976promql11RegexReader4peek(self) === 58) {
      self.i = self.i + 1 | 0;
    } else {
      if (_M0MP212zhou_2dwei976promql11RegexReader3has(self, "P<") || _M0MP212zhou_2dwei976promql11RegexReader4peek(self) === 60) {
        self.i = self.i + (_M0MP212zhou_2dwei976promql11RegexReader3has(self, "P<") ? 2 : 1) | 0;
        const start = self.i;
        while (true) {
          if (self.i < self.cs.length && _M0MP212zhou_2dwei976promql11RegexReader4peek(self) !== 62) {
            if (!_M0FP212zhou_2dwei976promql4word(_M0MP212zhou_2dwei976promql11RegexReader4peek(self))) {
              return new _M0DTPC16result6ResultGORP212zhou_2dwei976promql9RegexInfoRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("invalid regex capture name"));
            }
            self.i = self.i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (self.i === start || _M0MP212zhou_2dwei976promql11RegexReader4peek(self) !== 62) {
          return new _M0DTPC16result6ResultGORP212zhou_2dwei976promql9RegexInfoRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("invalid regex named capture"));
        }
        self.i = self.i + 1 | 0;
      } else {
        const flags = new _M0TPB8MutLocalGiE(0);
        const negative = new _M0TPB8MutLocalGbE(false);
        const after_minus = new _M0TPB8MutLocalGiE(0);
        while (true) {
          if (self.i < self.cs.length && (_M0MP212zhou_2dwei976promql11RegexReader4peek(self) !== 58 && _M0MP212zhou_2dwei976promql11RegexReader4peek(self) !== 41)) {
            const flag = _M0MP212zhou_2dwei976promql11RegexReader4peek(self);
            if (flag === 45 && !negative.val) {
              negative.val = true;
            } else {
              if (_M0MPC15array5Array8containsGcE([105, 109, 115, 85], flag)) {
                flags.val = flags.val + 1 | 0;
                if (negative.val) {
                  after_minus.val = after_minus.val + 1 | 0;
                }
              } else {
                return new _M0DTPC16result6ResultGORP212zhou_2dwei976promql9RegexInfoRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("unsupported regex group or flag"));
              }
            }
            self.i = self.i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (flags.val === 0 || negative.val && after_minus.val === 0) {
          return new _M0DTPC16result6ResultGORP212zhou_2dwei976promql9RegexInfoRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("empty regex flags"));
        }
        if (_M0MP212zhou_2dwei976promql11RegexReader4peek(self) === 41) {
          self.i = self.i + 1 | 0;
          return new _M0DTPC16result6ResultGORP212zhou_2dwei976promql9RegexInfoRP212zhou_2dwei976promql10ParseErrorE2Ok(undefined);
        }
        if (_M0MP212zhou_2dwei976promql11RegexReader4peek(self) !== 58) {
          return new _M0DTPC16result6ResultGORP212zhou_2dwei976promql9RegexInfoRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("unterminated regex flags"));
        }
        self.i = self.i + 1 | 0;
      }
    }
  }
  const _bind = _M0FP212zhou_2dwei976promql17regex__expression(self, depth + 1 | 0);
  let inner;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    inner = _ok._0;
  } else {
    return _bind;
  }
  if (_M0MP212zhou_2dwei976promql11RegexReader4peek(self) !== 41) {
    return new _M0DTPC16result6ResultGORP212zhou_2dwei976promql9RegexInfoRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("unclosed regex group"));
  }
  self.i = self.i + 1 | 0;
  return new _M0DTPC16result6ResultGORP212zhou_2dwei976promql9RegexInfoRP212zhou_2dwei976promql10ParseErrorE2Ok(inner);
}
function _M0FP212zhou_2dwei976promql14valid__unicode(text) {
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
function _M0FP212zhou_2dwei976promql21regex__matches__empty(pattern) {
  if (pattern.length > 100000 || !_M0FP212zhou_2dwei976promql14valid__unicode(pattern)) {
    return new _M0DTPC16result6ResultGbRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("invalid or excessive regex input"));
  }
  const r = new _M0TP212zhou_2dwei976promql11RegexReader(_M0MPC16string6String9to__array(pattern), 0, 0);
  const _bind = _M0FP212zhou_2dwei976promql17regex__expression(r, 0);
  let info;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    info = _ok._0;
  } else {
    return _bind;
  }
  if (r.i !== r.cs.length) {
    return new _M0DTPC16result6ResultGbRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("unexpected regex closing parenthesis"));
  }
  return new _M0DTPC16result6ResultGbRP212zhou_2dwei976promql10ParseErrorE2Ok(info.nullable);
}
function _M0FP212zhou_2dwei976promql19regex__bytes__empty(value) {
  const literal = new _M0TPB8MutLocalGbE(true);
  const branch_empty = new _M0TPB8MutLocalGbE(true);
  const any_empty = new _M0TPB8MutLocalGbE(false);
  const _bind = value.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const b = value[_];
      if (_M0IPC14byte4BytePB2Eq5equal(b, 124)) {
        any_empty.val = any_empty.val || branch_empty.val;
        branch_empty.val = true;
      } else {
        if (_M0MPC15array5Array8containsGiE([92, 46, 43, 42, 63, 40, 41, 91, 93, 123, 125, 94, 36], b)) {
          literal.val = false;
        }
        branch_empty.val = false;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (literal.val) {
    return new _M0DTPC16result6ResultGbRP212zhou_2dwei976promql10ParseErrorE2Ok(any_empty.val || branch_empty.val);
  }
  let pattern;
  let _try_err;
  _L: {
    _L$2: {
      const _bind$2 = _M0FPC28encoding4utf814decode_2einner(new _M0TPC15bytes9BytesView(value, 0, value.length), false);
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        pattern = _ok._0;
      } else {
        const _err = _bind$2;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    return new _M0DTPC16result6ResultGbRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("non-literal regex must be valid UTF-8"));
  }
  return _M0FP212zhou_2dwei976promql21regex__matches__empty(pattern);
}
function _M0FP212zhou_2dwei976promql18validate__selector(name, labels, bypass) {
  if (!_M0MPC16string6String9is__empty(name) && !_M0FP212zhou_2dwei976promql18metric__identifier(name)) {
    return new _M0DTPC16result6ResultGuRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("invalid metric name"));
  }
  const restrictive = new _M0TPB8MutLocalGbE(!_M0MPC16string6String9is__empty(name));
  const _bind = labels.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const _foreach_element = labels[_];
      let op;
      let key;
      let value;
      _L: {
        const _key = _foreach_element._0;
        const _op = _foreach_element._1;
        const _value = _foreach_element._2;
        op = _op;
        key = _key;
        value = _value;
        break _L;
      }
      if (!_M0MPC16string6String9is__empty(name) && $bytes_equal(key, $bytes_literal$2)) {
        return new _M0DTPC16result6ResultGuRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("metric name must not be set twice"));
      }
      let empty;
      _L$2: {
        _L$3: {
          switch (op) {
            case "=": {
              empty = _M0MPC15bytes5Bytes9is__empty(value);
              break;
            }
            case "!=": {
              empty = !_M0MPC15bytes5Bytes9is__empty(value);
              break;
            }
            case "=~": {
              break _L$3;
            }
            case "!~": {
              break _L$3;
            }
            default: {
              return new _M0DTPC16result6ResultGuRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("invalid matcher operator"));
            }
          }
          break _L$2;
        }
        const _bind$2 = _M0FP212zhou_2dwei976promql19regex__bytes__empty(value);
        let matches;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          matches = _ok._0;
        } else {
          return _bind$2;
        }
        empty = op === "=~" ? matches : !matches;
      }
      if (!empty) {
        restrictive.val = true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (!restrictive.val && !bypass) {
    return new _M0DTPC16result6ResultGuRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("vector selector needs at least one non-empty matcher"));
  } else {
    return new _M0DTPC16result6ResultGuRP212zhou_2dwei976promql10ParseErrorE2Ok(undefined);
  }
}
function _M0FP212zhou_2dwei976promql12info__labels(expr) {
  let _tmp = expr;
  _L: while (true) {
    const expr$2 = _tmp;
    let v;
    _L$2: {
      let name;
      let labels;
      _L$3: {
        let name$2;
        let labels$2;
        _L$4: {
          switch (expr$2.$tag) {
            case 3: {
              const _Selector = expr$2;
              const _name = _Selector._0;
              const _labels = _Selector._1;
              name$2 = _name;
              labels$2 = _labels;
              break _L$4;
            }
            case 4: {
              const _SelectorBytes = expr$2;
              const _name$2 = _SelectorBytes._0;
              const _labels$2 = _SelectorBytes._1;
              name = _name$2;
              labels = _labels$2;
              break _L$3;
            }
            case 15: {
              const _Offset = expr$2;
              const _v = _Offset._0;
              v = _v;
              break _L$2;
            }
            case 19: {
              const _OffsetExpression = expr$2;
              const _v$2 = _OffsetExpression._0;
              v = _v$2;
              break _L$2;
            }
            case 16: {
              const _At = expr$2;
              const _v$3 = _At._0;
              v = _v$3;
              break _L$2;
            }
            case 20: {
              const _ExtendedRange = expr$2;
              const _v$4 = _ExtendedRange._0;
              v = _v$4;
              break _L$2;
            }
            default: {
              return new _M0DTPC16result6ResultGuRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("info requires an unparenthesized label selector"));
            }
          }
        }
        if (!_M0MPC16string6String9is__empty(name$2)) {
          return new _M0DTPC16result6ResultGuRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("info requires label selectors only"));
        }
        return _M0FP212zhou_2dwei976promql18validate__selector(name$2, _M0MPC15array5Array3mapGUsssEUzszEE(labels$2, (t) => {
          const _bind = t._0;
          const _tmp$2 = _M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(_bind, 0, _bind.length), false);
          const _tmp$3 = t._1;
          const _bind$2 = t._2;
          return { _0: _tmp$2, _1: _tmp$3, _2: _M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length), false) };
        }), true);
      }
      if (!_M0MPC16string6String9is__empty(name)) {
        return new _M0DTPC16result6ResultGuRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("info requires label selectors only"));
      }
      return _M0FP212zhou_2dwei976promql18validate__selector(name, labels, true);
    }
    _tmp = v;
    continue;
  }
}
function _M0FP212zhou_2dwei976promql16duration__millis(text) {
  const cs = _M0MPC16string6String9to__array(text);
  const i = new _M0TPB8MutLocalGiE(0);
  const previous = new _M0TPB8MutLocalGiE(8);
  const total = new _M0TPB8MutLocalGlE(0n);
  while (true) {
    if (i.val < cs.length) {
      const begin = i.val;
      const amount = new _M0TPB8MutLocalGlE(0n);
      while (true) {
        if (i.val < cs.length && _M0FP212zhou_2dwei976promql5digit(_M0MPC15array5Array2atGcE(cs, i.val))) {
          const d = BigInt.asUintN(64, BigInt(_M0MPC15array5Array2atGcE(cs, i.val) - 48 | 0));
          const _tmp = amount.val;
          if (10n === 0n) {
            $panic();
          }
          if (BigInt.asIntN(64, _tmp) > BigInt.asIntN(64, BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, 9223372036854n - d)) / BigInt.asIntN(64, 10n)))) {
            return new _M0DTPC16result6ResultGlRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("duration overflow"));
          }
          amount.val = BigInt.asUintN(64, BigInt.asUintN(64, amount.val * 10n) + d);
          i.val = i.val + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (i.val === begin || i.val === cs.length) {
        return new _M0DTPC16result6ResultGlRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("duration requires integer and unit"));
      }
      let order;
      let multiplier;
      _L: {
        const _bind = _M0MPC15array5Array2atGcE(cs, i.val);
        switch (_bind) {
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
            return new _M0DTPC16result6ResultGlRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("unknown duration unit"));
          }
        }
      }
      i.val = i.val + 1 | 0;
      if (order >= previous.val) {
        return new _M0DTPC16result6ResultGlRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("duration units must be descending without repetition"));
      }
      previous.val = order;
      const _tmp = amount.val;
      if (multiplier === 0n) {
        $panic();
      }
      if (BigInt.asIntN(64, _tmp) > BigInt.asIntN(64, BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, 9223372036854n - total.val)) / BigInt.asIntN(64, multiplier)))) {
        return new _M0DTPC16result6ResultGlRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("duration overflow"));
      }
      total.val = BigInt.asUintN(64, total.val + BigInt.asUintN(64, amount.val * multiplier));
      continue;
    } else {
      break;
    }
  }
  if (_M0MPC15array5Array9is__emptyGcE(cs)) {
    return new _M0DTPC16result6ResultGlRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("empty duration"));
  }
  return new _M0DTPC16result6ResultGlRP212zhou_2dwei976promql10ParseErrorE2Ok(total.val);
}
function _M0FP212zhou_2dwei976promql13number__value(literal) {
  if (_M0MPC16string6String9is__empty(literal) || literal.length > 100000) {
    return new _M0DTPC16result6ResultGdRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("invalid numeric literal size"));
  }
  let negative;
  let text;
  _L: {
    const _bind = "-";
    if (_M0MPC16string6String11has__prefix(literal, new _M0TPC16string10StringView(_bind, 0, _bind.length))) {
      negative = true;
      text = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(literal, 1, undefined));
      break _L;
    } else {
      const _bind$2 = "+";
      if (_M0MPC16string6String11has__prefix(literal, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
        negative = false;
        text = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(literal, 1, undefined));
        break _L;
      } else {
        negative = false;
        text = literal;
        break _L;
      }
    }
  }
  const lower = _M0MPC16string6String9to__lower(text);
  let value;
  if (lower === "inf") {
    value = _M0FPC16double8infinity;
  } else {
    if (lower === "nan") {
      value = _M0FPC16double14not__a__number;
    } else {
      const _bind = "0x";
      if (_M0MPC16string6String11has__prefix(lower, new _M0TPC16string10StringView(_bind, 0, _bind.length))) {
        const cs = _M0MPC16string6String9to__array(text);
        const i = new _M0TPB8MutLocalGiE(2);
        if (i.val < cs.length && _M0MPC15array5Array2atGcE(cs, i.val) === 95) {
          i.val = i.val + 1 | 0;
        }
        const begin = i.val;
        const n = new _M0TPB8MutLocalGlE(0n);
        while (true) {
          if (i.val < cs.length) {
            if (_M0MPC15array5Array2atGcE(cs, i.val) === 95) {
              if (i.val === begin || ((i.val + 1 | 0) >= cs.length || (_M0FP212zhou_2dwei976promql10hex__digit(_M0MPC15array5Array2atGcE(cs, i.val - 1 | 0)) < 0 || _M0FP212zhou_2dwei976promql10hex__digit(_M0MPC15array5Array2atGcE(cs, i.val + 1 | 0)) < 0))) {
                return new _M0DTPC16result6ResultGdRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("hexadecimal underscore placement"));
              }
              i.val = i.val + 1 | 0;
              continue;
            }
            const d = _M0FP212zhou_2dwei976promql10hex__digit(_M0MPC15array5Array2atGcE(cs, i.val));
            let _tmp;
            if (d < 0) {
              _tmp = true;
            } else {
              const _tmp$2 = n.val;
              if (16n === 0n) {
                $panic();
              }
              _tmp = BigInt.asIntN(64, _tmp$2) > BigInt.asIntN(64, BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, 9223372036854775807n - BigInt.asUintN(64, BigInt(d)))) / BigInt.asIntN(64, 16n)));
            }
            if (_tmp) {
              return new _M0DTPC16result6ResultGdRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("hexadecimal integer syntax or signed-64 overflow"));
            }
            n.val = BigInt.asUintN(64, BigInt.asUintN(64, n.val * 16n) + BigInt.asUintN(64, BigInt(d)));
            i.val = i.val + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (i.val === begin) {
          return new _M0DTPC16result6ResultGdRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("hexadecimal digits required"));
        }
        value = $f64_convert_i64(BigInt.asIntN(64, n.val));
      } else {
        if (_M0MPB4Iter3anyGcE(_M0MPC16string6String4iter(text), (c) => c === 109 || (c === 115 || (c === 104 || (c === 100 || (c === 119 || c === 121)))))) {
          const _bind$2 = _M0FP212zhou_2dwei976promql16duration__millis(text);
          let _tmp;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _tmp = _ok._0;
          } else {
            return _bind$2;
          }
          value = $f64_convert_i64(BigInt.asIntN(64, _tmp)) / 1000;
        } else {
          const original = _M0MPC16string6String9to__array(text);
          const _bind$2 = original.length;
          let _tmp = 0;
          while (true) {
            const i = _tmp;
            if (i < _bind$2) {
              const c = original[i];
              if (c === 95 && (i === 0 || ((i + 1 | 0) === original.length || (!_M0FP212zhou_2dwei976promql5digit(_M0MPC15array5Array2atGcE(original, i - 1 | 0)) || !_M0FP212zhou_2dwei976promql5digit(_M0MPC15array5Array2atGcE(original, i + 1 | 0)))))) {
                return new _M0DTPC16result6ResultGdRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("decimal underscore placement"));
              }
              _tmp = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          const _bind$3 = "_";
          const _tmp$2 = new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length);
          const _bind$4 = "";
          const clean = _M0MPC16string6String12replace__all(text, _tmp$2, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length));
          const cs = _M0MPC16string6String9to__array(clean);
          const i = new _M0TPB8MutLocalGiE(0);
          const count = new _M0TPB8MutLocalGiE(0);
          while (true) {
            if (i.val < cs.length && _M0FP212zhou_2dwei976promql5digit(_M0MPC15array5Array2atGcE(cs, i.val))) {
              i.val = i.val + 1 | 0;
              count.val = count.val + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (i.val < cs.length && _M0MPC15array5Array2atGcE(cs, i.val) === 46) {
            i.val = i.val + 1 | 0;
            while (true) {
              if (i.val < cs.length && _M0FP212zhou_2dwei976promql5digit(_M0MPC15array5Array2atGcE(cs, i.val))) {
                i.val = i.val + 1 | 0;
                count.val = count.val + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          }
          if (count.val === 0) {
            return new _M0DTPC16result6ResultGdRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("decimal digits required"));
          }
          if (i.val < cs.length && (_M0MPC15array5Array2atGcE(cs, i.val) === 101 || _M0MPC15array5Array2atGcE(cs, i.val) === 69)) {
            i.val = i.val + 1 | 0;
            if (i.val < cs.length && (_M0MPC15array5Array2atGcE(cs, i.val) === 43 || _M0MPC15array5Array2atGcE(cs, i.val) === 45)) {
              i.val = i.val + 1 | 0;
            }
            const start = i.val;
            while (true) {
              if (i.val < cs.length && _M0FP212zhou_2dwei976promql5digit(_M0MPC15array5Array2atGcE(cs, i.val))) {
                i.val = i.val + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            if (i.val === start) {
              return new _M0DTPC16result6ResultGdRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("exponent digits required"));
            }
          }
          if (i.val !== cs.length) {
            return new _M0DTPC16result6ResultGdRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("invalid decimal syntax"));
          }
          const octal = new _M0TPB8MutLocalGbE(cs.length > 1 && (_M0MPC15array5Array2atGcE(cs, 0) === 48 && _M0MPB4Iter3allGcE(_M0MPC15array5Array4iterGcE(cs), (c) => c >= 48 && c <= 55)));
          const integer = new _M0TPB8MutLocalGlE(0n);
          if (octal.val) {
            const _bind$5 = cs.length;
            let _tmp$3 = 0;
            while (true) {
              const _ = _tmp$3;
              if (_ < _bind$5) {
                const c = cs[_];
                const d = BigInt.asUintN(64, BigInt(c - 48 | 0));
                const _tmp$4 = integer.val;
                if (8n === 0n) {
                  $panic();
                }
                if (BigInt.asIntN(64, _tmp$4) > BigInt.asIntN(64, BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, 9223372036854775807n - d)) / BigInt.asIntN(64, 8n)))) {
                  octal.val = false;
                  break;
                }
                integer.val = BigInt.asUintN(64, BigInt.asUintN(64, integer.val * 8n) + d);
                _tmp$3 = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          }
          if (octal.val) {
            value = $f64_convert_i64(BigInt.asIntN(64, integer.val));
          } else {
            let parsed;
            let _try_err;
            _L$2: {
              _L$3: {
                const _bind$5 = _M0FPC28internal7strconv13parse__double(new _M0TPC16string10StringView(clean, 0, clean.length));
                if (_bind$5.$tag === 1) {
                  const _ok = _bind$5;
                  parsed = _ok._0;
                } else {
                  const _err = _bind$5;
                  _try_err = _err._0;
                  break _L$3;
                }
                break _L$2;
              }
              return new _M0DTPC16result6ResultGdRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("numeric conversion failed"));
            }
            if (_M0MPC16double6Double7is__inf(parsed)) {
              return new _M0DTPC16result6ResultGdRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("numeric literal overflows float64"));
            }
            value = parsed;
          }
        }
      }
    }
  }
  return new _M0DTPC16result6ResultGdRP212zhou_2dwei976promql10ParseErrorE2Ok(negative ? -value : value);
}
function _M0FP212zhou_2dwei976promql16temporal__target(expr) {
  let _tmp = expr;
  _L: while (true) {
    const expr$2 = _tmp;
    let v;
    _L$2: {
      switch (expr$2.$tag) {
        case 3: {
          return true;
        }
        case 4: {
          return true;
        }
        case 6: {
          return true;
        }
        case 17: {
          return true;
        }
        case 14: {
          return true;
        }
        case 18: {
          return true;
        }
        case 15: {
          const _Offset = expr$2;
          const _v = _Offset._0;
          v = _v;
          break _L$2;
        }
        case 16: {
          const _At = expr$2;
          const _v$2 = _At._0;
          v = _v$2;
          break _L$2;
        }
        case 19: {
          const _OffsetExpression = expr$2;
          const _v$3 = _OffsetExpression._0;
          v = _v$3;
          break _L$2;
        }
        case 20: {
          const _ExtendedRange = expr$2;
          const _v$4 = _ExtendedRange._0;
          v = _v$4;
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
function _M0FP212zhou_2dwei976promql10aggregator(name) {
  return _M0MPC15array5Array8containsGsE(["sum", "avg", "min", "max", "count", "group", "stddev", "stdvar", "topk", "bottomk", "quantile", "count_values", "limitk", "limit_ratio"], name);
}
function _M0FP212zhou_2dwei976promql19validate__aggregate(name, parameterized, options) {
  if (!_M0FP212zhou_2dwei976promql10aggregator(name) || _M0IP016_24default__implPB2Eq10not__equalGbE(_M0MPC15array5Array8containsGsE(["topk", "bottomk", "quantile", "count_values", "limitk", "limit_ratio"], name), parameterized)) {
    return new _M0DTPC16result6ResultGuRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("invalid aggregation"));
  }
  if (_M0MPC15array5Array8containsGsE(["limitk", "limit_ratio"], name) && !options.experimental_functions) {
    return new _M0DTPC16result6ResultGuRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("experimental aggregation is not enabled"));
  } else {
    return new _M0DTPC16result6ResultGuRP212zhou_2dwei976promql10ParseErrorE2Ok(undefined);
  }
}
function _M0FP212zhou_2dwei976promql15infer__type__at(expr, depth, options) {
  let _tmp = expr;
  let _tmp$2 = depth;
  let _tmp$3 = options;
  _L: while (true) {
    const expr$2 = _tmp;
    const depth$2 = _tmp$2;
    const options$2 = _tmp$3;
    if (depth$2 > 64) {
      return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("type expression depth exceeds 64"));
    }
    let name;
    let args;
    _L$2: {
      let name$2;
      let v;
      _L$3: {
        let a;
        let op;
        let b;
        _L$4: {
          let op$2;
          let v$2;
          _L$5: {
            let v$3;
            _L$6: {
              let name$3;
              let labels;
              _L$7: {
                let name$4;
                let labels$2;
                _L$8: {
                  let a$2;
                  let left;
                  let op$3;
                  let matching;
                  let right;
                  let b$2;
                  _L$9: {
                    let a$3;
                    let op$4;
                    let matching$2;
                    let b$3;
                    _L$10: {
                      let parameter;
                      let name$5;
                      let v$4;
                      _L$11: {
                        let v$5;
                        _L$12: {
                          let v$6;
                          let kind;
                          _L$13: {
                            let v$7;
                            _L$14: {
                              let v$8;
                              _L$15: {
                                _L$16: {
                                  let s;
                                  _L$17: {
                                    switch (expr$2.$tag) {
                                      case 0: {
                                        const _Number = expr$2;
                                        const _s = _Number._0;
                                        s = _s;
                                        break _L$17;
                                      }
                                      case 1: {
                                        break _L$16;
                                      }
                                      case 2: {
                                        break _L$16;
                                      }
                                      case 5: {
                                        const _Parenthesized = expr$2;
                                        const _v = _Parenthesized._0;
                                        v$8 = _v;
                                        break _L$15;
                                      }
                                      case 15: {
                                        const _Offset = expr$2;
                                        const _v$2 = _Offset._0;
                                        v$7 = _v$2;
                                        break _L$14;
                                      }
                                      case 16: {
                                        const _At = expr$2;
                                        const _v$3 = _At._0;
                                        v$7 = _v$3;
                                        break _L$14;
                                      }
                                      case 19: {
                                        const _OffsetExpression = expr$2;
                                        const _v$4 = _OffsetExpression._0;
                                        v$7 = _v$4;
                                        break _L$14;
                                      }
                                      case 20: {
                                        const _ExtendedRange = expr$2;
                                        const _v$5 = _ExtendedRange._0;
                                        const _kind = _ExtendedRange._1;
                                        v$6 = _v$5;
                                        kind = _kind;
                                        break _L$13;
                                      }
                                      case 14: {
                                        const _Subquery = expr$2;
                                        const _v$6 = _Subquery._0;
                                        v$5 = _v$6;
                                        break _L$12;
                                      }
                                      case 18: {
                                        const _SubqueryExpression = expr$2;
                                        const _v$7 = _SubqueryExpression._0;
                                        v$5 = _v$7;
                                        break _L$12;
                                      }
                                      case 13: {
                                        const _AggregateParam = expr$2;
                                        const _name = _AggregateParam._0;
                                        const _parameter = _AggregateParam._3;
                                        const _v$8 = _AggregateParam._4;
                                        parameter = _parameter;
                                        name$5 = _name;
                                        v$4 = _v$8;
                                        break _L$11;
                                      }
                                      case 11: {
                                        const _BinaryMatch = expr$2;
                                        const _op = _BinaryMatch._0;
                                        const _matching = _BinaryMatch._1;
                                        const _a = _BinaryMatch._2;
                                        const _b = _BinaryMatch._3;
                                        a$3 = _a;
                                        op$4 = _op;
                                        matching$2 = _matching;
                                        b$3 = _b;
                                        break _L$10;
                                      }
                                      case 12: {
                                        const _BinaryFill = expr$2;
                                        const _op$2 = _BinaryFill._0;
                                        const _matching$2 = _BinaryFill._1;
                                        const _left = _BinaryFill._2;
                                        const _right = _BinaryFill._3;
                                        const _a$2 = _BinaryFill._4;
                                        const _b$2 = _BinaryFill._5;
                                        a$2 = _a$2;
                                        left = _left;
                                        op$3 = _op$2;
                                        matching = _matching$2;
                                        right = _right;
                                        b$2 = _b$2;
                                        break _L$9;
                                      }
                                      case 3: {
                                        const _Selector = expr$2;
                                        const _name$2 = _Selector._0;
                                        const _labels = _Selector._1;
                                        name$4 = _name$2;
                                        labels$2 = _labels;
                                        break _L$8;
                                      }
                                      case 4: {
                                        const _SelectorBytes = expr$2;
                                        const _name$3 = _SelectorBytes._0;
                                        const _labels$2 = _SelectorBytes._1;
                                        name$3 = _name$3;
                                        labels = _labels$2;
                                        break _L$7;
                                      }
                                      case 6: {
                                        const _Range = expr$2;
                                        const _v$9 = _Range._0;
                                        v$3 = _v$9;
                                        break _L$6;
                                      }
                                      case 17: {
                                        const _RangeExpression = expr$2;
                                        const _v$10 = _RangeExpression._0;
                                        v$3 = _v$10;
                                        break _L$6;
                                      }
                                      case 10: {
                                        const _Unary = expr$2;
                                        const _op$3 = _Unary._0;
                                        const _v$11 = _Unary._1;
                                        op$2 = _op$3;
                                        v$2 = _v$11;
                                        break _L$5;
                                      }
                                      case 9: {
                                        const _Binary = expr$2;
                                        const _op$4 = _Binary._0;
                                        const _a$3 = _Binary._1;
                                        const _b$3 = _Binary._2;
                                        a = _a$3;
                                        op = _op$4;
                                        b = _b$3;
                                        break _L$4;
                                      }
                                      case 8: {
                                        const _Aggregate = expr$2;
                                        const _name$4 = _Aggregate._0;
                                        const _v$12 = _Aggregate._3;
                                        name$2 = _name$4;
                                        v = _v$12;
                                        break _L$3;
                                      }
                                      default: {
                                        const _Call = expr$2;
                                        const _name$5 = _Call._0;
                                        const _args = _Call._1;
                                        name = _name$5;
                                        args = _args;
                                        break _L$2;
                                      }
                                    }
                                  }
                                  const _bind = _M0FP212zhou_2dwei976promql13number__value(s);
                                  if (_bind.$tag === 1) {
                                    const _ok = _bind;
                                    _ok._0;
                                  } else {
                                    return _bind;
                                  }
                                  return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE2Ok(0);
                                }
                                return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE2Ok(3);
                              }
                              _tmp = v$8;
                              _tmp$2 = depth$2 + 1 | 0;
                              continue;
                            }
                            if (!_M0FP212zhou_2dwei976promql16temporal__target(v$7)) {
                              return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("invalid time modifier target"));
                            }
                            _tmp = v$7;
                            _tmp$2 = depth$2 + 1 | 0;
                            continue;
                          }
                          if (!options$2.extended_ranges || (!_M0MPC15array5Array8containsGsE(["anchored", "smoothed"], kind) || !_M0FP212zhou_2dwei976promql16extended__target(v$6))) {
                            return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("invalid extended range modifier"));
                          }
                          _tmp = v$6;
                          _tmp$2 = depth$2 + 1 | 0;
                          continue;
                        }
                        const _bind = _M0FP212zhou_2dwei976promql15infer__type__at(v$5, depth$2 + 1 | 0, options$2);
                        let _tmp$4;
                        if (_bind.$tag === 1) {
                          const _ok = _bind;
                          _tmp$4 = _ok._0;
                        } else {
                          return _bind;
                        }
                        if (_M0IP016_24default__implPB2Eq10not__equalGRP212zhou_2dwei976promql9QueryTypeE(_tmp$4, 1)) {
                          return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("subquery requires instant vector"));
                        }
                        return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE2Ok(2);
                      }
                      const _bind = _M0FP212zhou_2dwei976promql19validate__aggregate(name$5, true, options$2);
                      if (_bind.$tag === 1) {
                        const _ok = _bind;
                        _ok._0;
                      } else {
                        return _bind;
                      }
                      const expected = name$5 === "count_values" ? 3 : 0;
                      let _tmp$4;
                      const _bind$2 = _M0FP212zhou_2dwei976promql15infer__type__at(parameter, depth$2 + 1 | 0, options$2);
                      let _tmp$5;
                      if (_bind$2.$tag === 1) {
                        const _ok = _bind$2;
                        _tmp$5 = _ok._0;
                      } else {
                        return _bind$2;
                      }
                      if (_M0IP016_24default__implPB2Eq10not__equalGRP212zhou_2dwei976promql9QueryTypeE(_tmp$5, expected)) {
                        _tmp$4 = true;
                      } else {
                        const _bind$3 = _M0FP212zhou_2dwei976promql15infer__type__at(v$4, depth$2 + 1 | 0, options$2);
                        let _tmp$6;
                        if (_bind$3.$tag === 1) {
                          const _ok = _bind$3;
                          _tmp$6 = _ok._0;
                        } else {
                          return _bind$3;
                        }
                        _tmp$4 = _M0IP016_24default__implPB2Eq10not__equalGRP212zhou_2dwei976promql9QueryTypeE(_tmp$6, 1);
                      }
                      if (_tmp$4) {
                        return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("aggregation parameter or vector type"));
                      }
                      return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE2Ok(1);
                    }
                    return _M0FP212zhou_2dwei976promql13infer__binary(op$4, a$3, b$3, matching$2, depth$2, options$2);
                  }
                  let _tmp$4;
                  if (!options$2.fill_modifiers) {
                    _tmp$4 = true;
                  } else {
                    let _tmp$5;
                    if (_M0MPC15array5Array8containsGsE(["and", "or", "unless"], op$3)) {
                      _tmp$5 = true;
                    } else {
                      let _tmp$6;
                      const _bind = _M0FP212zhou_2dwei976promql15infer__type__at(a$2, depth$2 + 1 | 0, options$2);
                      let _tmp$7;
                      if (_bind.$tag === 1) {
                        const _ok = _bind;
                        _tmp$7 = _ok._0;
                      } else {
                        return _bind;
                      }
                      if (_M0IP016_24default__implPB2Eq10not__equalGRP212zhou_2dwei976promql9QueryTypeE(_tmp$7, 1)) {
                        _tmp$6 = true;
                      } else {
                        const _bind$2 = _M0FP212zhou_2dwei976promql15infer__type__at(b$2, depth$2 + 1 | 0, options$2);
                        let _tmp$8;
                        if (_bind$2.$tag === 1) {
                          const _ok = _bind$2;
                          _tmp$8 = _ok._0;
                        } else {
                          return _bind$2;
                        }
                        _tmp$6 = _M0IP016_24default__implPB2Eq10not__equalGRP212zhou_2dwei976promql9QueryTypeE(_tmp$8, 1);
                      }
                      _tmp$5 = _tmp$6;
                    }
                    _tmp$4 = _tmp$5;
                  }
                  if (_tmp$4) {
                    return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("fill modifiers require two instant vectors and a non-set operator"));
                  }
                  let s;
                  _L$10: {
                    _L$11: {
                      if (left === undefined) {
                      } else {
                        const _Some = left;
                        const _s = _Some;
                        s = _s;
                        break _L$11;
                      }
                      break _L$10;
                    }
                    const _bind = _M0FP212zhou_2dwei976promql13number__value(s);
                    if (_bind.$tag === 1) {
                      const _ok = _bind;
                      _ok._0;
                    } else {
                      return _bind;
                    }
                  }
                  let s$2;
                  _L$11: {
                    _L$12: {
                      if (right === undefined) {
                      } else {
                        const _Some = right;
                        const _s = _Some;
                        s$2 = _s;
                        break _L$12;
                      }
                      break _L$11;
                    }
                    const _bind = _M0FP212zhou_2dwei976promql13number__value(s$2);
                    if (_bind.$tag === 1) {
                      const _ok = _bind;
                      _ok._0;
                    } else {
                      return _bind;
                    }
                  }
                  return _M0FP212zhou_2dwei976promql13infer__binary(op$3, a$2, b$2, matching, depth$2, options$2);
                }
                const _bind = _M0FP212zhou_2dwei976promql18validate__selector(name$4, _M0MPC15array5Array3mapGUsssEUzszEE(labels$2, (t) => {
                  const _bind$2 = t._0;
                  const _tmp$4 = _M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length), false);
                  const _tmp$5 = t._1;
                  const _bind$3 = t._2;
                  return { _0: _tmp$4, _1: _tmp$5, _2: _M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length), false) };
                }), false);
                if (_bind.$tag === 1) {
                  const _ok = _bind;
                  _ok._0;
                } else {
                  return _bind;
                }
                return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE2Ok(1);
              }
              const _bind = _M0FP212zhou_2dwei976promql18validate__selector(name$3, labels, false);
              if (_bind.$tag === 1) {
                const _ok = _bind;
                _ok._0;
              } else {
                return _bind;
              }
              return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE2Ok(1);
            }
            let _tmp$4;
            if (!_M0FP212zhou_2dwei976promql16direct__selector(v$3)) {
              _tmp$4 = true;
            } else {
              const _bind = _M0FP212zhou_2dwei976promql15infer__type__at(v$3, depth$2 + 1 | 0, options$2);
              let _tmp$5;
              if (_bind.$tag === 1) {
                const _ok = _bind;
                _tmp$5 = _ok._0;
              } else {
                return _bind;
              }
              _tmp$4 = _M0IP016_24default__implPB2Eq10not__equalGRP212zhou_2dwei976promql9QueryTypeE(_tmp$5, 1);
            }
            if (_tmp$4) {
              return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("range requires vector selector"));
            }
            return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE2Ok(2);
          }
          const _bind = _M0FP212zhou_2dwei976promql15infer__type__at(v$2, depth$2 + 1 | 0, options$2);
          let t;
          if (_bind.$tag === 1) {
            const _ok = _bind;
            t = _ok._0;
          } else {
            return _bind;
          }
          if (!_M0MPC15array5Array8containsGsE(["+", "-"], op$2) || (_M0IP212zhou_2dwei976promql9QueryTypePB2Eq5equal(t, 2) || _M0IP212zhou_2dwei976promql9QueryTypePB2Eq5equal(t, 3))) {
            return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("invalid unary expression"));
          }
          return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE2Ok(t);
        }
        return _M0FP212zhou_2dwei976promql13infer__binary(op, a, b, new _M0TP212zhou_2dwei976promql14VectorMatching(false, undefined, [], undefined, []), depth$2, options$2);
      }
      const _bind = _M0FP212zhou_2dwei976promql19validate__aggregate(name$2, false, options$2);
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _ok._0;
      } else {
        return _bind;
      }
      const _bind$2 = _M0FP212zhou_2dwei976promql15infer__type__at(v, depth$2 + 1 | 0, options$2);
      let _tmp$4;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$4 = _ok._0;
      } else {
        return _bind$2;
      }
      if (_M0IP016_24default__implPB2Eq10not__equalGRP212zhou_2dwei976promql9QueryTypeE(_tmp$4, 1)) {
        return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("aggregation requires instant vector"));
      }
      return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE2Ok(1);
    }
    return _M0FP212zhou_2dwei976promql11infer__call(name, args, depth$2, options$2);
  }
}
function _M0FP212zhou_2dwei976promql13infer__binary(op, a, b, matching, depth, options) {
  const _bind = _M0FP212zhou_2dwei976promql15infer__type__at(a, depth + 1 | 0, options);
  let x;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    x = _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = _M0FP212zhou_2dwei976promql15infer__type__at(b, depth + 1 | 0, options);
  let y;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    y = _ok._0;
  } else {
    return _bind$2;
  }
  const comparison = _M0MPC15array5Array8containsGsE(["==", "!=", ">", "<", ">=", "<="], op);
  const set = _M0MPC15array5Array8containsGsE(["and", "or", "unless"], op);
  if (_M0FP212zhou_2dwei976promql10precedence(op) === 0 || (_M0IP212zhou_2dwei976promql9QueryTypePB2Eq5equal(x, 2) || (_M0IP212zhou_2dwei976promql9QueryTypePB2Eq5equal(y, 2) || (_M0IP212zhou_2dwei976promql9QueryTypePB2Eq5equal(x, 3) || _M0IP212zhou_2dwei976promql9QueryTypePB2Eq5equal(y, 3))))) {
    return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("binary operands must be scalar or instant vector"));
  }
  if (matching.return_bool && !comparison) {
    return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("bool only applies to comparison"));
  }
  if (comparison && (_M0IP212zhou_2dwei976promql9QueryTypePB2Eq5equal(x, 0) && (_M0IP212zhou_2dwei976promql9QueryTypePB2Eq5equal(y, 0) && !matching.return_bool))) {
    return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("scalar comparison requires bool"));
  }
  if ((set || !_M0MPC15array5Array9is__emptyGRPB4JsonE(matching.labels)) && (_M0IP016_24default__implPB2Eq10not__equalGRP212zhou_2dwei976promql9QueryTypeE(x, 1) || _M0IP016_24default__implPB2Eq10not__equalGRP212zhou_2dwei976promql9QueryTypeE(y, 1))) {
    return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("set operators and matching require two instant vectors"));
  }
  if (set && _M0IP016_24default__implPB2Eq10not__equalGOsE(matching.group, undefined)) {
    return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("set operators cannot use grouping modifiers"));
  }
  if (_M0IPC16option6OptionPB2Eq5equalGsE(matching.mode, "on") && _M0MPB4Iter3anyGsE(_M0MPC15array5Array4iterGRP212zhou_2dwei976promql9RegexInfoE(matching.include_labels), (label) => _M0MPC15array5Array8containsGsE(matching.labels, label))) {
    return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("label cannot occur in both on and group include_labels"));
  }
  return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0IP212zhou_2dwei976promql9QueryTypePB2Eq5equal(x, 0) && _M0IP212zhou_2dwei976promql9QueryTypePB2Eq5equal(y, 0) ? 0 : 1);
}
function _M0FP212zhou_2dwei976promql11infer__call(name, args, depth, options) {
  let signature;
  const _bind = _M0FP212zhou_2dwei976promql19function__signature(name);
  if (_bind === undefined) {
    return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid(`unknown function: ${name}`));
  } else {
    const _Some = _bind;
    const _s = _Some;
    signature = _s;
  }
  if (signature.experimental && !options.experimental_functions) {
    return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid(`experimental function is not enabled: ${name}`));
  }
  _L: {
    _L$2: {
      if (args.length < signature.min_args) {
        break _L$2;
      } else {
        let n;
        _L$3: {
          _L$4: {
            const _bind$2 = signature.max_args;
            if (_bind$2 === undefined) {
            } else {
              const _Some = _bind$2;
              const _n = _Some;
              n = _n;
              break _L$4;
            }
            break _L$3;
          }
          if (args.length > n) {
            break _L$2;
          }
        }
      }
      break _L;
    }
    return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid(`function argument count: ${name}`));
  }
  const _bind$2 = args.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const arg = args[i];
      const expected = _M0MPC15array5Array2atGRP212zhou_2dwei976promql9QueryTypeE(signature.arguments, _M0MPC13int3Int3min(i, signature.arguments.length - 1 | 0));
      let actual;
      if (name === "info" && i === 1) {
        const _bind$3 = _M0FP212zhou_2dwei976promql12info__labels(arg);
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _ok._0;
        } else {
          return _bind$3;
        }
        actual = 1;
      } else {
        const _bind$3 = _M0FP212zhou_2dwei976promql15infer__type__at(arg, depth + 1 | 0, options);
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          actual = _ok._0;
        } else {
          return _bind$3;
        }
      }
      if (_M0IP016_24default__implPB2Eq10not__equalGRP212zhou_2dwei976promql9QueryTypeE(actual, expected)) {
        return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid(`function argument type: ${name}`));
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql9QueryTypeRP212zhou_2dwei976promql10ParseErrorE2Ok(signature.result);
}
function _M0MP212zhou_2dwei976promql13ParserOptions11new_2einner(experimental_functions, duration_expressions, extended_ranges, fill_modifiers) {
  return new _M0TP212zhou_2dwei976promql13ParserOptions(experimental_functions, duration_expressions, extended_ranges, fill_modifiers);
}
function _M0FP212zhou_2dwei976promql19infer__type_2einner(expr, options) {
  return _M0FP212zhou_2dwei976promql15infer__type__at(expr, 0, options);
}
function _M0FP212zhou_2dwei976promql11infer__type(expr, options$46$opt) {
  let options;
  if (options$46$opt === undefined) {
    options = _M0MP212zhou_2dwei976promql13ParserOptions11new_2einner(false, false, false, false);
  } else {
    const _Some = options$46$opt;
    options = _Some;
  }
  return _M0FP212zhou_2dwei976promql19infer__type_2einner(expr, options);
}
function _M0FP212zhou_2dwei976promql10identifier(s) {
  const cs = _M0MPC16string6String9to__array(s);
  return !_M0MPC15array5Array9is__emptyGcE(cs) && (_M0FP212zhou_2dwei976promql12ascii__alpha(_M0MPC15array5Array2atGcE(cs, 0)) && _M0MPB4Iter3allGcE(_M0MPC15array5Array4iterGcE(cs), _M0FP212zhou_2dwei976promql4word));
}
function _M0FP212zhou_2dwei976promql7keyword(s) {
  return _M0MPC15array5Array8containsGsE(["and", "or", "unless", "atan2", "bool", "on", "ignoring", "group_left", "group_right", "sum", "avg", "min", "max", "count", "group", "stddev", "stdvar", "topk", "bottomk", "quantile", "count_values", "by", "without", "offset", "start", "end", "limitk", "limit_ratio", "step", "range", "max_of", "min_of", "anchored", "smoothed", "fill", "fill_left", "fill_right"], s);
}
function _M0MP212zhou_2dwei976promql6Cursor4peek(self) {
  if (self.pos < self.tokens.length) {
    const t = _M0MPC15array5Array2atGRPB4JsonE(self.tokens, self.pos);
    return t.quoted ? "<string>" : t.kind === "word" && _M0FP212zhou_2dwei976promql7keyword(_M0MPC16string6String9to__lower(t.text)) ? _M0MPC16string6String9to__lower(t.text) : t.text;
  } else {
    return "<eof>";
  }
}
function _M0MP212zhou_2dwei976promql6Cursor3eat(self, text) {
  if (_M0MP212zhou_2dwei976promql6Cursor4peek(self) === text) {
    self.pos = self.pos + 1 | 0;
    return true;
  } else {
    return false;
  }
}
function _M0FP212zhou_2dwei976promql12source__span(cs, start, end) {
  const line = new _M0TPB8MutLocalGiE(1);
  const column = new _M0TPB8MutLocalGiE(1);
  const _bind = 0;
  let _tmp = _bind;
  while (true) {
    const i = _tmp;
    if (i < start) {
      if (_M0MPC15array5Array2atGcE(cs, i) === 10) {
        line.val = line.val + 1 | 0;
        column.val = 1;
      } else {
        column.val = column.val + 1 | 0;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP212zhou_2dwei976promql10SourceSpan(start, end, line.val, column.val);
}
function _M0MP212zhou_2dwei976promql6Cursor4span(self) {
  if (self.pos < self.tokens.length) {
    const t = _M0MPC15array5Array2atGRPB4JsonE(self.tokens, self.pos);
    return _M0FP212zhou_2dwei976promql12source__span(self.source, t.start, t.end);
  } else {
    return _M0FP212zhou_2dwei976promql12source__span(self.source, self.source.length, self.source.length);
  }
}
function _M0MP212zhou_2dwei976promql6Cursor4need(self, text) {
  if (!_M0MP212zhou_2dwei976promql6Cursor3eat(self, text)) {
    return new _M0DTPC16result6ResultGuRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eLocated(`expected ${text}, got ${_M0MP212zhou_2dwei976promql6Cursor4peek(self)}`, _M0MP212zhou_2dwei976promql6Cursor4span(self)));
  } else {
    return new _M0DTPC16result6ResultGuRP212zhou_2dwei976promql10ParseErrorE2Ok(undefined);
  }
}
function _M0MP212zhou_2dwei976promql6Cursor4take(self) {
  if (self.pos >= self.tokens.length) {
    return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql5TokenRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eLocated("unexpected end", _M0MP212zhou_2dwei976promql6Cursor4span(self)));
  }
  const t = _M0MPC15array5Array2atGRPB4JsonE(self.tokens, self.pos);
  self.pos = self.pos + 1 | 0;
  return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql5TokenRP212zhou_2dwei976promql10ParseErrorE2Ok(t);
}
function _M0MP212zhou_2dwei976promql5Token5bytes(self) {
  return _M0MPC16option6Option16unwrap__or__elseGzE(self.raw_bytes, () => {
    const _bind = self.text;
    return _M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(_bind, 0, _bind.length), false);
  });
}
function _M0FP212zhou_2dwei976promql8selector(c, name) {
  const labels = [];
  const raw = new _M0TPB8MutLocalGbE(false);
  if (_M0MP212zhou_2dwei976promql6Cursor3eat(c, "{") && !_M0MP212zhou_2dwei976promql6Cursor3eat(c, "}")) {
    while (true) {
      const _bind = _M0MP212zhou_2dwei976promql6Cursor4take(c);
      let key;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        key = _ok._0;
      } else {
        return _bind;
      }
      if (!key.quoted && (!_M0FP212zhou_2dwei976promql10identifier(key.text) || _M0IP016_24default__implPB2Eq10not__equalGsE(key.kind, "word"))) {
        return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("label name"));
      }
      if (key.quoted && (_M0MP212zhou_2dwei976promql6Cursor4peek(c) === "," || _M0MP212zhou_2dwei976promql6Cursor4peek(c) === "}")) {
        const _bind$2 = "__name__";
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(labels, { _0: _M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length), false), _1: "=", _2: _M0MP212zhou_2dwei976promql5Token5bytes(key) });
      } else {
        const _bind$2 = _M0MP212zhou_2dwei976promql6Cursor4take(c);
        let _tmp;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp = _ok._0;
        } else {
          return _bind$2;
        }
        const op = _tmp.text;
        if (!_M0MPC15array5Array8containsGsE(["=", "!=", "=~", "!~"], op)) {
          return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("matcher operator"));
        }
        const _bind$3 = _M0MP212zhou_2dwei976promql6Cursor4take(c);
        let value;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          value = _ok._0;
        } else {
          return _bind$3;
        }
        if (!value.quoted) {
          return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("matcher requires string"));
        }
        _M0MPC15array5Array4pushGRPC14json10WriteFrameE(labels, { _0: _M0MP212zhou_2dwei976promql5Token5bytes(key), _1: op, _2: _M0MP212zhou_2dwei976promql5Token5bytes(value) });
        if (_M0IP016_24default__implPB2Eq10not__equalGOzE(value.raw_bytes, undefined)) {
          raw.val = true;
        }
      }
      if (_M0IP016_24default__implPB2Eq10not__equalGOzE(key.raw_bytes, undefined)) {
        raw.val = true;
      }
      if (_M0MP212zhou_2dwei976promql6Cursor3eat(c, "}")) {
        break;
      }
      const _bind$2 = _M0MP212zhou_2dwei976promql6Cursor4need(c, ",");
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _ok._0;
      } else {
        return _bind$2;
      }
      if (_M0MP212zhou_2dwei976promql6Cursor3eat(c, "}")) {
        break;
      }
      continue;
    }
  }
  let _tmp;
  if (raw.val) {
    _tmp = new _M0DTP212zhou_2dwei976promql4Expr13SelectorBytes(name, labels);
  } else {
    const _bind = _M0MPC15array5Array3mapGUzszEUsssEEHRP212zhou_2dwei976promql10ParseError(labels, (t) => {
      let key;
      let _try_err;
      _L: {
        _L$2: {
          const _bind$2 = t._0;
          const _bind$3 = _M0FPC28encoding4utf814decode_2einner(new _M0TPC15bytes9BytesView(_bind$2, 0, _bind$2.length), false);
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            key = _ok._0;
          } else {
            const _err = _bind$3;
            _try_err = _err._0;
            break _L$2;
          }
          break _L;
        }
        return new _M0DTPC16result6ResultGUsssERP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("label decoding"));
      }
      let value;
      let _try_err$2;
      _L$2: {
        _L$3: {
          const _bind$2 = t._2;
          const _bind$3 = _M0FPC28encoding4utf814decode_2einner(new _M0TPC15bytes9BytesView(_bind$2, 0, _bind$2.length), false);
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            value = _ok._0;
          } else {
            const _err = _bind$3;
            _try_err$2 = _err._0;
            break _L$3;
          }
          break _L$2;
        }
        return new _M0DTPC16result6ResultGUsssERP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("value decoding"));
      }
      return new _M0DTPC16result6ResultGUsssERP212zhou_2dwei976promql10ParseErrorE2Ok({ _0: key, _1: t._1, _2: value });
    });
    let _tmp$2;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp$2 = _ok._0;
    } else {
      return _bind;
    }
    _tmp = new _M0DTP212zhou_2dwei976promql4Expr8Selector(name, _tmp$2);
  }
  return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE2Ok(_tmp);
}
function _M0FP212zhou_2dwei976promql8grouping(c) {
  const _bind = _M0MP212zhou_2dwei976promql6Cursor4need(c, "(");
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  const out = [];
  if (_M0MP212zhou_2dwei976promql6Cursor3eat(c, ")")) {
    return new _M0DTPC16result6ResultGRPB5ArrayGsERP212zhou_2dwei976promql10ParseErrorE2Ok(out);
  }
  while (true) {
    const _bind$2 = _M0MP212zhou_2dwei976promql6Cursor4take(c);
    let token;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      token = _ok._0;
    } else {
      return _bind$2;
    }
    if (_M0IP016_24default__implPB2Eq10not__equalGOzE(token.raw_bytes, undefined) || (_M0MPC16string6String9is__empty(token.text) || !token.quoted && (_M0IP016_24default__implPB2Eq10not__equalGsE(token.kind, "word") || (!_M0FP212zhou_2dwei976promql18metric__identifier(token.text) || _M0MPC16string6String9to__lower(token.text) === "without")))) {
      return new _M0DTPC16result6ResultGRPB5ArrayGsERP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("grouping label"));
    }
    _M0MPC15array5Array4pushGRPC14json10WriteFrameE(out, token.text);
    if (_M0MP212zhou_2dwei976promql6Cursor3eat(c, ")")) {
      break;
    }
    const _bind$3 = _M0MP212zhou_2dwei976promql6Cursor4need(c, ",");
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _ok._0;
    } else {
      return _bind$3;
    }
    if (_M0MP212zhou_2dwei976promql6Cursor3eat(c, ")")) {
      break;
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGsERP212zhou_2dwei976promql10ParseErrorE2Ok(out);
}
function _M0FP212zhou_2dwei976promql15fill__modifiers(c) {
  const left = new _M0TPB8MutLocalGOsE(undefined);
  const right = new _M0TPB8MutLocalGOsE(undefined);
  while (true) {
    if (_M0MPC15array5Array8containsGsE(["fill", "fill_left", "fill_right"], _M0MP212zhou_2dwei976promql6Cursor4peek(c))) {
      if (!c.options.fill_modifiers) {
        return new _M0DTPC16result6ResultGUOsOsERP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("binop fill modifiers are not enabled"));
      }
      const _bind = _M0MP212zhou_2dwei976promql6Cursor4take(c);
      let _tmp;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        return _bind;
      }
      const kind = _M0MPC16string6String9to__lower(_tmp.text);
      const _bind$2 = _M0MP212zhou_2dwei976promql6Cursor4need(c, "(");
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _ok._0;
      } else {
        return _bind$2;
      }
      const sign = _M0MP212zhou_2dwei976promql6Cursor3eat(c, "-") ? "-" : _M0MP212zhou_2dwei976promql6Cursor3eat(c, "+") ? "+" : "";
      const _bind$3 = _M0MP212zhou_2dwei976promql6Cursor4take(c);
      let token;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        token = _ok._0;
      } else {
        return _bind$3;
      }
      if (_M0IP016_24default__implPB2Eq10not__equalGsE(token.kind, "number") && _M0IP016_24default__implPB2Eq10not__equalGsE(token.kind, "duration")) {
        return new _M0DTPC16result6ResultGUOsOsERP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("fill requires numeric literal"));
      }
      const value = `${sign}${token.text}`;
      const _bind$4 = _M0FP212zhou_2dwei976promql13number__value(value);
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _ok._0;
      } else {
        return _bind$4;
      }
      const _bind$5 = _M0MP212zhou_2dwei976promql6Cursor4need(c, ")");
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _ok._0;
      } else {
        return _bind$5;
      }
      if (kind === "fill" || kind === "fill_left") {
        if (_M0IP016_24default__implPB2Eq10not__equalGOsE(left.val, undefined)) {
          return new _M0DTPC16result6ResultGUOsOsERP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("duplicate left fill"));
        }
        left.val = value;
      }
      if (kind === "fill" || kind === "fill_right") {
        if (_M0IP016_24default__implPB2Eq10not__equalGOsE(right.val, undefined)) {
          return new _M0DTPC16result6ResultGUOsOsERP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("duplicate right fill"));
        }
        right.val = value;
      }
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGUOsOsERP212zhou_2dwei976promql10ParseErrorE2Ok({ _0: left.val, _1: right.val });
}
function _M0FP212zhou_2dwei976promql15duration__bound(value) {
  if (_M0MPC16double6Double7is__inf(value) || (value > 9223372036.8547764 || value < -9223372036.8547764)) {
    return new _M0DTPC16result6ResultGuRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("duration out of signed-64 nanosecond range"));
  } else {
    return new _M0DTPC16result6ResultGuRP212zhou_2dwei976promql10ParseErrorE2Ok(undefined);
  }
}
function _M0FP212zhou_2dwei976promql15duration__unary(op, value) {
  if (op === "+") {
    return value;
  }
  let s;
  _L: {
    if (value.$tag === 0) {
      const _DurationValue = value;
      const _s = _DurationValue._0;
      s = _s;
      break _L;
    } else {
      return new _M0DTP212zhou_2dwei976promql12DurationExpr13DurationUnary(op, value);
    }
  }
  if (op === "+") {
    return value;
  } else {
    let _tmp;
    const _bind = "-";
    if (_M0MPC16string6String11has__prefix(s, new _M0TPC16string10StringView(_bind, 0, _bind.length))) {
      _tmp = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(s, 1, undefined));
    } else {
      const _bind$2 = "+";
      if (_M0MPC16string6String11has__prefix(s, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
        _tmp = `-${_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(s, 1, undefined))}`;
      } else {
        _tmp = `-${s}`;
      }
    }
    return new _M0DTP212zhou_2dwei976promql12DurationExpr13DurationValue(_tmp);
  }
}
function _M0FP212zhou_2dwei976promql20duration__expression(c, min, depth) {
  if (depth > 64) {
    return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql12DurationExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("duration expression nesting limit"));
  }
  const _bind = _M0MP212zhou_2dwei976promql6Cursor4take(c);
  let token;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    token = _ok._0;
  } else {
    return _bind;
  }
  let _tmp;
  if (token.text === "+" || token.text === "-") {
    const _tmp$2 = token.text;
    const _bind$2 = _M0FP212zhou_2dwei976promql20duration__expression(c, 6, depth + 1 | 0);
    let _tmp$3;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp$3 = _ok._0;
    } else {
      return _bind$2;
    }
    _tmp = _M0FP212zhou_2dwei976promql15duration__unary(_tmp$2, _tmp$3);
  } else {
    if (token.text === "(") {
      if (!c.options.duration_expressions) {
        return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql12DurationExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("duration expressions are not enabled"));
      }
      const _bind$2 = _M0FP212zhou_2dwei976promql20duration__expression(c, 1, depth + 1 | 0);
      let e;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        e = _ok._0;
      } else {
        return _bind$2;
      }
      const _bind$3 = _M0MP212zhou_2dwei976promql6Cursor4need(c, ")");
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _ok._0;
      } else {
        return _bind$3;
      }
      _tmp = e;
    } else {
      if (token.kind === "number" || token.kind === "duration") {
        if (_M0MPC16string6String9to__lower(token.text) === "inf" || _M0MPC16string6String9to__lower(token.text) === "nan") {
          return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql12DurationExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("non-finite duration"));
        }
        const _bind$2 = _M0FP212zhou_2dwei976promql13number__value(token.text);
        let _tmp$2;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp$2 = _ok._0;
        } else {
          return _bind$2;
        }
        const _bind$3 = _M0FP212zhou_2dwei976promql15duration__bound(_tmp$2);
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _ok._0;
        } else {
          return _bind$3;
        }
        _tmp = new _M0DTP212zhou_2dwei976promql12DurationExpr13DurationValue(token.text);
      } else {
        const name = _M0MPC16string6String9to__lower(token.text);
        if (!_M0MPC15array5Array8containsGsE(["step", "range", "min_of", "max_of"], name) || token.quoted) {
          return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql12DurationExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("duration value or function required"));
        }
        if (!c.options.duration_expressions) {
          return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql12DurationExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("duration expressions are not enabled"));
        }
        const _bind$2 = _M0MP212zhou_2dwei976promql6Cursor4need(c, "(");
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _ok._0;
        } else {
          return _bind$2;
        }
        let args;
        if (name === "step" || name === "range") {
          args = [];
        } else {
          const _bind$3 = _M0FP212zhou_2dwei976promql20duration__expression(c, 1, depth + 1 | 0);
          let left;
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            left = _ok._0;
          } else {
            return _bind$3;
          }
          const _bind$4 = _M0MP212zhou_2dwei976promql6Cursor4need(c, ",");
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _ok._0;
          } else {
            return _bind$4;
          }
          const _bind$5 = _M0FP212zhou_2dwei976promql20duration__expression(c, 1, depth + 1 | 0);
          let _tmp$2;
          if (_bind$5.$tag === 1) {
            const _ok = _bind$5;
            _tmp$2 = _ok._0;
          } else {
            return _bind$5;
          }
          args = [left, _tmp$2];
        }
        const _bind$3 = _M0MP212zhou_2dwei976promql6Cursor4need(c, ")");
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _ok._0;
        } else {
          return _bind$3;
        }
        _tmp = new _M0DTP212zhou_2dwei976promql12DurationExpr12DurationCall(name, args);
      }
    }
  }
  const lhs = new _M0TPB8MutLocalGRP212zhou_2dwei976promql12DurationExprE(_tmp);
  while (true) {
    if (_M0MPC15array5Array8containsGsE(["+", "-", "*", "/", "%", "^"], _M0MP212zhou_2dwei976promql6Cursor4peek(c)) && _M0FP212zhou_2dwei976promql10precedence(_M0MP212zhou_2dwei976promql6Cursor4peek(c)) >= min) {
      if (!c.options.duration_expressions) {
        return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql12DurationExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("duration expressions are not enabled"));
      }
      const _bind$2 = _M0MP212zhou_2dwei976promql6Cursor4take(c);
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        return _bind$2;
      }
      const op = _tmp$2.text;
      const p = _M0FP212zhou_2dwei976promql10precedence(op);
      const _bind$3 = _M0FP212zhou_2dwei976promql20duration__expression(c, op === "^" ? p : p + 1 | 0, depth + 1 | 0);
      let rhs;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        rhs = _ok._0;
      } else {
        return _bind$3;
      }
      _L: {
        _L$2: {
          if (op === "/") {
            break _L$2;
          } else {
            if (op === "%") {
              break _L$2;
            }
          }
          break _L;
        }
        let value;
        _L$3: {
          _L$4: {
            if (rhs.$tag === 0) {
              const _DurationValue = rhs;
              const _value = _DurationValue._0;
              value = _value;
              break _L$4;
            }
            break _L$3;
          }
          const _bind$4 = _M0FP212zhou_2dwei976promql13number__value(value);
          let _tmp$3;
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp$3 = _ok._0;
          } else {
            return _bind$4;
          }
          if (_tmp$3 === 0) {
            return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql12DurationExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("duration division by zero"));
          }
        }
      }
      lhs.val = new _M0DTP212zhou_2dwei976promql12DurationExpr14DurationBinary(op, lhs.val, rhs);
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql12DurationExprRP212zhou_2dwei976promql10ParseErrorE2Ok(lhs.val);
}
function _M0FP212zhou_2dwei976promql15duration__value(text) {
  const _bind = _M0FP212zhou_2dwei976promql13number__value(text);
  let value;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    value = _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = _M0FP212zhou_2dwei976promql15duration__bound(value);
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _ok._0;
  } else {
    return _bind$2;
  }
  let plain;
  let _tmp;
  const _bind$3 = "-";
  if (_M0MPC16string6String11has__prefix(text, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
    _tmp = true;
  } else {
    const _bind$4 = "+";
    _tmp = _M0MPC16string6String11has__prefix(text, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length));
  }
  if (_tmp) {
    plain = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(text, 1, undefined));
  } else {
    plain = text;
  }
  let _tmp$2;
  const _tmp$3 = _M0MPC16string6String9to__lower(plain);
  const _bind$4 = "0x";
  if (!_M0MPC16string6String11has__prefix(_tmp$3, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
    _tmp$2 = _M0MPB4Iter3anyGcE(_M0MPC16string6String4iter(plain), (c) => _M0MPC15array5Array8containsGcE([109, 115, 104, 100, 119, 121], c));
  } else {
    _tmp$2 = false;
  }
  if (_tmp$2) {
    return new _M0DTPC16result6ResultGdRP212zhou_2dwei976promql10ParseErrorE2Ok(value);
  }
  const ns = _M0MPC16double6Double7is__nan(value) || value * 1000000000 >= 9.2233720368547758e+018 ? 9223372036854775808n : $i64_trunc_f64(value * 1000000000);
  if (1000000000n === 0n) {
    $panic();
  }
  const _tmp$4 = $f64_convert_i64(BigInt.asIntN(64, BigInt.asUintN(64, BigInt.asIntN(64, ns) / BigInt.asIntN(64, 1000000000n))));
  if (1000000000n === 0n) {
    $panic();
  }
  return new _M0DTPC16result6ResultGdRP212zhou_2dwei976promql10ParseErrorE2Ok(_tmp$4 + $f64_convert_i64(BigInt.asIntN(64, BigInt.asUintN(64, BigInt.asIntN(64, ns) % BigInt.asIntN(64, 1000000000n)))) / 1000000000);
}
function _M0FP212zhou_2dwei976promql20has__extension__kind(expr, kind) {
  let _tmp = expr;
  let _tmp$2 = kind;
  _L: while (true) {
    const expr$2 = _tmp;
    const kind$2 = _tmp$2;
    let v;
    _L$2: {
      let v$2;
      let k;
      _L$3: {
        switch (expr$2.$tag) {
          case 20: {
            const _ExtendedRange = expr$2;
            const _v = _ExtendedRange._0;
            const _k = _ExtendedRange._1;
            v$2 = _v;
            k = _k;
            break _L$3;
          }
          case 6: {
            const _Range = expr$2;
            const _v$2 = _Range._0;
            v = _v$2;
            break _L$2;
          }
          case 17: {
            const _RangeExpression = expr$2;
            const _v$3 = _RangeExpression._0;
            v = _v$3;
            break _L$2;
          }
          case 15: {
            const _Offset = expr$2;
            const _v$4 = _Offset._0;
            v = _v$4;
            break _L$2;
          }
          case 16: {
            const _At = expr$2;
            const _v$5 = _At._0;
            v = _v$5;
            break _L$2;
          }
          case 19: {
            const _OffsetExpression = expr$2;
            const _v$6 = _OffsetExpression._0;
            v = _v$6;
            break _L$2;
          }
          default: {
            return false;
          }
        }
      }
      if (k === kind$2) {
        return true;
      } else {
        _tmp = v$2;
        continue;
      }
    }
    _tmp = v;
    continue;
  }
}
function _M0FP212zhou_2dwei976promql13has__modifier(expr, offset) {
  let _tmp = expr;
  let _tmp$2 = offset;
  _L: while (true) {
    const expr$2 = _tmp;
    const offset$2 = _tmp$2;
    let v;
    _L$2: {
      let v$2;
      _L$3: {
        let v$3;
        _L$4: {
          switch (expr$2.$tag) {
            case 15: {
              const _Offset = expr$2;
              const _v = _Offset._0;
              v$3 = _v;
              break _L$4;
            }
            case 19: {
              const _OffsetExpression = expr$2;
              const _v$2 = _OffsetExpression._0;
              v$3 = _v$2;
              break _L$4;
            }
            case 16: {
              const _At = expr$2;
              const _v$3 = _At._0;
              v$2 = _v$3;
              break _L$3;
            }
            case 20: {
              const _ExtendedRange = expr$2;
              const _v$4 = _ExtendedRange._0;
              v = _v$4;
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
          _tmp = v$3;
          continue;
        }
      }
      if (!offset$2) {
        return true;
      } else {
        _tmp = v$2;
        continue;
      }
    }
    _tmp = v;
    continue;
  }
}
function _M0FP212zhou_2dwei976promql16offset__duration(c, depth) {
  const sign = _M0MP212zhou_2dwei976promql6Cursor3eat(c, "-") ? "-" : _M0MP212zhou_2dwei976promql6Cursor3eat(c, "+") ? "+" : "";
  let result;
  if (_M0MPC16string6String9to__lower(_M0MP212zhou_2dwei976promql6Cursor4peek(c)) === "nan") {
    const _bind = _M0MP212zhou_2dwei976promql6Cursor4take(c);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    result = new _M0DTP212zhou_2dwei976promql12DurationExpr13DurationValue(_tmp.text);
  } else {
    const _bind = _M0FP212zhou_2dwei976promql20duration__expression(c, 7, depth);
    if (_bind.$tag === 1) {
      const _ok = _bind;
      result = _ok._0;
    } else {
      return _bind;
    }
  }
  const result$2 = _M0MPC16string6String9is__empty(sign) ? result : _M0FP212zhou_2dwei976promql15duration__unary(sign, result);
  let s;
  _L: {
    _L$2: {
      if (result$2.$tag === 0) {
        const _DurationValue = result$2;
        const _s = _DurationValue._0;
        s = _s;
        break _L$2;
      }
      break _L;
    }
    const _bind = _M0FP212zhou_2dwei976promql13number__value(s);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    const _bind$2 = _M0FP212zhou_2dwei976promql15duration__bound(_tmp);
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
  }
  return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql12DurationExprRP212zhou_2dwei976promql10ParseErrorE2Ok(result$2);
}
function _M0FP212zhou_2dwei976promql27require__positive__duration(expr) {
  let s;
  _L: {
    if (expr.$tag === 0) {
      const _DurationValue = expr;
      const _s = _DurationValue._0;
      s = _s;
      break _L;
    } else {
      return new _M0DTPC16result6ResultGuRP212zhou_2dwei976promql10ParseErrorE2Ok(undefined);
    }
  }
  const _bind = _M0FP212zhou_2dwei976promql13number__value(s);
  let value;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    value = _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = _M0FP212zhou_2dwei976promql15duration__bound(value);
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _ok._0;
  } else {
    return _bind$2;
  }
  if (value <= 0) {
    return new _M0DTPC16result6ResultGuRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("duration must be greater than zero"));
  } else {
    return new _M0DTPC16result6ResultGuRP212zhou_2dwei976promql10ParseErrorE2Ok(undefined);
  }
}
function _M0FP212zhou_2dwei976promql7postfix(c, initial, depth) {
  const result = new _M0TPB8MutLocalGRP212zhou_2dwei976promql4ExprE(initial);
  const has_offset = new _M0TPB8MutLocalGbE(_M0FP212zhou_2dwei976promql13has__modifier(initial, true));
  const has_at = new _M0TPB8MutLocalGbE(_M0FP212zhou_2dwei976promql13has__modifier(initial, false));
  const count = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (_M0MPC15array5Array8containsGsE(["[", "offset", "@", "anchored", "smoothed"], _M0MP212zhou_2dwei976promql6Cursor4peek(c))) {
      count.val = count.val + 1 | 0;
      if (count.val > 64) {
        return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("postfix nesting limit"));
      }
      if (_M0MP212zhou_2dwei976promql6Cursor3eat(c, "[")) {
        const _bind = _M0FP212zhou_2dwei976promql20duration__expression(c, 1, depth + 1 | 0);
        let range;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          range = _ok._0;
        } else {
          return _bind;
        }
        const _bind$2 = _M0FP212zhou_2dwei976promql27require__positive__duration(range);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _ok._0;
        } else {
          return _bind$2;
        }
        if (_M0MP212zhou_2dwei976promql6Cursor3eat(c, ":")) {
          let resolution;
          if (_M0MP212zhou_2dwei976promql6Cursor4peek(c) === "]") {
            resolution = undefined;
          } else {
            const _bind$3 = _M0FP212zhou_2dwei976promql20duration__expression(c, 1, depth + 1 | 0);
            let step;
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              step = _ok._0;
            } else {
              return _bind$3;
            }
            const _bind$4 = _M0FP212zhou_2dwei976promql27require__positive__duration(step);
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _ok._0;
            } else {
              return _bind$4;
            }
            resolution = step;
          }
          let _tmp;
          _L: {
            _L$2: {
              let r;
              let s;
              _L$3: {
                _L$4: {
                  let r$2;
                  _L$5: {
                    if (range.$tag === 0) {
                      const _DurationValue = range;
                      const _r = _DurationValue._0;
                      if (resolution === undefined) {
                        r$2 = _r;
                        break _L$5;
                      } else {
                        const _Some = resolution;
                        const _x = _Some;
                        if (_x.$tag === 0) {
                          const _DurationValue$2 = _x;
                          const _s = _DurationValue$2._0;
                          r = _r;
                          s = _s;
                          break _L$4;
                        } else {
                          break _L$2;
                        }
                      }
                    } else {
                      break _L$2;
                    }
                  }
                  _tmp = new _M0DTP212zhou_2dwei976promql4Expr8Subquery(result.val, r$2, undefined);
                  break _L$3;
                }
                _tmp = new _M0DTP212zhou_2dwei976promql4Expr8Subquery(result.val, r, s);
              }
              break _L;
            }
            _tmp = new _M0DTP212zhou_2dwei976promql4Expr18SubqueryExpression(result.val, range, resolution);
          }
          result.val = _tmp;
          has_offset.val = false;
          has_at.val = false;
        } else {
          if (!_M0FP212zhou_2dwei976promql16direct__selector(result.val)) {
            return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("range requires a direct vector selector before modifiers"));
          }
          let _tmp;
          let r;
          _L: {
            _L$2: {
              if (range.$tag === 0) {
                const _DurationValue = range;
                const _r = _DurationValue._0;
                r = _r;
                break _L$2;
              } else {
                _tmp = new _M0DTP212zhou_2dwei976promql4Expr15RangeExpression(result.val, range);
              }
              break _L;
            }
            _tmp = new _M0DTP212zhou_2dwei976promql4Expr5Range(result.val, r);
          }
          result.val = _tmp;
        }
        const _bind$3 = _M0MP212zhou_2dwei976promql6Cursor4need(c, "]");
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _ok._0;
        } else {
          return _bind$3;
        }
      } else {
        if (_M0MP212zhou_2dwei976promql6Cursor3eat(c, "offset")) {
          if (has_offset.val || !_M0FP212zhou_2dwei976promql16temporal__target(result.val)) {
            return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("duplicate or misplaced offset"));
          }
          const _bind = _M0FP212zhou_2dwei976promql16offset__duration(c, depth + 1 | 0);
          let duration;
          if (_bind.$tag === 1) {
            const _ok = _bind;
            duration = _ok._0;
          } else {
            return _bind;
          }
          let _tmp;
          let value;
          _L: {
            _L$2: {
              if (duration.$tag === 0) {
                const _DurationValue = duration;
                const _value = _DurationValue._0;
                value = _value;
                break _L$2;
              } else {
                _tmp = new _M0DTP212zhou_2dwei976promql4Expr16OffsetExpression(result.val, duration);
              }
              break _L;
            }
            _tmp = new _M0DTP212zhou_2dwei976promql4Expr6Offset(result.val, value);
          }
          result.val = _tmp;
          let _tmp$2;
          let value$2;
          _L$2: {
            _L$3: {
              if (duration.$tag === 0) {
                const _DurationValue = duration;
                const _value = _DurationValue._0;
                value$2 = _value;
                break _L$3;
              } else {
                _tmp$2 = true;
              }
              break _L$2;
            }
            const _bind$2 = _M0FP212zhou_2dwei976promql15duration__value(value$2);
            let _tmp$3;
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _tmp$3 = _ok._0;
            } else {
              return _bind$2;
            }
            _tmp$2 = _tmp$3 !== 0;
          }
          has_offset.val = _tmp$2;
        } else {
          if (_M0MP212zhou_2dwei976promql6Cursor3eat(c, "@")) {
            if (has_at.val || !_M0FP212zhou_2dwei976promql16temporal__target(result.val)) {
              return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("duplicate or misplaced @"));
            }
            let timestamp;
            if (_M0MP212zhou_2dwei976promql6Cursor4peek(c) === "start" || _M0MP212zhou_2dwei976promql6Cursor4peek(c) === "end") {
              const _bind = _M0MP212zhou_2dwei976promql6Cursor4take(c);
              let _tmp;
              if (_bind.$tag === 1) {
                const _ok = _bind;
                _tmp = _ok._0;
              } else {
                return _bind;
              }
              const which = _M0MPC16string6String9to__lower(_tmp.text);
              const _bind$2 = _M0MP212zhou_2dwei976promql6Cursor4need(c, "(");
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _ok._0;
              } else {
                return _bind$2;
              }
              const _bind$3 = _M0MP212zhou_2dwei976promql6Cursor4need(c, ")");
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _ok._0;
              } else {
                return _bind$3;
              }
              timestamp = `${which}()`;
            } else {
              const sign = _M0MP212zhou_2dwei976promql6Cursor3eat(c, "-") ? "-" : _M0MP212zhou_2dwei976promql6Cursor3eat(c, "+") ? "+" : "";
              const _bind = _M0MP212zhou_2dwei976promql6Cursor4take(c);
              let token;
              if (_bind.$tag === 1) {
                const _ok = _bind;
                token = _ok._0;
              } else {
                return _bind;
              }
              if (_M0IP016_24default__implPB2Eq10not__equalGsE(token.kind, "number") && _M0IP016_24default__implPB2Eq10not__equalGsE(token.kind, "duration")) {
                return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("@ requires a timestamp or start()/end()"));
              }
              const text = `${sign}${token.text}`;
              const _bind$2 = _M0FP212zhou_2dwei976promql13number__value(text);
              let value;
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                value = _ok._0;
              } else {
                return _bind$2;
              }
              if (_M0MPC16double6Double7is__nan(value) || (_M0MPC16double6Double7is__inf(value) || (value >= 9.2233720368547758e+018 || value <= -9.2233720368547758e+018))) {
                return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("@ timestamp out of bounds"));
              }
              timestamp = text;
            }
            result.val = new _M0DTP212zhou_2dwei976promql4Expr2At(result.val, timestamp);
            has_at.val = true;
          } else {
            const _bind = _M0MP212zhou_2dwei976promql6Cursor4take(c);
            let _tmp;
            if (_bind.$tag === 1) {
              const _ok = _bind;
              _tmp = _ok._0;
            } else {
              return _bind;
            }
            const kind = _M0MPC16string6String9to__lower(_tmp.text);
            if (!c.options.extended_ranges) {
              return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("extended range modifier is not enabled"));
            }
            if (_M0FP212zhou_2dwei976promql20has__extension__kind(result.val, kind === "anchored" ? "smoothed" : "anchored") || !_M0FP212zhou_2dwei976promql16extended__target(result.val)) {
              return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("conflicting or misplaced extended range modifier"));
            }
            result.val = new _M0DTP212zhou_2dwei976promql4Expr13ExtendedRange(result.val, kind);
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE2Ok(result.val);
}
function _M0FP212zhou_2dwei976promql16vector__matching(c) {
  const return_bool = _M0MP212zhou_2dwei976promql6Cursor3eat(c, "bool");
  let mode;
  if (_M0MP212zhou_2dwei976promql6Cursor4peek(c) === "on" || _M0MP212zhou_2dwei976promql6Cursor4peek(c) === "ignoring") {
    const _bind = _M0MP212zhou_2dwei976promql6Cursor4take(c);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    mode = _M0MPC16string6String9to__lower(_tmp.text);
  } else {
    mode = undefined;
  }
  let labels;
  if (_M0IP016_24default__implPB2Eq10not__equalGOsE(mode, undefined)) {
    const _bind = _M0FP212zhou_2dwei976promql8grouping(c);
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
  if (_M0MP212zhou_2dwei976promql6Cursor4peek(c) === "group_left" || _M0MP212zhou_2dwei976promql6Cursor4peek(c) === "group_right") {
    if (_M0IPC16option6OptionPB2Eq5equalGsE(mode, undefined)) {
      return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql14VectorMatchingRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("group modifier requires on/ignoring"));
    }
    const _bind = _M0MP212zhou_2dwei976promql6Cursor4take(c);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    group = _M0MPC16string6String9to__lower(_tmp.text);
  } else {
    group = undefined;
  }
  let include_labels;
  if (_M0IP016_24default__implPB2Eq10not__equalGOsE(group, undefined) && _M0MP212zhou_2dwei976promql6Cursor4peek(c) === "(") {
    const _bind = _M0FP212zhou_2dwei976promql8grouping(c);
    if (_bind.$tag === 1) {
      const _ok = _bind;
      include_labels = _ok._0;
    } else {
      return _bind;
    }
  } else {
    include_labels = [];
  }
  return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql14VectorMatchingRP212zhou_2dwei976promql10ParseErrorE2Ok(new _M0TP212zhou_2dwei976promql14VectorMatching(return_bool, mode, labels, group, include_labels));
}
function _M0FP212zhou_2dwei976promql10expression(c, min, depth) {
  if (depth > 64) {
    return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("nesting limit"));
  }
  const _bind = _M0MP212zhou_2dwei976promql6Cursor4take(c);
  let t;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    t = _ok._0;
  } else {
    return _bind;
  }
  let _tmp;
  if (t.quoted) {
    let data;
    _L: {
      _L$2: {
        const _bind$2 = t.raw_bytes;
        if (_bind$2 === undefined) {
          _tmp = new _M0DTP212zhou_2dwei976promql4Expr13StringLiteral(t.text);
        } else {
          const _Some = _bind$2;
          const _data = _Some;
          data = _data;
          break _L$2;
        }
        break _L;
      }
      _tmp = new _M0DTP212zhou_2dwei976promql4Expr11StringBytes(data);
    }
  } else {
    if (t.text === "+" || t.text === "-") {
      const _bind$2 = _M0FP212zhou_2dwei976promql10expression(c, 6, depth + 1 | 0);
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        return _bind$2;
      }
      _tmp = new _M0DTP212zhou_2dwei976promql4Expr5Unary(t.text, _tmp$2);
    } else {
      if (t.text === "(") {
        const _bind$2 = _M0FP212zhou_2dwei976promql10expression(c, 1, depth + 1 | 0);
        let e;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          e = _ok._0;
        } else {
          return _bind$2;
        }
        const _bind$3 = _M0MP212zhou_2dwei976promql6Cursor4need(c, ")");
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _ok._0;
        } else {
          return _bind$3;
        }
        _tmp = new _M0DTP212zhou_2dwei976promql4Expr13Parenthesized(e);
      } else {
        if (t.kind === "number" || t.kind === "duration") {
          _tmp = new _M0DTP212zhou_2dwei976promql4Expr6Number(t.text);
        } else {
          let name;
          if (t.text === "{") {
            c.pos = c.pos - 1 | 0;
            name = "";
          } else {
            if (!_M0FP212zhou_2dwei976promql18metric__identifier(t.text) || _M0IP016_24default__implPB2Eq10not__equalGsE(t.kind, "word")) {
              return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("metric/function name"));
            }
            name = t.text;
          }
          const lower = _M0MPC16string6String9to__lower(name);
          if (_M0MPC15array5Array8containsGsE(["bool", "on", "ignoring", "group_left", "group_right", "atan2"], lower)) {
            return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("reserved keyword cannot be a metric name"));
          }
          if (_M0FP212zhou_2dwei976promql10aggregator(lower) && (_M0MP212zhou_2dwei976promql6Cursor4peek(c) === "by" || (_M0MP212zhou_2dwei976promql6Cursor4peek(c) === "without" || _M0MP212zhou_2dwei976promql6Cursor4peek(c) === "("))) {
            const _bind$2 = _M0FP212zhou_2dwei976promql9aggregate(c, lower, depth + 1 | 0);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _tmp = _ok._0;
            } else {
              return _bind$2;
            }
          } else {
            if (_M0MP212zhou_2dwei976promql6Cursor3eat(c, "(")) {
              const call_name = _M0FP212zhou_2dwei976promql7keyword(lower) ? lower : name;
              const args = [];
              if (!_M0MP212zhou_2dwei976promql6Cursor3eat(c, ")")) {
                while (true) {
                  const _bind$2 = _M0FP212zhou_2dwei976promql10expression(c, 1, depth + 1 | 0);
                  let _tmp$2;
                  if (_bind$2.$tag === 1) {
                    const _ok = _bind$2;
                    _tmp$2 = _ok._0;
                  } else {
                    return _bind$2;
                  }
                  _M0MPC15array5Array4pushGRPC14json10WriteFrameE(args, _tmp$2);
                  if (_M0MP212zhou_2dwei976promql6Cursor3eat(c, ")")) {
                    break;
                  }
                  const _bind$3 = _M0MP212zhou_2dwei976promql6Cursor4need(c, ",");
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    _ok._0;
                  } else {
                    return _bind$3;
                  }
                  continue;
                }
              }
              _tmp = new _M0DTP212zhou_2dwei976promql4Expr4Call(call_name, args);
            } else {
              const _bind$2 = _M0FP212zhou_2dwei976promql8selector(c, name);
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _tmp = _ok._0;
              } else {
                return _bind$2;
              }
            }
          }
        }
      }
    }
  }
  const lhs = new _M0TPB8MutLocalGRP212zhou_2dwei976promql4ExprE(_tmp);
  const _bind$2 = _M0FP212zhou_2dwei976promql7postfix(c, lhs.val, depth);
  let _tmp$2;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp$2 = _ok._0;
  } else {
    return _bind$2;
  }
  lhs.val = _tmp$2;
  while (true) {
    const op = _M0MP212zhou_2dwei976promql6Cursor4peek(c);
    const prec = _M0FP212zhou_2dwei976promql10precedence(op);
    if (prec === 0 || prec < min) {
      break;
    }
    c.pos = c.pos + 1 | 0;
    const _bind$3 = _M0FP212zhou_2dwei976promql16vector__matching(c);
    let matching;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      matching = _ok._0;
    } else {
      return _bind$3;
    }
    let left_fill;
    let right_fill;
    _L: {
      const _bind$4 = _M0FP212zhou_2dwei976promql15fill__modifiers(c);
      let _bind$5;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _bind$5 = _ok._0;
      } else {
        return _bind$4;
      }
      const _left_fill = _bind$5._0;
      const _right_fill = _bind$5._1;
      left_fill = _left_fill;
      right_fill = _right_fill;
      break _L;
    }
    const _bind$4 = _M0FP212zhou_2dwei976promql10expression(c, op === "^" ? prec : prec + 1 | 0, depth + 1 | 0);
    let rhs;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      rhs = _ok._0;
    } else {
      return _bind$4;
    }
    lhs.val = _M0IP016_24default__implPB2Eq10not__equalGOsE(left_fill, undefined) || _M0IP016_24default__implPB2Eq10not__equalGOsE(right_fill, undefined) ? new _M0DTP212zhou_2dwei976promql4Expr10BinaryFill(op, matching, left_fill, right_fill, lhs.val, rhs) : matching.return_bool || _M0IP016_24default__implPB2Eq10not__equalGOsE(matching.mode, undefined) ? new _M0DTP212zhou_2dwei976promql4Expr11BinaryMatch(op, matching, lhs.val, rhs) : new _M0DTP212zhou_2dwei976promql4Expr6Binary(op, lhs.val, rhs);
    continue;
  }
  return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE2Ok(lhs.val);
}
function _M0FP212zhou_2dwei976promql9aggregate(c, name, depth) {
  if (_M0MPC15array5Array8containsGsE(["limitk", "limit_ratio"], name) && !c.options.experimental_functions) {
    return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("experimental aggregation is not enabled"));
  }
  const before = _M0MP212zhou_2dwei976promql6Cursor4peek(c) === "by" || _M0MP212zhou_2dwei976promql6Cursor4peek(c) === "without";
  const without = new _M0TPB8MutLocalGbE(false);
  const labels = new _M0TPB8MutLocalGRPB5ArrayGsEE([]);
  if (before) {
    const _bind = _M0MP212zhou_2dwei976promql6Cursor4take(c);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    without.val = _M0MPC16string6String9to__lower(_tmp.text) === "without";
    const _bind$2 = _M0FP212zhou_2dwei976promql8grouping(c);
    let _tmp$2;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp$2 = _ok._0;
    } else {
      return _bind$2;
    }
    labels.val = _tmp$2;
  }
  const _bind = _M0MP212zhou_2dwei976promql6Cursor4need(c, "(");
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = _M0FP212zhou_2dwei976promql10expression(c, 1, depth);
  let first;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    first = _ok._0;
  } else {
    return _bind$2;
  }
  const parameterized = _M0MPC15array5Array8containsGsE(["topk", "bottomk", "quantile", "count_values", "limitk", "limit_ratio"], name);
  let body;
  if (parameterized) {
    const _bind$3 = _M0MP212zhou_2dwei976promql6Cursor4need(c, ",");
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _ok._0;
    } else {
      return _bind$3;
    }
    const _bind$4 = _M0FP212zhou_2dwei976promql10expression(c, 1, depth);
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      body = _ok._0;
    } else {
      return _bind$4;
    }
  } else {
    body = first;
  }
  const _bind$3 = _M0MP212zhou_2dwei976promql6Cursor4need(c, ")");
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  if (_M0MP212zhou_2dwei976promql6Cursor4peek(c) === "by" || _M0MP212zhou_2dwei976promql6Cursor4peek(c) === "without") {
    if (before) {
      return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("duplicate aggregation grouping"));
    }
    const _bind$4 = _M0MP212zhou_2dwei976promql6Cursor4take(c);
    let _tmp;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _tmp = _ok._0;
    } else {
      return _bind$4;
    }
    without.val = _M0MPC16string6String9to__lower(_tmp.text) === "without";
    const _bind$5 = _M0FP212zhou_2dwei976promql8grouping(c);
    let _tmp$2;
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      _tmp$2 = _ok._0;
    } else {
      return _bind$5;
    }
    labels.val = _tmp$2;
  }
  return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE2Ok(parameterized ? new _M0DTP212zhou_2dwei976promql4Expr14AggregateParam(name, labels.val, without.val, first, body) : new _M0DTP212zhou_2dwei976promql4Expr9Aggregate(name, labels.val, without.val, body));
}
function _M0FP212zhou_2dwei976promql3lex(source, options) {
  if (source.length > 100000) {
    return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql6CursorRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("source limit"));
  }
  const cs = _M0MPC16string6String9to__array(source);
  const ts = [];
  const i = new _M0TPB8MutLocalGiE(0);
  const brackets = new _M0TPB8MutLocalGiE(0);
  const token_start = new _M0TPB8MutLocalGiE(0);
  let _try_err;
  _L: {
    _L$2: {
      while (true) {
        if (i.val < cs.length) {
          const c = _M0MPC15array5Array2atGcE(cs, i.val);
          if (c === 32 || (c === 9 || (c === 13 || c === 10))) {
            i.val = i.val + 1 | 0;
            continue;
          }
          if (c === 35) {
            while (true) {
              if (i.val < cs.length && (_M0MPC15array5Array2atGcE(cs, i.val) !== 10 && _M0MPC15array5Array2atGcE(cs, i.val) !== 13)) {
                i.val = i.val + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            continue;
          }
          const start = i.val;
          token_start.val = start;
          if (c === 34 || (c === 39 || c === 96)) {
            const quote = c;
            const out = _M0MPC16buffer6Buffer14Buffer_2einner(0);
            i.val = i.val + 1 | 0;
            const closed = new _M0TPB8MutLocalGbE(false);
            while (true) {
              if (i.val < cs.length) {
                const ch = _M0MPC15array5Array2atGcE(cs, i.val);
                i.val = i.val + 1 | 0;
                if (ch === quote) {
                  closed.val = true;
                  break;
                }
                if (ch === 10 && quote !== 96) {
                  _try_err = new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("newline in quoted string");
                  break _L$2;
                }
                if (ch !== 92 || quote === 96) {
                  _M0MPC16buffer6Buffer17write__char__utf8(out, ch);
                  continue;
                }
                if (i.val >= cs.length) {
                  _try_err = new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("truncated escape");
                  break _L$2;
                }
                const e = _M0MPC15array5Array2atGcE(cs, i.val);
                i.val = i.val + 1 | 0;
                let simple;
                switch (e) {
                  case 97: {
                    simple = 7;
                    break;
                  }
                  case 98: {
                    simple = 8;
                    break;
                  }
                  case 102: {
                    simple = 12;
                    break;
                  }
                  case 110: {
                    simple = 10;
                    break;
                  }
                  case 114: {
                    simple = 13;
                    break;
                  }
                  case 116: {
                    simple = 9;
                    break;
                  }
                  case 118: {
                    simple = 11;
                    break;
                  }
                  case 92: {
                    simple = 92;
                    break;
                  }
                  default: {
                    simple = e === quote ? e : undefined;
                  }
                }
                let n;
                _L$3: {
                  _L$4: {
                    if (simple === undefined) {
                    } else {
                      const _Some = simple;
                      const _n = _Some;
                      n = _n;
                      break _L$4;
                    }
                    break _L$3;
                  }
                  _M0MPC16buffer6Buffer11write__byte(out, n & 255);
                  continue;
                }
                const octal = e >= 48 && e <= 55;
                let count;
                if (octal) {
                  count = 2;
                } else {
                  switch (e) {
                    case 120: {
                      count = 2;
                      break;
                    }
                    case 117: {
                      count = 4;
                      break;
                    }
                    case 85: {
                      count = 8;
                      break;
                    }
                    default: {
                      _try_err = new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("unknown string escape");
                      break _L$2;
                    }
                  }
                }
                const number = new _M0TPB8MutLocalGiE(octal ? e - 48 | 0 : 0);
                const _bind = 0;
                let _tmp = _bind;
                while (true) {
                  const _ = _tmp;
                  if (_ < count) {
                    if (i.val >= cs.length) {
                      _try_err = new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("truncated numeric escape");
                      break _L$2;
                    }
                    const d = octal ? (_M0MPC15array5Array2atGcE(cs, i.val) >= 48 && _M0MPC15array5Array2atGcE(cs, i.val) <= 55 ? _M0MPC15array5Array2atGcE(cs, i.val) - 48 | 0 : -1) : _M0FP212zhou_2dwei976promql10hex__digit(_M0MPC15array5Array2atGcE(cs, i.val));
                    const base = octal ? 8 : 16;
                    let _tmp$2;
                    if (d < 0) {
                      _tmp$2 = true;
                    } else {
                      const _tmp$3 = number.val;
                      if (base === 0) {
                        $panic();
                      }
                      _tmp$2 = _tmp$3 > ((1114111 - d | 0) / base | 0);
                    }
                    if (_tmp$2) {
                      _try_err = new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("invalid numeric escape");
                      break _L$2;
                    }
                    number.val = (Math.imul(number.val, base) | 0) + d | 0;
                    i.val = i.val + 1 | 0;
                    _tmp = _ + 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                if (octal || e === 120) {
                  if (number.val > 255) {
                    _try_err = new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("byte escape exceeds 255");
                    break _L$2;
                  }
                  _M0MPC16buffer6Buffer11write__byte(out, number.val & 255);
                } else {
                  if (number.val > 1114111 || number.val >= 55296 && number.val <= 57343) {
                    _try_err = new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("invalid Unicode scalar escape");
                    break _L$2;
                  }
                  _M0MPC16buffer6Buffer17write__char__utf8(out, number.val);
                }
                continue;
              } else {
                break;
              }
            }
            if (!closed.val) {
              _try_err = new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("unterminated string");
              break _L$2;
            }
            const data = _M0MPC16buffer6Buffer9to__bytes(out);
            let decoded;
            let _try_err$2;
            _L$3: {
              _L$4: {
                const _bind = _M0FPC28encoding4utf814decode_2einner(new _M0TPC15bytes9BytesView(data, 0, data.length), false);
                if (_bind.$tag === 1) {
                  const _ok = _bind;
                  decoded = _ok._0;
                } else {
                  const _err = _bind;
                  _try_err$2 = _err._0;
                  break _L$4;
                }
                break _L$3;
              }
              decoded = undefined;
            }
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(ts, new _M0TP212zhou_2dwei976promql5Token(_M0MPC16option6Option10unwrap__orGsE(decoded, ""), true, "string", _M0IPC16option6OptionPB2Eq5equalGsE(decoded, undefined) ? data : undefined, start, i.val));
            continue;
          }
          if (_M0FP212zhou_2dwei976promql5digit(c) || c === 46 && ((i.val + 1 | 0) < cs.length && _M0FP212zhou_2dwei976promql5digit(_M0MPC15array5Array2atGcE(cs, i.val + 1 | 0)))) {
            const hexadecimal = c === 48 && ((i.val + 1 | 0) < cs.length && (_M0MPC15array5Array2atGcE(cs, i.val + 1 | 0) === 120 || _M0MPC15array5Array2atGcE(cs, i.val + 1 | 0) === 88));
            i.val = i.val + 1 | 0;
            while (true) {
              if (i.val < cs.length) {
                const ch = _M0MPC15array5Array2atGcE(cs, i.val);
                if (_M0FP212zhou_2dwei976promql4word(ch) || ch === 46) {
                  i.val = i.val + 1 | 0;
                } else {
                  if (!hexadecimal && ((ch === 43 || ch === 45) && (_M0MPC15array5Array2atGcE(cs, i.val - 1 | 0) === 101 || _M0MPC15array5Array2atGcE(cs, i.val - 1 | 0) === 69))) {
                    i.val = i.val + 1 | 0;
                  } else {
                    break;
                  }
                }
                continue;
              } else {
                break;
              }
            }
            const text = _M0FP212zhou_2dwei976promql12slice__chars(cs, start, i.val);
            const duration = !hexadecimal && _M0MPB4Iter3anyGcE(_M0MPC16string6String4iter(text), (x) => x === 109 || (x === 115 || (x === 104 || (x === 100 || (x === 119 || x === 121)))));
            const _bind = _M0FP212zhou_2dwei976promql13number__value(text);
            if (_bind.$tag === 1) {
              const _ok = _bind;
              _ok._0;
            } else {
              const _err = _bind;
              _try_err = _err._0;
              break _L$2;
            }
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(ts, new _M0TP212zhou_2dwei976promql5Token(text, false, duration ? "duration" : "number", undefined, start, i.val));
            continue;
          }
          if (_M0FP212zhou_2dwei976promql12ascii__alpha(c) || c === 58 && brackets.val === 0) {
            i.val = i.val + 1 | 0;
            while (true) {
              if (i.val < cs.length && (_M0FP212zhou_2dwei976promql4word(_M0MPC15array5Array2atGcE(cs, i.val)) || _M0MPC15array5Array2atGcE(cs, i.val) === 58 && brackets.val === 0)) {
                i.val = i.val + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const text = _M0FP212zhou_2dwei976promql12slice__chars(cs, start, i.val);
            const kind = _M0MPC16string6String9to__lower(text) === "inf" || _M0MPC16string6String9to__lower(text) === "nan" ? "number" : "word";
            _M0MPC15array5Array4pushGRPC14json10WriteFrameE(ts, new _M0TP212zhou_2dwei976promql5Token(text, false, kind, undefined, start, i.val));
            continue;
          }
          if (!_M0MPC15array5Array8containsGcE([43, 45, 42, 47, 37, 94, 62, 60, 61, 33, 126, 40, 41, 123, 125, 91, 93, 44, 58, 64], c)) {
            _try_err = new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid(`unexpected character: ${_M0IPC14char4CharPB4Show10to__string(c)}`);
            break _L$2;
          }
          if (c === 91) {
            brackets.val = brackets.val + 1 | 0;
          } else {
            if (c === 93) {
              brackets.val = brackets.val - 1 | 0;
            }
          }
          i.val = i.val + 1 | 0;
          const text = new _M0TPB8MutLocalGsE(_M0IPC14char4CharPB4Show10to__string(c));
          if (i.val < cs.length && _M0MPC15array5Array8containsGsE(["==", "!=", ">=", "<=", "=~", "!~"], `${text.val}${_M0IPC14char4CharPB4Show10to__string(_M0MPC15array5Array2atGcE(cs, i.val))}`)) {
            text.val = `${text.val}${_M0IPC14char4CharPB4Show10to__string(_M0MPC15array5Array2atGcE(cs, i.val))}`;
            i.val = i.val + 1 | 0;
          }
          _M0MPC15array5Array4pushGRPC14json10WriteFrameE(ts, new _M0TP212zhou_2dwei976promql5Token(text.val, false, "symbol", undefined, start, i.val));
          continue;
        } else {
          break;
        }
      }
      break _L;
    }
    let message;
    _L$3: {
      let message$2;
      let span;
      _L$4: {
        if (_try_err.$tag === 0) {
          const _Located = _try_err;
          const _message = _Located._0;
          const _span = _Located._1;
          message$2 = _message;
          span = _span;
          break _L$4;
        } else {
          const _Invalid = _try_err;
          const _message = _Invalid._0;
          message = _message;
          break _L$3;
        }
      }
      return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql6CursorRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eLocated(message$2, span));
    }
    return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql6CursorRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eLocated(message, _M0FP212zhou_2dwei976promql12source__span(cs, token_start.val, i.val > token_start.val ? i.val : _M0MPC13int3Int3min(i.val + 1 | 0, cs.length))));
  }
  return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql6CursorRP212zhou_2dwei976promql10ParseErrorE2Ok(new _M0TP212zhou_2dwei976promql6Cursor(ts, 0, cs, options));
}
function _M0FP212zhou_2dwei976promql13parse_2einner(source, options) {
  if (!_M0FP212zhou_2dwei976promql14valid__unicode(source)) {
    return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("ill-formed UTF-16 input"));
  }
  const _bind = _M0FP212zhou_2dwei976promql3lex(source, options);
  let c;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    c = _ok._0;
  } else {
    return _bind;
  }
  let e;
  let _try_err;
  _L: {
    _L$2: {
      const _bind$2 = _M0FP212zhou_2dwei976promql10expression(c, 1, 0);
      let value;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        value = _ok._0;
      } else {
        const _err = _bind$2;
        _try_err = _err._0;
        break _L$2;
      }
      if (c.pos !== c.tokens.length) {
        _try_err = new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eLocated(`unsupported/trailing syntax: ${_M0MP212zhou_2dwei976promql6Cursor4peek(c)}`, _M0MP212zhou_2dwei976promql6Cursor4span(c));
        break _L$2;
      }
      e = value;
      break _L;
    }
    let message;
    _L$3: {
      let message$2;
      let span;
      _L$4: {
        if (_try_err.$tag === 0) {
          const _Located = _try_err;
          const _message = _Located._0;
          const _span = _Located._1;
          message$2 = _message;
          span = _span;
          break _L$4;
        } else {
          const _Invalid = _try_err;
          const _message = _Invalid._0;
          message = _message;
          break _L$3;
        }
      }
      return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eLocated(message$2, span));
    }
    const offset = c.pos > 0 ? _M0MPC15array5Array2atGRPB4JsonE(c.tokens, c.pos - 1 | 0).start : 0;
    return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eLocated(message, _M0FP212zhou_2dwei976promql12source__span(c.source, offset, c.pos > 0 ? _M0MPC15array5Array2atGRPB4JsonE(c.tokens, c.pos - 1 | 0).end : 0)));
  }
  let _try_err$2;
  _L$2: {
    _L$3: {
      const _bind$2 = _M0FP212zhou_2dwei976promql19infer__type_2einner(e, options);
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _ok._0;
      } else {
        const _err = _bind$2;
        _try_err$2 = _err._0;
        break _L$3;
      }
      break _L$2;
    }
    let message;
    _L$4: {
      let message$2;
      let span;
      _L$5: {
        if (_try_err$2.$tag === 0) {
          const _Located = _try_err$2;
          const _message = _Located._0;
          const _span = _Located._1;
          message$2 = _message;
          span = _span;
          break _L$5;
        } else {
          const _Invalid = _try_err$2;
          const _message = _Invalid._0;
          message = _message;
          break _L$4;
        }
      }
      return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eLocated(message$2, span));
    }
    return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eLocated(message, _M0FP212zhou_2dwei976promql12source__span(c.source, 0, c.source.length)));
  }
  return new _M0DTPC16result6ResultGRP212zhou_2dwei976promql4ExprRP212zhou_2dwei976promql10ParseErrorE2Ok(e);
}
function _M0FP212zhou_2dwei976promql5parse(source, options$46$opt) {
  let options;
  if (options$46$opt === undefined) {
    options = _M0MP212zhou_2dwei976promql13ParserOptions11new_2einner(false, false, false, false);
  } else {
    const _Some = options$46$opt;
    options = _Some;
  }
  return _M0FP212zhou_2dwei976promql13parse_2einner(source, options);
}
function _M0FP212zhou_2dwei976promql20function__signatures() {
  return _M0MPC15array5Array3mapGsRP212zhou_2dwei976promql17FunctionSignatureE(["abs", "absent", "absent_over_time", "acos", "acosh", "asin", "asinh", "atan", "atanh", "avg_over_time", "ceil", "changes", "clamp", "clamp_max", "clamp_min", "cos", "cosh", "count_over_time", "day_of_month", "day_of_week", "day_of_year", "days_in_month", "deg", "delta", "deriv", "double_exponential_smoothing", "end", "exp", "first_over_time", "floor", "histogram_avg", "histogram_count", "histogram_fraction", "histogram_quantile", "histogram_quantiles", "histogram_stddev", "histogram_stdvar", "histogram_sum", "hour", "idelta", "increase", "info", "irate", "label_join", "label_replace", "last_over_time", "ln", "log10", "log2", "mad_over_time", "max_of", "max_over_time", "min_of", "min_over_time", "minute", "month", "pi", "predict_linear", "present_over_time", "quantile_over_time", "rad", "range", "rate", "resets", "round", "scalar", "sgn", "sin", "sinh", "sort", "sort_by_label", "sort_by_label_desc", "sort_desc", "sqrt", "start", "start_timestamp", "stddev_over_time", "stdvar_over_time", "step", "sum_over_time", "tan", "tanh", "time", "timestamp", "ts_of_first_over_time", "ts_of_last_over_time", "ts_of_max_over_time", "ts_of_min_over_time", "vector", "year"], (name) => _M0MPC16option6Option6unwrapGRP212zhou_2dwei976promql17FunctionSignatureE(_M0FP212zhou_2dwei976promql19function__signature(name)));
}
function _M0FP212zhou_2dwei976promql16timestamp__value(text) {
  const _bind = _M0FP212zhou_2dwei976promql13number__value(text);
  let value;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    value = _ok._0;
  } else {
    return _bind;
  }
  if (_M0MPC16double6Double7is__nan(value) || (_M0MPC16double6Double7is__inf(value) || (value >= 9.2233720368547758e+018 || value <= -9.2233720368547758e+018))) {
    return new _M0DTPC16result6ResultGlRP212zhou_2dwei976promql10ParseErrorE3Err(new _M0DTPC15error5Error44zhou_2dwei97_2fpromql_2eParseError_2eInvalid("timestamp out of bounds"));
  }
  const millis = value * 1000;
  if (millis >= 9.2233720368547758e+018 || millis <= -9.2233720368547758e+018) {
    return new _M0DTPC16result6ResultGlRP212zhou_2dwei976promql10ParseErrorE2Ok(9223372036854775808n);
  }
  return new _M0DTPC16result6ResultGlRP212zhou_2dwei976promql10ParseErrorE2Ok($i64_trunc_f64(millis < 0 ? -_M0FPC16double5floor(-millis + 0.5) : _M0FPC16double5floor(millis + 0.5)));
}
function _M0FP412zhou_2dwei976promql3cmd3web3run(input) {
  let _try_err;
  _L: {
    const _bind = _M0FP212zhou_2dwei976promql5parse(input, undefined);
    let ast;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      ast = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    const _bind$2 = _M0FP212zhou_2dwei976promql11infer__type(ast, undefined);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
    return `Type: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP212zhou_2dwei976promql9QueryTypeE(_tmp))}\nAST: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP212zhou_2dwei976promql4ExprE(ast))}`;
  }
  const e = _try_err;
  return `ERROR: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP212zhou_2dwei976promql10ParseErrorE(e))}`;
}
function _M0FP412zhou_2dwei976promql3cmd3web3num(s) {
  const _bind = _M0FP212zhou_2dwei976promql13number__value(s);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  return new _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0IPC16string6StringPB6ToJson8to__json(String(_tmp)));
}
function _M0FP412zhou_2dwei976promql3cmd3web8duration(e) {
  let name;
  let args;
  _L: {
    let a;
    let op;
    let b;
    _L$2: {
      let op$2;
      let v;
      _L$3: {
        let s;
        _L$4: {
          switch (e.$tag) {
            case 0: {
              const _DurationValue = e;
              const _s = _DurationValue._0;
              s = _s;
              break _L$4;
            }
            case 1: {
              const _DurationUnary = e;
              const _op = _DurationUnary._0;
              const _v = _DurationUnary._1;
              op$2 = _op;
              v = _v;
              break _L$3;
            }
            case 2: {
              const _DurationBinary = e;
              const _op$2 = _DurationBinary._0;
              const _a = _DurationBinary._1;
              const _b = _DurationBinary._2;
              a = _a;
              op = _op$2;
              b = _b;
              break _L$2;
            }
            default: {
              const _DurationCall = e;
              const _name = _DurationCall._0;
              const _args = _DurationCall._1;
              name = _name;
              args = _args;
              break _L;
            }
          }
        }
        const _tmp = _M0MPC14json4Json6string("number");
        const _bind = _M0FP412zhou_2dwei976promql3cmd3web3num(s);
        let _tmp$2;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          _tmp$2 = _ok._0;
        } else {
          return _bind;
        }
        return new _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0MPC14json4Json5array([_tmp, _tmp$2]));
      }
      const _tmp = _M0MPC14json4Json6string("duration");
      const _tmp$2 = _M0IPC16string6StringPB6ToJson8to__json(op$2);
      const _tmp$3 = _M0MPC14json4Json4null();
      const _bind = _M0FP412zhou_2dwei976promql3cmd3web8duration(v);
      let _tmp$4;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp$4 = _ok._0;
      } else {
        return _bind;
      }
      return new _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0MPC14json4Json5array([_tmp, _tmp$2, _tmp$3, _tmp$4]));
    }
    const _tmp = _M0MPC14json4Json6string("duration");
    const _tmp$2 = _M0IPC16string6StringPB6ToJson8to__json(op);
    const _bind = _M0FP412zhou_2dwei976promql3cmd3web8duration(a);
    let _tmp$3;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp$3 = _ok._0;
    } else {
      return _bind;
    }
    const _tmp$4 = _tmp$3;
    const _bind$2 = _M0FP412zhou_2dwei976promql3cmd3web8duration(b);
    let _tmp$5;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp$5 = _ok._0;
    } else {
      return _bind$2;
    }
    return new _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0MPC14json4Json5array([_tmp, _tmp$2, _tmp$4, _tmp$5]));
  }
  const _tmp = _M0MPC14json4Json6string("duration");
  const _tmp$2 = _M0IPC16string6StringPB6ToJson8to__json(name);
  let _tmp$3;
  if (_M0MPC15array5Array9is__emptyGRPB4JsonE(args)) {
    _tmp$3 = _M0MPC14json4Json4null();
  } else {
    const _bind = _M0FP412zhou_2dwei976promql3cmd3web8duration(_M0MPC15array5Array2atGRPB4JsonE(args, 0));
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp$3 = _ok._0;
    } else {
      return _bind;
    }
  }
  const _tmp$4 = _tmp$3;
  let _tmp$5;
  if (_M0MPC15array5Array9is__emptyGRPB4JsonE(args)) {
    _tmp$5 = _M0MPC14json4Json4null();
  } else {
    const _bind = _M0FP412zhou_2dwei976promql3cmd3web8duration(_M0MPC15array5Array2atGRPB4JsonE(args, 1));
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp$5 = _ok._0;
    } else {
      return _bind;
    }
  }
  return new _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0MPC14json4Json5array([_tmp, _tmp$2, _tmp$4, _tmp$5]));
}
function _M0FP412zhou_2dwei976promql3cmd3web17literal__duration(s) {
  const _tmp = _M0MPC14json4Json6string("number");
  const _bind = _M0FP212zhou_2dwei976promql15duration__value(s);
  let _tmp$2;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp$2 = _ok._0;
  } else {
    return _bind;
  }
  return new _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0MPC14json4Json5array([_tmp, _M0IPC16string6StringPB6ToJson8to__json(String(_tmp$2))]));
}
function _M0FP412zhou_2dwei976promql3cmd3web14matching__json(m, left, right) {
  const _tmp = { _0: "mode", _1: _M0IPC16string6StringPB6ToJson8to__json(_M0MPC16option6Option10unwrap__orGsE(m.mode, "")) };
  const _tmp$2 = { _0: "labels", _1: _M0IPC15array5ArrayPB6ToJson8to__jsonGsE(m.labels) };
  const _tmp$3 = { _0: "group", _1: _M0IPC16string6StringPB6ToJson8to__json(_M0MPC16option6Option10unwrap__orGsE(m.group, "")) };
  const _tmp$4 = { _0: "include", _1: _M0IPC15array5ArrayPB6ToJson8to__jsonGsE(m.include_labels) };
  let _tmp$5;
  let s;
  _L: {
    _L$2: {
      if (left === undefined) {
        _tmp$5 = _M0MPC14json4Json4null();
      } else {
        const _Some = left;
        const _s = _Some;
        s = _s;
        break _L$2;
      }
      break _L;
    }
    const _bind = _M0FP412zhou_2dwei976promql3cmd3web3num(s);
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp$5 = _ok._0;
    } else {
      return _bind;
    }
  }
  const _tmp$6 = { _0: "left", _1: _tmp$5 };
  let _tmp$7;
  let s$2;
  _L$2: {
    _L$3: {
      if (right === undefined) {
        _tmp$7 = _M0MPC14json4Json4null();
      } else {
        const _Some = right;
        const _s = _Some;
        s$2 = _s;
        break _L$3;
      }
      break _L$2;
    }
    const _bind = _M0FP412zhou_2dwei976promql3cmd3web3num(s$2);
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp$7 = _ok._0;
    } else {
      return _bind;
    }
  }
  const _bind = [_tmp, _tmp$2, _tmp$3, _tmp$4, _tmp$6, { _0: "right", _1: _tmp$7 }];
  return new _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 6), undefined)));
}
function _M0FP412zhou_2dwei976promql3cmd3web14selector__json(name, labels) {
  const ms = _M0MPC15array5Array3mapGUzszERPB4JsonE(labels, (t) => {
    const _bind = t._0;
    const _tmp = _M0IPC16string6StringPB6ToJson8to__json(_M0FPC28encoding6base6414encode_2einner(new _M0TPC15bytes9BytesView(_bind, 0, _bind.length), true));
    const _tmp$2 = _M0IPC16string6StringPB6ToJson8to__json(t._1);
    const _bind$2 = t._2;
    return _M0MPC14json4Json5array([_tmp, _tmp$2, _M0IPC16string6StringPB6ToJson8to__json(_M0FPC28encoding6base6414encode_2einner(new _M0TPC15bytes9BytesView(_bind$2, 0, _bind$2.length), true))]);
  });
  if (!_M0MPC16string6String9is__empty(name)) {
    const _bind = $bytes_literal$2;
    const _tmp = _M0IPC16string6StringPB6ToJson8to__json(_M0FPC28encoding6base6414encode_2einner(new _M0TPC15bytes9BytesView(_bind, 0, _bind.length), true));
    const _tmp$2 = _M0MPC14json4Json6string("=");
    const _bind$2 = _M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(name, 0, name.length), false);
    _M0MPC15array5Array4pushGRPC14json10WriteFrameE(ms, _M0MPC14json4Json5array([_tmp, _tmp$2, _M0IPC16string6StringPB6ToJson8to__json(_M0FPC28encoding6base6414encode_2einner(new _M0TPC15bytes9BytesView(_bind$2, 0, _bind$2.length), true))]));
  }
  const _tmp = _M0MPC14json4Json6string("selector");
  const _tmp$2 = _M0IPC16string6StringPB6ToJson8to__json(name);
  const _tmp$3 = _M0IPC15array5ArrayPB6ToJson8to__jsonGRPB4JsonE(ms);
  const _bind = _M0FP412zhou_2dwei976promql3cmd3web17literal__duration("0");
  let _tmp$4;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp$4 = _ok._0;
  } else {
    return _bind;
  }
  return new _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0MPC14json4Json5array([_tmp, _tmp$2, _tmp$3, _tmp$4, _M0MPC14json4Json4null(), _M0MPC14json4Json6string(""), _M0MPC14json4Json7boolean(false), _M0MPC14json4Json7boolean(false)]));
}
function _M0FP412zhou_2dwei976promql3cmd3web14temporal__json(ast, field, value) {
  let items;
  _L: {
    _L$2: {
      if (ast.$tag === 5) {
        const _Array = ast;
        const _items = _Array._0;
        items = _items;
        break _L$2;
      }
      break _L;
    }
    if (_M0IPC14json4JsonPB2Eq5equal(_M0MPC15array5Array2atGRPB4JsonE(items, 0), _M0MPC14json4Json6string("range"))) {
      _M0MPC15array5Array3setGRP212zhou_2dwei976promql9RegexInfoE(items, 1, _M0FP412zhou_2dwei976promql3cmd3web14temporal__json(_M0MPC15array5Array2atGRPB4JsonE(items, 1), field, value));
    } else {
      const base = _M0IPC14json4JsonPB2Eq5equal(_M0MPC15array5Array2atGRPB4JsonE(items, 0), _M0MPC14json4Json6string("selector")) ? 3 : 4;
      switch (field) {
        case "offset": {
          _M0MPC15array5Array3setGRP212zhou_2dwei976promql9RegexInfoE(items, base, value);
          break;
        }
        case "at": {
          if (_M0IPC14json4JsonPB2Eq5equal(value, _M0MPC14json4Json6string("start()")) || _M0IPC14json4JsonPB2Eq5equal(value, _M0MPC14json4Json6string("end()"))) {
            _M0MPC15array5Array3setGRP212zhou_2dwei976promql9RegexInfoE(items, base + 2 | 0, value);
          } else {
            _M0MPC15array5Array3setGRP212zhou_2dwei976promql9RegexInfoE(items, base + 1 | 0, value);
          }
          break;
        }
        case "anchored": {
          _M0MPC15array5Array3setGRP212zhou_2dwei976promql9RegexInfoE(items, base + 3 | 0, value);
          break;
        }
        case "smoothed": {
          _M0MPC15array5Array3setGRP212zhou_2dwei976promql9RegexInfoE(items, base + 4 | 0, value);
          break;
        }
      }
    }
  }
  return ast;
}
function _M0FP412zhou_2dwei976promql3cmd3web9ast__json(e) {
  let _tmp = e;
  _L: while (true) {
    const e$2 = _tmp;
    let v;
    let s;
    _L$2: {
      let v$2;
      let s$2;
      _L$3: {
        let v$3;
        let d;
        _L$4: {
          let v$4;
          let s$3;
          _L$5: {
            let r;
            let v$5;
            let s$4;
            _L$6: {
              let r$2;
              let v$6;
              let s$5;
              _L$7: {
                let v$7;
                let d$2;
                _L$8: {
                  let v$8;
                  let s$6;
                  _L$9: {
                    let name;
                    let labels;
                    _L$10: {
                      let name$2;
                      let labels$2;
                      _L$11: {
                        let p;
                        let labels$3;
                        let name$3;
                        let without;
                        let v$9;
                        _L$12: {
                          let without$2;
                          let name$4;
                          let labels$4;
                          let v$10;
                          _L$13: {
                            let name$5;
                            let args;
                            _L$14: {
                              let a;
                              let l;
                              let op;
                              let m;
                              let r$3;
                              let b;
                              _L$15: {
                                let a$2;
                                let op$2;
                                let m$2;
                                let b$2;
                                _L$16: {
                                  let a$3;
                                  let op$3;
                                  let b$3;
                                  _L$17: {
                                    let op$4;
                                    let v$11;
                                    _L$18: {
                                      let v$12;
                                      _L$19: {
                                        let b$4;
                                        _L$20: {
                                          let s$7;
                                          _L$21: {
                                            let s$8;
                                            _L$22: {
                                              switch (e$2.$tag) {
                                                case 0: {
                                                  const _Number = e$2;
                                                  const _s = _Number._0;
                                                  s$8 = _s;
                                                  break _L$22;
                                                }
                                                case 1: {
                                                  const _StringLiteral = e$2;
                                                  const _s$2 = _StringLiteral._0;
                                                  s$7 = _s$2;
                                                  break _L$21;
                                                }
                                                case 2: {
                                                  const _StringBytes = e$2;
                                                  const _b = _StringBytes._0;
                                                  b$4 = _b;
                                                  break _L$20;
                                                }
                                                case 5: {
                                                  const _Parenthesized = e$2;
                                                  const _v = _Parenthesized._0;
                                                  v$12 = _v;
                                                  break _L$19;
                                                }
                                                case 10: {
                                                  const _Unary = e$2;
                                                  const _op = _Unary._0;
                                                  const _v$2 = _Unary._1;
                                                  op$4 = _op;
                                                  v$11 = _v$2;
                                                  break _L$18;
                                                }
                                                case 9: {
                                                  const _Binary = e$2;
                                                  const _op$2 = _Binary._0;
                                                  const _a = _Binary._1;
                                                  const _b$2 = _Binary._2;
                                                  a$3 = _a;
                                                  op$3 = _op$2;
                                                  b$3 = _b$2;
                                                  break _L$17;
                                                }
                                                case 11: {
                                                  const _BinaryMatch = e$2;
                                                  const _op$3 = _BinaryMatch._0;
                                                  const _m = _BinaryMatch._1;
                                                  const _a$2 = _BinaryMatch._2;
                                                  const _b$3 = _BinaryMatch._3;
                                                  a$2 = _a$2;
                                                  op$2 = _op$3;
                                                  m$2 = _m;
                                                  b$2 = _b$3;
                                                  break _L$16;
                                                }
                                                case 12: {
                                                  const _BinaryFill = e$2;
                                                  const _op$4 = _BinaryFill._0;
                                                  const _m$2 = _BinaryFill._1;
                                                  const _l = _BinaryFill._2;
                                                  const _r = _BinaryFill._3;
                                                  const _a$3 = _BinaryFill._4;
                                                  const _b$4 = _BinaryFill._5;
                                                  a = _a$3;
                                                  l = _l;
                                                  op = _op$4;
                                                  m = _m$2;
                                                  r$3 = _r;
                                                  b = _b$4;
                                                  break _L$15;
                                                }
                                                case 7: {
                                                  const _Call = e$2;
                                                  const _name = _Call._0;
                                                  const _args = _Call._1;
                                                  name$5 = _name;
                                                  args = _args;
                                                  break _L$14;
                                                }
                                                case 8: {
                                                  const _Aggregate = e$2;
                                                  const _name$2 = _Aggregate._0;
                                                  const _labels = _Aggregate._1;
                                                  const _without = _Aggregate._2;
                                                  const _v$3 = _Aggregate._3;
                                                  without$2 = _without;
                                                  name$4 = _name$2;
                                                  labels$4 = _labels;
                                                  v$10 = _v$3;
                                                  break _L$13;
                                                }
                                                case 13: {
                                                  const _AggregateParam = e$2;
                                                  const _name$3 = _AggregateParam._0;
                                                  const _labels$2 = _AggregateParam._1;
                                                  const _without$2 = _AggregateParam._2;
                                                  const _p = _AggregateParam._3;
                                                  const _v$4 = _AggregateParam._4;
                                                  p = _p;
                                                  labels$3 = _labels$2;
                                                  name$3 = _name$3;
                                                  without = _without$2;
                                                  v$9 = _v$4;
                                                  break _L$12;
                                                }
                                                case 3: {
                                                  const _Selector = e$2;
                                                  const _name$4 = _Selector._0;
                                                  const _labels$3 = _Selector._1;
                                                  name$2 = _name$4;
                                                  labels$2 = _labels$3;
                                                  break _L$11;
                                                }
                                                case 4: {
                                                  const _SelectorBytes = e$2;
                                                  const _name$5 = _SelectorBytes._0;
                                                  const _labels$4 = _SelectorBytes._1;
                                                  name = _name$5;
                                                  labels = _labels$4;
                                                  break _L$10;
                                                }
                                                case 6: {
                                                  const _Range = e$2;
                                                  const _v$5 = _Range._0;
                                                  const _s$3 = _Range._1;
                                                  v$8 = _v$5;
                                                  s$6 = _s$3;
                                                  break _L$9;
                                                }
                                                case 17: {
                                                  const _RangeExpression = e$2;
                                                  const _v$6 = _RangeExpression._0;
                                                  const _d = _RangeExpression._1;
                                                  v$7 = _v$6;
                                                  d$2 = _d;
                                                  break _L$8;
                                                }
                                                case 14: {
                                                  const _Subquery = e$2;
                                                  const _v$7 = _Subquery._0;
                                                  const _r$2 = _Subquery._1;
                                                  const _s$4 = _Subquery._2;
                                                  r$2 = _r$2;
                                                  v$6 = _v$7;
                                                  s$5 = _s$4;
                                                  break _L$7;
                                                }
                                                case 18: {
                                                  const _SubqueryExpression = e$2;
                                                  const _v$8 = _SubqueryExpression._0;
                                                  const _r$3 = _SubqueryExpression._1;
                                                  const _s$5 = _SubqueryExpression._2;
                                                  r = _r$3;
                                                  v$5 = _v$8;
                                                  s$4 = _s$5;
                                                  break _L$6;
                                                }
                                                case 15: {
                                                  const _Offset = e$2;
                                                  const _v$9 = _Offset._0;
                                                  const _s$6 = _Offset._1;
                                                  v$4 = _v$9;
                                                  s$3 = _s$6;
                                                  break _L$5;
                                                }
                                                case 19: {
                                                  const _OffsetExpression = e$2;
                                                  const _v$10 = _OffsetExpression._0;
                                                  const _d$2 = _OffsetExpression._1;
                                                  v$3 = _v$10;
                                                  d = _d$2;
                                                  break _L$4;
                                                }
                                                case 16: {
                                                  const _At = e$2;
                                                  const _v$11 = _At._0;
                                                  const _s$7 = _At._1;
                                                  v$2 = _v$11;
                                                  s$2 = _s$7;
                                                  break _L$3;
                                                }
                                                default: {
                                                  const _ExtendedRange = e$2;
                                                  const _v$12 = _ExtendedRange._0;
                                                  const _s$8 = _ExtendedRange._1;
                                                  v = _v$12;
                                                  s = _s$8;
                                                  break _L$2;
                                                }
                                              }
                                            }
                                            const _tmp$2 = _M0MPC14json4Json6string("number");
                                            const _bind = _M0FP412zhou_2dwei976promql3cmd3web3num(s$8);
                                            let _tmp$3;
                                            if (_bind.$tag === 1) {
                                              const _ok = _bind;
                                              _tmp$3 = _ok._0;
                                            } else {
                                              return _bind;
                                            }
                                            return new _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0MPC14json4Json5array([_tmp$2, _tmp$3]));
                                          }
                                          const _tmp$2 = _M0MPC14json4Json6string("string");
                                          const _bind = _M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(s$7, 0, s$7.length), false);
                                          return new _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0MPC14json4Json5array([_tmp$2, _M0IPC16string6StringPB6ToJson8to__json(_M0FPC28encoding6base6414encode_2einner(new _M0TPC15bytes9BytesView(_bind, 0, _bind.length), true))]));
                                        }
                                        return new _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0MPC14json4Json5array([_M0MPC14json4Json6string("string"), _M0IPC16string6StringPB6ToJson8to__json(_M0FPC28encoding6base6414encode_2einner(new _M0TPC15bytes9BytesView(b$4, 0, b$4.length), true))]));
                                      }
                                      _tmp = v$12;
                                      continue;
                                    }
                                    const _tmp$2 = _M0MPC14json4Json6string("unary");
                                    const _tmp$3 = _M0IPC16string6StringPB6ToJson8to__json(op$4);
                                    const _bind = _M0FP412zhou_2dwei976promql3cmd3web9ast__json(v$11);
                                    let _tmp$4;
                                    if (_bind.$tag === 1) {
                                      const _ok = _bind;
                                      _tmp$4 = _ok._0;
                                    } else {
                                      return _bind;
                                    }
                                    return new _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0MPC14json4Json5array([_tmp$2, _tmp$3, _tmp$4]));
                                  }
                                  const _tmp$2 = _M0MPC14json4Json6string("binary");
                                  const _tmp$3 = _M0IPC16string6StringPB6ToJson8to__json(op$3);
                                  const _bind = _M0FP412zhou_2dwei976promql3cmd3web9ast__json(a$3);
                                  let _tmp$4;
                                  if (_bind.$tag === 1) {
                                    const _ok = _bind;
                                    _tmp$4 = _ok._0;
                                  } else {
                                    return _bind;
                                  }
                                  const _tmp$5 = _tmp$4;
                                  const _bind$2 = _M0FP412zhou_2dwei976promql3cmd3web9ast__json(b$3);
                                  let _tmp$6;
                                  if (_bind$2.$tag === 1) {
                                    const _ok = _bind$2;
                                    _tmp$6 = _ok._0;
                                  } else {
                                    return _bind$2;
                                  }
                                  const _tmp$7 = _tmp$6;
                                  const _tmp$8 = _M0MPC14json4Json7boolean(false);
                                  const _bind$3 = _M0FP412zhou_2dwei976promql3cmd3web14matching__json(new _M0TP212zhou_2dwei976promql14VectorMatching(false, undefined, [], undefined, []), undefined, undefined);
                                  let _tmp$9;
                                  if (_bind$3.$tag === 1) {
                                    const _ok = _bind$3;
                                    _tmp$9 = _ok._0;
                                  } else {
                                    return _bind$3;
                                  }
                                  return new _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0MPC14json4Json5array([_tmp$2, _tmp$3, _tmp$5, _tmp$7, _tmp$8, _tmp$9]));
                                }
                                const _tmp$2 = _M0MPC14json4Json6string("binary");
                                const _tmp$3 = _M0IPC16string6StringPB6ToJson8to__json(op$2);
                                const _bind = _M0FP412zhou_2dwei976promql3cmd3web9ast__json(a$2);
                                let _tmp$4;
                                if (_bind.$tag === 1) {
                                  const _ok = _bind;
                                  _tmp$4 = _ok._0;
                                } else {
                                  return _bind;
                                }
                                const _tmp$5 = _tmp$4;
                                const _bind$2 = _M0FP412zhou_2dwei976promql3cmd3web9ast__json(b$2);
                                let _tmp$6;
                                if (_bind$2.$tag === 1) {
                                  const _ok = _bind$2;
                                  _tmp$6 = _ok._0;
                                } else {
                                  return _bind$2;
                                }
                                const _tmp$7 = _tmp$6;
                                const _tmp$8 = _M0IPC14bool4BoolPB6ToJson8to__json(m$2.return_bool);
                                const _bind$3 = _M0FP412zhou_2dwei976promql3cmd3web14matching__json(m$2, undefined, undefined);
                                let _tmp$9;
                                if (_bind$3.$tag === 1) {
                                  const _ok = _bind$3;
                                  _tmp$9 = _ok._0;
                                } else {
                                  return _bind$3;
                                }
                                return new _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0MPC14json4Json5array([_tmp$2, _tmp$3, _tmp$5, _tmp$7, _tmp$8, _tmp$9]));
                              }
                              const _tmp$2 = _M0MPC14json4Json6string("binary");
                              const _tmp$3 = _M0IPC16string6StringPB6ToJson8to__json(op);
                              const _bind = _M0FP412zhou_2dwei976promql3cmd3web9ast__json(a);
                              let _tmp$4;
                              if (_bind.$tag === 1) {
                                const _ok = _bind;
                                _tmp$4 = _ok._0;
                              } else {
                                return _bind;
                              }
                              const _tmp$5 = _tmp$4;
                              const _bind$2 = _M0FP412zhou_2dwei976promql3cmd3web9ast__json(b);
                              let _tmp$6;
                              if (_bind$2.$tag === 1) {
                                const _ok = _bind$2;
                                _tmp$6 = _ok._0;
                              } else {
                                return _bind$2;
                              }
                              const _tmp$7 = _tmp$6;
                              const _tmp$8 = _M0IPC14bool4BoolPB6ToJson8to__json(m.return_bool);
                              const _bind$3 = _M0FP412zhou_2dwei976promql3cmd3web14matching__json(m, l, r$3);
                              let _tmp$9;
                              if (_bind$3.$tag === 1) {
                                const _ok = _bind$3;
                                _tmp$9 = _ok._0;
                              } else {
                                return _bind$3;
                              }
                              return new _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0MPC14json4Json5array([_tmp$2, _tmp$3, _tmp$5, _tmp$7, _tmp$8, _tmp$9]));
                            }
                            const _tmp$2 = _M0MPC14json4Json6string("call");
                            const _tmp$3 = _M0IPC16string6StringPB6ToJson8to__json(name$5);
                            const _bind = _M0MPC15array5Array3mapGRP212zhou_2dwei976promql4ExprRPB4JsonEHRP212zhou_2dwei976promql10ParseError(args, _M0FP412zhou_2dwei976promql3cmd3web9ast__json);
                            let _tmp$4;
                            if (_bind.$tag === 1) {
                              const _ok = _bind;
                              _tmp$4 = _ok._0;
                            } else {
                              return _bind;
                            }
                            return new _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0MPC14json4Json5array([_tmp$2, _tmp$3, _M0IPC15array5ArrayPB6ToJson8to__jsonGRPB4JsonE(_tmp$4)]));
                          }
                          const _tmp$2 = _M0MPC14json4Json6string("aggregate");
                          const _tmp$3 = _M0IPC16string6StringPB6ToJson8to__json(name$4);
                          const _tmp$4 = _M0IPC15array5ArrayPB6ToJson8to__jsonGsE(labels$4);
                          const _tmp$5 = _M0IPC14bool4BoolPB6ToJson8to__json(without$2);
                          const _tmp$6 = _M0MPC14json4Json4null();
                          const _bind = _M0FP412zhou_2dwei976promql3cmd3web9ast__json(v$10);
                          let _tmp$7;
                          if (_bind.$tag === 1) {
                            const _ok = _bind;
                            _tmp$7 = _ok._0;
                          } else {
                            return _bind;
                          }
                          return new _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0MPC14json4Json5array([_tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7]));
                        }
                        const _tmp$2 = _M0MPC14json4Json6string("aggregate");
                        const _tmp$3 = _M0IPC16string6StringPB6ToJson8to__json(name$3);
                        const _tmp$4 = _M0IPC15array5ArrayPB6ToJson8to__jsonGsE(labels$3);
                        const _tmp$5 = _M0IPC14bool4BoolPB6ToJson8to__json(without);
                        const _bind = _M0FP412zhou_2dwei976promql3cmd3web9ast__json(p);
                        let _tmp$6;
                        if (_bind.$tag === 1) {
                          const _ok = _bind;
                          _tmp$6 = _ok._0;
                        } else {
                          return _bind;
                        }
                        const _tmp$7 = _tmp$6;
                        const _bind$2 = _M0FP412zhou_2dwei976promql3cmd3web9ast__json(v$9);
                        let _tmp$8;
                        if (_bind$2.$tag === 1) {
                          const _ok = _bind$2;
                          _tmp$8 = _ok._0;
                        } else {
                          return _bind$2;
                        }
                        return new _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0MPC14json4Json5array([_tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$7, _tmp$8]));
                      }
                      return _M0FP412zhou_2dwei976promql3cmd3web14selector__json(name$2, _M0MPC15array5Array3mapGUsssEUzszEE(labels$2, (t) => {
                        const _bind = t._0;
                        const _tmp$2 = _M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(_bind, 0, _bind.length), false);
                        const _tmp$3 = t._1;
                        const _bind$2 = t._2;
                        return { _0: _tmp$2, _1: _tmp$3, _2: _M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length), false) };
                      }));
                    }
                    return _M0FP412zhou_2dwei976promql3cmd3web14selector__json(name, labels);
                  }
                  const _tmp$2 = _M0MPC14json4Json6string("range");
                  const _bind = _M0FP412zhou_2dwei976promql3cmd3web9ast__json(v$8);
                  let _tmp$3;
                  if (_bind.$tag === 1) {
                    const _ok = _bind;
                    _tmp$3 = _ok._0;
                  } else {
                    return _bind;
                  }
                  const _tmp$4 = _tmp$3;
                  const _bind$2 = _M0FP412zhou_2dwei976promql3cmd3web17literal__duration(s$6);
                  let _tmp$5;
                  if (_bind$2.$tag === 1) {
                    const _ok = _bind$2;
                    _tmp$5 = _ok._0;
                  } else {
                    return _bind$2;
                  }
                  return new _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0MPC14json4Json5array([_tmp$2, _tmp$4, _tmp$5]));
                }
                const _tmp$2 = _M0MPC14json4Json6string("range");
                const _bind = _M0FP412zhou_2dwei976promql3cmd3web9ast__json(v$7);
                let _tmp$3;
                if (_bind.$tag === 1) {
                  const _ok = _bind;
                  _tmp$3 = _ok._0;
                } else {
                  return _bind;
                }
                const _tmp$4 = _tmp$3;
                const _bind$2 = _M0FP412zhou_2dwei976promql3cmd3web8duration(d$2);
                let _tmp$5;
                if (_bind$2.$tag === 1) {
                  const _ok = _bind$2;
                  _tmp$5 = _ok._0;
                } else {
                  return _bind$2;
                }
                return new _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0MPC14json4Json5array([_tmp$2, _tmp$4, _tmp$5]));
              }
              const _tmp$2 = _M0MPC14json4Json6string("subquery");
              const _bind = _M0FP412zhou_2dwei976promql3cmd3web9ast__json(v$6);
              let _tmp$3;
              if (_bind.$tag === 1) {
                const _ok = _bind;
                _tmp$3 = _ok._0;
              } else {
                return _bind;
              }
              const _tmp$4 = _tmp$3;
              const _bind$2 = _M0FP412zhou_2dwei976promql3cmd3web17literal__duration(r$2);
              let _tmp$5;
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _tmp$5 = _ok._0;
              } else {
                return _bind$2;
              }
              const _tmp$6 = _tmp$5;
              const _bind$3 = _M0FP412zhou_2dwei976promql3cmd3web17literal__duration(_M0MPC16option6Option10unwrap__orGsE(s$5, "0"));
              let _tmp$7;
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _tmp$7 = _ok._0;
              } else {
                return _bind$3;
              }
              const _tmp$8 = _tmp$7;
              const _bind$4 = _M0FP412zhou_2dwei976promql3cmd3web17literal__duration("0");
              let _tmp$9;
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp$9 = _ok._0;
              } else {
                return _bind$4;
              }
              return new _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0MPC14json4Json5array([_tmp$2, _tmp$4, _tmp$6, _tmp$8, _tmp$9, _M0MPC14json4Json4null(), _M0MPC14json4Json6string(""), _M0MPC14json4Json7boolean(false), _M0MPC14json4Json7boolean(false)]));
            }
            const _tmp$2 = _M0MPC14json4Json6string("subquery");
            const _bind = _M0FP412zhou_2dwei976promql3cmd3web9ast__json(v$5);
            let _tmp$3;
            if (_bind.$tag === 1) {
              const _ok = _bind;
              _tmp$3 = _ok._0;
            } else {
              return _bind;
            }
            const _tmp$4 = _tmp$3;
            const _bind$2 = _M0FP412zhou_2dwei976promql3cmd3web8duration(r);
            let _tmp$5;
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _tmp$5 = _ok._0;
            } else {
              return _bind$2;
            }
            const _tmp$6 = _tmp$5;
            let _tmp$7;
            let d$2;
            _L$7: {
              _L$8: {
                if (s$4 === undefined) {
                  const _bind$3 = _M0FP412zhou_2dwei976promql3cmd3web17literal__duration("0");
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    _tmp$7 = _ok._0;
                  } else {
                    return _bind$3;
                  }
                } else {
                  const _Some = s$4;
                  const _d = _Some;
                  d$2 = _d;
                  break _L$8;
                }
                break _L$7;
              }
              const _bind$3 = _M0FP412zhou_2dwei976promql3cmd3web8duration(d$2);
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _tmp$7 = _ok._0;
              } else {
                return _bind$3;
              }
            }
            const _tmp$8 = _tmp$7;
            const _bind$3 = _M0FP412zhou_2dwei976promql3cmd3web17literal__duration("0");
            let _tmp$9;
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _tmp$9 = _ok._0;
            } else {
              return _bind$3;
            }
            return new _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0MPC14json4Json5array([_tmp$2, _tmp$4, _tmp$6, _tmp$8, _tmp$9, _M0MPC14json4Json4null(), _M0MPC14json4Json6string(""), _M0MPC14json4Json7boolean(false), _M0MPC14json4Json7boolean(false)]));
          }
          const _bind = _M0FP412zhou_2dwei976promql3cmd3web9ast__json(v$4);
          let _tmp$2;
          if (_bind.$tag === 1) {
            const _ok = _bind;
            _tmp$2 = _ok._0;
          } else {
            return _bind;
          }
          const _tmp$3 = _tmp$2;
          const _bind$2 = _M0FP412zhou_2dwei976promql3cmd3web17literal__duration(s$3);
          let _tmp$4;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _tmp$4 = _ok._0;
          } else {
            return _bind$2;
          }
          return new _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0FP412zhou_2dwei976promql3cmd3web14temporal__json(_tmp$3, "offset", _tmp$4));
        }
        const _bind = _M0FP412zhou_2dwei976promql3cmd3web9ast__json(v$3);
        let _tmp$2;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          _tmp$2 = _ok._0;
        } else {
          return _bind;
        }
        const _tmp$3 = _tmp$2;
        const _bind$2 = _M0FP412zhou_2dwei976promql3cmd3web8duration(d);
        let _tmp$4;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp$4 = _ok._0;
        } else {
          return _bind$2;
        }
        return new _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0FP412zhou_2dwei976promql3cmd3web14temporal__json(_tmp$3, "offset", _tmp$4));
      }
      const _bind = _M0FP412zhou_2dwei976promql3cmd3web9ast__json(v$2);
      let _tmp$2;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp$2 = _ok._0;
      } else {
        return _bind;
      }
      const _tmp$3 = _tmp$2;
      let _tmp$4;
      if (s$2 === "start()" || s$2 === "end()") {
        _tmp$4 = _M0IPC16string6StringPB6ToJson8to__json(s$2);
      } else {
        const _bind$2 = _M0FP212zhou_2dwei976promql16timestamp__value(s$2);
        let _tmp$5;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp$5 = _ok._0;
        } else {
          return _bind$2;
        }
        _tmp$4 = _M0IPC16string6StringPB6ToJson8to__json(_M0MPC15int645Int6418to__string_2einner(_tmp$5, 10));
      }
      return new _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0FP412zhou_2dwei976promql3cmd3web14temporal__json(_tmp$3, "at", _tmp$4));
    }
    const _bind = _M0FP412zhou_2dwei976promql3cmd3web9ast__json(v);
    let _tmp$2;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp$2 = _ok._0;
    } else {
      return _bind;
    }
    return new _M0DTPC16result6ResultGRPB4JsonRP212zhou_2dwei976promql10ParseErrorE2Ok(_M0FP412zhou_2dwei976promql3cmd3web14temporal__json(_tmp$2, s, _M0MPC14json4Json7boolean(true)));
  }
}
function _M0FP412zhou_2dwei976promql3cmd3web13inspect__json(input) {
  let _try_err;
  _L: {
    const _bind = _M0FPC14json13parse_2einner(new _M0TPC16string10StringView(input, 0, input.length), 1024);
    let request;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      request = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    if (request.$tag === 6) {
      const _Object = request;
      const _x = _Object._0;
      const _x$2 = _M0MPB3Map3getGsRPB4JsonE(_x, "metadata");
      if (_x$2 === undefined) {
      } else {
        const _Some = _x$2;
        const _x$3 = _Some;
        if (_x$3.$tag === 1) {
          return _M0MPC14json4Json17stringify_2einner(_M0IPC15array5ArrayPB6ToJson8to__jsonGRP212zhou_2dwei976promql17FunctionSignatureE(_M0FP212zhou_2dwei976promql20function__signatures()), false, 0, undefined);
        }
      }
    }
    let pattern;
    _L$2: {
      _L$3: {
        if (request.$tag === 6) {
          const _Object = request;
          const _x = _Object._0;
          const _x$2 = _M0MPB3Map3getGsRPB4JsonE(_x, "regex");
          if (_x$2 === undefined) {
          } else {
            const _Some = _x$2;
            const _x$3 = _Some;
            if (_x$3.$tag === 4) {
              const _String = _x$3;
              const _pattern = _String._0;
              pattern = _pattern;
              break _L$3;
            }
          }
        }
        break _L$2;
      }
      const _bind$2 = _M0FP212zhou_2dwei976promql21regex__matches__empty(pattern);
      let empty;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        empty = _ok._0;
      } else {
        const _err = _bind$2;
        _try_err = _err._0;
        break _L;
      }
      const _bind$3 = [{ _0: "accepted", _1: _M0MPC14json4Json7boolean(true) }, { _0: "matchesEmpty", _1: _M0IPC14bool4BoolPB6ToJson8to__json(empty) }];
      return _M0MPC14json4Json17stringify_2einner(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$3, 0, 2), undefined)), false, 0, undefined);
    }
    let query;
    _L$3: {
      _L$4: {
        if (request.$tag === 6) {
          const _Object = request;
          const _x = _Object._0;
          const _x$2 = _M0MPB3Map3getGsRPB4JsonE(_x, "query");
          if (_x$2 === undefined) {
            break _L$4;
          } else {
            const _Some = _x$2;
            const _x$3 = _Some;
            if (_x$3.$tag === 4) {
              const _String = _x$3;
              const _s = _String._0;
              query = _s;
            } else {
              break _L$4;
            }
          }
        } else {
          break _L$4;
        }
        break _L$3;
      }
      const _bind$2 = [{ _0: "accepted", _1: _M0MPC14json4Json7boolean(false) }, { _0: "error", _1: _M0MPC14json4Json6string("query string required") }];
      return _M0MPC14json4Json17stringify_2einner(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$2, 0, 2), undefined)), false, 0, undefined);
    }
    let all;
    if (request.$tag === 6) {
      const _Object = request;
      const _x = _Object._0;
      const _x$2 = _M0MPB3Map3getGsRPB4JsonE(_x, "experimental");
      if (_x$2 === undefined) {
        all = false;
      } else {
        const _Some = _x$2;
        const _x$3 = _Some;
        if (_x$3.$tag === 1) {
          all = true;
        } else {
          all = false;
        }
      }
    } else {
      all = false;
    }
    let _tmp;
    if (all) {
      _tmp = true;
    } else {
      let _tmp$2;
      if (request.$tag === 6) {
        const _Object = request;
        const _x = _Object._0;
        const _x$2 = _M0MPB3Map3getGsRPB4JsonE(_x, "experimental_functions");
        if (_x$2 === undefined) {
          _tmp$2 = false;
        } else {
          const _Some = _x$2;
          const _x$3 = _Some;
          if (_x$3.$tag === 1) {
            _tmp$2 = true;
          } else {
            _tmp$2 = false;
          }
        }
      } else {
        _tmp$2 = false;
      }
      _tmp = _tmp$2;
    }
    const _tmp$2 = _tmp;
    let _tmp$3;
    if (all) {
      _tmp$3 = true;
    } else {
      let _tmp$4;
      if (request.$tag === 6) {
        const _Object = request;
        const _x = _Object._0;
        const _x$2 = _M0MPB3Map3getGsRPB4JsonE(_x, "duration_expressions");
        if (_x$2 === undefined) {
          _tmp$4 = false;
        } else {
          const _Some = _x$2;
          const _x$3 = _Some;
          if (_x$3.$tag === 1) {
            _tmp$4 = true;
          } else {
            _tmp$4 = false;
          }
        }
      } else {
        _tmp$4 = false;
      }
      _tmp$3 = _tmp$4;
    }
    const _tmp$4 = _tmp$3;
    let _tmp$5;
    if (all) {
      _tmp$5 = true;
    } else {
      let _tmp$6;
      if (request.$tag === 6) {
        const _Object = request;
        const _x = _Object._0;
        const _x$2 = _M0MPB3Map3getGsRPB4JsonE(_x, "extended_ranges");
        if (_x$2 === undefined) {
          _tmp$6 = false;
        } else {
          const _Some = _x$2;
          const _x$3 = _Some;
          if (_x$3.$tag === 1) {
            _tmp$6 = true;
          } else {
            _tmp$6 = false;
          }
        }
      } else {
        _tmp$6 = false;
      }
      _tmp$5 = _tmp$6;
    }
    const _tmp$6 = _tmp$5;
    let _tmp$7;
    if (all) {
      _tmp$7 = true;
    } else {
      let _tmp$8;
      if (request.$tag === 6) {
        const _Object = request;
        const _x = _Object._0;
        const _x$2 = _M0MPB3Map3getGsRPB4JsonE(_x, "fill_modifiers");
        if (_x$2 === undefined) {
          _tmp$8 = false;
        } else {
          const _Some = _x$2;
          const _x$3 = _Some;
          if (_x$3.$tag === 1) {
            _tmp$8 = true;
          } else {
            _tmp$8 = false;
          }
        }
      } else {
        _tmp$8 = false;
      }
      _tmp$7 = _tmp$8;
    }
    const options = _M0MP212zhou_2dwei976promql13ParserOptions11new_2einner(_tmp$2, _tmp$4, _tmp$6, _tmp$7);
    const _bind$2 = _M0FP212zhou_2dwei976promql13parse_2einner(query, options);
    let ast;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      ast = _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
    const _bind$3 = _M0FP212zhou_2dwei976promql19infer__type_2einner(ast, options);
    let _bind$4;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _bind$4 = _ok._0;
    } else {
      const _err = _bind$3;
      _try_err = _err._0;
      break _L;
    }
    let ty;
    switch (_bind$4) {
      case 0: {
        ty = "scalar";
        break;
      }
      case 1: {
        ty = "vector";
        break;
      }
      case 2: {
        ty = "matrix";
        break;
      }
      default: {
        ty = "string";
      }
    }
    const _tmp$8 = { _0: "accepted", _1: _M0MPC14json4Json7boolean(true) };
    const _tmp$9 = { _0: "type", _1: _M0IPC16string6StringPB6ToJson8to__json(ty) };
    const _bind$5 = _M0FP412zhou_2dwei976promql3cmd3web9ast__json(ast);
    let _tmp$10;
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      _tmp$10 = _ok._0;
    } else {
      const _err = _bind$5;
      _try_err = _err._0;
      break _L;
    }
    const _bind$6 = [_tmp$8, _tmp$9, { _0: "ast", _1: _tmp$10 }];
    return _M0MPC14json4Json17stringify_2einner(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$6, 0, 3), undefined)), false, 0, undefined);
  }
  let e;
  _L$2: {
    let message;
    let span;
    _L$3: {
      if (_try_err.$tag === 0) {
        const _Located = _try_err;
        const _message = _Located._0;
        const _span = _Located._1;
        message = _message;
        span = _span;
        break _L$3;
      } else {
        e = _try_err;
        break _L$2;
      }
    }
    const _bind = [{ _0: "accepted", _1: _M0MPC14json4Json7boolean(false) }, { _0: "error", _1: _M0IPC16string6StringPB6ToJson8to__json(message) }, { _0: "span", _1: _M0IP212zhou_2dwei976promql10SourceSpanPB6ToJson8to__json(span) }];
    return _M0MPC14json4Json17stringify_2einner(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 3), undefined)), false, 0, undefined);
  }
  const _bind = [{ _0: "accepted", _1: _M0MPC14json4Json7boolean(false) }, { _0: "error", _1: _M0IPC16string6StringPB6ToJson8to__json(_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRPC15error5ErrorE(e))) }];
  return _M0MPC14json4Json17stringify_2einner(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 2), undefined)), false, 0, undefined);
}
(() => {
})();
export { _M0FP412zhou_2dwei976promql3cmd3web3run as run, _M0FP412zhou_2dwei976promql3cmd3web13inspect__json as inspect_json }
//# sourceMappingURL=web.js.map
