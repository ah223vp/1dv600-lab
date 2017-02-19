(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');


    /*

            Leaving this for debugging purposes since this is not a final release.


    let Book = require("../dao/book.js");
    let books = [
        new Book("1", "Title", "Author", "Genre", "PublishDate", "Description", "0"),
        new Book("2", "Hitchhikers Guide to The Galaxy", "Douglas Adams", "Fantasy/Sci-fi",
            "1995-09", "What is the meaning of life universe and everything?", "199"),
        new Book("3", "Title", "Author", "Genre", "PublishDate", "Description", "0"),
        new Book("4", "Title", "Author", "Genre", "PublishDate", "Description", "0"),
        new Book("5", "Title", "Author", "Genre", "PublishDate", "Description", "0")
        ];
        */



    module.exports = function (callback, title) {// The title is optional and is only present when searching. (You need yo modify the books.js file first)

        /**
         * Callback function to receive the returned parsed File.aa
         */

        LibraryDAO.readXMLFile(function(XMLFile){
            // Putting in Array incase there is only one book in the list
            if(XMLFile.unParsed.catalog.book.length == undefined){
                let arr = [];
                arr.push(XMLFile.unParsed.catalog.book);
                callback(arr);
            }else {
                callback(XMLFile.parsed);
            }
            console.log("Läser fil books.xml");
        });




    };


}());

