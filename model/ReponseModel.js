const {Schema,model} = require('mongoose');
const ObjectId =Schema.ObjectId;

const ReponseSchema = new Schema({
    user_id: {
        type:ObjectId,
        required:true,
        ref:'User'
    },
    question_id:{
        type:ObjectId,
        required:true,
        ref:'Question'
    },
    response: {
        type:String,
        required:true,
    },
    date: {
        type:Date,
        default: Date.now()
    }


})

const Response = model("Response",ReponseSchema);

module.exports = Response;