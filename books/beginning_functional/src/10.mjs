function* sayFullName() {
  let first = yield;
  let last = yield;
  console.log(first + last);
}

let fullName = sayFullName();

console.log(fullName.next());
console.log(fullName.next("li"));

console.log(fullName.next("xu"));
