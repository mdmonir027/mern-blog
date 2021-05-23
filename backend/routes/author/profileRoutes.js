const router = require('express').Router();

const {
  createProfile,
  getProfile,
  updateProfile,
} = require('../../controller/author/profileController');

const authenticate = require('../../middleware/passport/authenticate');

const profileValidator = require('../../validator/profileValidator');

router.get('/', authenticate, getProfile);
router.post('/', authenticate, profileValidator, createProfile);
router.put('/', authenticate, profileValidator, updateProfile);

module.exports = router;
