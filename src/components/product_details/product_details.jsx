import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../product_card/product_card";



const ProductDetails = () => {
    const location = useLocation();
    let productId = location.state.productId;
    const [product, setProduct] = useState(null)
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(json => { setProduct(json) })



    }, [])
    return (
        <div className="d-flex" >
            <ProductCard productId={product?.id} title={product?.title} imageUrl={product?.image} description={product?.description}>

            </ProductCard>
            <div>
                <h1 className="my-5">
                    {product?.description}
                </h1>

            </div>

        </div>
    )
}

export default ProductDetails   