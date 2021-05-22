const router = require('express').Router();
const { index } = require('../controller/userController');

router.get('/', index);

module.exports = router;
