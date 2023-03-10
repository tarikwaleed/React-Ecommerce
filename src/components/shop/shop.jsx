import axios from 'axios'
import ProductCard from '../product_card/product_card'
import { useState } from 'react'

const Shop = () => {
    const [products, setProducts] = useState(null)
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => { setProducts(json) })
    return (
        <div className='d-flex flex-wrap justify-content-center '>
            {products?.map(product => {
                return (
                    <ProductCard productId={product.id} price= {product.price} rating={product.rating.rate} title={product.title} imageUrl={product.image} description={product.description}>

                    </ProductCard>
                )
            })}
        </div>
    )
}

export default Shop