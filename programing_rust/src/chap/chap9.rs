#[derive(Debug)]
pub struct GrayscalMap {
  pub pixels: Vec<u8>,
  pub size: (usize, usize),
}

pub struct Vector2 {
  x: f32,
  y: f32,
}

impl Vector2 {
  const ZERO: Vector2 = Vector2 { x: 0.0, y: 0.0 };
  const UNIT: Vector2 = Vector2 { x: 1.0, y: 1.0 };
}

#[test]
pub fn test1() {
  let width = 1024;
  let height = 576;
  let image = GrayscalMap {
    pixels: vec![0; width * height],
    size: (width, height),
  };
  println!("image is : {:?}", &image);
  assert_eq!(image.size.0, 1024);
}

pub fn new_map(
  size: (usize, usize),
  pixels: Vec<u8>,
) -> GrayscalMap {
  assert_eq!(pixels.len(), size.0 * size.1);
  GrayscalMap { pixels, size }
}

pub struct Bounds(usize, usize);

pub fn test_tuple_strut() {
  let _ = Bounds(1024, 768);
}

pub struct Onesuch;

pub fn test_unit_struct() {
  let _o = Onesuch;
}

#[derive(Clone, Copy, Debug, PartialEq)]
pub struct Point {
  x: f64,
  y: f64,
}
pub struct Queue<T> {
  older: Vec<T>,
  younger: Vec<T>,
}

impl<T> Queue<T> {
  pub fn new() -> Queue<T> {
    Queue {
      older: Vec::new(),
      younger: Vec::new(),
    }
  }

  pub fn push(&mut self, t: T) {
    self.younger.push(t);
  }
  pub fn is_empty(&self) -> bool {
    self.older.is_empty() && self.younger.is_empty()
  }
}

pub struct Extrema<'elt> {
  greatest: &'elt i32,
  least: &'elt i32,
}

pub struct Polynomial<const N: usize> {
  coefficients: [f64; N],
}
