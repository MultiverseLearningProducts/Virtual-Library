// import the Media class: (Duvall F)
const Media = require('./Media.js');

// create your Movie class:

class Movie extends Media{
    constructor(title, year, genre, director, duration, rating){
        super(title, year, genre);
        this.director = director;
        this.duration = duration;
        this.rating = rating;
    }
    summary(){
        return(`Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`).toString();
    }
    static longestMovie([movie1,movie2]){
        let highestNum = Math.max(movie1.duration,movie2.duration);
        if (highestNum == movie1.duration){
            return(movie1);
        }
        else if (highestNum == movie2.duration){
            return(movie2);
        }
    }
}

// don't change below
module.exports = Movie;