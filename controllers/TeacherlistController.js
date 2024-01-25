
import Teachermodel from "../models/Teacherdata.js";
class TeacherlistController {
  static getAllDoc = async (req, res) => {
    try {
      const result=await Teachermodel.find()
       //console.log(result)
      res.render("Teacherlist", {data: result})


    } catch (err) {
      console.log(err);
    }
    
  };

  static editDoc = async (req, res) =>{
    // console.log(req.params.id)
    try {
      const result = await Teachermodel.findById(req.params.id)
       console.log(result)
      res.render("edit", {data:result})
    } catch (error) {
      console.log(error)
    }
    
    
  }
  // Update Document
  static updateDocById = async (req, res) =>{
    // console.log(req.params.id)
    // console.log(req.body)
    try {
      const result = await Teachermodel.findByIdAndUpdate(req.params.id, req.body)
      // console.log(result)
    } catch (error) {
      console.log(error)
    }
    res.redirect("/Teacherlist")
  }

  // Delete Document
  static deleteDocById = async (req, res) =>{
    // console.log(req.params.id)
    try {
      const result = await Teachermodel.findByIdAndDelete(req.params.id)
      res.redirect("/Teacherlist")
    } catch (error) {
      console.log(error)
    }  
  }

  
}
export { TeacherlistController };
