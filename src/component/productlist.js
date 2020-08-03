import React from 'react'
import ProductCard from './productcard'
export const ProductList = (products,...props) => {
   let list;
    if(products){
       list =Object.values(products)[0]
    }
    return(
        <div className="container section">
            <div className="row">
                {
                   list.map(i=>{
                       console.log(i);
                        return(<ProductCard product={i}/>)
                    })
                }
            </div>
    </div>

    )
}

export default ProductList