const productRepository = require('../Repositories/productsRepository')
const ordersRepository = require('../Repositories/ordersRepository')


const getProducts = async () => {
    result = {}
    const { data: products } = await productRepository.getProducts()
    const { orders } = await ordersRepository.getOrders();
    console.log(orders);
    return {
        "products": 
            products.map(product => {
                const order = orders.find(order => order.productid == +product.id)
                return {
                    "id": product.id, "title": product.title,
                    "orders": order ? order : {}
                }
            })
    }
}

module.exports = { getProducts }