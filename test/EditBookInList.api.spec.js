/**
 * Created by Andreas on 2017-03-05.
 */

var request = require('supertest');

var app = require("../app");


describe("POST Books Resource", function () {

    describe("POST /api/books", function () {

        it("Testing for 200", function (done) {

            request(app)
                .post('/api/books/' + "3")
                .set('Accept', 'application/json')
                .send({})
                .expect(200, {}, done)

        });

        it("Testing for 404", function(done){
            request(app)
                .post('/api/bookss/')
                .set('Accept', 'application/json')
                .expect(404, done);
        })



    });
});