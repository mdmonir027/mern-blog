const router = require('express').Router();
const {
  getAll,
  show,
  remove,
} = require('../../controller/admin/userController');
const authenticate = require('../../middleware/passport/authenticate');
const isAdmin = require('../../middleware/isAdminMiddleware');

router.get('/', authenticate, isAdmin, getAll);
router.get('/:userId', authenticate, isAdmin, show);
router.delete('/:userId', authenticate, isAdmin, remove);

module.exports = router;
