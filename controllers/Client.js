'use strict';

var url = require('url');
var Client = require('./ClientService.js');
var util = require('util');

/*
	console.log(req.swagger.params.parameters.value.end);
	console.log(req.swagger.params.parameters.value.start_qrycnt);
	console.log("--------------------");
*/
module.exports.clientFullListing = function clientFullListing (req, res, next) {
  Client.clientFullListing(req.swagger.params, res, next);
};

