
var expect    = require("chai").expect;
var RemoveBookResource = require("../app/resources/RemoveBookResource");
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

describe("Removing a Book from list", function () {

    describe("Remove test", function () {

        it("Removing", function () {

           RemoveBookResource(3, function(data){

           }, testFile);
           GetBooksResource(function(data){
               expect(data).to.equal(obj);
           }, testFile);

        });
    });
});