

var expect    = require("chai").expect;
var GetBookResource = require("../app/resources/GetBookResource");
var testFile = './test.xml';
var title = "hund";

var book = {
    "id": "1",
    "author": "Andreas",
    "title": "Hund",
    "genre": "Science Fiction",
    "price": "164",
    "publish_date": "1951-08-21",
    "description": "apa"
};


describe("View a Book when searched", function () {

    describe("Search test", function () {

        it("Searching", function () {

            GetBookResource(title, function(data){

                expect(data).to.equal(book);
            }, testFile);

        });
    });
});