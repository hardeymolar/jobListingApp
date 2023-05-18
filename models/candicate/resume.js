const mongoose = require('mongoose')

const educationSchema = new mongoose.Schema({
  institution: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  fieldOfStudy: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date
  },
  description: {
    type: String,
    maxlength: 50,
    default:''
  }
});
const WAESchema = new mongoose.Schema({
  role: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date
  },
  description: {
    type: String,
    maxlength: 50,
    default:''
  }
})
const awardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  DateAwarded: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    maxlength: 50,
    default:''
  }
})

const resumeSchema = new mongoose.Schema({
  cv: String,
  description: {
    type: String,
    maxlength: 120,
    default:''
  },
  education: [educationSchema],
  workAndExprerience: [WAESchema],
  awards: [awardSchema],
  skills: {
    type: String,
    enum: ['banking', 'retail', 'human resources', 'management', 'account & finance', 'digital', 'creative art'],
    default:''
  }
})

const education = mongoose.model('education', educationSchema)
const wae = mongoose.model('WAE', WAESchema)
const awards = mongoose.model('awards', awardSchema)
const resume = mongoose.model('resume', resumeSchema);

module.exports = { education, wae, awards, resume }