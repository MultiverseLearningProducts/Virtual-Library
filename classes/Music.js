// import the Media class:
let Media = require("./Media");
// create your Music class:
class Music extends Media {
  constructor(title, year, genre, artist, length) {
    super(title, year, genre);
    this.artist = artist;
    this.length = length;
  }

  static shortestAlbum(collection) {
    let temporary = undefined;
    for (const music in collection) {
      if (temporary == undefined || music.length <= temporary) {
        temporary = music.length;
      }
    }
    return temporary;
  }
}
// don't change below
module.exports = Music;
