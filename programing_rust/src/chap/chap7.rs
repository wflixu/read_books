use std::fmt;
use std::io;
fn pirate_share(total: u64, crew_size: usize) -> u64 {
  let half = total / 2;
  half / crew_size as u64
}
#[derive(Debug, Clone)]
pub struct JsonErr {
  pub message: String,
  pub line: usize,
  pub column: usize,
}

impl fmt::Display for JsonErr {
  fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
    write!(
      f,
      "{} ({}:{})",
      self.message, self.line, self.column
    )
  }
}
// fn get_weather(
//   location: LatLng,
// ) -> Result<WeatherReport, io::Error>;

pub fn start_test() {
  println!("starting chap3 test ..........");
  let money = pirate_share(15421, 0);

  //   match get_weather(hometown) {
  //     Ok(report) => display_weather(hometown, &report),
  //     Err(err) => {
  //       println!("error querying the weather: {}", err);
  //       schedule_weather_retry()
  //     }
  //   }
  println!("Crew can get {} ", &money);
}
