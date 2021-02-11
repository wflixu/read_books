import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
 
const switched = of(1, 2, 3).pipe(switchMap((x: number) => of(x, x ** 2, x ** 3)));
switched.subscribe(x => console.log(x));