// import the Media class:
const Media = require('./Media')

// create your Movie class:

class Movie extends Media {
    constructor(title, year, genre, director, duration, rating) {
        super(title, year, genre)
        this.director = director
        this.duration = duration
        this.rating = rating
    }

    summary(){
        return (`Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`)
    }

    static longestMovie(movies) {
        let longestMovieObject = movies[0]

        for(let i = 0; i < movies.length; i++) {
            let duration = movies[i].duration

            if (duration > longestMovieObject.duration) {
                longestMovieObject = movies[i]
            }
        }

        return longestMovieObject
    }
}

// don't change below
module.exports = Movie;