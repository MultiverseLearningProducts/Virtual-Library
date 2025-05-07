// import the Media class:
const Media = require('./Media')

// create your Book class:
class Book extends Media {
    constructor(author, numPages, rating){
        this.author = author;
        this.numPages = numPages;
        this.rating = rating;
        super(title);
        super(year);
        super(this.genre);
    }
    summary(){
        return `Title: ${this.title}, Author: ${author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
    }
     static highestRating (){
        highest = Media.rating[0]
        for (i = 0; i < Media.rating.length; i++){
            if (Media.rating[i] > highest ){
                highest = Media.rating[i]
            }
        }
    }
}

// don't change below
module.exports = Book;
