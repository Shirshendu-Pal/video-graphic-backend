const httpStatus = require("http-status");
const { User, Token, Category } = require("../models");
const ApiError = require("../utils/ApiError");

const addCategory = async (reqFile) =>{

    const body = reqFile.body
    const uploadString = `uploads/${reqFile.file.filename}`

    const category = await Category.create({
        ...body,
        image:uploadString
    })


    return category;
}

const allCategories = async ({filters}) =>{

    const categories = await Category.find(filters)
    return categories;
}

const categoryDetails = async ({categoryId}) =>{
    const category = await Category.findById(categoryId)
    return category;
}

module.exports  ={
    addCategory,
    allCategories,
    categoryDetails
}