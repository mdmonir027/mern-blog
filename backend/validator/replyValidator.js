const { body } = require('express-validator');

module.exports = [
  body('body')
    .not()
    .isEmpty()
    .withMessage('Please enter reply body')
    .isLength({ max: 200 })
    .withMessage('Reply body length must be smaller than 200 chars'),
];
