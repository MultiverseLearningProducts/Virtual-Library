// create your Media class:
//constructor houses the attributes

class Media{
    constructor(title, year, genre,){
        this.title = title
        this.year = year
        this.genre = genre
        Media.totalMediaCount++
    }

    //method always add () then {}
    summary(){
        return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}`
    }
}


Media.totalMediaCount = 0;
// uncomment below to export it:
module.exports = Media;
