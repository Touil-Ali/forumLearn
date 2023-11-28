const { Router } = require('express');
const { login, register } = require('../controller/AuthController')
const router = new Router();

router.get('/login', (req,res) => {
    if(req.session.user){
        res.redirect('/questions')
    } else {
        res.render("login")
    }
})
router.get('/register', (req,res) => {
    res.render('register');
});
router.post('/login',login);
router.post('/register',register);

module.exports = router;