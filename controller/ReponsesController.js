const Response = require('../model/ReponseModel')
const Question = require('../model/QuestionModel')
const {user} = require("express-session");
const addResponse = async(req,res) => {
    try {
        const question_id = req.params.id;

        const { response } = req.body;
    console.log( req.session.user)
    const userId = req.session.user._id;

    const addResponse = new Response({
          user_id :userId,
          question_id:question_id,
          response:response
    })

    await addResponse.save();

    res.status(200).redirect(`/response/${question_id}`)
            } catch (e) {
        console.log(e)
    }
}

const getResponses = async(req,res) => {
try {
    const {question_id} = req.params;

    const question = await Question.findById(question_id);

    const responses = await Response.find({question_id}).populate(
        [
        "user_id",
        "question_id"
        ]
    )
    console.log(responses)
    res.render("questions",{responses, question})
} catch (e) {
    console.log(e)
}
}

module.exports = {addResponse,getResponses}