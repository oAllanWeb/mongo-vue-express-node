const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MODEL_NAME = 'pessoas';

const _schema = {
  name: {
    type: String,
    required: true,
    index: { unique: true }
  },
  email: {
    type: String,
    required: true,
    index: { unique: true }
  },
  password: {
    type: String,
    required: true
  },
  crateAt: {
    type: Date,
    default: Date.now
  },
  updateAt: {
    type: Date,
    default: Date.now
  },
  roles: {
    type: [
      {
        type: String,
        enum: ["user", "admin", "staff"]
      }
    ],
    default: ["user"]
  },
  status: {
    type: [
      {
        type: String,
        enum: ["ativo", "inativo", "aguardando", "deletado"]
      }
    ],
    default: ["aguardando"]
  }
};

const Model = mongoose.model(MODEL_NAME, new Schema(_schema));

module.exports = Model;