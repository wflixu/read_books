import { Component, OnInit,Input, Output, EventEmitter, ElementRef, ViewEncapsulation } from '@angular/core';

import { fromEvent} from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.less'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TodoHeaderComponent implements OnInit {
  inputValue:string = '';
  @Input() hintText:string ='what needs to be done';
  @Input() delay:number = 300;


  @Output() textChanges = new EventEmitter<string>();
  @Output() onEnterUp = new EventEmitter<boolean>();

  constructor(private elementRef:ElementRef) {
    const event$ = fromEvent(elementRef.nativeElement,'keyup')
    .pipe(
      map(()=>this.inputValue),
      debounceTime(this.delay),
      distinctUntilChanged()
    );
    event$.subscribe(input=> this.textChanges.emit(input));
  }

  ngOnInit() {
  }

  enterUp(){
    this.onEnterUp.emit(true);
    this.inputValue = '';
  }

}
