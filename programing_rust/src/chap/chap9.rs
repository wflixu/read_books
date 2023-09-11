#[derive(Debug)]
pub struct GrayscalMap {
  pub pixels: Vec<u8>,
  pub size: (usize, usize),
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
