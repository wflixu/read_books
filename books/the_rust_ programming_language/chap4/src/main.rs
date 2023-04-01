fn main() {
    // println!("Hello, world!");
    // let mut s = String::from("hello");
    // s.push_str(", world");

    // println!("{}", s)


    let s = String::from("hello world!");

let s1 = &s[0..2];
let s2 = &s[2..5];
 

 let first = first_world(&s);

 println!(" first world : {first}");

  println!(
    "s1 is: {s1}"
  );

  println!("s2 is: {s2}");

}

fn first_world(s: &String) -> &str {
    let bytes = s.as_bytes();

    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return  &s[0..i];
        }

    }

    &s[..]
}


