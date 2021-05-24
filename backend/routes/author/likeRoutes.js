const router = require('express').Router();

const {
  commentLikeUnlike,
  replyLikeUnlike,
  postLikeUnlike,
} = require('../../controller/author/likeController');
const authenticate = require('../../middleware/passport/authenticate');

router.get('/:postSlug', authenticate, postLikeUnlike);
router.get('/comment/:commentId', authenticate, commentLikeUnlike);
router.get('/reply/:replyId', authenticate, replyLikeUnlike);

module.exports = router;
