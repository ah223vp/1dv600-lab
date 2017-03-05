/**
 * Created by Andreas on 2017-03-05.
 */

var expect    = require("chai").expect;
var AddBookResource = require("../app/resources/AddBookResource");

/**
 * This part is not implemented yet, therefore the tests are just mocks.
 * They are created from the testcase and will look like this once the implementation is
 * complete.
 *
 * Set the XMLfile in LabraryDao
 * to test.xml file when testing. To simplify, it will only contain one or two book objects.
 */

var objBook = {
    "id" : "5",
    "author" : "Emma",
    "title" : "The shanghai",
    "genre" : "fantasy",
    "price" : "100",
    "publish_date" : "1951-08-21",
    "description": "testBook"};

var newObj = [
    {"id" : "3",
        "author" : "Emma",
        "title" : "The shanghai",
        "genre" : "fantasy",
        "price" : "100",
        "publish_date" : "1951-08-21",
        "description": "testBook"},
    {"id" : "5",
        "author" : "Emma",
        "title" : "The shanghai",
        "genre" : "fantasy",
        "price" : "100",
        "publish_date" : "1951-08-21",
        "description": "testBook"}];


describe("Add Books", function () {

    describe("Testing test...", function () {

        it("describe..", function () {

            AddBookResource(objBook, callback);

            expect(callback).to.equal(newObj);


        });
    });
});
