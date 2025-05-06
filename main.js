const Media = require("./classes/Media");
const Book = require("./classes/Book");
const Movie = require("./classes/Movie");
const Music = require("./classes/Music");
const Podcast = require("./classes/Podcast");

const movie1 = new Movie(
    'Inception',
    2010,
    'Sci-Fi',
    'Christopher Nolan',
    148,
    10
  )
  const movie2 = new Movie(
    'Inception',
    2010,
    'Sci-Fi',
    'Christopher Nolan',
    148,
    10
  )
  const movie3 = new Movie(
    'Inception',
    2010,
    'Sci-Fi',
    'Christopher Nolan',
    148,
    50
  )

const music1 = new Music('Lemonade', 2016, 'R&B', 'Beyonce', 3949)
console.log(Media.ALL_MEDIA)


