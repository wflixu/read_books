
// let x = 1;

// function foo (){
//     x++;
//     bar();
//     console.log('x:',x);

// }
// function bar(){
//     x++;
// }

// foo();


// let x = 1;

// function* foo() {
//     x++;
//     yield;
//     console.log('x:', x);

// }
// function bar() {
//     x++;
// }

// let it = foo();
// it.next();
// console.log('x', x);
// bar();
// console.log('x', x);
// it.next();


// 4.1.1

// function *foo(x,y) {
//     return x*y;
// }

// let it = foo(6, 7);
// let res = it.next();

// console.log('res',res);

// function *foo(x) {
//     let y = x * (yield);
//     return y;
// }


// let it = foo(6);
// it.next();
// let res = it.next(7);

// console.log('res', res);


// let a = 1;
// let b = 2;
// function* foo() {
//     a++;
//     yield;
//     b = b * a;
//     a = (yield b) + 3;
// }

// function* bar() {
//     b--;
//     yield;
//     a = (yield 8) + b;
//     b = a * (yield 2);
// }

// function step(gen) {
//     let it = gen();
//     let last;
//     return function () {
//         last = it.next(last).value;
//     }
// }

// let s1 = step(foo);
// let s2 = step(bar);

// s1();
// console.log('a:',a,'b:',b);

// s1();
// console.log('a:',a,'b:',b);
// s1();
// console.log('a:',a,'b:',b);


// s2();
// console.log('a:',a,'b:',b);
// s2();
// console.log('a:',a,'b:',b);
// s2();
// console.log('a:',a,'b:',b);
// s2();

// console.log('a:', a, 'b:', b);

// function *main(){
//     let x = yield 'hello world';
//     yield x.toLowerCase(); 
// }

// let it = main();
// console.log(it.next().value);
// try {
//     it.next(42);
// }catch(e){
//     console.log(e);

// }

// 4.1

// function run(gen) {
//     let args = [].slice.call(arguments, 1);
//     let it = gen.apply(this, args);

//     return Promise.resolve()
//         .then(function handleNext(value) {
//             let next = it.next(value);
//             return (function handleResult(next) {
//                 if (next.done) {
//                     return next.value;
//                 }
//                 else {
//                     return Promise.resolve(next.value)
//                         .then(
//                             handleNext,
//                             function handleErr(err) {
//                                 return Promise.resolve(
//                                     it.throw(err)
//                                 ).then(handleResult);
//                             })
//                 }
//             })(next);
//         });
// }









