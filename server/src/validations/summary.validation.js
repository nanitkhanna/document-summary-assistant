const {celebrate, Joi} = require('celebrate');

const generateSummary = celebrate(
  {
    query: Joi.object({
      length: Joi.string().valid('SHORT', 'MEDIUM', 'LONG').default('MEDIUM')
    })
  },
  {abortEarly: false}
);

module.exports = {
  generateSummary
};
