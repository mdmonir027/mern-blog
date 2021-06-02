const router = require('express').Router();
const {
  getAll,
  show,
  store,
  update,
  remove,
  statusChange,
} = require('../../controller/admin/categoryController');

const authenticate = require('../../middleware/passport/authenticate');
const {
  categoryStoreValidation,
  categoryUpdateValidation,
} = require('../../validator/categoryValidator');
const { validationResultResponse } = require('../../utils/errorResponses');
const isAdminMiddleware = require('../../middleware/isAdminMiddleware');

router.get('/', authenticate, isAdminMiddleware, getAll);
router.post(
  '/',
  authenticate,
  isAdminMiddleware,
  categoryStoreValidation,
  validationResultResponse,
  store
);
router.get('/:slug', authenticate, isAdminMiddleware, show);
router.put(
  '/:slug',
  authenticate,
  isAdminMiddleware,
  categoryUpdateValidation,
  validationResultResponse,
  update
);
router.delete('/:slug', authenticate, isAdminMiddleware, remove);
router.get('/status/:slug', authenticate, isAdminMiddleware, statusChange);

module.exports = router;
