const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    jobTitle: String,
    phoneno: String,
    industry: String,
    experience: Number,
    username: String,
    qualification: String,
    gender: {
        type: String,
        enum: ['male', 'female', 'others']
    },
    jobDescription: {
        type: String,
        maxlength: 100
    },
    email: {
        type: String,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'please provide valid email'],
    },
    offeredSalary: {
        type: String,
        enum: ['40-70k', '50-80k', '60-90k', '70-100k', '100-150k', '120-350k']
    },
    jobType: {
        type: String,
        enum: ['banking', 'retail', 'human resources', 'management', 'account & finance', 'digital', 'creative art']
    },
    specialism: {
        type: String,
        enum: ['banking', 'retail', 'human resources', 'management', 'account & finance', 'digital', 'creative art']
    },
    appDDate: Date,
    country: String,
    city: String,
    compeleteAddress: String,
    findOnMap: String,
    latitude: String,
    longitude: String
})

module.exports  = mongoose.model('profile', ProfileSchema)


