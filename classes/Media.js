// create your Media class:

const { ALL_MEDIA } = require("./Media");

class Media {
    static ALL_MEDIA = [];
    static totalMediaCount = 0;
    constructor(title, year, genre) {
        this.title = title;
        this.year = year;
        this.genre = genre;
        ++Media.totalMediaCount; 
        Media.ALL_MEDIA.push(this);
    }

    summary() {
        return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}`;
    }
}

// uncomment below to export it:
module.exports = Media;
