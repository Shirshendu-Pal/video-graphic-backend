const httpStatus = require("http-status");
const { User, Token, Category, Question } = require("../models");
const ApiError = require("../utils/ApiError");
const csv = require("csv-parser");
const fs = require("fs");


const getUser = async ({token}) =>{

    const tokenDoc = await Token.findOne({token})
    const user = await User.findById(tokenDoc.user)

    return user;
}
const userDetails = async ({userId}) =>{
    const user = await User.findById(userId)

    return user;
}

const editUser = async (reqFile) =>{
    const uploadString = `uploads/${reqFile.file.filename}`
    const body = reqFile.body;
    const user = await User.findByIdAndUpdate(body.userId,{ 
        ...body,
        profilePic: uploadString
    });

    return user;
}

const addBulkQuestion = async (reqFile) =>{
    let results = [];
    fs.createReadStream(reqFile.file.path)
      .pipe(csv())
      .on("data", (row) => {
        // console.log(row)
        results.push(row);

      }) .on("end", async () => {

        for(let result of results) {

            let category = await Category.findOne({name: result.categoryname.toLowerCase()})

            if(category){
                let question = await Question.create({
                    name: result.questionname,
                })
                question.categories.push(category)
                await question.save()
                category.questions.push(question)
                await category.save()
            }else{

                category = await Category.create({
                   name: result.categoryname
               })
               let question = await Question.create({
                name: result.questionname
                })
                question.categories.push(category)
                await question.save()
               category.questions.push(question)
               await category.save()
            }
        }
      
    });
}


module.exports = {
    getUser,
    userDetails,
    editUser,
    addBulkQuestion

}