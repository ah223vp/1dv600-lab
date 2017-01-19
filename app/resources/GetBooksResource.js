(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    let book = require("../dao/book.js");
    // Create books somewhere else, judt for testing
    let book1 = new book("hej", "hallå", "aa", "aa", "aa", "2");

    let parse = JSON.stringify(book1);



    module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
        callback(parse);
    };

}());
