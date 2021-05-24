const router = require('express').Router();
const { registration, login } = require('../controller/authController');
const {
  registrationValidator,
  loginValidation,
} = require('../validator/authValidator');
const { validationResultResponse } = require('../utils/errorResponses');

router.post('/login', loginValidation, validationResultResponse , login);
router.post(
  '/registration',
  registrationValidator,
  validationResultResponse,
  registration
);

module.exports = router;
