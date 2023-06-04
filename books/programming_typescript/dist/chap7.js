"use strict";
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
function isValid(date) {
    return (Object.prototype.toString.call(date) === "[object Date]" &&
        !Number.isNaN(date.getTime()));
}
var Some = /** @class */ (function () {
    function Some(value) {
        this.value = value;
    }
    Some.prototype.flatMap = function (f) {
        return f(this.value);
    };
    Some.prototype.getOrElse = function () {
        return this.value;
    };
    return Some;
}());
var None = /** @class */ (function () {
    function None() {
    }
    None.prototype.flatMap = function () {
        return this;
    };
    None.prototype.getOrElse = function (value) {
        return value;
    };
    return None;
}());
function GetOption(value) {
    if (value == null) {
        return new None;
    }
    return new Some(value);
}
var result = GetOption(6)
    .flatMap(function (n) { return GetOption(n * 3); });
// .flatMap(n => new None)
// .getOrElse(7)
function ask() {
    var _a;
    var result = (_a = prompt("when is you birthday?")) !== null && _a !== void 0 ? _a : "";
    if (result === null) {
        new None;
    }
    return GetOption(result);
}
function parse(birthday) {
    var date = new Date(birthday);
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
    .flatMap(function (date) { return new Some(date.toISOString()); })
    .flatMap(function (date) { return new Some('date is ' + date); })
    .getOrElse('Error parse date for some reason');
//# sourceMappingURL=chap7.js.map