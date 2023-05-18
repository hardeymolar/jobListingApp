const express = require('express')
const { createProfile, updateProfile } = require('../controllers/candidate/profile')
const {
    createAward, createEdu, createResume, createWae,
    updateAward, updateEdu, updateResume, updateWae,
    deleteEdu, deleteResume, deleteWae, deleteAward
} = require('../controllers/candidate/resume')

const router = express.Router()

router.route('/profile').patch(updateProfile)

router.route('/resume/award').post(createAward)
router.route('/resume/award/:id').patch(updateAward).delete(deleteAward)

router.route('/resume/edu').post(createEdu)
router.route('/resume/edu/:id').patch(updateEdu).delete(deleteEdu)

router.route('/resume/wae').post(createWae)
router.route('/resume/wae/:id').patch(updateWae).delete(deleteWae)

router.route('/resume').patch(updateResume).delete(deleteResume).post(createResume)


module.exports = router