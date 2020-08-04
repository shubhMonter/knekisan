import React from 'react'
import classNames from 'classnames'
import { Table, Accordion, Card, Button,Modal } from "react-bootstrap"
import { imageUrl } from "../constant"
import EnquiryForm from "../component/enquiryForm"
var _ = require('lodash');
export const ProductInfo = (product, hist,...props) => {
    console.log({props});
    console.log(hist);
    const [modalShow, setModalShow] = React.useState(false);
    let img1
    if (product.product.images) {
        img1 = product.product.images[0].replace('public', '');
    }
    const groups = _.groupBy(product.product.qualityParameters, 'qualityParameter')
              
    return (
        <div className="container section">
            <div className="row product-info" style={{ padding: "50px 0px" }}>
                <div className="col-md-6 col-sm-12 product-image">
                    <img className="pic-1" src={`${imageUrl}/${img1}`} />

                </div>
                <div className="col-md-6 col-sm-12" >
                    <div className="title">
                        <h4>{product.product.name}</h4>
                        <div className="price">₹{product.product.price}
                            {/* <span>$20.00</span> */}
                        </div>
                    </div>
                    <div className="description">
                        {product.product.description}
                    </div>
                    <div className="" id="accordion-style-1">

                        <div className="col-12 mx-auto">
                            <div className="accordion" id="accordionExample">
                                
                                
                               { product.product.qualityParameters &&
                                   Object.keys(groups).map((card,index)=>{
                                       console.log(card,index);
                                        return(
                                            <div className="card">
                                            <div className="card-header" id={`heading${index}`}>
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                                                        <i className="fa  main"></i><i className="fa fa-angle-double-right mr-3"></i>{card}
                                                                </button>
                                                </h5>
                                            </div>
        
                                            <div id={`collapse${index}`} className={classNames("collapse fade",{ 'show':index==0})} aria-labelledby={`heading${index}`} data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <div className="parameter">
                                                        <Table borderless hover size="sm" >
                                                            <thead>
                                                                <tr>
                                                                    <th>Maximum</th>
                                                                    <th>Minimum</th>
                                                                    <th>Deduction</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {groups[card].map( i=>{
                                                                    return(<tr>
        
                                                                    <td>{i.maximum}</td>
                                                                    <td>{i.minimum}</td>
                                                                    <td>{i.deduction}</td>
                                                                </tr>)
                                                                })}
                                                               
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    })
                             
                                }
                                 </div>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <a className="button" onClick={() => setModalShow(true)}>Send Enquiry</a>
                    </div>
                </div>
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
                <EnquiryForm product={product.product._id} history={hist}/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setModalShow(false)}>Close</Button>
            </Modal.Footer>
            </Modal>                 
        </div>
    )
}

export default ProductInfo