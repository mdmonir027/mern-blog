const router = require('express').Router();
const authenticate = require('../../middleware/passport/authenticate');
const replyValidator = require('../../validator/replyValidator');
const { validationResultResponse } = require('../../utils/errorResponses');
const {
  getAll,
  store,
  update,
  remove,
} = require('../../controller/author/replyController');

router.get('/:commentId', authenticate, getAll);
router.post(
  '/:commentId',
  authenticate,
  replyValidator,
  validationResultResponse,
  store
);
router.put(
  '/:commentId/:replyId',
  authenticate,
  replyValidator,
  validationResultResponse,
  update
);

router.delete('/:commentId/:replyId', authenticate, remove);
module.exports = router;
