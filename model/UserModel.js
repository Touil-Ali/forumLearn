const { Schema,model } = require('mongoose');


const UserSchema =  new Schema({
    nom: String,
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type:String,
        required:true,
    }

})

const User = model('User',UserSchema)

module.exports = User;