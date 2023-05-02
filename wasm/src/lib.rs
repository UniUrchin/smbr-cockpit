use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn hello() -> String {
  return String::from("Hello, World!");
}
