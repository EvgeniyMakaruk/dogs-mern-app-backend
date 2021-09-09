const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
   breed: { type: String },
   title: { type: String },
})
module.exports = model('Breeds', schema)
