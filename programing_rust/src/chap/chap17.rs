
fn latin_to_char(latin: u8) -> char {
     latin as char
}

fn char_to_latin1(c:char) -> Option<u8> {
    if c as u32 <= 0xff {
        Some(c as u8)
    } else {
         None
    }
}

fn create_string() {
    let  str = "hello rust string";
    let mut string = String::new();
    string.push_str("k a jksjdf j kasj ");
    let str2 = *string;
    str.len();
    str2.len();

}