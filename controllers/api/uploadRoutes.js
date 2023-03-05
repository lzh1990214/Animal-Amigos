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
var url = '';

router.post('/pfp', upload.fields([{ name: 'file' }]), async (req, res) => {
    try {
        uploadedFile = req.files.file[0];
        filename = uploadedFile.filename;
        type = 'pfp';
        url = await uploader.uploadImage(filename, type);
        console.log('in uploadRoutes.js', url);
        res.status(200).json(url);
    } catch (error) {
        console.log('uploadRoutes.js error', error);
        throw new Error(error);
    }
});







module.exports = router
