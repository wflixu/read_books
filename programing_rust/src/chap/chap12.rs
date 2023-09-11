use std::cmp::{Eq, PartialEq};
use std::ops::{Add, AddAssign, BitOr, Mul, Neg, Sub};

#[derive(Clone, Copy, Debug)]
struct Complex<T> {
  re: T,
  im: T,
}

impl<T> Add for Complex<T>
where
  T: Add<Output = T>,
{
  type Output = Self;
  fn add(self, rhs: Self) -> Self {
    Complex {
      re: self.re + rhs.re,
      im: self.im + rhs.im,
    }
  }
}
// impl<T> Mul for Complex<T> {
//   type Output = Complex<T>;
//   fn mul(self, rhs: Self) -> Self {
//     Complex {
//       re: self.re * rhs.re - self.im * rhs.im,
//       im: self.re * rhs.im + self.im * rhs.re,
//     }
//   }
// }

impl<T> Neg for Complex<T>
where
  T: Neg<Output = T>,
{
  type Output = Complex<T>;
  fn neg(self) -> Complex<T> {
    Complex {
      re: -self.re,
      im: -self.im,
    }
  }
}

impl<T> AddAssign for Complex<T>
where
  T: AddAssign<T>,
{
  fn add_assign(&mut self, rhs: Complex<T>) {
    self.re += rhs.re;
    self.im += rhs.im;
  }
}

impl<T: PartialEq> PartialEq for Complex<T> {
  fn eq(&self, other: &Self) -> bool {
    self.re == other.re && self.im == other.im
  }
}

pub fn test1() {
  println!("chap12:--- test1");
  assert_eq!(4.125f32.add(5.75), 9.875);
  assert_eq!(10.add(20), 10 + 20);

  let c1 = Complex { re: 1, im: 2 };
  let c2 = Complex { re: 3, im: -4 };
  let c3 = c1 + c2;

  println!("c3 is {:?}", &c3);
  let mut c4 = -c3;

  println!("c4 is {:?}", &c4);

  c4 += Complex { re: 5, im: -6 };

  println!("c4 after assign_ad :{:?}", &c4);
}

pub fn test2() {}
