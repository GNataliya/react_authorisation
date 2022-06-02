const express = require('express');
const axios = require('axios');
const multer = require('multer');
const upload = multer();
const router = express.Router();

const authCtrl = require('../controllers/authorisation.js');

router.post('/login', upload.none(), async (req, res) => {
    
    const { email, pwd } = req.body;

    const result = await authCtrl.login(email, pwd);

    const { payload, accessToken, refreshToken } = result;
    
    if([ 'unknown user', 'invalid password' ].includes(result.status)){
        res.json({ status: 'fail authorisation'});
        return;
    }
    
    res.cookie('JWT_accessT', accessToken, /*secure, httpOnly*/ );
    res.json({ status: 'ok', user: payload, /*accessToken,*/ refreshToken });
});

// for checking user id on every page and get user id
router.post('/checkUserToken', upload.none(), async (req, res) => {
    
    const accessToken = req.body;      // get user token from front
    
    // if there isn't user token
    if(!accessToken){                           
        res.json({ status: 'unauthorisate'});
        return;
    }
    
    const checkResult = await authCtrl.checkAndDecode(String(Object.keys(accessToken))); // get profile from db by id session    
    
    res.json({ status: 'ok', payload: checkResult });
});

// for checking user id on every page and get user id
router.post('/refreshToken', upload.none(), async (req, res) => {
    
    const { accessToken, refreshToken } = req.body;
    
     //if there isn't user token
    if(!accessToken){                           
        res.json({ status: 'unauthorisate'});
        return;
    }
    
    const checkAndRefresh = await authCtrl.updateTokens(accessToken, refreshToken);
    
    // const checkResult = await authCtrl.checkAndDecode(String(Object.keys(accessToken))); // get profile from db by id session    
    // console.log('rout checkAndRefresh', checkAndRefresh)
    res.json({ status: 'ok', payload: checkAndRefresh });
});

// create user doc in db
router.post('/signup', upload.none(), async (req, res) => {
    
    const { email, pwd, name, city } = req.body;

    const isEmail = await authCtrl.checkEmail(email);
   
    if (isEmail.status === 'email already declarated'){
        res.json({ status: 'dublicate_email' })
        return;
    };

    const createNewUser = await authCtrl.createUser( email, pwd, name, city );
    
    const { profile, accessToken } = createNewUser.payload;
    
    res.cookie('JWT', accessToken, /*secure, httpOnly*/ );
    res.json({ status: 'ok', user: profile  });
    // res.json({ status: 'ok', user: profile, accessToken  });
});

// router.post('/logout', (req, res) => {
//    
// });

module.exports = router;
