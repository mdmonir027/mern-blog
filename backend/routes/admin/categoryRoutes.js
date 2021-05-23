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

router.get('/', authenticate, getAll);
router.post('/', authenticate, categoryStoreValidation, store);
router.get('/:slug', authenticate, show);
router.put('/:slug', authenticate, categoryUpdateValidation, update);
router.delete('/:slug', authenticate, remove);

module.exports = router;
