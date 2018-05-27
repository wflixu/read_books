/* var ticking =true;
var clock = function(){
    if(ticking){
        console.log('tick');
    }else{
        console.log('Tock!');
    }
    ticking =!ticking;
}
clock();
clock();
clock();
 */

/*  let clock = function* (){
     while(true){
         console.log('start');
         console.log('Tick!');
         yield;
         console.log('Tock!');
         yield;
     }
 }
 let it = clock();
 it.next();
 it.next();
 it.next();
 it.next(); */



// //  通过generator 函数逐行读取文本
// function* numbers(){
//     let file = new FileReader('14.js');
//     try{
//         while(!file.eof){
//             console.log('start')
//             yield file.readLine();
//         }
//     }finally{
//         file.close();
//     }
// }


//  Thunk函数
// ES6
const Thunk=function(fn){
    return function(...args){
        return function(callback){
            return fn.call(this,...args,callback);
        }
    }
}