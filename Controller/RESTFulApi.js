const express = require('express');
const Router = new express.Router();

const statusCollection = require('../Model/Model');


// get data
Router.get("/database", async (req, resp) => {
  const Db = await statusCollection.find({});
  resp.send(Db);
})
 
 // post data
 Router.post("/database",async(req,resp) => {
  const data = await statusCollection(req.body);
  const savedData = await data.save();
  resp.send(savedData);
 });
 
 // update data using params
 Router.patch("/database/:name",async(req,resp) => {
   const data =await statusCollection.findOneAndUpdate(
     req.params.name,
     req.body
   );
   resp.send(data);
 });
 
 // delete data by using name
 Router.delete("/database/:name",async(req,resp) => {
   const data = await statusCollection.deleteOne(req.params);
   resp.send(data);
 });
 
 // deleting using id
 Router.delete("/database/:_id",async(req,resp) => {
   const data = await statusCollection.deleteOne(req.params);
   resp.send(data);
 });

module.exports = Router;