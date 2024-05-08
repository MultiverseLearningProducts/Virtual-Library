// import the Media class:
const Media = require('/Users/jamiemcfaull/Virtual-Library/classes/Media.js')

// create your Movie class:

class Movie extends Media  {
    constructor (title, year, genre, director, duration, rating) {
        super (title, year, genre)
        this.director = director 
        this.duration = duration 
        this.rating = rating 
    }

    summary(title, director, year, genre, rating) {
        return ("Title: " + this.title + ", Director: " + this.director + ", Year: " + this.year + ", Genre: " + this.genre + ", Rating: " + this.rating)
    }

   
    
    static longestMovie(movies) {
        if (!movies || !movies.length) {
          return null;
        }
      
        const longestMovieIndex = movies.reduce((currentIndex, movie, index) => {
          return movie.duration > movies[currentIndex].duration ? index : currentIndex;
        }, 0);
      
        return movies[longestMovieIndex];
      }
}

// don't change below
module.exports = Movie;