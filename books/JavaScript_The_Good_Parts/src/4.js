// // function hanoi(disc, src, aux, dst) {
// //   if (disc > 0) {
// //     hanoi(disc - 1, src, dst, aux);
// //     console.log('Move disc ' + disc + ' form ' + src + ' to ' + dst);
// //     hanoi(disc - 1, aux, src, dst);
// //   }
// // }

// // hanoi(3, 'Src', 'Aux', 'Dst');


// var myObject = {
//   value: 0,
//   increment: function(inc) {
//     this.value += typeof inc === 'number' ? inc : 1;
//   }
// }
// myObject.increment(1);
// console.log(myObject.value);
// myObject.increment(2);
// console.log(myObject.value)

function add(a, b) {
  return a + b;
}
// myObject.double = function() {
//   var that = this;
//   var helper = function() {
//     that.value = add(that.value, that.value);
//     console.log(this);
//   }
//   helper();
// }
// myObject.double();
// console.log(myObject.value);

// var Quo = function(string) {
//   this.status = string;
// }

// Quo.prototype.get_status = function() {
//   return this.status;
// }
// var myQuo = new Quo("confused");
// console.log(myQuo.get_status());
// Quo('LL');
// console.log(status);


var array = [3, 4]
var sum = add.apply(null, array);
// console.log('sum:' + sum);

// var statusObject={
//   status:'A-OK'
// };
// var status = Quo.prototype.get_status.apply(statusObject);

var sum = function() {
  var i, sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];

  }
  return sum;
}
console.log(sum(1, 2, 5, 5));