#[derive(Debug)]
pub struct Point {
  x: i32,
  y: i32,
}
pub fn ref_ref() {
  let point = Point { x: 1000, y: 729 };
  let r = &point;
  let rr = &r;
  let rrr = &rr;
  println!("rrr is {:?}", rrr);
}
