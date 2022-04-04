const Products = require("../models/products")

const findById = async (id) => {
  try {
    const product = await Products.updateOne(id)
    return {
      success: true,
      data: product
    };
  } catch (err) {
    return {
      success: false,
      error: err || 'error'
    }
  }
}

const findAll = async ()=>{
  // to do
  try{
    const find = await Products.findAll({})
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
        const {title, category, item, user, imageUrl, desc} = params
      const newProduct = {
        title,category,item,user,imageUrl,desc
      }
      const createProduct = await Products.create(newProduct)
      return {
        success:true,
        data:createProduct
      }
  }
  catch(err){
    return{
      success:false,
      error:err||"error"
    }
  }
  
}

const update = async (params) => {
  // to do
  try{
    const {id,title1,category1,item1,user1,imageUrl1,desc1}=params
    const newValue = {$set:{title:title1,category:category1,item:item1,user:user1,imageUrl:imageUrl1,desc:desc1}}

    const update = await Products.updateOne(id,newValue)
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
  // to do
  try{
    const cate = await Products.deleteOne(id)
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

module.exports = {
  findById,
  update,
  remove,
  findAll,
  create
}