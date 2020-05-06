const mongoose = require('mongoose')

const standupSchema = new mongoose.Schema({
    studentname :{type:String},
    studentid:{type:String},
    studentdept:{type:String},
    studentemail:{type:String},

})

module.exports=mongoose.model('Standup',standupSchema)