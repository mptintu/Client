'use strict';

const sql = require('mssql');
const path = require("path");
var env = process.env.NODE_ENV || "development";
var dbconf = require(path.join(__dirname, '..', 'config', 'config.json'))[env];

const config = {
    user: dbconf.username,
    password: dbconf.password,
    server: dbconf.host, // You can use 'localhost\\instance' to connect to named instance
    database: dbconf.database,
    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
}
exports.clientFullListing = function(args, res, next) {
    /**
     * Get the list of clients assigned to logged in case worker (ClientController@clientFullListing)
     * Get the list of clients assigned to logged in case worker
     *
     * parameters ClientInputParams 
     * returns inline_response_200
     **/

    var startquery_cnt = args.parameters.value.start_qrycnt;
    var end_qrycnt = args.parameters.value.end;
    var c_acc_key = args.parameters.value.c_acc_key;
    var logged_userid = args.parameters.value.logged_userid;


    var dbConn = new sql.ConnectionPool(config);
    dbConn.connect().then(function() {
        var request = new sql.Request(dbConn);
        var qry = "EXEC [AAIMERRGE_FORMS_TEST].[dbo].usp_ClientSearch '" + c_acc_key + "','" + startquery_cnt + "','" + end_qrycnt + "', '' ,'', '', '' ,'' ,'' ,'' , '', '' ,'','','" + logged_userid + "'";
        console.log(qry);
        request.query(qry).then(function(recordSet) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(recordSet));
            //console.log(recordSet);
            dbConn.close();
        }).catch(function(err) {
            console.log(err);
            dbConn.close();
        });
    }).catch(function(err) {
        console.log(err);
    });
}