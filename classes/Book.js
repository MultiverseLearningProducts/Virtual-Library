// import the Media class:
const Media = require("./Media");
// create your Book class:
class Book extends Media {
  constructor(title, year, genre, author, numpages, rating) {
    super(title, year, genre);
    this.author = author;
    this.numpages = numpages;
    this.rating = rating;
  }
  summary() {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numpages}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }
  static highestRating(Book) {
    let highestRatedBook = Book[0];
    for (let i = 0; i < highestRatedBook.rating; i++) {
      if (Book[i].rating > highestRatedBook.rating) {
        highestRatedBook = Book[i];
      }
    }
    return highestRatedBook;
  }
}
// don't change below
module.exports = Book;

