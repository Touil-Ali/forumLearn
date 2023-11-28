const express = require('express');
const {Router} = require('express')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const pug = require('pug');
const session = require('express-session');
const AuthRouter = require('./router/AuthRouter')
const QuestionRouter = require('./router/QuestionRouter')
const UsersRouter = require('./router/UsersRouter')
const ReponseRouter = require('./router/ReponsesRouter')
const authMiddleware  = require('./middleware/Auth')

let app = express();

app.use(cookieParser());
app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized:true,
    cookie:{
        secure: false
    }
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine",'pug');
app.set("views","./views");

app.use(express.static(__dirname + '/public'));

const url = 'mongodb+srv://touilali2003:2003touilali@cluster0.mojfiqh.mongodb.net/';

(async () => {
    await mongoose.connect(url);
    console.log('Connected to DB')
})()


app.use('/',AuthRouter);
app.use('/',authMiddleware,UsersRouter);
app.use('/',authMiddleware,ReponseRouter);
app.use('/',authMiddleware,QuestionRouter);




app.listen(3000, () => {
    console.log('Server is Listing on Port 3000')
})