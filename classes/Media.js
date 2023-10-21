class Media {
  // Static property to keep track of the instance count of Media class
  static totalMediaCount = 0;

  /**
   * Create a piece of media
   * @param {string} title
   * @param {number} year
   * @param {string} genre
   */
  constructor(title, year, genre) {
    this.title = title;
    this.year = year;
    this.genre = genre;

    // Increment the instance count each time a new instance is created
    Media.totalMediaCount++;
  }

  summary() {
    return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}`;
  }
}

// demonstrating initial value of media count
// console.log("Media.totalMediaCount: ", Media.totalMediaCount);

// adding a piece of media
// const book = new Media("Cool Piece of Media", 2023, "Fiction");
// console.log("book:", book);
// console.log("Media.totalMediaCount: ", Media.totalMediaCount);

// adding another piece of media
// const music = new Media("Abbey Road", 1969, "Rock");
// console.log("music:", music);
// console.log("Media.totalMediaCount: ", Media.totalMediaCount);

// summary demonstration
// console.log("music.summary():", music.summary());

module.exports = Media;
