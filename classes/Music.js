// import the Media class:
const Media = require('./Media.js');
// create your Music class:
class Music extends Media{
    constructor(title, year, genre, artist, length){
        super(title, year, genre);
        this.artist = artist;
        this.length = length;
    }
    summary(){
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
    }
    static shortestAlbum(music){
        let songLength = 999999999;
        let shortSong;
        for (let song of music){
            if (song.length < songLength){
                songLength = song.length;
                shortSong = song;
            }
        }
        return shortSong;
    }
}
// don't change below
module.exports = Music;
