const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
require('./Controller/DBConnect');
const express = require('express');
const RestApi = require('./Controller/RESTFulApi');

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(RestApi);

app.listen(PORT, ()=> console.log(`Connected to the port ${PORT}`));