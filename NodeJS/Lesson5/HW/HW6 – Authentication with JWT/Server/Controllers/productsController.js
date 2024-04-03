const express = require('express')
const productService = require('../Services/products')

const router = express.Router()



router.get('/', async (req, res) => {
    const token = req.headers['x-access-token']
    const data = await productService.getAllProducts(token)
    res.send(data)
})

router.post('/addProduct', async (req, res) => {
    const { name, price } = req.body;
    const response = await productService.addProduct(name, price);
    console.log(response);
    res.send({response});
})

router.post('/editProduct', async (req, res) => {
    const { oldName, name, price } = req.body;
    const response = await productService.editProduct(oldName, name, price);
    console.log(response);
    res.send({response});
})


module.exports = router