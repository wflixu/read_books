import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroundComponent } from './playground.component';
import {PlaygroundRoutingModule} from './playground-routing.module';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';




@NgModule({
  declarations: [
    PlaygroundComponent,
    BooksComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    CommonModule,
    PlaygroundRoutingModule
  ]
})
export class PlaygroundModule { }
