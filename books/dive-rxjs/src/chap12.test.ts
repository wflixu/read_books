import { sum } from './chap12';
import { TestScheduler } from 'rxjs/testing';
import { throttleTime } from 'rxjs/operators';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

const testScheduler = new TestScheduler((actual, expected) => {
  // asserting the two objects are equal
  // e.g. using chai.
//   expect(actual).toEqual(expected);
});

// This test will actually run *synchronously*
test('generate the stream correctly', () => {
  testScheduler.run((helpers) => {
    const { cold, expectObservable, expectSubscriptions } = helpers;
    const e1 = cold('-a--b--c---|');
    const subs = '^----------!';
    const expected = '-a-----c---|';

    expectObservable(e1.pipe(throttleTime(3, testScheduler))).toBe(expected);
    expectSubscriptions(e1.subscriptions).toBe(subs);
  });
});
