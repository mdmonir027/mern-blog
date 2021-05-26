const router = require('express').Router();
const {
  getAllCategory,
  getSingleCategory,
} = require('../../controller/public/categoryController');

router.get('/', getAllCategory);
router.get('/:slug', getSingleCategory);

module.exports = router;
