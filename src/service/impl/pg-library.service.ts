import { Observable, Observer } from 'rxjs';
import Book from '../../model/book';
import LibraryService from '../library.service';

class PgLibraryService implements LibraryService {
  books: Book[] = [];
  constructor() {
    this.books = [];
  }

  add(book): Observable<string> {
    console.log('Proses penambahan data');
    return new Observable<string>((observer: Observer<string>) => {
      setTimeout(() => {
        this.books.push(book);
        observer.next('Proses penambahan data berhasil')
      }, 1000);
    });
  }

  getAll(): Observable<Book[]> {
    console.log('Proses pengambilan semua data');
    return new Observable<Book[]>((observer: Observer<Book[]>) => {
      setTimeout(() => {
        if (this.books.length > 0) return observer.next(this.books);
        return observer.error([]);
      }, 1000);
    });
  }

  searchByTitle(title: string): Observable<Book[]> {
    console.log('Proses pencarian data dengan judul: ' + title);
    return new Observable<Book[]>((observer: Observer<Book[]>) => {
      setTimeout(() => {
        const books: Book[] = this.books.filter((book) => {
          if (book.title.toLocaleLowerCase() === title.toLocaleLowerCase()) return book;
        });
        if (books.length > 0) return observer.next(books);
        return observer.error([]);
      }, 1000);
    })
  }

  remove(code: string): Observable<string> {
    console.log('Proses penghapusan data dengan code: ' + code);
    return new Observable<string>((observer: Observer<string>) => {
      setTimeout(() => {
        if (this.books.length > 0) {
          let i = 0;
          for (let book of this.books) {
            if (book.code.toLowerCase() === code.toLowerCase()) {
              this.books.splice(i, 1);
              return observer.next(`Buku dengan code: ${code} berhasil di hapus`);
            }
            i++;
          }
        }
      }, 1000);
    })
  }
}

export default PgLibraryService;