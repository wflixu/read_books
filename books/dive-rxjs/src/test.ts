import { fromEvent, interval } from 'rxjs';
import { mapTo, withLatestFrom } from 'rxjs/operators';

const clicks = interval(2000).pipe(mapTo('click'));
const timer = interval(1000);
const result = clicks.pipe(withLatestFrom(timer));
result.subscribe(x => console.log(x));