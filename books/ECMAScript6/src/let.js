/*let foo = 'outer';

function bar(func = x => foo) {
    let foo = 'inner';
    console.log(func());
}
bar();*/

// let foo = 'outer';
// let f = x => foo;

// function bar(func = f) {
//     let foo = 'inner';
//     console.log(func());
// }
// bar();

//不允许重复声明
/*function ls() {
    let a = 10;
    var a = 1;
}*/

// function func(arg) {

//     {
//         let arg; //不报错
//     }
// }

// //块级作用域
// function f1() {
//     let n = 5;
//     if (true) {
//         let n = 10;
//     }
//     console.log(n);//5
// }
// f1();

//
// function f() {
//     console.log('I am outside!');
// }
// (function() {
//     if (false) {
//         function f() {
//             console.log('I am inside!');
//         }
//     }
//     f();
// }());

//const
// const PI = 3.14;
// PI;
// PI = 3;
// PI;

// var message = 'hello world';
// let age = 25;

// // const message = 'goodbye!';
// const age = 30;

// const foo = {};
// foo.prop = 123;

// foo.prop;

// foo = {};

var a = 1;

console.log(global.a);
console.log(a);
let b = 1;
console.log(global.b);

// window.b;



function Aaa(x) {
    if (x <= 1) {
        return 1;
    } else {
        return x * arguments.callee(x - 1);
    }
}

function a() { //父函数
    b();
};

function b() {
    console.info(b.caller);
};

a(); //结果就是弹出函数a和内容