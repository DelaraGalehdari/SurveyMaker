const mongoose = require('mongoose');
const { Schema } = mongoose;
const recipientScheme=require('./Recipient');

const surveyScheme=new Schema({
   title:String,
   body:String,
   subject:String,
   recipients:[recipientScheme],
   //number of time someone votes
   yes:{type:Number,default:0},
   no:{type:Number,default:0},
   //refrence to a particular user
   _user:{type:Schema.Types.ObjectId,ref:'User'},
   dateSent:Date,
   lastResponded:Date
});
mongoose.model('surveys',surveyScheme);