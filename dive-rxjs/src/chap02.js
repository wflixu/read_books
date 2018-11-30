// var Rx = require('rxjs/Rx');

// const source$ = Rx.Observable.of(1,2,3); // etc

// // source$.subscribe(console.log)

// var Observable = require('rxjs/Observable').Observable;

// const onSubscribe= observer =>{
//     observer.next(1);
//     observer.next(2);
//     observer.next(3);
// }

// const source$ = new Observable(onSubscribe);
// const thsObserver = {
//     next:item=>console.log(item)
// }
// source$.subscribe(thsObserver);


/**
 *      
 */

// var Observable = require('rxjs/Observable').Observable;

// const onSubscribe= observer =>{
//     let number =1;
//     const handle = setInterval(()=>{
//         observer.next(number++);
//         // if(number>5){
//         //     clearInterval(handle)
//         // }
//     },500)
    
// }

// const source$ = new Observable(onSubscribe);
// const thsObserver = {
//     next:item=>console.log(item)
// }
// source$.subscribe(thsObserver);

/*******************************/
// var Observable = require('rxjs/Observable').Observable;

// const onSubscribe= observer =>{
//     let number = 1;
//     const handle = setInterval(() => {
//         observer.next(number++);
//         if(number>5){
//             // clearInterval(handle);
//             observer.complete();
//         }
//     }, 500)
// }

// const source$ = new Observable(onSubscribe);
// const thsObserver = {
//     next:item=>console.log(item),
//     error:err=>console.log(err),
//     complete:()=>console.log('no more data')
// }
// source$.subscribe(thsObserver);



/**
 * 错误处理
 */

// var Observable = require('rxjs/Observable').Observable;

// const onSubscribe= observer =>{
//    observer.next(1);
//    observer.error('something wrong');
//    observer.complete();
// }

// const source$ = new Observable(onSubscribe);
// const thsObserver = {
//     next:item=>console.log(item),
//     error:err=>console.log(err),
//     complete:()=>console.log('no more data')
// }
// source$.subscribe(thsObserver);

/**简单形式 */


// var Observable = require('rxjs/Observable').Observable;

// const onSubscribe= observer =>{
//    observer.next(1);
//    observer.error('something wrong');
//    observer.complete();
// }

// const source$ = new Observable(onSubscribe);
// const thsObserver = {
//     next:item=>console.log(item),
//     error:err=>console.log(err),
//     complete:()=>console.log('no more data')
// }
// source$.subscribe(  item=>console.log(item),
// err=>console.log(err),
// ()=>console.log('no more data'));


/**
 * 退订 Observable
 */


//  var Observable = require('rxjs/Observable').Observable;

// const onSubscribe= observer =>{
//     let number = 1;
//     const handle = setInterval(() => {
//         console.log('in onsubscribe');
        
//         observer.next(number++);
       
//     }, 1000)
//     return {
//         unsubscribe:()=>{
//             // clearInterval(handle)
//         }

//     }
// }

// const source$ = new Observable(onSubscribe);

// const subscription = source$.subscribe(item=>console.log(item));
// setTimeout(() => {
//     subscription.unsubscribe()
// }, 5000);



var Observable = require('rxjs/Observable').Observable;
require('rxjs/add/operator/map');

const onSubscribe= observer =>{
    observer.next(1);
    observer.next(2);
    observer.next(3);
}

const source$ = new Observable(onSubscribe);
source$.map(x=>x*x).subscribe(item=>console.log(item));
