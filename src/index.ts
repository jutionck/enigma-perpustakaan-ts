import Book from './model/book';
import PgLibraryService from './service/impl/pg-library.service';

let library = new PgLibraryService();
let book: Book = {
  code: "B001",
  title: "TypeScript itu keren",
  publisher: "Enigma Camp",
  year: 2021,
  author: "Adi"
}

library.add(book);

book = {
  code: "B002",
  title: "TypeScript itu keren",
  publisher: "Enigma Camp",
  year: 2022,
  author: "Adi Luhung"
}

// Add
library.add(book);

// GetAll
console.log(library.getAll());

// SearchByTitile
const findBook01: Book[] = library.searchByTitle('TypeScript itu keren');
console.log(findBook01);

// Remove B002
library.remove('B002');

// Get All again
console.log(library.getAll());
