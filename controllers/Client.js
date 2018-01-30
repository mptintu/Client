'use strict';
//var express = require('express');
//var app = express();
var url = require('url');
var Client = require('./ClientService.js');
var util = require('util');

/*
	console.log(JSON.parse(JSON.stringify(req.swagger.params.parameters.value)));
	console.log("----------------------------------------------------");
	console.log(req.swagger.params.parameters.value.end);
	console.log("////////////////"+req.swagger.params.parameters.value.start_qrycnt);
	console.log("--------------------");
*/


module.exports.clientFullListing = function clientFullListing (req, res, next) {	
  Client.clientFullListing(req.swagger.params, res, next);
};

