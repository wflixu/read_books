var Observable = require('rxjs/Observable').Observable;
var Subject = require('rxjs/Subject').Subject;

require('rxjs/add/observable/interval');
require('rxjs/add/observable/merge');
require('rxjs/add/observable/of');
require('rxjs/add/operator/take');
require('rxjs/add/operator/multicast');
require('rxjs/add/operator/concat');
require('rxjs/add/operator/mapTo');
require('rxjs/add/operator/do');
require('rxjs/add/operator/delay');
require('rxjs/add/operator/merge');
require('rxjs/add/operator/publish');
require('rxjs/add/operator/share');
require('rxjs/add/operator/publishLast');

// var EventEmitter  = require('events');
// const eventHub = new EventEmitter();
// eventHub.on('data',(info)=>console.log(info));
// eventHub.emit('data','some data');
// eventHub.emit('data','some other data');

// const tick$ = Observable.interval(1000).take(3);

// tick$.subscribe(value=>console.log('observer 1:'+value));
// setTimeout(() => {
//     tick$.subscribe(value=>console.log('observer 2:'+value));
// }, 2000);

// const subject = new Subject();
// subject.map(x=>x*2).subscribe(
//     value=>console.log('on data: '+value),
//     err=>console.log('on error:'+err.message),
//     ()=>console.log('on complete')
// );
// subject.next(1);

// subject.next(2);
// subject.next(3);
// subject.complete();

// const subject = new Subject();
// const subscription1 = subject.subscribe(
//     value=>console.log('on observer1 data: '+value),
//     err=>console.log('on  observer1  error:'+err.message),
//     ()=>console.log('on observer1 complete')
// );
// subject.next(1);
// subject.subscribe(
//     value=>console.log('on observer2 data: '+value),
//     err=>console.log('on observer2 error:'+err.message),
//     ()=>console.log('on observer2 complete')
// );

// subject.next(2);

// subscription1.unsubscribe();

// subject.complete();

/**
 * 用subject 实现多播
 */

//  const tick$ = Observable.interval(1000).take(3);
//  const subject = new Subject();
//  tick$.subscribe(subject);
// subject.subscribe(value=>console.log('observer1:'+value));

// setTimeout(()=>{
//     subject.subscribe(value=>console.log('observer 3:'+value))
// },1500);

/**
 * makeHot操作符
 */

//  Observable.prototype.makeHot = function(){
//      const cold$ = this;
//      const subject = new Subject();
//      cold$.subscribe(subject);
//      return Observable.create((observer)=>subject.subscribe(observer)) ;
//  }

//  const hotTick$ = Observable.interval(1000).take(3).makeHot();
//  hotTick$.subscribe(value=>console.log('observer1:'+value));

// setTimeout(()=>{
//     hotTick$.subscribe(value=>console.log('observer 3:'+value))
// },1500);

/**
 * Subject 不能重复
 */

// const subject = new Subject();
// subject.subscribe(
//   value => console.log('on observer 1 data: ' + value),
//   err => console.log('on observer 1 error:' + err.message),
//   () => console.log('on observer 1 complete')
// );

// subject.next(1);
// subject.next(2);

// subject.complete();
// subject.subscribe(
//     value => console.log('on observer 2 data: ' + value),
//     err => console.log('on observer 2 error:' + err.message),
//     () => console.log('on observer 2 complete')
//   );
// subject.next(3);

//  const tick$ = Observable.interval(1000).take(3);
//  const subject = new Subject();
//  tick$.subscribe(subject);

// subject.subscribe(value=>console.log('observer1:'+value));

// setTimeout(()=>{
//    subject.unsubscribe();
// },1500);

/**
 * subject  可以有多个上游
 */

// const tick1$ = Observable.interval(1000).mapTo('a').take(2);
// const tick2$ = Observable.interval(1000).mapTo('b').take(2);

// const subject = new Subject();
// tick1$.subscribe(subject);
// tick2$.subscribe(subject);

// // subject.subscribe(value=>console.log('observer 1 :'+value));
// // subject.subscribe(value=>console.log('observer 2 :'+value));

// const merged$ = Observable.merge(tick1$,tick2$);

// merged$.subscribe(value=>console.log('observer 1 :'+value));
// merged$.subscribe(value=>console.log('observer 2 :'+value));

// const tick$ = Observable.interval(1000).take(10);

// const subject = new Subject();

// tick$.subscribe(subject);
// subject.map(throwOwnUnluckNumber).subscribe(
//     value => console.log('observer 1 :'+value)
// )
// subject.subscribe(
//     value=>console.log('observer 2:'+ value),
//     err =>console.log('observer 2 on error:'+ err.message)
// )

/**
 * 可连接的 Observable
 */

