import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/core/entities';

import { selectBookCollection, selectBooks } from 'src/app/pages/playground/books/books.selectors';
import { addBook, removeBook, retrievedBookList } from './books.actions';
import { GoogleBooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.less']
})
export class BooksComponent implements OnInit {

  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));

  onAdd(bookId) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(
    private booksService: GoogleBooksService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
  }

}
