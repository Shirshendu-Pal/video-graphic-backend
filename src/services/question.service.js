const httpStatus = require("http-status");
const { User, Token, Category, Question } = require("../models");
const ApiError = require("../utils/ApiError");

const addQuestion = async (reqFile) =>{

    const body = reqFile.body
    const uploadString = `uploads/${reqFile.file.filename}`

    const category = await Question.create({
        ...body,
        image:uploadString
    })


    return category;
}

const allQuestion = async ({filters}) =>{

    const categories = await Category.find(filters)
    return categories;
}

const questionDetails = async ({questionId}) =>{
    const category = await Category.findById(questionId)
    return category;
}

module.exports  ={
    addQuestion,
    allQuestion,
    questionDetails
}