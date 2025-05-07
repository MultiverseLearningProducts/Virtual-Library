// import the Media class:
const Media = require('./Media')
// create your Book class:
class Book extends Media{
    constructor(title,year,genre,author,numPages,rating){
        super(title,year,genre)
        this.author=author
        this.numPages=numPages
        this.rating=rating
        
    }
    summary (){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
    }
    static highestRating(arr){
        let rating = 0
        let index =0
        for (let i=0;i<arr.length;i++){
            if (rating<arr[i].rating){
                rating = arr[i].rating
                index = i
            }
        }
        return arr[index]
    }
}
// don't change below
module.exports = Book;
