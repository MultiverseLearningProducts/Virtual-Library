// import the Media class:

// create your Movie class:
class Movie extends Media {
  constructor(title, year, genre, director, duration, rating) {
    super(title, year, genre);
    this.director = director;
    this.duration = duration;
    this.rating = rating;
  }

  static longestMovie(collection) {
    let temporary = 0;
    for (const movie in collection) {
      if (movie.duration >= temporary) {
        temporary = movie.duration;
      }
    }
    return temporary;
  }
}

// don't change below
module.exports = Movie;
