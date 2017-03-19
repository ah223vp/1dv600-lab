
var expect    = require("chai").expect;
var GetBooksResource = require("../app/resources/GetBooksResource");
var testFile = './test.xml';

var obj = [{"id":"1",
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
        "description":"apa"}];


    describe("View Books", function () {

    describe("First test", function () {

        it("Reading database", function () {

           GetBooksResource(function(data){
               expect(data).to.equal(obj);
           }, testFile);


        });
    });
});
