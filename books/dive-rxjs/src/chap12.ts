// <button id="minus">-</button><span id="count">1</span><button id="plus">+</button>

// import { fromEvent } from 'rxjs';
// import { mapTo, merge, scan } from 'rxjs/operators';

// const plusBtn = document.createElement('button');
// const minBtn = document.createElement('button');
// const display = document.createElement('div');

// plusBtn.innerHTML = '+';
// minBtn.innerHTML = '-';

// document.body.appendChild(plusBtn);
// document.body.appendChild(minBtn);
// document.body.appendChild(display);

// const plus$ = fromEvent(plusBtn, 'click');
// const minus$ = fromEvent(minBtn, 'click');

// plus$
//   .pipe(
//     mapTo(1),
//     merge(minus$.pipe(mapTo(-1))),
//     scan((count, delta) => count + delta, 0)
//   )
//   .subscribe((currentCount) => {
//     display.innerHTML = currentCount + '';
//   });

// import { TestScheduler } from 'rxjs/testing';

// import { TestScheduler } from 'rxjs/testing';

// const testScheduler = new TestScheduler((actual, expected) => {
//   // asserting the two objects are equal
//   // e.g. using chai.
//   expect(actual).deep.equal(expected);
// });

// // This test will actually run *synchronously*
// it('generate the stream correctly', () => {
//   testScheduler.run(helpers => {
//     const { cold, expectObservable, expectSubscriptions } = helpers;
//     const e1 =  cold('-a--b--c---|');
//     const subs =     '^----------!';
//     const expected = '-a-----c---|';

//     expectObservable(e1.pipe(throttleTime(3, testScheduler))).toBe(expected);
//     expectSubscriptions(e1.subscriptions).toBe(subs);
//   });
// });

export function sum(a: number, b: number): number {
  return a + b;
}
