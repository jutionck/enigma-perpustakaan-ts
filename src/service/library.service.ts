import Book from '../model/book';

export default interface LibraryService {
  add(book: Book): Promise<string>;
  getAll(): Promise<Book[]>;
  searchByTitle(title: string): Promise<Book[]>;
  remove(code: string): Promise<string>;
}