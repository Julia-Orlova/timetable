const router = require('express').Router()
const controllerTeachers = require("./controllerTeachers")
const controllerGroups = require("./controllerGroups")
const { extend } = require("lodash")

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

module.exports = router 
