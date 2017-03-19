/**
 * Created by Andreas on 2017-03-05.
 */



var expect    = require("chai").expect;
var EditBookResource = require("../app/resources/EditBookResource");
var GetBooksResource = require("../app/resources/GetBooksResource");
var testFile = './test.xml';


var bookObj = [{"id":"1",
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
    {"id":"3","author":"Mom",
        "title":"Shang",
        "genre":"pop",
        "price":"100",
        "publish_date":"2005",
        "description":"pirates"}];
var newObj = [{"id":"1",
    // Changing author here
    "author":"Thomas",
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
    {"id":"3","author":"Mom",
        "title":"Shang",
        "genre":"pop",
        "price":"100",
        "publish_date":"2005",
        "description":"pirates"}];
var book = {"id":"1",
    // Changing author here
    "author":"Thomas",
    "title":"Hund",
    "genre":"Science Ficition",
    "price":"164",
    "publish_date":"1951-08-21",
    "description":"apa"};



    describe("EditBookResource", function () {

    describe("Edit book in list test", function () {

        it("Editing book", function () {

            EditBookResource(1, book, function(data){

            }, testFile);
            GetBooksResource(function(data){

                expect(data).to.equal(newObj);
            }, testFile)

        });
    });
});
