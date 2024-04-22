/**
 * title: book.interface.ts
 * author: Cody Skelton
 * date: 04.21.2024
 * Code sourced from WEB 425 exercise requirements
 */

export interface IBook {
  isbn: string;
  title: string;
  authors: Array<string>
  description: string;
  numOfPages: number;
}
