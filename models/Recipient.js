const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientScheme=new Schema({
    email:String,
    responded:{type:Boolean,default:false}
});
module.exports=recipientScheme;