const router = require('express').Router();

const {
  getAll,
  store,
  show,
  update,
  remove,
} = require('../../controller/author/postController');
const authenticate = require('../../middleware/passport/authenticate');
const {
  postStoreValidator,
  postUpdateValidator,
} = require('../../validator/postValidator');
const { validationResultResponse } = require('../../utils/errorResponses');

router.get('/', authenticate, getAll);
router.post(
  '/',
  authenticate,
  postStoreValidator,
  validationResultResponse,
  store
);
router.get('/:slug', authenticate, show);
router.put(
  '/:slug',
  authenticate,
  postUpdateValidator,
  validationResultResponse,
  update
);
router.delete('/:slug', authenticate, remove);

module.exports = router;
