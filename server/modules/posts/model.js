const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MODEL_NAME = 'posts';

const _schema = {
    text: String,
    createdAt: {
        type:Date,
        default: new Date()
    }
};

const Model = mongoose.model(MODEL_NAME, new Schema(_schema));

module.exports = Model;