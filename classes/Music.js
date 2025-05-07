// import the Media class:
const Media = require('./Media')

// create your Music class:

class Music extends Media {
    constructor(title, year, genre, artist, length) {
        super(title, year, genre)
        this.artist = artist
        this.length = length
    }

    summary(){
        return (`Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`)
    }


    static shortestAlbum(albums) {
        let shortestAlbumObj = albums[0]

        for(let i = 0; i < albums.length; i++) {
            let songLength = albums[i].length

            if (songLength < shortestAlbumObj.length) {
                shortestAlbumObj = albums[i]
            }
        }

        return shortestAlbumObj
    }
}

// don't change below
module.exports = Music;
