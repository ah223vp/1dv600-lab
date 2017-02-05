(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    // Book object. Construct with new.
    let Book = require("../dao/book.js");


    module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
        /**
         * Creating the list directly in the callback, assuming this will be made
         * nicer later on.
         * There is no problem to move the list later on and call it from
         * somewhere else.
         * Converting the array to JSON directly aswell.
         */
        callback(JSON.stringify(
            [
                new Book("1", "Title", "Author", "Genre", "PublishDate", "Description", "0"),
                new Book("2", "Hitchhikers Guide to The Galaxy", "Douglas Adams", "Fantasy/Sci-fi",
                    "1995-09", "What is the meaning of life universe and everything?", "199"),
                new Book("3", "Title", "Author", "Genre", "PublishDate", "Description", "0"),
                new Book("4", "Title", "Author", "Genre", "PublishDate", "Description", "0"),
                new Book("5", "Title", "Author", "Genre", "PublishDate", "Description", "0")

            ]
        ))
    };

}());
