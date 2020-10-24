import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, from, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-rx',
  templateUrl: './rx.component.html',
  styleUrls: ['./rx.component.less']
})
export class RxComponent implements OnInit {

  public input$: Observable<any>;

  @ViewChild('btn', { static: true }) btnEleRef: ElementRef;
  @ViewChild('input', { static: true }) inputEleRef: ElementRef;

  constructor() { }

  ngOnInit() {
    const numbers = [1, 2, 3, 4, 5];
    const number$ = from(numbers);
    number$.subscribe(console.log);
    

  }
  ngAfterViewInit(): void {
    this.input$ = fromEvent(this.inputEleRef.nativeElement, 'keyup');
    this.input$.pipe(
      filter((evt: any) => evt.keyCode === 32),
    ).subscribe(evt => {
      console.log(evt);
      console.log(evt.target.value);
    })

  }



}
