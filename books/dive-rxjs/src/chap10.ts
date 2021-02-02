// RxJS v6+
import { interval, ReplaySubject, AsyncSubject, BehaviorSubject } from 'rxjs';
import { take, multicast, tap, mapTo } from 'rxjs/operators';

// //emit every 2 seconds, take 5
// const source = interval(2000).pipe(take(5));

// //example with ReplaySubject
// const example = source.pipe(
//   //since we are multicasting below, side effects will be executed once
//   tap(_ => console.log('Side Effect #2')),
//   mapTo('Result Two!')
// );
// //can use any type of subject
// const multi = example.pipe(multicast(() => new ReplaySubject(5)));
// //subscribe subject to source
// (multi as any ).connect();

// setTimeout(() => {
//   /*
//    subscriber will receieve all previous values on subscription because
//    of ReplaySubject
//    */
//   const subscriber = multi.subscribe(val => console.group(val));
// }, 5000);

// const sub = new AsyncSubject();

// sub.subscribe(console.log);

// sub.next(123); //nothing logged

// sub.subscribe(console.log);

// sub.next(456); //nothing logged
// sub.complete();

// const sub = new ReplaySubject(3);

// sub.next(1);
// sub.next(2);
// sub.subscribe(console.log); // OUTPUT => 1,2
// sub.next(3); // OUTPUT => 3
// sub.next(4); // OUTPUT => 4
// sub.subscribe(console.log); // OUTPUT => 2,3,4 (log of last 3 values from new subscriber)
// sub.next(5); // OUTPUT => 5,5 (log from both subscribers)

const subject = new BehaviorSubject(123);

// two new subscribers will get initial value => output: 123, 123
subject.subscribe((val) => {
  console.log('A', val);
});
subject.subscribe((val) => {
  console.log('B', val);
});

// two subscribers will get new value => output: 456, 456
subject.next(456);

// new subscriber will get latest value (456) => output: 456
subject.subscribe((val) => {
  console.log('C', val);
});

// all three subscribers will get new value => output: 789, 789, 789
subject.next(789);

// output: 123, 123, 456, 456, 456, 789, 789, 789
