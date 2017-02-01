(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    let Book = require("../dao/book.js");
    // Create books somewhere else, just for testing
    let book1 = new Book("1", "Title", "Author", "Genre", "PublishDate", "Description", "0");
    let book2 = new Book("2", "Hitchhikers Guide to The Galaxy", "Douglas Adams", "Fantasy/Sci-fi",
        "1995-09", "What is the meaning to life universe and everything?", "199");
    let book3 = new Book("3", "Title", "Author", "Genre", "PublishDate", "Description", "0");
    let book4 = new Book("4", "Title", "Author", "Genre", "PublishDate", "Description", "0");
    let book5 = new Book("5", "Title", "Author", "Genre", "PublishDate", "Description", "0");

    let parse = JSON.stringify([book1,book2,book3,book4,book5]);



    module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
        callback(parse);
    };

}());
