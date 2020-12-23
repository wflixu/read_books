import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/core/entities';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.less']
})
export class BookListComponent implements OnInit {
  @Input() books: Array<Book>;
  @Output() add = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
