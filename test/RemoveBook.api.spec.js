/**
 * Created by Andreas on 2017-03-05.
 */

var request = require('supertest');

var app = require("../app");


describe("Remove Books", function () {

    describe("DELETE /api/books", function () {

        it("404, no id sent", function (done) {

            request(app)
                .del('/api/books')
                .set('Accept', 'application/json')
                .expect(404, done);

        });

        it("Pass, id sent", function(done){
            request(app)
                .del('/api/books/' + 5)
                .set('Accept', 'application/json')
                .expect(200, done);
        })
    });
});