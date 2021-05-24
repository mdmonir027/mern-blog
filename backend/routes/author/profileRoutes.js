const router = require('express').Router();

const {
  createProfile,
  getProfile,
  updateProfile,
} = require('../../controller/author/profileController');

const authenticate = require('../../middleware/passport/authenticate');

const profileValidator = require('../../validator/profileValidator');
const { validationResultResponse } = require('../../utils/errorResponses');

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

module.exports = router;
