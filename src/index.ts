import Book from './model/book';
import PgLibraryService from './service/impl/pg-library.service';

const app = () => {
  let library = new PgLibraryService();
  let book: Book = {
    code: "B001",
    title: "TypeScript itu keren",
    publisher: "Enigma Camp",
    year: 2021,
    author: "Adi"
  }

  library.add(book).subscribe(book => console.log(book));

  book = {
    code: "B002",
    title: "TypeScript itu keren",
    publisher: "Enigma Camp",
    year: 2022,
    author: "Adi Luhung"
  }

  // Add
  library.add(book).subscribe(book => console.log(book));

  // GetAll
  library.getAll().subscribe(books => console.log(books));

  // SearchByTitile
  library.searchByTitle('TypeScript itu keren').subscribe(books => console.log(books))

  // Remove B002
  library.remove('B002').subscribe(book => console.log(book));

  // Get All again
  library.getAll().subscribe(books => console.log(books));
}

app();