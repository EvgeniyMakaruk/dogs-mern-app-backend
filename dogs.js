const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
   breedId: { type: String},

})
module.exports = model('Dogs', schema)