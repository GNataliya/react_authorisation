const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;

require('./user');

const generalSchema = new Schema ({
    title: {
        type: Schema.Types.String,
        minlength:2,
        maxlength:200,          
    },
    person: [{
      type: Schema.Types.ObjectId,
      ref: 'user'  
    }],
    start: {
        type: Schema.Types.Date,
        required: true,
    },
    finish: {
        type: Schema.Types.Date
    },
    createDate: {
        type: Schema.Types.Date,
        default: Date.now
    },
});


//const model = mongoose.model('article', generalSchema);
const modelname = path.basename(__filename, '.js');   // название модели совпадает с названием файла модели.
// получаем имя файла без расширения .js
const model = mongoose.model(modelname, generalSchema); // создаем модель
module.exports = model;
