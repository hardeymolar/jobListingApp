require('dotenv').config()
const jwt = require('jsonwebtoken')
const {UnauthenticatedError} = require('../errors')



const auth = async (req,res,next)=>{
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new UnauthenticatedError('unthentication invalid')
    }
    const token = authHeader.split(' ')[1]
    try {
        const payload = jwt.verify(token,process.env.JWTSECRET)
        req.user = {userId:payload.userId,name:payload.name}
        next()
    } catch (error) {
        throw new UnauthenticatedError('unthentication invalid')
    }
}

module.exports = auth