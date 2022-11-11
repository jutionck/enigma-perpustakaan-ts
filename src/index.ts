import Book from './model/book';
import PgLibraryService from './service/impl/pg-library.service';

const app = async () => {
  let library = new PgLibraryService();
  let book: Book = {
    code: "B001",
    title: "TypeScript itu keren",
    publisher: "Enigma Camp",
    year: 2021,
    author: "Adi"
  }

  const add01 = await library.add(book).catch(err => err);
  console.log(add01);

  book = {
    code: "B002",
    title: "TypeScript itu keren",
    publisher: "Enigma Camp",
    year: 2022,
    author: "Adi Luhung"
  }

  // Add
  const add02 = await library.add(book).catch(err => err);
  console.log(add02);

  // GetAll
  const books01: Book[] = await library.getAll().catch(err => err);
  console.log(books01);

  // SearchByTitile
  const findBook01: Book[] = await library.searchByTitle('TypeScript itu keren').catch(err => err);
  console.log(findBook01);

  // Remove B002
  await library.remove('B002').catch(err => err);

  // Get All again
  const books02: Book[] = await library.getAll().catch(err => err);
  console.log(books02);
}

app();