// import express library
const express = require('express');
// Node.js body parsing middleware
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// import configuration file
const config = require("./config")
// connect the router
const router = require("./routes")

// create an instance of the server
var app = express();

/* for express.static specify the path to static files 
* (in this case, this path is written in config.server.staticPath (value "./assets"))
*/
app.use(express.static(config.server.staticPath))

app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(bodyParser.text());

/* returns middleware that only parses urlencoded bodies and only looks at requests 
* where the Content-Type header matches the type option.
*/
app.use(bodyParser.urlencoded({
    parameterLimit: 100000,
    limit: '50mb',
    extended: true
}));

/* returns middleware that only parses json and only looks at requests 
* where the Content-Type header matches the type option
*/
app.use(bodyParser.json({
    limit: '50mb'
}));

// configure the router
app.use("/api", router)

// run the server instance on the appropriate port environment;
// after starting the server, we display a message on the console that the server is running
let server = app.listen(config.server.port,console.log(`** EDU JACE server starts at port ${config.server.port}`))

// the server.js module exports the server variable, which we will use in the test to programmatically stop the server
module.exports = server
