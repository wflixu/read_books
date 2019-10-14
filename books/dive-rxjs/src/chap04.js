var Observable = require('rxjs/Observable').Observable;

require('rxjs/add/observable/of');
require('rxjs/add/observable/range');
require('rxjs/add/observable/generate');
require('rxjs/add/operator/repeat');
require('rxjs/add/operator/map');

// const source$ =Observable.of(1,2,3);
// source$.subscribe(console.log,null,()=>console.log('complete'));


// const source$ =Observable.range(1,100);
// source$.subscribe(console.log,null,()=>console.log('complete'));




// const source$ =Observable.generate(2,value=>value<10,value=>value+2,value=>value*value);


// source$.subscribe(console.log,null,()=>console.log('complete'));


// const range = (start,count)=>{
//     const max = start+ count;
//     return Observable.generate(
//         start,
//         value=>value<max,
//         value => value +1,
//         value =>value
//         );
// }

// range(2,5).subscribe(console.log,null,()=>console.log('complete'))


// repeat

// const source$ = Observable.of(1,2,3);
// const repeated$ = source$.repeat(10)

// repeated$.subscribe(console.log,null,()=>console.log('complete'))


// const source$ = Observable.create(observer=>{
//     console.log('on subscribe');
//     setTimeout(() => {
//         observer.next(1)
//     }, 1000);
//     setTimeout(() => {
//         observer.next(2)
//     }, 1000);
//     setTimeout(() => {
//         observer.next(3)
//     }, 1000);
//     setTimeout(() => {
//         observer.complete()
//     }, 4000);

//     return {
//         unsubscribe:()=>{
//             console.log('on unsubscribe');
//         }
//     }
// })

// const repeated$ = source$.repeat(2);
// repeated$.subscribe(
//     console.log,
//     null,
//     ()=>console.log('complete')
// );

require('rxjs/add/observable/empty');
require('rxjs/add/observable/throw');
require('rxjs/add/observable/never');
require('rxjs/add/observable/interval');
require('rxjs/add/observable/timer');

// const source$ = Observable.interval(1000).map(x=>x+1);
// const source$ = Observable.timer(1000).map(x=>x+1);


// const now = new Date();
// const later = new Date(now.getTime() +2000)
// // const source$ = Observable.timer(later);
// const source$ = Observable.timer(1000);

// source$.subscribe(
//         console.log,
//         null,
//         ()=>console.log('complete')
//     );


    require('rxjs/add/observable/from');

    // const source$ = Observable.from([1,2,3]);


    // function * generateNumber(max){
    //     for(let i=1;i<=max;++i){
    //         yield i;
    //     }
    // }
    // // const source$ = Observable.from(generateNumber(6));
    // const source$ = Observable.from('abc');
    

    // source$.subscribe(
    //     console.log,
    //     null,
    //     ()=>console.log('complete')
    // );


    require('rxjs/add/observable/fromEvent');

    const EventEmitter= require('events');
    const emitter = new EventEmitter();
    const source$ = Observable.fromEvent(emitter,'msg')

    source$.subscribe(
        console.log,
        error => console.log('catch',error),
        ()=>console.log('complete')
    );

    emitter.emit('msg',1)    
    emitter.emit('msg',2)    
    emitter.emit('another-msg','oops');
    emitter.emit('msg',3)    
    

