// import the Media class:
const Media = require('./classes/Media'); 
// create your Book class:

class Book extends Media{
    constructor(title, author, year, genre, numPages, rating){
        super(title, year, genre)
        this.author = author
        this.numPages = numPages
        this.rating = rating
    }

    summary(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
    }

    static highestRating(bookArray) {
        if (bookArray.length === 0) return null;
    
        let highestRatedBook = bookArray[0];
        for (let i = 1; i < bookArray.length; i++) {
            if (bookArray[i].rating > highestRatedBook.rating) {
                highestRatedBook = bookArray[i];
            }
        }
        return highestRatedBook;
    }
}

// don't change below
module.exports = Book;
