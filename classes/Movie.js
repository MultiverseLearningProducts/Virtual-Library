// import the Media class:
const Media = require('./Media');
// create your Movie class:
class Movie extends Media {
  constructor(title, year, genre, director, duration, rating) {
    super(title, year, genre);
    this.director = director;
    this.duration = duration;
    this.rating = rating;
  }

  static longestMovie(movies) {
    let longest = movies[0];

    for (let i = 1; i < movies.length; i++) {
      if (movies[i].rating > longest.rating) {
        longest = movies[i];
      }
    }

    return longest;
  }

  summary() {
    return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`; 
  }
}
// don't change below
module.exports = Movie;