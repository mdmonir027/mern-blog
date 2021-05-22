const router = require('express').Router();
const { registration, login } = require('../controller/authController');
const {
  registrationValidator,
  loginValidation,
} = require('../validator/authValidator');

router.post('/login', loginValidation, login);
router.post('/registration', registrationValidator, registration);

module.exports = router;
