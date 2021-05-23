const { body } = require('express-validator');
const validator = require('validator');

const linkValidator = (value) => {
  if (value) {
    if (!validator.isURL(value)) {
      throw new Error('Please provide a valid url');
    }
    return true;
  }
  return true;
};

module.exports = [
  body('name')
    .not()
    .isEmpty()
    .withMessage('Please provide a name')
    .isLength({ min: 3, max: 30 })
    .withMessage('Please provide a name between 2 and 30 chars'),
  body('title')
    .not()
    .isEmpty()
    .withMessage('Please profile a title')
    .isLength({ max: 20 })
    .withMessage('Please provide a title less than 30 chars'),
  body('bio')
    .not()
    .isEmpty()
    .withMessage('Please profile bio')
    .isLength({ max: 300 })
    .withMessage('Please provide a title less than 300 chars'),
  body('website').custom(linkValidator),
  body('github').custom(linkValidator),
  body('twitter').custom(linkValidator),
  body('facebook').custom(linkValidator),
];
