import { Observable } from 'rxjs';
import Book from '../model/book';

export default interface LibraryService {
  add(book: Book): Observable<string>;
  getAll(): Observable<Book[]>;
  searchByTitle(title: string): Observable<Book[]>;
  remove(code: string): Observable<string>;
}