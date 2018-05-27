// function log(msg) {
//     console.log(msg);
// }
// let propKey = 'foo';
// let obj = {
//     [propKey]: true,
//     ['a' + 'bx']: 123,
//     ['he' + 'llo']() {//定义方法名
//         return 'hi';
//     }
// }
// console.log(obj.foo + '\n' + obj.abx);
// console.log(obj.hello());

// var person = {
//     sayName: function() {
//         console.log(this.name);
//     },
//     get firstName() {
//         return "Nicholas"
//     }
// }
// console.log(person.sayName.name);
// console.log(person.firstName.name);


// var doSomething = function() {

// }
// console.log(doSomething.bind().name);
// console.log(new Function().name);

// var target = {
//     a: 1
// }
// var source = { a: 5, b: 2 }
// var source1 = { a: 4, c: 3 }
// Object.assign(target, source, source1);
// console.log(target); //{ a: 4, b: 2, c: 3 }

// class Point {
//     constructor(x, y) {
//         Object.assign(this, { x, y });
//     }
// }

// Object.assign(SomeClass.prototype, {
//     someMethod(args, arg2) {
//         //....
//     },
//     anotherMethod() {

//     }
// })

// function clone(origin) {
//     return Object.assign({}, origin);
// }

// const DEFAULTS = {
//     logLevel: 0,
//     outputFormat: 'html'
// };

// function processContent(options) {
//     let options = Object.assign({}, DEFAULTSM, options);
// }
// var obj = {
//     __proto__:someOtherObj,
//     method:function(){

//     }
// }


// //Symbol
// let s = Symbol();
// console.log(typeof s);

// var s1 = Symbol('foo');
// var s2 = Symbol('bar');
// console.log(s1);
// console.log(s2.toString());

// log.levels = {
//     DEBUG: Symbol('debug'),
//     INFO: Symbol('info'),
//     WARN: Symbol('warn')
// }
// console.log(log.levels.DEBUG, 'debug message');
// console.log(log.levels.INFO, 'info message');

// var obj = {};
// var a = Symbol('a');
// var b = Symbol('b');
// obj[a] = "hello";
// obj[b] = 'world';
// var objectSymbol = Object.getOwnPropertySymbols(obj);
// objectSymbol;

// var s1 = Symbol.for("foo");
// Symbol.keyFor(s1) //"foo";

// //Proxy
// var proxy = new Proxy({}, {
//     get: function(target, property) {
//         return 35;
//     }
// })
// proxy.time;
// proxy.name;
// proxy.title;

// var person = {
//     name: "张三"
// }

// var proxy = new Proxy(person, {
//     get: function(target, property) {
//         if (property in target) {
//             console.log('...');
//             return target[property];
//         } else {
//             console.log('other');
//             // throw new ReferenceError("Property\"" + property + "\"does not exist.")
//         }
//     }
// })
// proxy.name;
// proxy.age

//利用proxy，可以将读取属性的操作（get），转变为执行某个函数
// var pipe = (function() {
//     var pipe;
//     return function(value) {
//         pipe = [];
//         return new Proxy({}, {
//             get: function(pipeObject, fnName) {
//                 if (fnName == 'get') {
//                     return pipe.reduce(function(val, fn) {
//                         return fn(val);
//                     }, value);
//                 }
//                 pipe.push(window[fnName]);
//                 return pipeObject;
//             }
//         })
//     }
// }());

// var double = function(n) { return n * 2; };
// var pow = function(n) { return n * n };
// var reverseInt = function(n) { return n.toString().split('').reverse().join('') | 0 }
// pipe(3).double.pow.reverseInt.get;


//set()
// let validator = {
//     set: function(obj, prop, value) {
//         if (prop == "age") {
//             if (!Number.isInteger(value)) {
//                 throw new TypeError('The age is not a integer');
//             }
//             if (value > 200) {
//                 throw new RangeError('The age invalid');
//             }
//         }
//         obj[prop] = value;
//     }
// };
// let person = new Proxy({}, validator);
// person.age = 100;

// // person.age = 'young';
// person.age = 300;

//apply()
var target = function() { return 'I am the target' }
var handler = {
    apply: function(receiver, ...args) {
        return 'I am the proxy';
    }
}

var p = new Proxy(target, handler);
console.log(p() === 'I am the proxy');