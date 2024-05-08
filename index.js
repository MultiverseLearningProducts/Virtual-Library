const Media = require('./classes/Media');
const Book = require('./classes/Book');
const Movie = require('./classes/Movie');



//media examples
const book = new Media('The Catcher in the Rye', 1951, 'Fiction');
Media.totalMediaCount; // 1
const music = new Media('Abbey Road', 1969, 'Rock');
Media.totalMediaCount; // 2
music.summary(); // "Title: Abbey Road, Year: 1969, Genre: Rock"


//book examples
const book1 = new Book('To Kill a Mockingbird', 1960, 'Fiction', 'Harper Lee', 281, 4.4);
Media.totalMediaCount; // 1
const book2 = new Book('The Bluest Eye', 1970, 'Fiction', 'Toni Morrison', 206, 4.6);
Media.totalMediaCount; // 2
book1.summary(); // "Title: To Kill a Mockingbird, Author: Harper Lee, Year: 1960, Page Count: 281, Genre: Fiction, Rating: 4.4"
Book.highestRating([book1, book2]); // Returns book2

//movie examples
const movie1 = new Movie('Inception', 2010, 'Sci-Fi', 'Christopher Nolan', 148, 4.5);
const movie2 = new Movie('The Godfather', 1972, 'Crime', 'Francis Ford Coppola', 175, 4.7);
Media.totalMediaCount; // 2
movie1.summary(); // "Title: Inception, Director: Christopher Nolan, Year: 2010, Genre: Sci-Fi, Rating: 4.5"
Movie.longestMovie([movie1, movie2]); // Returns movie2