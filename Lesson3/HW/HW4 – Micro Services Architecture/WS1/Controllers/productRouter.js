const express = require('express')
const productsService = require('../Services/productsService')

const router = express.Router()

router.get('/', async (req, res) => {
    const products = await productsService.getProducts()
    res.send(products);
})

module.exports = router