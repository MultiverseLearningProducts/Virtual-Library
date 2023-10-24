// import the Media class:
const Media = require('./classes/Media.js')
// create your Book class:
class Book extends Media {
    constructor(author, numPages, rating, title, year, genre) {
        this.author = author
        this.numPages = numPages
        this.rating = rating
        super(title, year, genre)
    }
    summary() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`
    }
    static highestRating(books) {
        for (let rating of books) {
            
        }
    }
}
// don't change below
module.exports = Book;
