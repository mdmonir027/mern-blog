const router = require('express').Router();

const {
  createProfile,
  getProfile,
  updateProfile,
} = require('../../controller/author/profileController');

const profileValidator = require('../../validator/profileValidator');

router.get('/', getProfile);
router.post('/', profileValidator, createProfile);
router.put('/', profileValidator, updateProfile);

module.exports = router;
