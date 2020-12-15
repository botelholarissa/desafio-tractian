const express = require('express');
const app = express();
const cors = require('cors');

const db = require('./configs/database');
db.connect()

const users = require('./routes/userRoutes')

app.use(cors());
app.use(express.json());

app.use('/users', users);


module.exports = app