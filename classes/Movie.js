// import the Media class:
const Media = require("./Media")
// create your Movie class:
class Movie extends Media{
    constructor(title, year, genre, director, duration, rating){
        super(title, year, genre)
        this.director = director;
        this.rating = rating;
        this.duration = duration

    }
    summary(){
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`
    }
    static longestMovie(arr){
            return arr.reduce((max,current)=> (current.duration > max.duration ? current:max)) 
    }
}
// don't change below
module.exports = Movie;