const router = require('express').Router();
const { getAllUser } = require('../../controller/public/utilsController');

router.get('/users', getAllUser);

module.exports = router;
