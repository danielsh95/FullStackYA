const productWSRepository = require('../Repositories/productsWS')

const getAllProducts = async () => {
    const {data: allProducts} = await productWSRepository.getProducts()
    const jsonProductsOfIdAndTitle = allProducts.map(product => {
        return { id: product.id, title: product.title }
    });
    return jsonProductsOfIdAndTitle;
}

module.exports = { getAllProducts }