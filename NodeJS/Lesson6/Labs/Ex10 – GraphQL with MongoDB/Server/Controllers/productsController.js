const express = require('express')
const { buildSchema } = require('graphql')
const { graphqlHTTP } = require('express-graphql')
const productService = require('../Services/productService')

const router = express.Router()

const schema = buildSchema(`    
    input ProductInput{
    id: Int
    name: String
    color: String
    price: Int
    }

    type Product{
        id: Int
        name: String
        color: String
        price: Int
    }

    type Query{
        getAllProducts:[Product]
        getProduct(id:Int): Product        
    }

    type Mutation {
        addNewProduct(product: ProductInput): String
        updateProduct(product:ProductInput): String
        deleteProduct(id: Int): String
    }
`)

const root = {
    getAllProducts: productService.getAllProducts,
    getProduct: productService.getProduct,
    addNewProduct: productService.addNewProduct,
    updateProduct: productService.updateProduct,
    deleteProduct: productService.deleteProduct
}

router.use('/', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))

module.exports = router