import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState, Book } from "src/app/core/entities";


export const selectBooks = createSelector(
  (state: AppState) => state.books,
  (books: Array<Book>) => books
);

export const selectCollectionState = createFeatureSelector<
  AppState,
  ReadonlyArray<string>
>("collection");

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books: Array<Book>, collection: Array<string>) => {
    return collection.map((id) => books.find((book) => book.id === id));
  }
);
