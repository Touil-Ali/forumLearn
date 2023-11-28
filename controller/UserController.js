const User = require('../model/UserModel');

const getAllUsers= async(req,res) => {
    try {
    const users = await User.find({});
            if(users) {
                res.send(users)
            } else {
                res.send('no users found')
            }
    } catch(e) {
        console.log(e)
    }
}

module.exports = getAllUsers;