const router = require('express').Router();

const upload = require('../../middleware/uploadMiddleware');
const {
  uploadProfilePicture,
  updateProfilePicture,
} = require('../../controller/author/uploadController');

const authenticate = require('../../middleware/passport/authenticate');

router.post(
  '/profilePicture',
  authenticate,
  upload.single('profilePicture'),
  uploadProfilePicture
);
router.put(
  '/profilePicture',
  authenticate,
  upload.single('profilePicture'),
  updateProfilePicture
);

module.exports = router;
