use std::vec;

pub fn start() {
  let str = "str";
  let num = 12;
  let num2: &i32 = &num;
}

pub fn mul_overflow() {
  let mut i = 1;
  loop {
    i *= 10;
  }
  let v = vec![0.0, 1.1, 2.2];
  let s: &[f64] = &v;
}

pub fn test_str() {
  let speech = "\"Ouch!\" said the well.\n";
  print!("{}", &speech);

  println!(
    "In the room the woamn lorem 
   aksdjf sting mout 
   "
  );

  let install_path = r"C:\progrom files\gorillas";
}
