    const Question = require('../model/QuestionModel');
    const ObjectId = require('express');
    const addQuestion = async(req,res) => {
        const user_id = req.session.user._id;
        const { question} = req.body;
        console.log(user_id ,question);

        const newQuestion = new Question({
            user_id : user_id,
            question: question
        })

        await newQuestion.save();

        res.status(200).redirect('/questions')
    }

    const getAllQuestions = async(req,res) => {
       try {
        const Questions = await Question.find({})
        if(Questions) {
            res.render("home", {Questions})
        } else {
            res.send("No Question Found")
        }
       } catch(e) {
        console.log(e);
       }
    }

    const getQuestion = async(req,res) => {
        try {
        const idQuestion = req.params.id;
            const question = await Question.findById(idQuestion)
            if(question) {
                res.send(question)
            } else {
                res.send('no Question Id')
            }
        } catch (e) {
            console.log(e)
        }


    }

    module.exports = {addQuestion, getAllQuestions,getQuestion};