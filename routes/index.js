var express = require('express');
var router = express.Router();
var request = require('request');
var fs = require('fs'),
    xml2js = require('xml2js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test', { title: 'Simple Isomorphic JS' });
});

module.exports = router;
