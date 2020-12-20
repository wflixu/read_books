import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hecks-edit',
  templateUrl: './hecks-edit.component.html',
  styleUrls: ['./hecks-edit.component.less']
})
export class HecksEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
    }

}
