// let greeting = "hello world";

// let it = greeting[Symbol.iterator]();

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// let  Fib = {
//     [Symbol.iterator]() {
//         var n1 = 1, n2 = 1;
//         return {
//             // 使迭代器成为iterable
//             [Symbol.iterator]() { return this; },
//             next() {
//                 var current = n2;
//                 n2 = n1;
//                 n1 = n1 + current;
//                 return { value: current, done: false };
//             },
//             return(v) {
//                 console.log(
//                     "Fibonacci sequence abandoned."
//                 );
//                 return { value: v, done: true };
//             }
//         };
//     }
// };
// for (var v of Fib) {
//     console.log( v );
//     if (v > 50) break;
// }

function* foo() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}
function* bar() {
  var x = yield* foo();
  console.log('x:', x);
}
for (var v of bar()) {
  console.log(v);
}
