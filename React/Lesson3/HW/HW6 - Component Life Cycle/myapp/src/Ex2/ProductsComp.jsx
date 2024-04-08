import { useState, useEffect } from "react"
import axios from "axios"
import { getAllData } from "./../utils"

const url_users = 'https://fakestoreapi.com/users'
const url_carts = 'https://fakestoreapi.com/carts'
const url_products = 'https://fakestoreapi.com/products'


export const ProductsComp = () => {

    const [products, setProducts] = useState([{ id: 0, name: '', email: '', productsImg: ['productUrlImg1', ''] }])

    useEffect(() => {

        const fetchEffect = async () => {

            const users = await getAllData(url_users)
            const carts = await getAllData(url_carts)
            const productss = await getAllData(url_products)
            const outData = users.map(user => {

                const AllProductsIdOfUser = carts.filter(cart => cart.userId == user.id)
                    .flatMap(cart => cart.products).map(product => product.productId)

                const productsImg = productss.filter(product => AllProductsIdOfUser.includes(product.id))


                return {
                    userId: user.id,
                    name: user.name.firstname + user.name.lastname,
                    email: user.email,
                    productsImg: productsImg.map(product => product.image)
                }
            })
            setProducts(outData)
            console.log(outData);
        }
        fetchEffect()
    }, [])

    return (
        <div style={{ backgroundColor: 'darkgrey', width: '400px' }}>
            <table border={2}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Products</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((data, index) => {
                            return <tr key={index} >
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>
                                    <div>
                                        {
                                            data.productsImg ? data.productsImg.map((product, index2) => {
                                                return <img key={index2} src={product} width={25} height={25} />
                                            }) : null
                                        }
                                    </div>

                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductsComp