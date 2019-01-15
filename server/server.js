const express = require('express');
const app = express();
const port = 3000;

const yummilyController = require('./controllers/yummilyController');

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/test', yummilyController.queryYummily)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))