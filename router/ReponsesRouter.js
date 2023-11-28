const {Router} = require("express");
const {addResponse,getResponses} = require('../controller/ReponsesController')

const router = new Router();


router.post('/addresponse/:id',addResponse)
router.get('/response/:question_id',getResponses)


module.exports = router;