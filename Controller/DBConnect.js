const mongoose = require('mongoose');
const URL = process.env.URL

mongoose.connect(URL).then(()=>{
  console.log('Connected');
}).catch(()=>{
  console.log("Disconnected")
})