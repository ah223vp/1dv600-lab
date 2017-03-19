/**
 * Created by Andreas on 2017-03-05.
 */

var expect    = require("chai").expect;
var AddBookResource = require("../app/resources/AddBookResource");
var GetBooksResource = require("../app/resources/GetBooksResource");
var testFile = './test.xml';

var newBook = {
    "id":"3",
    "author": "Mom",
    "title":"Shang",
    "genre": "pop",
    "price": "100",
    "publish_date": "2005",
    "description": "pirates"
};
var comparator =
    [{"id":"1",
        "author":"Andreas",
        "title":"Hund",
        "genre":"Science Ficition",
        "price":"164",
        "publish_date":"1951-08-21",
        "description":"apa"},
        {"id":"2","author":"Isaac Asimov",
            "title":"Foundation and Empire",
            "genre":"Science Ficition",
            "price":"79",
            "publish_date":"1952-10 -12",
            "description":"apa"},
    newBook];




describe("Add Books", function () {

    describe("Adding book", function () {

        it("describe..", function () {

            AddBookResource(newBook, function(data){

            }, testFile);
            GetBooksResource(function(data){

                expect(data).to.equal(comparator);
            }, testFile);



        });
    });
});


