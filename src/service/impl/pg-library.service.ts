import Book from '../../model/book';
import LibraryService from '../library.service';

class PgLibraryService implements LibraryService {
  books: Book[] = [];
  constructor() {
    this.books = [];
  }

  add(book): Promise<string> {
    console.log('Proses penambahan data');
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        this.books.push(book);
        resolve('Proses penambahan data berhasil')
      }, 1000);
    });
  }

  getAll(): Promise<Book[]> {
    console.log('Proses pengambilan semua data');
    return new Promise<Book[]>((resolve, reject) => {
      setTimeout(() => {
        if (this.books.length > 0) return resolve(this.books);
        return reject([]);
      }, 1000);
    });
  }

  searchByTitle(title: string): Promise<Book[]> {
    console.log('Proses pencarian data dengan judul: ' + title);
    return new Promise<Book[]>((resolve, reject) => {
      setTimeout(() => {
        const books: Book[] = this.books.filter((book) => {
          if (book.title.toLocaleLowerCase() === title.toLocaleLowerCase()) return book;
        });
        if (books.length > 0) return resolve(books);
        return reject([]);
      }, 1000);
    })
  }

  remove(code: string): Promise<string> {
    console.log('Proses penghapusan data dengan code: ' + code);
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (this.books.length > 0) {
          let i = 0;
          for (let book of this.books) {
            if (book.code.toLowerCase() === code.toLowerCase()) {
              this.books.splice(i, 1);
              return resolve(`Buku dengan code: ${code} berhasil di hapus`);
            }
            i++;
          }
        }
      }, 1000);
    })
  }
}

export default PgLibraryService;