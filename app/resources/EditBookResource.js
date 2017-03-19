(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    let xmlFile = './books.xml';

    /**
     * Function for Editing a book. Taking the current object and
     * replacing the cosrresponding index with a new obj.
     * @param id Id of book seleceted in browser
     * @param data Data of book from browser(changed)
     * @param callbacks Callback response
     * @param file to use, mock or actual
     */


    module.exports = function (id, data, callbacks, file) {
        if(file == undefined){
            file = xmlFile;
        }


        LibraryDAO.readXMLFile(file, function(callback){
            let newObj = callback.unParsed;
            for(let i = 0; i < newObj.catalog.book.length; i++){
                if(newObj.catalog.book[i].id === id){
                    newObj.catalog.book[i] = data;
                    break;
                }
            }
            callbacks(LibraryDAO.writeXMLFile(file, newObj.catalog));
        });


    };

}());
