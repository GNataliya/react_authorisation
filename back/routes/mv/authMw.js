const authCtrl = require('../../controllers/authorisation.js');

// for checking user id on every page and get user id

module.exports = function (req, res, next) {
    console.log('cookies', req.cookies, req.body);
    const { JWT } = req.cookies;      // get user token from front (cookies)
    
    // // if there isn't user token
    if(!JWT){                           
        res.json({ status: 'unauthorisate'});
        return;
    }
    
    const checkResult = authCtrl.checkAndDecode(String(Object.keys(JWT))); // get profile from db by id session    
    
    


    // const tokenCheck = tokensCtrl.checkTokenAndDecode(accessT);
    // if( id !== tokenCheck.id) {
    //     return res.json({ status: 'users not matches' });
    // };

    next();
};