const mongoose = require('mongoose')

const socialSchema = new mongoose.Schema({
    facebook: {
        type: String,
        default: ''
    },
    linkedin: {
        type: String,
        default: ''
    },
    twitter: {
        type: String,
        default: ''
    },
    googlePlus: {
        type: String,
        default: ''
    },
})

const contactSchema = new mongoose.Schema({
    country: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    compeleteAddress: {
        type: String,
        default: ''
    },
    findOnMap: {
        type: String,
        default: ''
    },
    latitude: {
        type: String,
        default: ''
    },
    longitude: {
        type: String,
        default: ''
    },
})



const ProfileSchema = new mongoose.Schema({
    profileImage: {
        type: String,
        default: ''
    },
    fullname: {
        type: String,
        default: ''
    },
    jobTitle: {
        type: String,
        default: ''
    },
    phoneno: {
        type: String,
        default: ''
    },
    website: {
        type: String,
        default: ''
    },
    experience: {
        type: Number,
        default: 0
    },
    age: {
        type: Number,
        default: 0
    },
    educationLevel: {
        type: String,
        default: ''
    },
    languages: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'please provide valid email'],
    },
    currentSalary: {
        type: String,
        enum: ['40-70k', '50-80k', '60-90k', '70-100k', '100-150k','NAN'],
        default:'NAN'
    },
    expectedSalary: {
        type: String,
        enum: ['40-70k', '50-80k', '60-90k', '70-100k', '100-150k', '120-350k','NAN'],
        default:'NAN'
    },
    categories: {
        type: String,
        enum: ['banking', 'retail', 'human resources', 'management', 'account & finance', 'digital', 'creative art','NAN'],
        default:'NAN'
    },
    allowSearchAndListing: {
        type: String,
        enum: ['yes', 'no'],
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user'],
    },
    social: socialSchema,
    contact: contactSchema
})

const social = mongoose.model('social', socialSchema)
const contact = mongoose.model('contact', contactSchema)
const profile = mongoose.model('profile', ProfileSchema)


module.exports = { social, contact, profile }