use std::collections::HashMap;

type Table = HashMap<String, Vec<String>>;
pub fn show(table: &Table) {
  for (artist, works) in table {
    println!("works by {}", artist);
    for work in works {
      println!("  {}", work);
    }
  }
}

pub fn test() {
  // let s: Rc<String> = Rc::new("shirataki".to_string());
  // let t = s.clone();
  // let u = s.clone();
  // assert!(s.contains("shira"));
  // assert_eq!(t.find("tak"), Some(5));
  // println!("{} art quite chewy,almost bouncy ,bu lack flavor", u);

  // let mut table = Table::new();
  // table.insert(
  //     "Gesualdo".to_string(),
  //     vec!["Tenebrae Responsoria".to_string()],
  // );
  // table.insert(
  //     "Caravaggio".to_string(),
  //     vec![
  //         "The Musicians".to_string(),
  //         "The calling of st. matthew".to_string(),
  //     ],
  // );
  // show(&table);
  // println!("{}", table["Gesualdo"][0]);

  // let x = 10;
  // let r = &x;
  // assert!(*r == 10);
}
