const getAllUsers = require('../controller/UserController')
const Router = require('express')
router = new Router();

router.get('/users',getAllUsers);



module.exports = router;