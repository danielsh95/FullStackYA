const productsDB = require('../Repositories/productsDB')

const getAllProducts = () => {
    return productsDB.getAllProducts()
}

const getProduct = async (id) => {
    return await productsDB.getProduct(id)
}

const addNewProduct = (product) => {
    productsDB.addNewProduct(product);
    return 'Added!'
}

const updateProduct = async (product) => {
    await productsDB.updateProduct(product);
    return 'Updated!'
}

const deleteProduct = async (id) => {
    await productsDB.deleteProduct(id);
    return 'Deleted!'
}

module.exports = { getAllProducts, getProduct, addNewProduct, updateProduct, deleteProduct }