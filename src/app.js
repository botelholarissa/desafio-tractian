const express = require('express');
const app = express();
const cors = require('cors');

const db = require('./configs/database');
db.connect()

const index = require('./routes/index');
const users = require('./routes/userRoutes');
const units = require('./routes/unitsRoutes');
const companies = require('./routes/companiesRoutes');
const assets = require('./routes/assetsRoutes');

app.use(cors());
app.use(express.json());

app.use('/', index);
app.use('/users', users);
app.use('/units', units);
app.use('/co', companies);
app.use('/assets', assets)


module.exports = app