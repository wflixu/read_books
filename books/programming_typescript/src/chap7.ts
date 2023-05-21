// function ask(): string[] {
//     let result = prompt("when is you birthday?") ?? ""
//     if(result === null){
//         return []
//     }
//     return [result]
// }

// function parse(
//   birthday: string
// ): Date[] {
//   let date = new Date(birthday);
//   if (!isValid(date)) {
//     return [];
//   }
//   if (date.getTime() > Date.now()) {
//     return [];
//   }
//   return [date];
// }

// function isValid(date: Date) {
//   return (
//     Object.prototype.toString.call(date) === "[object Date]" &&
//     !Number.isNaN(date.getTime())
//   );
// }

// flatten(ask().map(parse)).map(_ => _.toISOString())
// .forEach(item =>{
//     console.info('Date is ', item)
// })

// function flatten<T> (array: T[][]):T[]{
//     return Array.prototype.concat.apply([],array)
// }




// function ask(): string[] {
//     let result = prompt("when is you birthday?") ?? ""
//     if(result === null){
//         return []
//     }
//     return [result]
// }

// function parse(
//   birthday: string
// ): Date[] {
//   let date = new Date(birthday);
//   if (!isValid(date)) {
//     return [];
//   }
//   if (date.getTime() > Date.now()) {
//     return [];
//   }
//   return [date];
// }

function isValid(date: Date) {
  return (
    Object.prototype.toString.call(date) === "[object Date]" &&
    !Number.isNaN(date.getTime())
  );
}

// flatten(ask().map(parse)).map(_ => _.toISOString())
// .forEach(item =>{
//     console.info('Date is ', item)
// })

// function flatten<T> (array: T[][]):T[]{
//     return Array.prototype.concat.apply([],array)
// }

// [T]/ []
interface Option<T>{
  flatMap<U>(f:(value:T)=> None):None
  flatMap<U>(f:(value:T)=> Option<U>):Option<U>
  getOrElse(value:T) : T
}
class Some<T> implements Option<T> {
    constructor(private value: T){}

    flatMap<U>(f:(value:T)=> None):None
    flatMap<U>(f:(value:T)=> Some<U>):Some<U>
    flatMap<U>(f:(value:T)=> Option<U>):Option<U>{
        return f(this.value)
    }

    getOrElse():T {
        return this.value
    }
}
class None implements Option<never> {
    flatMap():None {
        return this;
    }

    getOrElse<U>(value:U):U {
        return value
    }
}

function GetOption<T>(value:null|undefined) :None
function GetOption<T>(value:T):Some<T>
function GetOption<T>(value:T):Option<T> {
    if(value == null){
      return new None;
    }
    return new Some(value)
}

let result = GetOption(6)
.flatMap(n => GetOption(n*3))
// .flatMap(n => new None)
// .getOrElse(7)


function ask(): Option<string> {
    let result = prompt("when is you birthday?") ?? ""
    if(result === null){
        new None
    }
    return GetOption(result)
}

function parse(
  birthday: string
): Option<Date> {
  let date = new Date(birthday);
  if (!isValid(date)) {
    return new None;
  }
  if (date.getTime() > Date.now()) {
    return new None;
  }
  return GetOption(date);
}

ask()
.flatMap(parse)
.flatMap(date => new Some(date.toISOString()))
.flatMap(date => new Some('date is ' + date))
.getOrElse('Error parse date for some reason')
