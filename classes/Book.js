// import the Media class:
let Media = require("./Media");

// create your Book class:
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
// don't change below
module.exports = Book;
