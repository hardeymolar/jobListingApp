const user = require('../models/user')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')

const register = async (req, res, next) => {
    try {
        const USER = await user.create({ ...req.body })
        const token = USER.createJwt()
        const email = USER.email
        req.user = { userId: USER._id, User: USER }
        req.email = email
        next()
    } catch (error) {
        console.log(error);
    }
}
const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new BadRequestError('please provide email and password')
    }
    const USER = await user.findOne({ email })
    if (!USER) {
        throw new UnauthenticatedError('please provide a vailid email')
    }
    const isPaswordCorrect = await USER.comparePassword(password);
    if (!isPaswordCorrect) {
        throw new UnauthenticatedError('incorrect password')
    }
    const token = USER.createJwt()
    res.status(StatusCodes.OK).json({ USER, token: token })
}
const gRegister = async (req, res,next) => {
    const profile = req.user.profile
    const info = {
        name: profile.given_name,
        email: profile.email,
        password: profile.family_name,
        oauth: 'yes'
    }
    const User = await user.create({...info})
    const token = User.createJwt()
    const email = User.email
    req.user = { userId: User._id, User: User }
    req.email = email
    next()
}


module.exports = { login, register,gRegister }