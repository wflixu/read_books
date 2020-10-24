import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const onSubscribe = (observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
};

const source$ = new Observable(onSubscribe);
const thsObserver = {
  next: (item) => console.log(item),
};
source$.pipe(map((x:number) => x * x)).subscribe(thsObserver);
