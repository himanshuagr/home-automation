const config= require('../config/jsontoken')
const jwt= require ('jsonwebtoken')

module.exports = function(req, res, next){
    const token=req.header('x-auth-token')
    if (!token) return res.status(401).send("Access Denied. Token not provided")
    try{
        const decodedTokenData=jwt.verify(token, config.jwtPrivateKey)
        req.user=decodedTokenData

        next();
    }
    catch(exception) {
        res.status(400).send("Token not valid")
    }
}