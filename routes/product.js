var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();
const productService = require('../services/product');

router.get('/:id', auth.ensureSignedIn, async function (req, res, next) {
  const { id } = req.params;
  
  res.json(await productService.findById({id}));
})

router.post('/create', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  const {title, category, item, user, imageUrl, desc} = req.body
  const result = await productService.create({
    title,category,item,user,imageUrl,desc
  })
  res.json(result);
})

// all users
router.get('/all',async (req, res) => {
  // to do
  const result = await productService.findAll({})
  res.json(result);
})

router.post('/update', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  const {id,title,category,item,user,imageUrl,desc} = req.body
  const result = await productService.update({id,title,category,item,user,imageUrl,desc})
  res.json(result);
})

router.post('/delete', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  const {id} = req.body
  const result =await productService.remove({id})
  res.json(result);
})

module.exports = router