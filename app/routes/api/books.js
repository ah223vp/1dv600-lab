(function () {
    "use strict";

    var express = require('express');
    var router = express.Router();

    var AddBookResource = require('../../resources/AddBookResource');
    var EditBookResource = require('../../resources/EditBookResource');
    var GetBookResource = require('../../resources/GetBookResource');
    var GetBooksResource = require('../../resources/GetBooksResource');
    var RemoveBookResource = require('../../resources/RemoveBookResource');
    let PingResource = require("../../resources/PingResource");



    router.get('/', function (req, res) {
        res.type('json');

        if(req.query.title === undefined){
            GetBooksResource(function (data) {
                res.send(data);
            });
        }else{
            GetBookResource(req.query.title, function(data){
                res.send(data);
            } )
        }

    });


    router.put('/', function (req, res) {
        res.type('json');

        AddBookResource(req.body, function () {
            res.send("{}");
        });
    });


    router.route('/:bookId')
        .get(function (req, res) {


            res.type('json');
            GetBookResource(req.params.bookId, function (data) {

                res.send(data);
            });
        })

        .post(function (req, res) {
            res.type('json');
            EditBookResource(req.params.bookId, req.body, function () {
                res.send("{}");
            });
        })

        .delete(function (req, res) {
            res.type('json');
            RemoveBookResource(req.params.bookId, function () {
                res.send("{}");
            });
        });

    module.exports = router;
}());
