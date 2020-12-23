import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/core/entities';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.less']
})
export class BookCollectionComponent implements OnInit {
  @Input() books: Array<Book>;
  @Output() remove = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
