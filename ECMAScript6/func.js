function log(msg) {
    console.log(msg);
}
//rest参数
// function add(...values) {
//     let sum = 0;
//     for (var val of values) {
//         sum += val;
//     }
//     return sum;
// }

// log(add(2, 5, 3));

// //rest参数代替arguments变量
// const sortNum = () => Array.prototype.slice.call(arguments).sort();
// const sortNumbers = (...numbers) => numbers.sort();
// log(sortNumbers(2, 5, 3));
// log(sortNum(2, 5, 3));

// function insert(value) {
//     return {
//         into: function(array) {
//             return {
//                 after: function(afterValue) {
//                     array.splice(array.indexOf(afterValue) + 1, 0, value);
//                     return array;
//                 }
//             }
//         }
//     }
// }
// log(insert(2).into([1, 3]).after(3));

//尾递归
// function factorial(n, total) {
//     if (n == 1) return total;
//     return factorial(n - 1, n * total);
// }
// log(factorial(5, 1));
// log(factorial(100, 1));

function currying(fn, n) {
    return function(m) {
        return fn.call(this, m, n);
    }
}

function tailFactorial(n, total) {
    if (n === 1) return total;
    return tailFactorial(n - 1, n * total);
}

const factorial = currying(tailFactorial, 1);
log(factorial(5));