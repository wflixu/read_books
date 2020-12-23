import { createReducer, on, Action } from '@ngrx/store';
import { Book } from 'src/app/core/entities';

import { retrievedBookList } from './books.actions';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { books }) => [...books])
);
