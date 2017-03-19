(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    let xmlFile = './books.xml';




    module.exports = function (callback, file) {// The title is optional and is only present when searching. (You need yo modify the books.js file first)

        if(file == undefined){
            file = xmlFile;
        }

        /**
         * Callback function to receive the returned parsed File.aa
         */

        LibraryDAO.readXMLFile(file, function(XMLFile){

            // Putting in Array incase there is only one book in the list
            if(XMLFile.unParsed.catalog.book.length == undefined){
                let arr = [];
                arr.push(XMLFile.unParsed.catalog.book);
                callback(arr);
            }else {
                callback(XMLFile.parsed);
            }

        });




    };


}());

