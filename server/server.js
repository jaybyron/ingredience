const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const port = 3000;

const yummilyController = require('./controllers/yummilyController');
const clarifaiController = require('./controllers/clarifaiController');

console.log(__dirname);

const thePath = path.join(__dirname,'../dist/index.html');

//app.get('/', (req, res) => express.static(path.resolve(__dirname, '../dist')))

app.get('/analyze/', yummilyController.queryYummily);

app.get('/test', yummilyController.queryYummily);

//app.get('/analyze/',clarifaiController.predictImage);

app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))