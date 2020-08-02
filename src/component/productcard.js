import React from 'react'
import {Card} from 'react-bootstrap'
export const ProductCard = (props) => {
    return(
        <div className="col-md-3 col-sm-6" style={{marginTop:"20px"}}>
        <div className="product-grid">
            <div className="product-image">
                <a href="#">
                    <img className="pic-1" src="https://i.pinimg.com/originals/31/2a/7c/312a7c028144168bf49485ee92daa4c7.jpg" />
            
                </a>
            </div>
            
            <div className="product-content">
                <h3 className="title"><a href="#">Veg Titles</a></h3>
                <div className="price">$16.00
                    <span>$20.00</span>
                </div>
                <a className="add-to-cart" href="">+ Add To Cart</a>
            </div>
        </div>
    </div>
    
                       
    )
}

export default ProductCard