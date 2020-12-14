const express = require('express');
const app = express();
const cors = require('cors');

const db = require('./configs/database');
db.connect()

app.use(cors());
app.use(express.json());

//rotas

module.exports = app