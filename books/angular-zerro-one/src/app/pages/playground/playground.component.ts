import { Component, OnInit } from '@angular/core';
import { interval,Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import { increment, decrement, reset } from './counter/counter.actions';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.less']
})
export class PlaygroundComponent implements OnInit {
 public clock = interval(1000).pipe(
   tap(_=>console.log('111111111111111'))
 )
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit() {
  }

 public count$: Observable<number>;
 increment() {
  this.store.dispatch(increment());
}

decrement() {
  this.store.dispatch(decrement());
}

reset() {
  this.store.dispatch(reset());
}



}
