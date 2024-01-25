// import Teachermodel from "../models/Teacherdata.js"

// class AddteacherController {

//    static createDoc=async (req,res) => {
//     console.log(req.body)
//     try{
//       const {name,age,salary,schoolname,district} = req.body //destructuring
//       const doc=new Teachermodel({
//          name:name,
//          age:age,
//          salary:salary,
//          schoolname:schoolname,
//          district:district
//       })
//       //saving document
//       const result=await doc.save()
//       res.redirect('Addteacher')


//     }catch(err){ 
//       console.log(err)
//     }
   
//    }
   
//   //  static editDoc=(req,res) => {
//   //     res.render('/editteacher',)
//   //  }

//   //  static updateDocById=(req,res) => { 

//   //   res.render('/addteacher')
//   //  }

//   static getAllDoc= (req,res) => {
//     res.render('Addteacher')
//   }


// }
// export {AddteacherController}

import Teachermodel from "../models/Teacherdata.js";

class AddteacherController {

  static createDoc = async (req, res) => {
    console.log(req.body);
    try {
      const { name, age, salary, schoolname, district } = req.body; // destructuring
      const doc = new Teachermodel({
        name: name,
        age: age,
        salary: salary,
        schoolname: schoolname,
        district: district
      });
      // saving document
      const result = await doc.save();
      res.redirect('Addteacher');
      // Respond to the client
      res.status(201).json({
        success: true,
        message: 'Data submitted successfully!',
        data: result
      });

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

  static getAllDoc = (req, res) => {
    res.render('Addteacher');
  }
}


export {AddteacherController};