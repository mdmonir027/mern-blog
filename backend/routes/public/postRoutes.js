const router = require('express').Router();
const {
  getAllPosts,
  getSinglePost,
} = require('../../controller/public/postController');

router.get('/', getAllPosts);
router.get('/:slug', getSinglePost);

module.exports = router;
