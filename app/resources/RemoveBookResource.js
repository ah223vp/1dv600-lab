(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    let xmlFile = './books.xml';

    /**
     * Callback function to receive the returned parsed File.
     */

    module.exports = function (id, callbacks, file) {
        if(file == undefined){
            file = xmlFile;
        }

        LibraryDAO.readXMLFile(file ,function(callback){

            let nonParsedFile = callback.unParsed;
            for(let i = 0; i < nonParsedFile.catalog.book.length; i++){

                if(nonParsedFile.catalog.book[i].id == id){
                    // Removing the pressed book
                    nonParsedFile.catalog.book.splice(i, 1);
                }
            }
            if(nonParsedFile.catalog.book.length == undefined){
                nonParsedFile.catalog = "";
            }
            // Calling the write method
            callbacks(LibraryDAO.writeXMLFile(file, nonParsedFile.catalog));


        });
    };

}());
