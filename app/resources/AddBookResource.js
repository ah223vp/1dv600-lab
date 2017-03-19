(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    /**
     * Function for adding book to the list. Reading the current file and pushing
     * the new book last in the array. Giving the new book a id +1 compared to the
     * current highest id.
     * @param data Book to add
     * @param callbacks Callback response
     */


    module.exports = function (data, callbacks) {

        LibraryDAO.readXMLFile(function(callback){
            console.log("Add");

            let newObj = callback.unParsed;
            // Creating a new id
            let length = callback.unParsed.catalog.book.length;
            let id = callback.unParsed.catalog.book[length-1].id;
            id++;


            // Building new object
            let obj = {
                id: id,
                 author:data.author,
                title:data.title,
                genre:data.genre,
                price:data.price,
                publish_date:data.publish_date,
                description:data.description

            };
            newObj.catalog.book.push(obj);
            // Sending response with write method.
            callbacks(LibraryDAO.writeXMLFile(newObj.catalog));
        })


    };

}());
