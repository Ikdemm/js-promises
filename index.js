const express = require('express')
const bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 5000;

app.listen(PORT, function () {
    console.log('Server listening on http://localhost:' + PORT);
});