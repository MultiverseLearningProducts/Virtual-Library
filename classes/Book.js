// import the Media class:
const Media = require("./Media");
// create your Book class:
class Book extends Media {
  constructor(title, author, numPages, genre, rating) {
    super(title, genre);
    this.author = author;
    this.numPages = numPages;

    if (rating < 1 || rating > 5) {
      throw new Error("Rating must be betwenn 1 and 5.");
    }
    this.rating = rating;
  }
  summary() {
    return `"Title: this.title, Author: this.author, Year: this.year, Page Count: this.numPages, Genre: this.genre, Rating: this.rating`;
  }
  static highestRating(books) {
    return books.reduce(
      (highest, book) =>
        book.rating > (highest?.rating || 0) ? book : highest,
      null
    );
  }
}

// don't change below
module.exports = Book;
