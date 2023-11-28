const User = require('../model/UserModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('email:' + email + ' password' + password);

        const user = await User.findOne({ email: email });

        if (user) {
            const result = await bcrypt.compare(password, user.password);

            if (result) {
                req.session.user = user;
                await req.session.save();
                res.redirect('/questions')
                // res.redirect('/');
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const register = async(req,res) => {
     try {
       const { name,email, password } = req.body;
        console.log(name,email,password)
        const allUsers = User.find({})
        console.log(allUsers);
        let hashedPassword = await bcrypt.hash(password,saltRounds);
        const newUser = new User({
               name:name,
               email:email,
               password:hashedPassword,
        })

        await newUser.save();


         res.status(201).redirect('/login')
     } catch(e) {
          console.log(e);
     }
}


module.exports = {
     login,
     register,
}