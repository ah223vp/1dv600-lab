(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    /**
     * Function for Editing a book. Taking the current object and
     * replacing the cosrresponding index with a new obj.
     * @param id Id of book seleceted in browser
     * @param data Data of book from browser(changed)
     * @param callbacks Callback response
     */


    module.exports = function (id, data, callbacks) {


        LibraryDAO.readXMLFile(function(callback){
            let newObj = callback.unParsed;
            for(let i = 0; i < newObj.catalog.book.length; i++){
                if(newObj.catalog.book[i].id === id){
                    newObj.catalog.book[i] = data;
                    break;
                }
            }
            callbacks(LibraryDAO.writeXMLFile(newObj.catalog));
        });


    };

}());
