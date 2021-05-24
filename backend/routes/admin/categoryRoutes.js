const router = require('express').Router();
const {
  getAll,
  show,
  store,
  update,
  remove,
} = require('../../controller/admin/categoryController');

const authenticate = require('../../middleware/passport/authenticate');
const {
  categoryStoreValidation,
  categoryUpdateValidation,
} = require('../../validator/categoryValidator');
const { validationResultResponse } = require('../../utils/errorResponses');

router.get('/', authenticate, getAll);
router.post(
  '/',
  authenticate,
  categoryStoreValidation,
  validationResultResponse,
  store
);
router.get('/:slug', authenticate, show);
router.put(
  '/:slug',
  authenticate,
  categoryUpdateValidation,
  validationResultResponse,
  update
);
router.delete('/:slug', authenticate, remove);

module.exports = router;
