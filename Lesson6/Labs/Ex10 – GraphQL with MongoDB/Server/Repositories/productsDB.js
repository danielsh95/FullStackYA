const productsModel = require('../Models/productsModel')

const getAllProducts = () => {
    return productsModel.find()
}

const getProduct = (args) => {
    const { id } = args;
    return productsModel.findOne({ "id": id })
}

const addNewProduct = (args) => {
    const { product } = args
    console.log(product);
    const newProduct = new productsModel(product);
    newProduct.save();
}

const updateProduct = async (args) => {
    const { product } = args
    return await productsModel.findOneAndUpdate(
        { "id": product.id },
        {
            "id": product.id,
            "name": product.name,
            "color": product.color,
            "price": product.price,
        }
    );    
}

const deleteProduct = async (args) => {
    const { id } = args
    return await productsModel.findOneAndDelete({"id": id});
}

module.exports = { getAllProducts, getProduct, addNewProduct, updateProduct, deleteProduct }