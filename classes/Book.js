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
    let temporary = undefined;

    for (const bookItem of books) {
      if (temporary == undefined || bookItem.rating >= temporary.rating) {
        temporary = bookItem;
      }
    }

    return temporary;
  }

  summary() {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }
}
// don't change below
module.exports = Book;
