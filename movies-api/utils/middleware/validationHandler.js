const boom = require ('@hapi/boom');
const joi = require ('joi');

function validate(data, schema) {
  const { error }= joi.object(schema).validate(data);
   return error;
}

function validationHandler (schema, data= 'body') {
    return function(req, res, next ) {
     const error = validate (req[data], schema);

     error ? next(boom.badRequest(error)) : next();
  }
}
module.exports = validationHandler