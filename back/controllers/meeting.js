const meetingModel = require('../models/meeting.js');
const userModel = require('../models/user');

// get all users
const findUsers = async () => {
    const docs = await userModel.find({ })
    
    const users = docs.map((item) => {
        const user = {
            id: item.id,
            name: item.name
        };
        return user;
    });
    
    
    return users;
};


const findUsersById = async (id) => {
    const doc = await userModel.findById({ id })
    return doc;
}

module.exports = {
    findUsers,
    findUsersById
}