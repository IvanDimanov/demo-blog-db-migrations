const Joi = require('joi')

module.exports = {
  MONGODB_URI: Joi
    .string()
    .uri()
    .required(),
}
