// let buffer = new ArrayBuffer(2);

// let view = new DataView(buffer);

// view.setInt8(0, 5);
// view.setInt8(1,-1);

// console.log(view.getInt16(0));
// console.log(view.getInt8(0));
// console.log(view.getInt8(1));



// let buffer = new ArrayBuffer(10),
// view1 = new Int8Array(buffer),
// view2 = new Int8Array(buffer,5,2);

// console.log(view1.buffer === buffer);
// console.log(view2.buffer === buffer);

// console.log(view1.byteOffset);
// console.log(view2.byteOffset);
// console.log(view1.byteLength);
// console.log(view2.byteLength);


// let  ints = new Int16Array(4);

// ints.set([25,50]);
// ints.set([75,100],2);

// console.log(ints.toString());

// let promise = Promise.resolve(42);

// promise.then(function(value){
//    console.log(value);
// });


// let rejected;

// process.on('rejectionHandled', function(promise){
//     console.log(promise === rejected);
// });

// rejected = Promise.reject(new Error('explosion'));

// setTimeout(function(){
//     rejected.catch(function(value){
//       console.log(value.message);
//     });
// },1000);

// promise 链的返回值

let p = new Promise(function (resolve, reject) {
    resolve(42);
});

p.then(function (value) {
    console.log(value);
    return value + 1;
}).then(function (value) { console.log(value) });