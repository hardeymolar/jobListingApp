const express = require('express')
const router = express.Router()
const passport = require('passport')

const {login,register,gRegister} = require('../controllers/auth')
const {createProfile} = require('../controllers/candidate/profile')


router.post('/login',login)
router.post('/register',[register,createProfile])

router.get('/', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/callback', passport.authenticate('google',
    { failureRedirect: '/failed' }),[gRegister,createProfile]
);


module.exports = router