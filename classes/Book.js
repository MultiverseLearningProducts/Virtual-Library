// import the Media class:
const Media = require('/Users/jamiemcfaull/Virtual-Library/classes/Media.js')
// create your Book class:

class Book extends Media {
    constructor(year, genre, title, author, numPages, rating){
        super (year, genre, title )
        this.author = author
        this.numPages = numPages
        this.rating = rating
    }

    summary (title, author, year, numPages, genre, rating){
        return ("Title: " + this.title + ", Author: " + this.author + ", Year: " + this.year + ", Page Count: " + this.numPages + ", Genre: " + this.genre + ", Rating: " + this.rating)
        }

    static highestRating(books) {
        if (!books || !books.length) {
            return null;
        }
    
        const highestRatingIndex = books.reduce((currentIndex, book, index) => {
            return book.rating > books[currentIndex].rating ? index : currentIndex;
        }, 0);
    
        return books[highestRatingIndex];
        }
}
   
   
// don't change below
module.exports = Book;
