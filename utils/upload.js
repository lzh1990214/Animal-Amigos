const cloudinary = require('cloudinary').v2;
const path = require('path');
const applicationDirectory = path.dirname(require.main.filename);
console.log("applicationDirectory", applicationDirectory)
const util = require('node:util');
var url;

//cloudinary returns a promise
//this function returns a URL string 
async function uploadImage(filename) {
    pathname = `${applicationDirectory}/uploads/${filename}`;
    try {
        const photo = cloudinary.uploader.upload(pathname, {
            use_filename: true,
            unique_filename: false
        });
        console.log('after cloudinary upload', photo)
        await photo.then(result => {
            console.log('result in upload.js', result);
            url = result.secure_url;
            console.log('url in upload.js', url);
        });



    } catch (error) {
        console.log('uploadImage error', JSON.stringify(error))
        throw new Error(error);
    }
    return url;
};



module.exports = { uploadImage, url: url };
