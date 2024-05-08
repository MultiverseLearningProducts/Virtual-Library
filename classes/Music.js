// import the Media class:
const Media = require('./classes/Media'); 
// create your Music class:

class Music extends Media{
    constructor(title, year, genre,artist, length){
        super(title, year, genre)
        this.artist = artist
        this.length = length
    }

    summary(){
      return  `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length}`
    }
    static shortestAlbum(musicArray){
        if(musicArray.length ===0) 
            return null;

        let shortestSong = musicArray[0]
        for (let i = 1; i <musicArray.length; i++) {
            shortestSong = musicArray[i]
        }
         return shortestSong
    }
   

}

// don't change below
module.exports = Music;
