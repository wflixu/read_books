var Observable = require('rxjs/Observable').Observable;
var Subject = require('rxjs/Subject').Subject;

require('rxjs/add/observable/interval');
require('rxjs/add/operator/observeOn');
require('rxjs/add/operator/subscribeOn');

require('rxjs/add/observable/range');
require('rxjs/add/observable/merge');

const asap = require('rxjs/scheduler/asap').asap;
const async = require('rxjs/scheduler/async').async;
const queue = require('rxjs/scheduler/queue').queue;


// setTimeout(()=>console.log('setTimeout'),0);
// process.nextTick(()=>console.log('nextTick'));

// Promise.resolve(1).then(()=>console.log('Promise.resolve'))


// const source$ = Observable.range(1,3);

// console.log('before subscribe');

// source$.subscribe(
//     value => console.log('data: ' ,value),
//     error =>console.log('error: ', error),
//     ()=>console.log('complete')
//     );

//     console.log('after subscribe');

// const timeStart = new Date();
// const source$ = Observable.range(1,10000000);
// console.log('before subscribe');
// source$.subscribe({
//     complete:()=>{
//         console.log('Time elaspsed:'+ (Date.now()-timeStart)+'ms');
//     }
// });

// console.log('after subscribe');


// const timeStart = new Date();
// const source$ = Observable.range(1,10000000,asap);
// console.log('before subscribe');
// source$.subscribe({
//     complete:()=>{
//         console.log('Time elaspsed:'+ (Date.now()-timeStart)+'ms');
//     }
// });

// console.log('after subscribe');

// console.log('before');


// console.log('before schedule');

// async.schedule(()=>console.log('async'));
// asap.schedule(()=>console.log('asap'));
// queue.schedule(()=>console.log('queue'));
// console.log('after schedule');


// const source1$ = Observable.range(1,3);
// const source2$ = Observable.range(10,3);
// const source$ = Observable.merge(source1$,source2$,2,asap);

// console.log('before subscribe');

// source$.subscribe(
//    value=>console.log('data:',value),
//    error =>console.log('error:' ,error),
//    ()=>console.log('complete')    
// )
// console.log('after subscribe');


// const  source$ = Observable.range(1,3);

// const asapSource$ = source$.observeOn(asap);

// console.log('before subscribe');

// asapSource$.subscribe(
//     value =>console.log('data:',value),
//     error =>console.log('data:',error),
//     ()=> console.log('complete')
//     )

//     console.log('after subscribe');


const source$ = Observable.create(observer=>{
    console.log('on subscribe');
    observer.next(1);
    observer.next(2);
    observer.next(3);
    return ()=>{
        console.log('on unsubscribe');
    }
})
console.log('before subscribe');
const  tweaked$ = source$.subscribeOn(asap);

let timestart = Date.now();
tweaked$.subscribe(
    value =>console.log('data:',value),
        error =>console.log('data:',error),
        ()=> console.log('complete')
)

console.log('after subscribe');

