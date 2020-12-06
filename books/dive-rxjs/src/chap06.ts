import { of } from 'rxjs';
import { scan } from 'rxjs/operators';

// const source = of(1, 2, 3);
// // basic scan example, sum over time starting with zero
// const example = source.pipe(scan((acc, curr) => acc + curr, 0));
// // log accumulated values
// // output: 1,3,6
// const subscribe = example.subscribe(val => console.log(val));


import { reduce } from 'rxjs/operators';

const source = of(1, 2, 3, 4);
const example = source.pipe(reduce((acc, val) => acc + val));
//output: Sum: 10'
const subscribe = example.subscribe(val => console.log('Sum:', val));