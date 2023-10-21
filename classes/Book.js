// import the Media class:

class Book extends Media {
  constructor(title, year, genre, author, numPages, rating) {
    super(title, year, genre);
    this.author = author;
    this.numPages = numPages;
    this.rating = rating;
  }
  static highestRating(books) {
    let temporary = 0;
    for (const book in books) {
      if (book.rating >= temporary) {
        temporary = book.rating;
      }
    }
    return temporary;
  }
}
// create your Book class:

// don't change below
module.exports = Book;
