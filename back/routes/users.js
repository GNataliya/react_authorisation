const express = require('express');
const router = express.Router();
const axios = require('axios');
const multer = require('multer');
const upload = multer();


const checkAuthMw = require('./mv/authMw.js');
const userCtrl = require('../controllers/userProfile.js');
const { uploadsSingle } = require('../controllers/images.js');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.post('/', checkAuthMw );


// upload Avatar
router.post('/upload', uploadsSingle, async (req, res) => {
  // console.log('req.file', req.file);
  
  const { id } = req.body;
  const data = req.file;
  const avatar = await userCtrl.uploadAvatar(id, data);
 
  res.json({ status: 'ok', payload: avatar });
  //   res.json({ status: 'file uploaded', avatar });

  // try{
  //   if(req.file){
    // const { filename } = req.file;
    // const image = `/imgs/${filename}`;
  //     res.json(req.file)
  //   }
  // } catch (error) {
  //   console.log();
  // }

});

module.exports = router;
