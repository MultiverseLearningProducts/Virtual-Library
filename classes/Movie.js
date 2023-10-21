// import the Media class:
let Media = require("./Media");
// create your Movie class:
class Movie extends Media {
  constructor(title, year, genre, director, duration, rating) {
    super(title, year, genre);
    this.director = director;
    this.duration = duration;
    this.rating = rating;
  }

  static longestMovie(collection) {
    let temporary = undefined;
    for (const movie of collection) {
      if (temporary == undefined || movie.duration >= temporary.duration) {
        temporary = movie;
      }
    }
    return temporary;
  }

  summary() {
    return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }
}

// don't change below
module.exports = Movie;
