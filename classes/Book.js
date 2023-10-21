// import the Media class:

class Book extends Media {
  constructor(title, year, genre, author, numPages, rating) {
    super(title, year, genre);
    this.author = author;
    this.numPages = numPages;
    this.rating = rating;
  }
  highestRating(books) {
    return;
  }
}
// create your Book class:

// don't change below
module.exports = Book;
