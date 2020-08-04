import React, { useLayoutEffect } from 'react'
import {Card} from 'react-bootstrap'
import {imageUrl} from "../constant"

import {setProduct} from "../redux/actions/productActions"
export const ProductCard = (product,props) => {
    console.log(props);
   let img1,img2;
    if(product.product){
         img1 = product.product.images[0].replace('public','');
         if(product.product.images[1])img2 = product.product.images[1].replace('public','');
    }
    const onSetProduct = (id)=>{
            if(id){
                setProduct(id);
               
            }
    }
    
    return(
        <div className="col-md-3 col-sm-6" style={{marginTop:"20px"}}>
        <div className="product-grid">
            <div className="product-image">
                <a href={`/product/${product.product._id}`} onClick={onSetProduct(product.product._id)}>
                    <img className="pic-1" src={`${imageUrl}/${img1}`} />
                    {img2 &&  <img className="pic-2" src={`${imageUrl}/${img2}`} />}
            
                </a>
            </div>
            
            <div className="product-content">
    <h3 className="title"><a href={`/product/${product.product._id}`}>{product.product.name}</a></h3>
                <div className="price">₹{product.product.price}
                    {/* <span>$20.00</span> */}
                </div>
                <a className="add-to-cart" href="">+ Add To Cart</a>
            </div>
        </div>
    </div>
    
                       
    )
}

export default ProductCard