const {Schema,model} = require('mongoose');
const ObjectId = Schema.ObjectId
const QuestionSchema = new Schema({

    user_id: {
        type:ObjectId,
        required:true,
        ref:'User'
    },
    question: {
        type:String,
        required:true
    },
    data:{
        type:Date,
        default: Date.now()
    }
})

const Question = model('Question',QuestionSchema)

module.exports = Question;