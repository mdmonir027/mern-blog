const { body } = require('express-validator');

module.exports = [
  body('oldPassword')
    .not()
    .isEmpty()
    .withMessage('Please provide old password'),
  body('newPassword')
    .not()
    .isEmpty()
    .withMessage('Please provide a strong password')
    .isLength({ min: 6, max: 32 })
    .withMessage('Pleas provide a password between 6 to 32 Chars'),
  body('passwordConfirm')
    .not()
    .isEmpty()
    .withMessage('Please provide a strong password')
    .custom((passwordConfirm, { req }) => {
      const { newPassword } = req.body;
      if (passwordConfirm !== newPassword) {
        throw new Error('Password does not matched');
      }
      return true;
    }),
];
