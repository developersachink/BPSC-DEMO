import mongoose from 'mongoose';

//defining schema
const teacherSchema=new mongoose.Schema({ 
name:{type:"String", required:"true",trim:"true "},
age:{type:"Number", required:"true",min:18,max:60},
salary:{type:"Number", required:"true" },
schoolname:{type:"String", required:"true",trim:"true "},
district:{type:"String", required:"true", trim:"true"}
})

//defining model
const Teachermodel=mongoose.model("Teacher",teacherSchema);

export default Teachermodel