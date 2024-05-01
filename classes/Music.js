// import the Media class:
const Media = require('./Media');
// create your Music class:
class Music extends Media {
  constructor(title, year, genre, artist, length) {
    super(title, year, genre);
    this.artist = artist;
    this.length = length;
  }

  static shortestAlbum(musics) {
    let shortest = musics[0];

    for (let i = 1; i < musics.length; i++) {
      if (musics[i].length < shortest.length) {
        shortest = musics[i];
      }
    }

    return shortest;
  }

  summary() {
    return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
  }
}
// don't change below
module.exports = Music;
