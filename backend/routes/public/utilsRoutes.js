const router = require('express').Router();
const {
  getAllUser,
  getAllComments,
} = require('../../controller/public/utilsController');

router.get('/users', getAllUser);
router.get('/comment/:postSlug', getAllComments);

module.exports = router;
