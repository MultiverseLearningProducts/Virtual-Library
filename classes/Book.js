// import the Media class:
const Media = require("./Media")

class Book extends Media {
    constructor(title, year, genre, author, numPages, rating) {
        super(title, year, genre);
        this.author = author;
        this.numPages = numPages;
        this.rating = rating;
    }

    summary() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
    }

    static highestRating(arr) {
        return arr.sort((a , b) => b.rating - a.rating)[0]
    }

    static calculateAverageRating(arr) {

        const arr_ratings = arr.map((book) => book.rating);
        return (arr_ratings.reduce((acc, rating) => acc + rating), 0) / arr_ratings.length;
    
    }
}

// don't change below
module.exports = Book;
