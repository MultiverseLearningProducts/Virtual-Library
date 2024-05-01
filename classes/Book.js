// import the Media class:
const Media = require('./Media');
// create your Book class:
class Book extends Media {
  constructor(title, year, genre, author, numPages, rating) {
    super(title, year, genre);
    this.author = author;
    this.numPages = numPages;
    this.rating = rating;
  }

  static highestRating(books) {
    let highest = books[0];

    for (let i = 1; i < books.length; i++) {
      if (books[i].rating > highest.rating) {
        highest = books[i];
      }
    }

    return highest;
  }

  summary() {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }
}
// don't change below
module.exports = Book;
