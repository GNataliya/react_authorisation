const fs = require('fs');
const path = require('path'); 
const multer = require('multer');

const imgUploads = path.resolve('public/uploads');

const storageImg = multer.diskStorage({
    destination: (req, file, cb) => {
    //   cb(null, path.join(__dirname, '../public/uploads/'));
      cb(null, imgUploads);
    },
    filename: (req, file, cb) => {
      //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname);
    }
  });
  
const fileFilter = (req, file, cb) => {
    // reject a file
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === "image/jpg"){
        cb(null, true);
        //cb(new Error('wrong file extention'), true)
    } else {
        cb(null, false);
    }
};



const upload = multer({
    storage: storageImg, 
    limits: {fileSize: 1024 * 1024 * 5},
    fileFilter: fileFilter
});

const uploadsSingle = upload.single('avatar');


module.exports = {
    uploadsSingle
};