const express = require('express');
const app = express();
const port = 3000;

const yummilyController = require('./controllers/yummilyController');
const clarifaiController = require('./controllers/clarifaiController')

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/test', yummilyController.queryYummily);

app.get('/analyze',clarifaiController.predictImage);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))