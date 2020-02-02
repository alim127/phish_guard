const checker = require('spell-checker-js');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 8080;
checker.load('en');

app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());

const routes = require('./routes');
Object.entries(routes).forEach(([path, router]) => {
    app.use('/api' + path, router);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});