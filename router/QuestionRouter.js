const {Router} = require('express');
const router = new Router();
const {addQuestion, getAllQuestions,getQuestion} = require('../controller/QuestionController')

router.get('/questions',getAllQuestions)
router.get('/question/:id',getQuestion)
router.post('/addQuestion',addQuestion);


module.exports = router;