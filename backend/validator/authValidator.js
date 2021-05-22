const { body } = require('express-validator');
const User = require('../models/User');

const validator = {};

validator.registrationValidator = [
  body('username').not().isEmpty().withMessage('Please provide a username'),
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new Error('Email is already taken');
      }
      return true;
    })
    .normalizeEmail(),
  body('password')
    .not()
    .isEmpty()
    .withMessage('Please provide a strong password')
    .isLength({ min: 6, max: 32 })
    .withMessage('Pleas provide a password between 6 to 32 Chars'),
  body('passwordConfirm')
    .not()
    .isEmpty()
    .withMessage('Please confirm your password')
    .custom((passwordConfirm, { req }) => {
      if (req.body.password !== passwordConfirm) {
        throw new Error("Password didn't matched!");
      }
      return true;
    }),
];

validator.loginValidation = [
  body('email')
    .not()
    .isEmpty()
    .withMessage('Please provide a email address')
    .normalizeEmail(),
  body('password').not().isEmpty().withMessage('Please provide a password'),
];

module.exports = validator;
