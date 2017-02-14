(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');


    module.exports = function (id, callback) {
        console.log(callback);
        console.log(id);
        console.log(callback.responseText);
        LibraryDAO.deleteXML(id);
    };

}());
