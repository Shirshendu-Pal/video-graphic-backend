
const express = require("express");
const mongoose = require("mongoose");

require("./db/conn");

const Student = require("./models/student");

const app = express();
const port = 8080;

app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  )
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE,OPTIONS");
  next();
  
})

app.use(express.json());

app.post("/registerStudent", async (req, res) => {
  try{
      const user = new Student(req.body);
      console.log(req.body);
      const createUser = await user.save();
      res.status(201).send(createUser)
  }catch(error){

    error = error.toString();
    if(error.indexOf("duplicate") >= 0){
      res.status(400).send("duplicate");
    }else{
      res.status(400).send("the error is: "+error);
    }

    //res.status(400).send("the error is: "+error);

    
  }




  
});

app.get("/getStudent", async (req, res) => {
  try{
    
      
      const findUser = await Student.find();
      res.send(findUser);
  }catch(error){

   
      res.send("the error is: "+error);
    

    //res.status(400).send("the error is: "+error);

    
  }




  
});
app.get("/viewStudent/:id", async (req, res) => {
  try{

     
     

     var id = req.params.id;
     
     console.log(id);
      //console.log(objectId);
      const viewUser = await Student.find({_id : id});
      res.send(viewUser);
  }catch(error){

   
      res.send("the error is: "+error);
    

    //res.status(400).send("the error is: "+error);

    
  }




  
});


app.delete("/deleteStudent/:id", async (req, res) => {
  try{

     
     

     var id = req.params.id;
     
     //console.log(id);
      //console.log(objectId);
      const deleteUser = await Student.deleteOne({_id : id});
      res.send(deleteUser);
  }catch(error){

   
      res.send("the error is: "+error);
    

    //res.status(400).send("the error is: "+error);

    
  }




  
});


app.put('/editStudent/:id', function(req, res) {
	// create mongose method to update a existing record into collection
	let id = req.params.id;
	var data = {
		name : req.body.name,
		email : req.body.email,
		phone : req.body.phone,
		address : req.body.address,
	}
 
	// save the user
	Student.findByIdAndUpdate(id, data, function(err, student) {
	if (err) throw err;
 
	res.send('Successfully! Employee updated - '+student.name);
	});
});






app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});






