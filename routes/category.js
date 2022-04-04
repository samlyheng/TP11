var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();
const categoryService = require('../services/category');

router.get('/:id', auth.ensureSignedIn, async function (req, res, next) {
  const { id } = req.params;
  const result = await categoryService.findById({id})
  res.json(result);
})

router.post('/create', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  const {name, desc, imageUrl} = req.body
  const result = await categoryService.create(name,desc,imageUrl)
  res.json(result);
})

// all users
router.get('/all', async(req, res) => {
  // to do
  const result = await categoryService.findAll({})
  res.json(result);
})

router.post('/update', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  const {id,name,desc,imageUrl} = req.body
  const result = await categoryService.update({id,name,desc,imageUrl})
  res.json(result);
})

router.post('/delete', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  const {id} = req.body
  const result =await categoryService.remove({id})
  res.json(result);
})

router.get('/catergorized-item',async(req,res)=>{
  const result = await categoryService.findCategoriezedItem()
  res.json(result)
})

module.exports = router