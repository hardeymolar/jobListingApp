const mongoose = require('mongoose')

const socialSchema = new mongoose.Schema({
    facebook: String,
    linkedin: String,
    twitter: String,
    googlePlus: String
})

const contactSchema = new mongoose.Schema({
    country: String,
    city: String,
    compeleteAddress: String,
    findOnMap: String,
    latitude: String,
    longitude: String
})


const ProfileSchema = new mongoose.Schema({
    profileImage: String,
    coverImage: String,
    companyname: String,
    estSince: Date,
    phoneno: String,
    website: String,
    aboutCompany: String,
    teamSize: {
        type: String,
        enum: ['50-100', '100-150', '200-250', '300-350', '500-1000']
    },
    email: {
        type: String,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'please provide valid email'],
    },
    multipleSelect: {
        type: String,
        enum: ['banking', 'retail', 'human resources', 'management', 'account & finance', 'digital', 'creative art']
    },
    allowSearchAndListing: {
        type: String,
        enum: ['yes', 'no']
    },
    social: socialSchema,
    contact: contactSchema
})

const social = mongoose.model('social', socialSchema)
const contact = mongoose.model('contact', contactSchema)
const profile = mongoose.model('profile', ProfileSchema)


module.exports = { social, contact, profile }