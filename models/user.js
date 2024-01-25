import mongoose from 'mongoose';

//defining schema
const userSchema= new mongoose.Schema({

 email:{type:"String",required:"true",trim:true},
 mobno:{type:"Number",required:"true",trim:true},
 password:{type:"String",required:"true",trim:true},
 confirm_password:{type:"String",required:"true",trim:true},
 join:{type:Date ,default:Date.now}
})

// creating Model and compiling schema
const UserModel=mongoose.model('user',userSchema)

export default UserModel