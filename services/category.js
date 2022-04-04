const Categories = require("../models/categories")

const findById = async (id) => {
  // to do
  try{
    const cate = await Categories.findById(id)
    return{
      success:true,
      data:cate
    }
  }
  catch(err){
    return{
      success:false,
      error:err
    }
  }
  
}

const findAll = async () => {
  // to do
  try{
    const find = await Categories.findAll({})
    return{
      success:true,
      data:find
    }
  }
  catch(err){
    return{
      success:false,
      error:err
    }
  }
}

const create = async (params) => {
  // to do
  try{
    const {name,desc,imageUrl}=params

    const newCategory = {
      name,
      desc,
      imageUrl
    }

    const createCategory = await Categories.create(newCategory)
    return{
      success:true,
      data:createCategory
    }
  }
  catch(err){
    console.log(err)
    return{
      success:false,
      error:err || "error"
    }
  }

}

const update = async (params) => {
  // to do
  try{
    const {id,name1,desc1,imageUrl1}=params
    const newValue = {$set:{name:name1, desc:desc1, imageUrl:imageUrl1}}

    const update = await Categories.updateOne(id,newValue)
    return{
      success:true,
      data:update
    }
  }
  catch(err){
    return{
      success:false,
      error:err
    }
  }
}

const remove = async (id) => {
  // to doF
  try{
    const cate = await Categories.deleteOne(id)
    return{
      success:true
    }
  }
  catch(err){
    return{
      success:false,
      error:err
    }
  }
}
const findCategoriezedItem = async()=>{
  return await Categories.aggregate([
    {
      $lookup:{
        from:"item",
        localField:"_id",
        foreignField:"category",
        as:"items"
      }
    },
    {
      $project:{
        _id:1,
        name:1,
        desc:1,
        imageUrl:1,
        items:{
          _id:1,
          name:1,
          category:1,
          desc:1
        }
      }
    }
  ])
}

module.exports = {
  findById,
  update,
  remove,
  findAll,
  create,
  findCategoriezedItem
}