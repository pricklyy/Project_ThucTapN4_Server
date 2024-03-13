const User = require("../model/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const  authControllers ={
    //REGISTER
    registerUser: async(req, res) =>{
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);

            // Create new user
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
                numberPhone: req.body.numberPhone,
                xKey: req.body.xKey,
                wallID:req.body.wallID,

            });

            //save
            console.log(req.body)
            const user = await newUser.save();
            console.log(user)
            res.status(200).json(user)
        }catch (err) {
            res.status(500).json(err)
        }
    },

    //Login
    loginUser: async (req, res) => {
        try {
            console.log(req.body);
            
            const user = await User.findOne({email: req.body.email});
            if (!user){
                return res.status(404).json("Wrong email!");
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!validPassword){
                return res.status(404).json("Wrong password")
            }
            if (user && validPassword){
                res.status(200).json(user);
            }
        }catch (err){
            res.status(404).json(err)
        }
    }
};

module.exports = authControllers;
