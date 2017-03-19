/**
 * Created by Andreas on 2017-03-05.
 */



var expect    = require("chai").expect;
var EditBookResource = require("../app/resources/EditBookResource");

/**
 * This part is not implemented yet, therefore the tests are just mocks.
 * They are created from the testcase and will look like this once the implementation is
 * complete.
 *
 * Set the XMLfile in LabraryDao
 * to test.xml file when testing. To simplify, it will only contain one or two book objects.
 */

var newObj = {
    "id" : "3",
    "author" : "Emma",
    "title" : "Andreas",
    "genre" : "fantasy",
    "price" : "100",
    "publish_date" : "1951-08-21",
    "description": "testBook"
}
/*
describe("EditBookResource", function () {

    describe("Edit book in list test", function () {

        it("describe..", function () {

            EditBookResource("3", {"title": "Andreas"}, callback);


            expect(callback).to.equal(newObj);


        });
    });
});
*/