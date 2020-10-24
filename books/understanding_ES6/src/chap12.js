// let target = {};

// let proxy = new Proxy(target,{});

// proxy.name = 'proxy';

// console.log(proxy.name);
// console.log(target.name);

// target.name ='target';

// console.log(proxy.name);
// console.log(target.name);

// console.log(isNaN('22'))


let target = {
    name:'target'
};

let proxy = new Proxy(target , {
    set(trapTarget,key,value,receiver) {
        if(!trapTarget.hasOwnProperty(key)){ 
            if(isNaN(value)){
                throw new TypeError('value must be a number');
            }
        }
        return Reflect.set(trapTarget, key, value, receiver)
    }
});


proxy.count = 1;
console.log(proxy.count);
console.log(target.count);

proxy.name = 'proxy';
console.log(proxy.name);
console.log(target.name);
try{
   proxy.antherName = 'proxy';

}catch(e){

}

console.log(target.antherName)




// Promise.resolve().then(function promise1 () {
//     console.log('promise1');
//  })
// setTimeout(function setTimeout1 (){
//  console.log('setTimeout1')
//  Promise.resolve().then(function  promise2 () {
//     console.log('promise2');
//  })
// }, 0)

// setTimeout(function setTimeout2 (){
// console.log('setTimeout2')
// }, 0)


// 执行器

// function run(taskDef) {
//    let task = taskDef();
//    let result = task.next();

//    function step() {
//       if(!result.done){
//          if(typeof result.value ==='function'){
//             result.value(function(err, data){
//                if(err){
//                   result = task.throw(err);
//                }
//                result = task.next(data);
//                step();
//             })
//          }else {
//             result = task.next(result.value);
//             step();
//          }
//       }
//    }

//    step();
// }

// function readFile(filename){
//    return function(callback){
//       fs.readFile(filename,callback);
//    }
// }

// const {run,readFile} =require('./util.js');

// run(function*(){
//    let contents = yield readFile('./src/chap1.js');
//    console.log(contents);
//    console.log('Done');
// })



