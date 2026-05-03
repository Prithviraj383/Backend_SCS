const jwt = require("jsonwebtoken")

async function authArtist(req, res, next){

    const token = req.cookies.token
    
    if(!token){
        return res.status(401).json({message: "Unauthorised"})
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(decoded.role !== "artist"){
            return res.status(403).json({message: "You dont have access to create a music"})
        }

        req.user = decoded
    }catch(err){
        console.log(err)

        return res.status(401).json({message: "Unauthorised"})
    }

    next()
}

module.exports = {authArtist}