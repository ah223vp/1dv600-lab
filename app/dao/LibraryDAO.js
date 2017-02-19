(function () {
    "use strict";


    var fs = require('fs');

    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
    var xml2js = require('xml2js');
    let xmlFile = './books.xml';


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
            fs.readFile(xmlFile, function(err, data) {
                parser.parseString(data, function (err, result) {
                    /*
                    Result to be returned via the callback.
                    Directly stringifying the book objects children.
                     */
                    callback({
                        parsed: JSON.stringify(result.catalog.book),
                        unParsed: result
                    });
                });
            });
        },

        /**
         * Write a new File to the system. If the file already exists it will be overwritten.
         * @param data BookObject that will be build to XML -> books.xml
         */
        writeXMLFile: function(data) {
            let obj = data;
            let builder = new xml2js.Builder({rootName:"catalog"});
            let xml = builder.buildObject(obj);

            fs.writeFile(xmlFile, xml, (err) => {
                if (err){
                    console.log(err);
                }
                console.log("skrev till fil");
            })
        }

    };

    module.exports = LibraryDAO;
}());
