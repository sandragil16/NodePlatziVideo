const express = require('express');
const app = express();

import { config } from './config/index';
import moviesApi from './routes/movies.js';

moviesApi(app);

app.listen(config.port, function() {
    console.log(`Listening http://localhost:${config.port}`);
});