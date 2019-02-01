const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').load();
const mongoose = require('./config/db');
const app = express();


// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


//route

const login = require('./modules/login/routes');
app.use('/api/login', login);
const users = require('./modules/users/routes');
app.use('/api/users', users);


const port = process.env.port || process.env.PORT;

app.listen(port, () => `Server in pott ${port}`)