const express = require('express');
const app = express();

const { config } = require('./config/index');
const {moviesMock } = require('./routes/movies.js');

moviesMock(app);

app.listen(config.port, function() {
    console.log(`Listening http://localhost:${config.port}`);
});