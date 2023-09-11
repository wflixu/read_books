use actix_web::{http, web, App, HttpResponse, HttpServer};

use image::png::PNGEncoder;
use image::ColorType;
use num::Complex;
use regex::Regex;
use serde::Deserialize;
use serde_json::{Map, Value};
use std::env;
use std::fs;
use std::fs::File;
use std::str::FromStr;
use text_colorizer::*;

#[derive(Deserialize)]
struct GcdParam {
  n: u64,
  m: u64,
}

pub fn gcd(mut n: u64, mut m: u64) -> u64 {
  assert!(n != 0 && m != 0);
  while m != 0 {
    if m < n {
      let t = m;
      m = n;
      n = t;
    }
    m = m % n;
  }
  n
}

fn post_gcd(form: web::Form<GcdParam>) -> HttpResponse {
  if form.n == 0 || form.m == 0 {
    return HttpResponse::BadRequest()
      .content_type("text/html")
      .body("Computing the GCD with zero is boring.");
  }

  let response = format!(
    "the great common divisor of the numbers {} and {} is {}",
    form.n,
    form.m,
    gcd(form.n, form.m)
  );
  HttpResponse::Ok()
    .content_type("text/html")
    .body(response)
}

pub fn cli() {
  let mut numbers = Vec::new();

  for arg in env::args().skip(1) {
    numbers.push(
      u64::from_str(&arg).expect("error parsing argument"),
    );
  }

  if numbers.len() == 0 {
    eprintln!("Usage: gcd NUMBER ...");
    std::process::exit(1);
  }

  let mut d = numbers[0];
  for m in &numbers[1..] {
    d = gcd(d, *m);
  }

  println!(
    "The greatest common divisor of {:?} is {}",
    numbers, d
  );
}

fn get_index() -> HttpResponse {
  HttpResponse::Ok().content_type("text/html").body(
    r#"
                  <title>GCD Calculator</title>
                  <form action="/gcd" method="post">
                  <input type="text" name="n"/>
                  <input type="text" name="m"/>
                  <button type="submit">Compute GCD</button>
                  </form>
              "#,
  )
}
fn post_test() -> HttpResponse {
  let mut record = serde_json::Map::new();
  record.insert(String::from("zz"), 1.into());
  record.insert(String::from("aa"), false.into());
  record.insert(String::from("dd"), "haha".into());
  HttpResponse::Ok()
    .content_type("application/json")
    .body(serde_json::to_string_pretty(&record).unwrap())
}
pub fn web() {
  let server = HttpServer::new(|| {
    App::new()
      .route("/", web::get().to(get_index))
      .route("/gcd", web::post().to(post_gcd))
      .route("/test", web::get().to(post_test))
  });

  println!("Serving on http://localhost:3000...");
  server
    .bind("127.0.0.1:3000")
    .expect("error binding server to address")
    .run()
    .expect("error running server");
}

fn square_loop(mut x: f64) {
  loop {
    x = x * x;
  }
}
fn square_add_loop(c: f64) {
  let mut x: f64 = 0.0;
  loop {
    x = x * x + c;
  }
}

fn complex_square_add_loop(c: Complex<f64>) {
  let mut z = Complex { re: 0.0, im: 0.0 };
  loop {
    z = z * z + c;
  }
}
fn escape_time(
  c: Complex<f64>,
  limit: usize,
) -> Option<usize> {
  let mut z = Complex { re: 0.0, im: 0.0 };
  for i in 0..limit {
    if z.norm_sqr() > 4.0 {
      return Some(i);
    }
    z = z * z + c;
  }
  None
}
fn parse_pair<T: FromStr>(
  s: &str,
  separator: char,
) -> Option<(T, T)> {
  match s.find(separator) {
    None => None,
    Some(index) => {
      match (
        T::from_str(&s[..index]),
        T::from_str(&s[index + 1..]),
      ) {
        (Ok(l), Ok(r)) => Some((l, r)),
        _ => None,
      }
    }
  }
}

fn parse_complex(s: &str) -> Option<Complex<f64>> {
  match parse_pair(s, ',') {
    Some((re, im)) => Some(Complex { re, im }),
    None => None,
  }
}

