(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    /**
     * Function for searching a book. Submit a title name in the submit box and
     * this function will look through the database for a match.
     * This search is not case sensitive to make it easier.
     * @param id Title string to search for
     * @param callbacks Callback response
      */

    module.exports = function (id, callbacks) {

        LibraryDAO.readXMLFile(function(callback){


            let newObj = callback.unParsed.catalog.book;
            for (let i = 0; i < newObj.length; i++){
                if(newObj[i].title.toLowerCase() == id.toLowerCase()){

                    callbacks([newObj[i]]);
                    break;
                }
            }
        });


    };

}());
