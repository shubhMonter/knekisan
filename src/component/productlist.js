import React from 'react'
import ProductCard from './productcard'
export const ProductList = (props) => {
    let product =[1,2,3,4,5,6]
    return(
        <div className="container">
        <div className="row">
            {
                product.map(i=>{
                    return(<ProductCard />)
                })
            }
        </div>
    </div>

    )
}

export default ProductList