const router = require('express').Router();

const upload = require('../../middleware/uploadMiddleware');
const {
  uploadProfilePicture,
} = require('../../controller/author/uploadController');

const authenticate = require('../../middleware/passport/authenticate');

router.post(
  '/profilePicture',
  authenticate,
  upload.single('profilePicture'),
  uploadProfilePicture
);

module.exports = router;
