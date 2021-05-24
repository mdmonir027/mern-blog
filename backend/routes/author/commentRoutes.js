const router = require('express').Router();

const {
  getAll,
  store,
  show,
  update,
  remove,
} = require('../../controller/author/commentController');
const authenticate = require('../../middleware/passport/authenticate');
const commentValidator = require('../../validator/commentValidator');
const { validationResultResponse } = require('../../utils/errorResponses');

router.get('/:postSlug', authenticate, getAll);
router.post(
  '/:postSlug',
  authenticate,
  commentValidator,
  validationResultResponse,
  store
);
router.get('/:postSlug/:commentId', authenticate, show);
router.put(
  '/:postSlug/:commentId',
  authenticate,
  commentValidator,
  validationResultResponse,
  update
);
router.delete('/:postSlug/:commentId', authenticate, remove);

module.exports = router;
