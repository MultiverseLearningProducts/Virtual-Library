class Media {
  // Static property to keep track of the instance count
  static totalMediaCount = 0;

  constructor(title, year, genre) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    // Increment the instance count each time a new instance is created
    Media.totalMediaCount++;
  }
}

// console.log({ "Media.totalMediaCount: ": Media.totalMediaCount });
// const book = new Media("Cool Piece of Media", 1951, "Fiction");
// console.log({ book, "Media.totalMediaCount: ": Media.totalMediaCount });

// const music = new Media("Abbey Road", 1969, "Rock");
// console.log({ music, "Media.totalMediaCount: ": Media.totalMediaCount });
// music.summary(); // "Title: Abbey Road, Year: 1969, Genre: Rock"

// uncomment below to export it:
module.exports = Media;
