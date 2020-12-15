const express = require('express');
const app = express();
const cors = require('cors');

const db = require('./configs/database');
db.connect()

const users = require('./routes/userRoutes');
const units = require('./routes/unitsRoutes');

app.use(cors());
app.use(express.json());

app.use('/users', users);
app.use('/units', units)


module.exports = app