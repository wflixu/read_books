import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.less']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public birthday = new Date();

}
