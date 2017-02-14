(function () {
    "use strict";


    var fs = require('fs');

    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
    var xml2js = require('xml2js');
    let xml = './books.xml';
    let parsedChilds;


    // Use this file to write and read the xml file.
    var LibraryDAO = {

        // Get the entire file from the file system.
        /**
         * Reading the XML file books.xml and parsing it to JSON object.
         * Parsing with options to merge attributes to get all in one array and
         * removing the default excplicit array that puts child nodes in arrays.
         * @param callback sent by the caller.
         */
        readXMLFile: function(callback) {

            let parser = new xml2js.Parser({mergeAttrs:true, explicitArray:false});
            // Main part of read and parsecode from https://github.com/Leonidas-from-XIV/node-xml2js.
            fs.readFile(xml, function(err, data) {
                parser.parseString(data, function (err, result) {
                   //console.log(JSON.stringify(result));
                   //console.log('Done');
                    /*
                    Result to be returned via the callback.
                    Directly stringifying the book objects children.
                     */
                    parsedChilds = result.catalog.book;
                   callback(JSON.stringify(result.catalog.book));
                });
            });

        },

        // Write the entire file from the file system.
        writeXMLFile: function(data) {

        },
        deleteXML: function(id){
            for(let i = 0; i < parsedChilds.length; i++){
                if(parsedChilds[i].id == id){
                    parsedChilds.splice(i, 1);
                }
            }

            console.log(parsedChilds);
        }
    };

    module.exports = LibraryDAO;
}());
