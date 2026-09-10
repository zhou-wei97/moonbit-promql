///|
pub fn run(input : String) -> String {
  try {
    let ast = @lib.parse(input)
    "Type: " +
    Repr(@lib.infer_type(ast)).to_string() +
    "\nAST: " +
    Repr(ast).to_string()
  } catch {
    e => "ERROR: " + Repr(e).to_string()
  }
}

///|
fn main {

}
