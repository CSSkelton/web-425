/**
 * title: book-list.component.ts
 * purpose: functional code fo book-list component
 * author: Cody Skelton
 * date: 04.21.2024
 * Code sourced from WEB 425 exercise requirements
 */

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../book.interface';
import { BooksService } from './../books.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook;

  constructor(private BooksService: BooksService) {
    this.books = this.BooksService.getBooks();
  }

  ngOnInit(): void {
  }

  showBookDetails(isbn: string) {
    this.book = this.BooksService.getBook(isbn);
    console.log(this.book);
  }
}
