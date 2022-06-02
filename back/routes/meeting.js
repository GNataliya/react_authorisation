const express = require('express');
const axios = require('axios');
const multer = require('multer');
const upload = multer();
const router = express.Router();

const meetingCtrl = require('../controllers/meeting.js');

router.post('/participants', upload.none(), async (req, res) => {
    

    const participants = await meetingCtrl.findUsers();
    console.log('getUsers in route', participants)
    // const participants = getUsers.map(user => user.name);
    // const { name } = getUsers;
    // console.log('getUsers', participants );
    
    // const user = await meetingCtrl.findUsersById();
    // console.log('user', user)
    
    // if([ 'unknown user', 'invalid password' ].includes(result.status)){
    //     res.json({ status: 'fail authorisation'});
    //     return;
    // }
    
    // res.cookie('JWT_accessT', accessToken, /*secure, httpOnly*/ );
    // res.json({ status: 'ok', user: payload, /*accessToken,*/ refreshToken });
    res.json({ stats: 'ok', participants })
});


module.exports = router;