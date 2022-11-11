import Book from "./model/book.js";
import PgLibraryService from "./service/impl/pg-library.service.js";

let library = new PgLibraryService();
let book: Book = {
  code: "B001",
  title: "TypeScript itu keren",
  publisher: "Enigma Camp",
  year: 2022,
  author: "Adi"
}

// Add
library.add(book);

// GetAll
const books: Book[] = library.getAll();
console.log(books);
