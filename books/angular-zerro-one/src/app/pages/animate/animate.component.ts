import {
  Component,
  OnInit,
  Inject,
  OnDestroy,
} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.less'],
  animations: [
    trigger('loginState', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        transform: 'scale(1.2)'
      })),
      transition('inactive=>active', animate('100ms ease-in')),
      transition('active=>inactive', animate('100ms ease-out')),
    ]),
    trigger('signal', [
      state('void', style({
        'transform': 'translateY(-100%)'
      })),
      state('go', style({
        'background-color': 'green',
        'height': '100px'

      })),
      state('stop', style({
        'background-color': 'red',
        'height': '50px'
      })),
      transition('*=>*',animate(500))
    ]
    )
  ]
})
export class AnimateComponent implements OnInit {
  public loginBtnState: string;
  public signal: string;
  constructor() {

  }

  ngOnInit() {
  }

  public toggleState(state: boolean): void {
    this.loginBtnState = state ? 'active' : 'inactive';
  }

  public onGo() {
    this.signal = 'go';
  }
  public onStop() {
    this.signal = 'stop';
  }

}
