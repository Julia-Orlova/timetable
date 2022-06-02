// create an instance of the router
const router = require('express').Router()
// import the Teacher controller
const controllerTeachers = require("./controllerTeachers")
// import the Group controller
const controllerGroups = require("./controllerGroups")
const { extend } = require("lodash")

/* endpoints are accessed in two ways: presidents and presidents /:id
* using the methods of HTTP-requests POST (create a new instance), 
* GET (read the model), PUT (update the instance), DELETE (delete the instance).
* Query parameters can be passed using params, query and body
*/
router
 
 .post( "/teachers", ( req, res ) => {
   res.send(controllerTeachers.create(req.body))
 })
 
 .get( "/teachers", ( req, res ) => {
   res.send(controllerTeachers.read(req.query))
 })

 .get( "/teachers/:id", ( req, res ) => {
   res.send(controllerTeachers.read(req.params))
 })
 
 .put( "/teachers", ( req, res ) => {
   res.send(controllerTeachers.update( extend( {}, req.body, req.query )))
 })

 .put( "/teachers/:id", ( req, res ) => {
   res.send(controllerTeachers.update( extend( {}, req.body, req.query, req.params )))
 })

 .delete("/teachers", ( req, res ) => {
   res.send(controllerTeachers.delete( extend( {}, req.body, req.query )))
 })

 .delete("/teachers/:id", ( req, res ) => {
   res.send(controllerTeachers.delete( req.params ))
 })


 .post( "/groups", ( req, res ) => {
   res.send(controllerGroups.create(req.body))
 })
 
 .get( "/groups", ( req, res ) => {
   res.send(controllerGroups.read(req.query))
 })

 .get( "/groups/:id", ( req, res ) => {
   res.send(controllerGroups.read(req.params))
 })
 
 .put( "/groups", ( req, res ) => {
   res.send(controllerGroups.update( extend( {}, req.body, req.query )))
 })

 .put( "/groups/:id", ( req, res ) => {
   res.send(controllerGroups.update( extend( {}, req.body, req.query, req.params )))
 })

 .delete("/groups", ( req, res ) => {
   res.send(controllerGroups.delete( extend( {}, req.body, req.query )))
 })

 .delete("/groups/:id", ( req, res ) => {
   res.send(controllerGroups.delete( req.params ))
 })

// export router
module.exports = router 
