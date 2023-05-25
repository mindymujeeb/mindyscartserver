const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
require('./Controller/DBConnect');
const cors = require('cors');
const express = require('express');
const RestApi = require('./Controller/RESTFulApi');
const app = express();

app.use(cors());



const PORT = process.env.PORT;

app.use(express.json());
app.use(RestApi);

app.listen(PORT, ()=> console.log(`Connected to the port ${PORT}`));