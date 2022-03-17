
// const express = require("express");
// const mongoose = require("mongoose");
// const httpStatus = require("http-status");

// const dotenv = require('dotenv');

// const jwt = require("jsonwebtoken");

// require("./db/conn");

// const path = require('path');



// const User = require("./models/user.model");
// //const { path } = require("express/lib/application");

// dotenv.config({ path: path.join(__dirname, '../.env') });

// const app = express();
// const port = process.env.SERVER_PORT;

// app.use(function(req, res, next) {

//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   )
//   res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE,OPTIONS");
//   next();
  
// })

// app.use(express.json());

// app.post("/register", async (req, res) => {
//   try{
//       const user = new User(req.body);
//       console.log(req.body);
//       const createUser = await user.save();
//       res.status(httpStatus.OK).json({ success: true, createUser })
//   }catch(error){

//     error = error.toString();
//     if(error.indexOf("duplicate") >= 0){
//       res.status(400).send("duplicate");
//     }
//     else{
//       res.status(400).send("the error is: "+error);
//     }

    
//   }

// });


// app.post("/login", async (req,res) => {
//   try {
//     const findUser = await User.findOne({email: req.body.email})
//     if(req.body.email == findUser.email && req.body.password == findUser.password){
//       const token = await findUser.generateAuthToken();
//       // console.log(token);
//       res.status(httpStatus.OK).json({success: true, findUser})
//     }else{
//       res.status(400).send("wrong email ");
//     }
    
//   } catch (error) {
//     res.status(400).send("the error is: "+error);
//   }
 
// })

// // app.get("/getStudent", async (req, res) => {
// //   try{
    
      
// //       const findUser = await Student.find();
// //       res.send(findUser);
// //   }catch(error){

   
// //       res.send("the error is: "+error);
    

// //     //res.status(400).send("the error is: "+error);

    
// //   }

 




  
// // });

// // const nullUser = [({
// //     name: "null",
// //     email: "null",
// //     phone: "null",
// //     address: "null"
// // })]

// // app.get("/searchStudent/:name", async (req,res)=>{

// //   try{
    
// //     var name = req.params.name;

    
      
// //     const findUser = await Student.find({name: name });
// //       // console.log(findUser.toString());
   
// //       if(findUser.toString().length>0){
// //         res.send(findUser);
// //       }else{
// //         res.send(nullUser)
// //       }
      
   
    
// // }catch(error){

 
// //     res.send("the error is: "+error);
  

// //   //res.status(400).send("the error is: "+error);

  
// // }
    
// // });

// // app.get("/viewStudent/:id", async (req, res) => {
// //   try{

     
     

// //      var id = req.params.id;
     
// //      console.log(id);
// //       //console.log(objectId);
// //       const viewUser = await Student.find({_id : id});
// //       res.send(viewUser);
// //   }catch(error){

   
// //       res.send("the error is: "+error);
    

// //     //res.status(400).send("the error is: "+error);

    
// //   }




  
// // });


// // app.delete("/deleteStudent/:id", async (req, res) => {
// //   try{

     
     

// //      var id = req.params.id;
     
// //      //console.log(id);
// //       //console.log(objectId);
// //       const deleteUser = await Student.deleteOne({_id : id});
// //       res.send(deleteUser);
// //   }catch(error){

   
// //       res.send("the error is: "+error);
    

// //     //res.status(400).send("the error is: "+error);

    
// //   }




  
// // });


// // app.put('/editStudent/:id', function(req, res) {
// // 	// create mongose method to update a existing record into collection
// // 	let id = req.params.id;
// // 	var data = {
// // 		name : req.body.name,
// // 		email : req.body.email,
// // 		phone : req.body.phone,
// // 		address : req.body.address,
// // 	}
 
// // 	// save the user
// // Student.findByIdAndUpdate(id, data, function(err, student) {
// // 	if (err) throw err;
 
// //   // res.send(student);
 
// // 	res.send('Successfully! Employee updated - '+student.name);
// // 	});
// // });






// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });





