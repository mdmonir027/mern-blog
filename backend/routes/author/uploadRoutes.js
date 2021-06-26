const router = require('express').Router();

const upload = require('../../middleware/uploadMiddleware');
const {
  uploadProfilePicture,
  updateProfilePicture,
  uploadPostImage,
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

router.post(
  '/post-image',
  authenticate,
  upload.single('image'),
  uploadPostImage
);

module.exports = router;
