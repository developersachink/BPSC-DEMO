import { disconnect } from "mongoose";
import UserModel from "../models/user.js";
import bcrypt from 'bcrypt';

class adminloginController {
  static loginhome = (req, res) => {
    res.render("adminlogin");
  };

  static registration = (req, res) => {
    res.render("register");
  };
  static createUserDoc = async (req, res) => {
    const hashpassword= await bcrypt.hash(req.body.password,10)
    try {
      const { email,mobno,password,confirm_password } = req.body; // destructuring
      const doc = new UserModel({
 
        email: email,
        mobno: mobno,
        password: hashpassword,
        confirm_password: confirm_password,
      });
      console.log(doc);
      //saving document
       const result= await doc.save();
      
       // Respond to the client
       res.status(201).json({
         success: true,
         message: 'Registration successfull',
         data: result
       });
       res.redirect('/adminlogin')
 
     } catch (err) {
       console.error(err);
       // Respond with an error message
       res.status(500).json({
         success: false,
         message: 'Error submitting data. Please try again.',
         error: err.message
       });
      }
    }
     
     
     
    
  
  static login = (req, res) =>{
    res.render("adminlogin")
  }
  static verifylogin= async (req, res) => {
    try{
      const {email,password} = req.body
      const result=await UserModel.findOne({email:email}) //for user
      console.log(result)

      if(result != null)
      if(result.email==email && result.password==password) {
        res.send(`<h1>LOGIN SUCCESS NOW YOU CAN PERFORM ACTION  ${result}  </h1>`);
      
      } else {
        res.send("<h1> invalid user </h1>")
      
      } else {
        res.send("<h1> YOU ARE NOT REGISTERED </h1>")
      }

        
    }catch (error) {
      console.log(error);
    }
  }
}

export { adminloginController };
