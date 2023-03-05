const cloudinary = require('cloudinary').v2;
const path = require('path');
const applicationDirectory = path.dirname(require.main.filename);
console.log("applicationDirectory", applicationDirectory)
const util = require('node:util');

//cloudinary returns a promise
//this function returns a URL string 
const uploadImage = async (req, res) => {
    const uploadedFile = req.files.file[0];
    const filename = uploadedFile.filename;
    pathname = `${applicationDirectory}/uploads/${filename}`;
    try {
        const photo = await cloudinary.uploader.upload(pathname, {
            use_filename: true,
            unique_filename: false
        });
        console.log('after cloudinary upload', photo)

        return await cloudinary.url(photo.public_id, {
            width: 400,
            quality: 'auto',
            fetch_format: 'auto',
            secure: true
        });

    } catch (error) {
        console.log('uploadImage error', JSON.stringify(error))
        throw new Error(error);
    }
};


module.exports = { uploadImage };
