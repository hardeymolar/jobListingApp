const { profile, social, contact } = require('../../models/candicate/profile')
const { StatusCodes } = require('http-status-codes')


const createProfile = async (req, res) => {
    req.body.createdBy = req.user.userId
    req.body.email = req.email
    const USER = req.user.User
    const userProfile = await profile.create(req.body);
    res.status(StatusCodes.CREATED).json({ USER });
}
const updateProfile = async (req, res) => {
    const {
        body: {
            profileImage, fullname, jobTitle,
            phoneno, website, experience,
            age, educationLevel, languages,
            description, email, currentSalary,
            expectedSalary, categories, allowSearchAndListing,
            createdBy, social, contact
        },
        user: { userId }
    } = req;
    const updatedProfile = await profile.findByIdAndUpdate({ createdBy: userId },
        req.body,
        { new: true, runValidators: true });
    res.status(StatusCodes.OK).json({updatedProfile})
}
const createSocial = (req, res) => {
    res.json('candidate profile updated')
}
const updateSocial = (req, res) => {
    res.json('candidate profile updated')
}
const contacts = (req, res) => {
    res.json('candidate profile updated')
}
const updateContact = (req, res) => {
    res.json('candidate profile updated')
}

module.exports = { createProfile, updateProfile }