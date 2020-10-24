import { map } from 'rxjs/operators';

import { of, concat, timer,merge } from 'rxjs';

// const source1 = of(1,2,3);
// const source2 = of(5,6,7);
// concat(source2,source1).subscribe(console.log);

const source1 = timer(0, 1000).pipe(
    map(x=> x+ 'A')
);

const source2 = timer(500, 1000).pipe(map(x=> x+'B'))
merge(source1, source2).subscribe(console.log)
