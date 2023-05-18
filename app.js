require('dotenv').config()
const passport = require('passport')
const session = require('express-session')
const asyncErrors = require('express-async-errors')
const express = require('express')
const app = express();
require('./googleOauth2')


const errorHandlerMiddleware = require('./middlewares/error-handler')
const authenticateUser = require('./middlewares/authentication')


const connectDB = require('./db/connect')

const authRouter = require('./routes/auth')
const candidateRouter = require('./routes/candidate')

app.use(express.json())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }));
  
app.set("view engine", "ejs")

app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
    res.render("pages/index")
})
app.use('/google', authRouter);

app.get('/api/v1',(req,res)=>{
    res.send('job listing api is now live');
})

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/candidate', authenticateUser, candidateRouter);


app.use(errorHandlerMiddleware);

const start = async()=>{
    try {
        await connectDB(process.env.MONGOURI)
        app.listen(5000,
            ()=>console.log(`app is listening on port 5000...`))
    } catch (error) {
        console.log(error);
    }
}

start()