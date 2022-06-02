const userModel = require('../models/user');


const uploadAvatar = async (id, data) => {
   
    const doc = await userModel.findOne({ _id: id });
    
    // if there isn't such id return unknown user
    if(!doc){
        return { status: 'unknown user'};
    };

    const filePath = `/uploads/${data.filename}`;
    const avatar = await userModel.findOneAndUpdate(
        { _id: id }, { avatar: filePath });

    return {status: 'ok', payload: avatar }
}

const updateName = async (id, data) => {

}

module.exports = {
    uploadAvatar,
    updateName,
}