//  const coldSource$= Observable.interval(1000).take(3);
//  const tick$= coldSource$.multicast(new Subject());
//  tick$.subscribe( value => console.log('observer 1 :'+value));

// setTimeout(()=>{
//     tick$.subscribe( value => console.log('observer 2 :'+value))
// },1500);

// tick$.connect();

// const coldSource$ = Observable.interval(1000).take(3);
// const tick$ = coldSource$.multicast(new Subject()).refCount();

// setTimeout(()=>{
//    tick$.subscribe( value => console.log('observer 1 :'+value))
// },500);

// setTimeout(()=>{
//     tick$.subscribe( value => console.log('observer 2 :'+value))
//  },2000);

// tick$.subscribe(value => console.log('observer 1 :' + value));
// setTimeout(() => {
//   tick$.subscribe(value => console.log('observer 2 :' + value));
// }, 5000);




// const subjectFactory = ()=>{
//     console.log('enter subjectFacttory');
//     return new Subject();
// }
// const coldSource$ = Observable.interval(1000).take(3);
// const tick$ = coldSource$.multicast(subjectFactory).refCount();
// tick$.subscribe(value => console.log('observer 1 :' + value));
// setTimeout(() => {
//   tick$.subscribe(value => console.log('observer 2 :' + value));
// }, 5000);

/**
 * multicast selector
 */

//  const coldSource$ = Observable.interval(1000).take(3);
//  const selector = shared=>{
//      return shared.concat(Observable.of('done'));
//  }
 
// const tick$ = coldSource$.multicast(new Subject(),selector);
// tick$.subscribe(value => console.log('observer 1 :' + value));
// setTimeout(() => {
//   tick$.subscribe(value => console.log('observer 2 :' + value));
// }, 5000);




//  const coldSource$ = Observable.interval(1000).take(2)
//  .do(x=>console.log('source',x));
// //  const tick$ = coldSource$;
// const delayedTicks$ = tick$.delay(500);
// const mergedTick$ = delayedTicks$.merge(tick$);
// mergedTick$.subscribe(value=>console.log('observer:'+value)) 

// const result$ = coldSource$.multicast(new Subject(),shared=>{
//     const tick$ = shared;
//     const delayedTicks$ = tick$.delay(500);
//     const mergedTick$ = delayedTicks$.merge(tick$);
//     return mergedTick$;
// });
// result$.subscribe(value=>console.log('observer : ' + value));

// Observable.prototype.defaultObservableIfEmpty =function(default$){
//     const selector = shared => {
//         return shared.merge(
//             shared.isEmpty().mergeMap(
//                 empty => empty? default$:Observable.empty() 
//             )
//         )
//     }
//     return this.multicast(new Subject(),selector);
// }



/**
 * publish
 */

//  const tick$ = Observable.interval(1000).take(3);
//  const sharedTick$ = tick$.publish().refCount();

//  sharedTick$.subscribe(value => console.log('observer 1 :' + value));
// setTimeout(() => {
//   sharedTick$.subscribe(value => console.log('observer 2 :' + value));
// }, 5000);

/**
 * share
 */

 
// const tick$ = Observable.interval(1000).take(3);
// const sharedTick$ = tick$.share();

// sharedTick$.subscribe(value => console.log('observer 1 :' + value));
// setTimeout(() => {
//  sharedTick$.subscribe(value => console.log('observer 2 :' + value));
// }, 5000);

/**
 * publishlast
 */

// const tick$ = Observable.interval(1000).take(3);
// const sharedTick$ = tick$.publishLast().refCount();

// sharedTick$.subscribe(value => console.log('observer 1 :' + value));
// setTimeout(() => {
//  sharedTick$.subscribe(value => console.log('observer 2 :' + value));
// }, 5000);


/**
 * publishReplay
 */

// require('rxjs/add/operator/publishReplay');

// const tick$ = Observable.interval(1000).take(3).do(x=>console.log('source:',x));
// const sharedTick$ = tick$.publishReplay(2).refCount();

// sharedTick$.subscribe(value => console.log('observer 1 :' + value));
// setTimeout(() => {
//  sharedTick$.subscribe(value => console.log('observer 2 :' + value));
// }, 5000);

/**
 * publishBehavior
 */

 require('rxjs/add/operator/publishBehavior');

const tick$ = Observable.interval(1000).take(3);
const sharedTick$ = tick$.publishBehavior(-1).refCount();

sharedTick$.subscribe(value => console.log('observer 1 :' + value));

setTimeout(() => {
 sharedTick$.subscribe(value => console.log('observer 2 :' + value));
}, 2500);


setTimeout(() => {
 sharedTick$.subscribe(value => console.log('observer 3 :' + value));
}, 5000);


