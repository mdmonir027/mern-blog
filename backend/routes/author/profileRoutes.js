const router = require('express').Router();

const {
  createProfile,
  getProfile,
  updateProfile,
  changePassword,
} = require('../../controller/author/profileController');

const authenticate = require('../../middleware/passport/authenticate');

const profileValidator = require('../../validator/profileValidator');
const { validationResultResponse } = require('../../utils/errorResponses');
const changePasswordValidator = require('../../validator/changePasswordValidator');

router.get('/', authenticate, getProfile);
router.post(
  '/',
  authenticate,
  profileValidator,
  validationResultResponse,
  createProfile
);
router.put(
  '/',
  authenticate,
  profileValidator,
  validationResultResponse,
  updateProfile
);

router.put(
  '/changePassword',
  authenticate,
  changePasswordValidator,
  validationResultResponse,
  changePassword
);

module.exports = router;
