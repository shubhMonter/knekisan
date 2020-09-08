import React from 'react'
import ProductCard from './productcard'
import {Modal,Button} from "react-bootstrap"
import {imageUrl} from "../constant"
import {setProduct} from "../redux/actions/productActions"
import EnquiryForm from "./enquiryForm"
export const ProductList = (products,...props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalPro, setModalPro] = React.useState('');
   let list;
    if(products){
       list =Object.values(products)[0]
    }
    const onSetProduct = (id)=>{
        if(id){
            setProduct(id);
           
        }
}
    console.log(list);
    return(
        <div className="container section">
            <div className="row">
                {
                   list.filter(f=>{if(f.status=='Active')return f}).map(i=>{
                       console.log(i);
                       let img1,img2;
                            if(i){
                                img1 = i.images[0].replace('public','');
                                if(i.images[1])img2 = i.images[1].replace('public','');
                            }
                        return(<div className="col-md-3 col-sm-6" style={{marginTop:"20px"}}>
                        <div className="product-grid">
                            <div className="product-image">
                                <a href={`/product/${i._id}`} onClick={onSetProduct(i._id)}>
                                    <img className="pic-1" src={`${imageUrl}/${img1}`} />
                                    {img2 &&  <img className="pic-2" src={`${imageUrl}/${img2}`} />}
                            
                                </a>
                            </div>
                            
                            <div className="product-content">
                    <h3 className="title"><a href={`/product/${i._id}`}>{i.name}</a></h3>
                                {i.priceBycenters && 
                                i.priceBycenters.slice(0,2).map(x=>
                                    (
                                    <div className="price">
                                        {x.center}:₹{x.price}
                                        </div>
                                        )
                                        )}
                                <a className="add-to-cart" onClick={()=>{setModalShow(true);setModalPro(i._id);}}>+ Add To Cart</a>
                            </div>
                        </div>
                    </div>)
                    })
                }
            </div>
            <Modal
               show={modalShow}
               onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Enquiry Form
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EnquiryForm product={modalPro} />
            </Modal.Body>
            </Modal>           
    </div>

    )
}

export default ProductList