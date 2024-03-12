// Import classes here to console.log and debug
const Media = require('./classes/Media')
const Book = require('./classes/Book')

const newmedia = new Media('title',1998, 'genre');
const new2 = new Media('title2', 1988, 'genre2');
//const new3 = new Media('title3', 1988, 'genre3')
//console.log(Media.count);
console.log(Media.totalMediaCount());