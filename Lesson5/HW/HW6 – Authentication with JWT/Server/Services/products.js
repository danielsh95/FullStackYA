const productDB = require('../Repositories/productsDb')
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'some_key';

const CheckTokenVerify = (token) => {
    return jwt.verify(token, SECRET_KEY, (err, data) => {
        if (err) {
            console.log('Error, getting a fake token');
            return false
        }

        //Here the token is verify!
        console.log('Successfully verified the token!');
        return true
    })
}

const getAllProducts = async (token) => {
    if (CheckTokenVerify(token)) {
        const allProducts = await productDB.getAllProducts();
        return allProducts;
    }

    return "Error, Token not verify!"
}


async function addProduct(name, price) {
    await productDB.addProduct(name, price)
    return 'added successfuly!'
}

async function editProduct(oldName, name, price) {
    await productDB.editProduct(oldName, name, price)
    return 'Edit successfuly!'
}

module.exports = { getAllProducts, addProduct, editProduct }