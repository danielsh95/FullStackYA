const ProductModel = require('../Models/ProductModel')


const getAllProducts = () => {
    return ProductModel.find();
}

const addProduct = (name, price) => {
    const product = new ProductModel({ name: name, price: price });
    return product.save();
}

const editProduct = (oldName, name, price) => {
    return ProductModel.findOneAndUpdate(
        { "name": oldName },
        { "name": name, "price": price }
    );
}

module.exports = { getAllProducts, addProduct, editProduct }