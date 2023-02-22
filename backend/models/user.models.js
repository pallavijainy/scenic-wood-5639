
const mongoose  = require("mongoose")

const userSchema = mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    confirmPass:{type:String,require:true},
    number:{type:Number,require:true},
    
},
{versionKey:false}

);

const userModel = mongoose.model("user" , userSchema)


module.exports ={userModel}