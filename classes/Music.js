// import the Media class:
const Media = require('/Users/jamiemcfaull/Virtual-Library/classes/Media.js')

// create your Music class:
class Music extends Media {
    constructor (title, genre, year, artist, length) {
        super (title, genre, year)
        this.artist = artist
        this.length = length 
    }


    summary () {
        return ("Title: " + this.title + ", Artist: " + this.artist + ", Year: " + this.year + ", Genre: " + this.genre + ", Length: " + this.length + " seconds") 
    }

    static shortestAlbum(music) {
        if (!music || !music.length) {
          return null;
        }
      
        const shortestAlbumIndex = music.reduce((currentIndex, album, index) => {
          return album.length < music[currentIndex].length ? index : currentIndex; 
        }, 0);
      
        return music[shortestAlbumIndex];
      }
}


// don't change below
module.exports = Music;
