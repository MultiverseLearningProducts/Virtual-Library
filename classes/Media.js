// create your Media class:
class Media {
  static totalMediaCount = 0;
  constructor(title, year, genre) {
    this.title = title;
    this.year = year;
    this.genre = genre;

    Media.totalMediaCount++;
  }
  summary() {
    return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}`;
  }
  static getTotalMediaCount() {
    return Media.totalMediaCount;
  }
}

// uncomment below to export it:
const book = new Media("The Catcher in the Rye", 1951, "Fiction");
console.log(book.summary());
console.log(Media.getTotalMediaCount());
module.exports = Media;
