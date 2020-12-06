import { concatAll, map } from 'rxjs/operators';

import { of, concat, timer,merge, interval } from 'rxjs';

// const source1 = of(1,2,3);
// const source2 = of(5,6,7);
// concat(source2,source1).subscribe(console.log);

// const source1 = timer(0, 1000).pipe(
//     map(x=> x+ 'A')
// );

// const source2 = timer(500, 1000).pipe(map(x=> x+'B'))
// merge(source1, source2).subscribe(console.log)

// RxJS v6+


//emit a value every 2 seconds
const source = interval(2000);
const example = source.pipe(
  //for demonstration, add 10 to and return as observable
  map(val => of(val + 10)),
  //merge values from inner observable
  concatAll()
);
//output: 'Example with Basic Observable 10', 'Example with Basic Observable 11'...
const subscribe = example.subscribe(val =>
  console.log('Example with Basic Observable:', val)
);
