const express = require('express')
const productService = require('../services/productServices')

const router = express.Router()

//Entry point: http://localhost:8000/products

router.use('/', async (req, res) => {
    const data = await productService.getAllProducts()
    console.log(data);
    res.send(data);
})

module.exports = router