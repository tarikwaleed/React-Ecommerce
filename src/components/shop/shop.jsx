import axios from 'axios'
import ProductCard from '../product_card/product_card'
import { useState } from 'react'

const Shop = () => {
    const [products, setProducts] = useState(null)
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => { setProducts(json) })
    return (
        <div>
            {products?.map(product => {
                return (
                    <ProductCard title={product.title} imageUrl={product.image} description={product.description}>

                    </ProductCard>
                )
            })}
        </div>
    )
}

export default Shop