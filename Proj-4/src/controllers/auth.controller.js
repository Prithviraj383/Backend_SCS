const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")


async function registerUser(req, res){
    const {username, email, password} = req.body

    const isUserExist = await userModel.findOne({email})

    if(isUserExist){
        return res.status(409).json({
            message:"User already Exists"
        })
    }

    const user = await userModel.create({
        username,
        email,
        password
    })

    const token = jwt.sign({
        _id: user._id,
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message: "User created successfully",
        user,
        token
    })
}

module.exports = { registerUser }