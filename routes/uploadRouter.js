const express = require('express')
const multer = require('multer')
const { uploadFiles } = require('../controllers/uploadController')

const router = express.Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split('.').pop()
    cb(null, `${Date.now()}.${ext}`)
  }
})

const upload = multer({ storage })

router.post('/', upload.array('images'), uploadFiles)

module.exports = router