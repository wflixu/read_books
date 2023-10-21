use std::rc::Rc;

pub fn print_padovan() {
  let mut padovan = vec![1, 2, 3];
  for i in 3..10 {
    let next = padovan[i - 1] + padovan[i - 2];
    padovan.push(next)
  }
  println!("p(1..10) = {:?}", padovan)
}

pub fn rc_test() {
  let s = Rc::new("shirataki".to_string());
  let t = s.clone();
  let u = s.clone();
}
