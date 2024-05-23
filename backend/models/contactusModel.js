const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contactSchema = new Schema({
    name:{
        required : true,
        type : String
    },
    email:{
        type : String,
        required : true
    },
    query:{
        type : String,
        required : true
    }

}, {timestamps : true})

module.exports = mongoose.model('Contact', contactSchema)