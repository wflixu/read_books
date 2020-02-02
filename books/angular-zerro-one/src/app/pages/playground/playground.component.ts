import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.less']
})
export class PlaygroundComponent implements OnInit {
 public clock = interval(1000).pipe(
   tap(_=>console.log('111111111111111'))
 )
  constructor() { }

  ngOnInit() {
  }

}
