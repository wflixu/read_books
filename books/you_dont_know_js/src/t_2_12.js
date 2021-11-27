// var snowman = '😎';
// snowman.length; // 1
// var gclef = '𝄞';
// gclef.length; // 2

// console.log('t_2_12', snowman.length, gclef.length);


// var o = {
//     foo: 42,
//     [ Symbol( "bar" ) ]: "hello world",
//     baz: true
// };
// let names = Object.getOwnPropertyNames( o );    // [ "foo","baz" ]
// let symName = Object.getOwnPropertySymbols(o);
// console.log(names);
// console.log(symName);

// 异步迭代器

const myAsyncIterable = new Object();
myAsyncIterable[Symbol.asyncIterator] = async function*() {
    yield "hello";
    yield "async";
    yield "iteration!";
};

(async () => {
    for await (const x of myAsyncIterable) {
        console.log(x);
        // expected output:
        //    "hello"
        //    "async"
        //    "iteration!"
    }
})();
