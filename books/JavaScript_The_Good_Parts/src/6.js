// var empty = [];
// var numbers = ['zero', 'one', 'two', 'three', 'four'];
// console.log(empty[1]);
// console.log(numbers[1]);
// console.log(empty.length);
// console.log(numbers.length);
// var numbers_object = {
//   '0': 'zero',
//   '1': 'one',
//   '2': 'two',
//   '3': 'three'
// }
// console.log(numbers_object[1]);

// function is_array(arr) {
//   return arr && typeof arr === 'object' && arr.constructor === Array;

//   return Object.prototype.toString.apply(arr);
// }

// console.log('numbers is array:' + is_array(numbers));
// console.log('numbers_object is array:' + is_array(numbers_object));


// Array.reduce = function(f, value) {
//   for (let i = 0; i < this.length; i++) {
//     value = f(this[i], value);
//   }
//   return value;
// }
// var data = [4, 8, 15, 23, 42];
// var add = function(a, b) {
//   return a + b;
// }
// var mult = function(a, b) {
//   return a * b;
// }
// console.log('add:' + data.reduce(add, 0));
// console.log('product:' + data.reduce(mult, 1));

// data.total = function() {
//   return this.reduce(add, 0);
// }
// console.log('total:' + data.total());

// 初始化数组

Array.dim = function(dimension, initial) {
  var a = []
  for (let index = 0; index < dimension; index++) {
    a[index] = initial;
  }
  return a;
}

console.log(Array.dim(10, 0));