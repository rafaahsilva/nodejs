const express = require('express')
const app = express();
const rotasProduto = require('./routes/produtos');

app.use('/produtos', rotasProduto)

module.exports = app