const router = require('express').Router();
const Pictures = require('../../models/Pictures');
const uploader = require('../../utils/upload');
const path = require('path');
const multer = require('multer');
const User = require('../../models/User');
const Service = require('../../models/Services');


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

router.post('/', upload.fields([{ name: 'file' }]), async (req, res) => {
    try {
        uploadedFile = req.files.file[0];
        filename = uploadedFile.filename;
        type = 'pfp';
        url = await uploader.uploadImage(filename, type);
        const user = await User.update(
            {
                profile_picture: url,
            },
            {
                where: {
                    id: req.session.user_id,
                }
            });
        
            const service = await Service.update(
                {
                    service_picture: url,
                },
                {
                    where: {
                        user_id: req.session.user_id,
                    }
                });
        
        res.redirect('/profile');
    } catch (error) {
        console.log('uploadRoutes.js error', error);
        throw new Error(error);
    }
});

router.get('/', async (req, res) => {
    res.render('upload');
});

module.exports = router
