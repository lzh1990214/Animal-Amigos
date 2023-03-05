const router = require('express').Router();
const Pictures = require('../../models/Pictures');
const uploader = require('../../utils/upload');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({ storage });

router.post('/', upload.fields([{ name: 'file' }]), uploader.uploadImage);






module.exports = router;