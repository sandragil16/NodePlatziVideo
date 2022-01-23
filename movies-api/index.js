const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');

const { logErrors, 
    wrapErrors,
    errorHandler 
} = require ('./utils/middleware/errorHandlers.js');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

//midlewares


//body parser
app.use(express.json());
app.use(bodyParser.json());




//routes
moviesApi(app);

//catch 404
app.use(notFoundHandler);

//Error middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);


app.listen(config.port, function() {
    console.log(`Listening http://localhost:${config.port}`);
});