fn pixel_to_point(
  bounds: (usize, usize),
  pixel: (usize, usize),
  upper_left: Complex<f64>,
  lower_right: Complex<f64>,
) -> Complex<f64> {
  let (width, height) = (
    lower_right.re - upper_left.re,
    upper_left.im - lower_right.im,
  );
  Complex {
    re: upper_left.re
      + pixel.0 as f64 * width / bounds.0 as f64,
    im: upper_left.im
      - pixel.1 as f64 * height / bounds.1 as f64,
  }
}

fn render(
  pixels: &mut [u8],
  bounds: (usize, usize),
  upper_left: Complex<f64>,
  lower_right: Complex<f64>,
) {
  assert!(pixels.len() == bounds.0 * bounds.1);

  for row in 0..bounds.1 {
    for column in 0..bounds.0 {
      let point = pixel_to_point(
        bounds,
        (column, row),
        upper_left,
        lower_right,
      );
      pixels[row * bounds.0 + column] =
        match escape_time(point, 255) {
          None => 0,
          Some(count) => 255 - count as u8,
        }
    }
  }
}

fn write_image(
  filename: &str,
  pixels: &[u8],
  bounds: (usize, usize),
) -> Result<(), std::io::Error> {
  let output = File::create(filename)?;

  let encoder = PNGEncoder::new(output);
  encoder.encode(
    &pixels,
    bounds.0 as u32,
    bounds.1 as u32,
    ColorType::Gray(8),
  )?;

  Ok(())
}

pub fn mandelbrot() {
  let args: Vec<String> = env::args().collect();

  if args.len() != 5 {
    eprintln!(
      "Usage: {} FILE PIXELS UPPERLEFT LOWERRIGHT",
      args[0]
    );
    eprintln!(
      "Example: {} mandel.png 1000x750 -1.20,0.35 
-1,0.20",
      args[0]
    );
    std::process::exit(1);
  }

  let bounds = parse_pair(&args[2], 'x')
    .expect("error parsing image dimensions");
  let upper_left = parse_complex(&args[3])
    .expect("error parsing upper left corner point");
  let lower_right = parse_complex(&args[4])
    .expect("error parsing lower right corner point");

  let mut pixels = vec![0; bounds.0 * bounds.1];

  render(&mut pixels, bounds, upper_left, lower_right);

  write_image(&args[1], &pixels, bounds)
    .expect("error writing PNG file");
}

#[derive(Debug)]
struct Arguments {
  target: String,
  replacement: String,
  filename: String,
  ouput: String,
}

fn print_useage() {
  eprint!(
    "{} - change occurences of one string into another",
    "quickreplace".green()
  );
  eprintln!("Usage : quickreplace <target><replacement> <INPUT><OUTPUT>");
}

fn parse_args() -> Arguments {
  let args: Vec<String> = env::args().skip(1).collect();
  if args.len() != 4 {
    print_useage();
    eprintln!(
      "{} wrong number of argments: expected 4, got {} .",
      "Error".red().bold(),
      args.len()
    );
    std::process::exit(1);
  }
  Arguments {
    target: args[0].clone(),
    replacement: args[1].clone(),
    filename: args[2].clone(),
    ouput: args[3].clone(),
  }
}
// cargo run "find" "replace" file output
pub fn rep_text() {
  let args = parse_args();
  let data = match fs::read_to_string(&args.filename) {
    Ok(v) => v,
    Err(e) => {
      eprintln!(
        "{} failed to read from file '{}': {:?}",
        "Error:".red().bold(),
        args.filename,
        e
      );
      std::process::exit(1);
    }
  };
  let replaced_data =
    match replace(&args.target, &args.replacement, &data) {
      Ok(v) => v,
      Err(e) => {
        eprintln!(
          "{} failed to replace text: {:?}",
          "Error:".red().bold(),
          e
        );
        std::process::exit(1);
      }
    };
  match fs::write(&args.ouput, &replaced_data) {
    Ok(_) => {}
    Err(e) => {
      eprintln!(
        "{} failed to write to file '{}': {:?}",
        "Error:".red().bold(),
        args.filename,
        e
      );
      std::process::exit(1);
    }
  };

  println!("{:?}", args);
}

fn replace(
  target: &str,
  replacement: &str,
  text: &str,
) -> Result<String, regex::Error> {
  let regex = Regex::new(target)?;
  Ok(regex.replace_all(text, replacement).to_string())
}
