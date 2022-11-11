import Book from "../../model/book";
import LibraryService from "../library.service";

class PgLibraryService implements LibraryService {
  books: Book[] = [];
  constructor() {
    this.books = [];
  }

  add(book): void {
    this.books.push(book);
  }

  getAll(): Book[] {
    return this.books;
  }

  searchByTitle(title: string): Book[] {
    return this.books.filter(book =>
      book.title.toLowerCase() === title.toLowerCase());
  }

  remove(code: string): void {
    this.books = this.books.filter(book =>
      book.code != code);
  }
}

export default PgLibraryService;