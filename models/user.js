require('dotenv').config()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'please provide name'],
        maxlength: 100
    },
    email:{
        type:String,
        required:[true,'please provide email'],
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'please provide valid email'],
        unique:true
    },
    password:{
        type:String,
        maxlength:50,
        required:true
    },
    role:{
        type:String,
        enum:['candidate','employer'],
        required:true,
        default:'candidate'
    },
    oauth:{
        type:String,
        enum:['yes','no'],
        default:'no',
        required:true
    }
})
userSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})
userSchema.methods.createJwt = function(){
    const token = jwt.sign({userId:this._id,name:this.name},process.env.JWTSECRET,{expiresIn:process.env.JWTLIFETIME})
    return token;
};
userSchema.methods.comparePassword = async function(providedPassword){
    const verifyPassword = bcrypt.compare(providedPassword,this.password)
    return verifyPassword
}

module.exports = mongoose.model('user',userSchema)