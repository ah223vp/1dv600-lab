/**
 * Created by Andreas on 2017-03-05.
 */


var request = require('supertest');

var app = require("../app");


describe("PUT Books Resource", function () {

    describe("PUT /api/books", function () {

        it("Testing for 200", function (done) {

            request(app)
                .put('/api/books')
                .set('Accept', 'application/json')
                .send()
                .expect(200, done)


        });

        it("Testing for 404", function(done){
            request(app)
                .put('/api/')
                .set('Accept', 'application/json')
                .send()
                .expect(404, done)

        })

    });
});
