/**
 * Created by Andreas on 2017-03-05.
 */

var expect    = require("chai").expect;
var AddBookResource = require("../app/resources/AddBookResource");

/**
 * This part is not implemented yet, therefore the tests are just mocks.
 * They are created from the testcase and will look like this once the implementation is
 * complete.
 */

describe("Add Books", function () {

    describe("Testing test...", function () {

        it("describe..", function () {

            var result = AddBookResource("2");

            // Mock JSON to use
            var obj = {
                "aa": "a",
                "bb": "b"
            };

            var addedItem = {"cc": "c"};

            var newObj = {
                "aa": "a",
                "bb": "b",
                "cc": "c"
            };


            expect(result).to.equal(undefined);
            //expect(result).to.equal(obj);
            //expect(result).to.equal(newObj);

        });
    });
});
