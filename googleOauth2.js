require('dotenv').config()
const passport = require('passport')
const USER = require('./models/user')
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    passReqToCallback: true
},
    function (req, accessToken, refreshToken, profile, done) {
        const user = {
            profile: profile,
            accessToken: accessToken,
            refreshToken: refreshToken
          };
        return done(null, user);
    }
))
    // async function (req, profile, done) {
        //     const info = {
            //         name: profile.given_name,
            //         email: profile.email,
            //         password: profile.family_name,
            //         // role: req.params
            //     }
            //     console.log(profile)
            //     const User = await USER.create(info)
            //     const token = User.createJwt()
            //     console.log(User, { token: token })
            //     // return done(null, profile)
            // }
            






// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: process.env.GOOGLE_CALLBACK_URL,
//     passReqToCallback: true
// },
//     function (request, accessToken, refreshToken, profile, done) {
//         console.log(profile);
//         return done(null, profile);
//     }
// ));
