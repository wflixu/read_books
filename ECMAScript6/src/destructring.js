// var [a, b, c] = [1, 2, 3];
// a;
// b;
// console.log(c);

// var [foo] = [];
// var [v1] = 1;
// var [v2] = false;
// var [v3] = NaN;
// var [bar, v5] = [1];
// // console.log(foo);
// console.log(v1);
// console.log(v2);
// console.log(v3);
// console.log(v5);

// let [x, y] = [1, 2, 3];
// console.log(x);
// console.log(y);

// var [x = 1] = [undefined];
// var [x = 1] = [null];
// console.log(x);

function* fibs() {
    var a = 0;
    var b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

var [first, second, third, fourth, fifth, sixth] = fibs();
console.log(sixth);