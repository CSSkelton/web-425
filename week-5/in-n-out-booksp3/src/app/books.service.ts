/**
 * title: books.service.ts
 * purpose: functional code for book service
 * author: Cody Skelton
 * date: 04.21.2024
 * Code sourced from WEB 425 exercise requirements
 */

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>

  constructor() {
    this.books =  [
      {
        isbn: '9780786838653',
        title: 'The Lightning Thief',
        description: 'The first book of the Percy Jackson and the Olympians series',
        numOfPages: 416,
        authors: ['Rick Riordan']
      },
      {
        isbn: '9781368051491',
        title: 'The Sea of Monsters',
        description: 'The second book of the Percy Jackson and the Olympians series',
        numOfPages: 320,
        authors: ['Rick Riordan']
      },
      {
        isbn: '9781423101482',
        title: "The Titan's Curse",
        description: 'The third book of the Percy Jackson and the Olympians series',
        numOfPages: 352,
        authors: ['Rick Riordan']
      },
      {
        isbn: '9781423101499',
        title: 'The Battle of the Labyrinth',
        description: 'The fourth book of the Percy Jackson and the Olympians series',
        numOfPages: 400,
        authors: ['Rick Riordan']
      },
      {
        isbn: '9781423101505',
        title: 'The Last Olympian',
        description: 'The fifth book of the Percy Jackson and the Olympians series',
        numOfPages: 432,
        authors: ['Rick Riordan']
      },
      {
        isbn: '9781368098175',
        title: 'The Chalice of the Gods',
        description: 'The sixth book of the Percy Jackson and the Olympians series',
        numOfPages: 288,
        authors: ['Christopher Paolini']

      },
      {
        isbn: '9781423113386',
        title: 'The Red Pyramid',
        description: 'The first book of the Kane Chronicles series',
        numOfPages: 528,
        authors: ['Rick Riordan']
      },
      {
        isbn: '9780120000388',
        title: 'The Throne of Fire',
        description: 'The first book of the Kane Chronicles series',
        numOfPages: 464,
        authors: ['Rick Riordan']
      },
      {
        isbn: '9781423140573',
        title: "The Serpent's Shadow",
        description: 'The first book of the Kane Chronicles series',
        numOfPages: 416,
        authors: ['Rick Riordan']
      }
    ]
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
  }
}
