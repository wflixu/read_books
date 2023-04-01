#[derive(Debug)]
struct  Rectangle {
    width: u32,
    height: u32,
}
impl  Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

fn main() {
    // println!("chap 5 code!");

    // //   let user1 = User {
    // //     active: true,
    // //     username: "sldjkksd",
    // //     email: "skdjkfj",
    // //     sign_in_count: 1
    // //   }  

    // let width1 = 30;
    // let height1 = 50;
    // println!("The area of the reactangle is {} sqare pixels.", area(width1, height1));
   
  let rect1 = Rectangle {
    width : 30,
    height: 50,
  };

  println!(
    "The area of the rectangle is {} square pixels",
    rect1.area()
);

}


fn area (width: u32, height:u32) -> u32 {
    width * height
}

// struct  User {
//     active: bool,
//     username: &str,
//     email: &str,
//     sign_in_count: u64
// }