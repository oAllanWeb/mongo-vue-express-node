const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').load();
const mongoose = require('./config/db');
const app = express();


// middleware

app.use(bodyParser.json());
app.use(cors());


//route

const posts = require('./modules/posts/routes');
app.use('/api/posts', posts);


const port  =  process.env.PORT || 5000;

app.listen(port,() => `Server in pott ${port}`)