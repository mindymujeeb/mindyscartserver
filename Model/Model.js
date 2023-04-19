const mongoose = require('mongoose');

const StatusSchema = new mongoose.Schema({
  name:{
    type:String,
    require:true
  },
  category:{
    type:String,
    require:true
  },
  weight:{
    type:Number,
    require:true
  },
  prevweight:{
    type:Number,
    require:true
  }
});

const Status = new mongoose.model("container-status",StatusSchema);

module.exports = Status;


