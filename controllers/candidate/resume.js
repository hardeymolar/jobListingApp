const { education, wae, awards, resume } = require('../../models/candicate/resume')
const { StatusCodes } = require('http-status-codes')



// resume controller
const createResume = (req, res) => {
    res.send('resume created')
}
const updateResume = (req, res) => {
    res.send('resume created')
}
const deleteResume = (req, res) => {
    res.send('resume created')
}

// work and experience controller

const createWae = (req, res) => {
    res.send('resume created')
}
const updateWae = (req, res) => {
    res.send('resume created')
}
const deleteWae = (req, res) => {
    res.send('resume created')
}

//education  controller

const createEdu = (req, res) => {
    res.send('resume created')
}
const updateEdu = (req, res) => {
    res.send('resume created')
}
const deleteEdu = (req, res) => {
    res.send('resume created')
}

// awards controller

const createAward = (req, res) => {
    res.send('resume created')
}
const updateAward = (req, res) => {
    res.send('resume created')
}
const deleteAward = (req, res) => {
    res.send('resume created')
}



module.exports = {
    createAward, createEdu, createResume, createWae,
    updateAward, updateEdu, updateResume, updateWae,
    deleteEdu, deleteResume, deleteWae, deleteAward
}