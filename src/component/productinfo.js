import React from 'react'
import { Table, Accordion, Card, Button } from "react-bootstrap"

export const ProductInfo = (props) => {
    return (
        <div className="container section">
            <div className="row product-info" style={{ padding: "50px 0px" }}>
                <div className="col-md-6 col-sm-12 product-image">
                    <img className="pic-1" src="https://i.pinimg.com/originals/31/2a/7c/312a7c028144168bf49485ee92daa4c7.jpg" />
                </div>
                <div className="col-md-6 col-sm-12" >
                    <div className="title">
                        <h4>Product Title</h4>
                        <div className="price">$16.00
                    <span>$20.00</span>
                        </div>
                    </div>
                    <div className="description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit impedit velit magni
                        facilis aliquid, hic, cumque porro qui eius laborum aperiam facere tempore voluptatum
                        minima dolores architecto doloribus rerum dignissimos odit veritatis. Sunt quidem simi
                        lique et vitae harum natus minima!
                   </div>
                    <div className="" id="accordion-style-1">

                        <div className="col-12 mx-auto">
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <i className="fa fa-amazon main"></i><i className="fa fa-angle-double-right mr-3"></i>Product Title
							                            </button>
                                        </h5>
                                    </div>

                                    <div id="collapseOne" className="collapse show fade" aria-labelledby="headingOne" data-parent="#accordionExample">
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
                                                        <tr>

                                                            <td>Mark</td>
                                                            <td>Otto</td>
                                                            <td>@mdo</td>
                                                        </tr>
                                                        <tr>

                                                            <td>Jacob</td>
                                                            <td>Thornton</td>
                                                            <td>@fat</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td >Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                <i className="fa fa-amazon main"></i><i className="fa fa-angle-double-right mr-3"></i>Product Title
							                            </button>
                                        </h5>
                                    </div>

                                    <div id="collapseTwo" className="collapse  fade" aria-labelledby="headingTwo" data-parent="#accordionExample">
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
                                                        <tr>

                                                            <td>Mark</td>
                                                            <td>Otto</td>
                                                            <td>@mdo</td>
                                                        </tr>
                                                        <tr>

                                                            <td>Jacob</td>
                                                            <td>Thornton</td>
                                                            <td>@fat</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td >Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                <i className="fa fa-amazon main"></i><i className="fa fa-angle-double-right mr-3"></i>Product Title
							                            </button>
                                        </h5>
                                    </div>

                                    <div id="collapseThree" className="collapse  fade" aria-labelledby="headingThree" data-parent="#accordionExample">
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
                                                        <tr>

                                                            <td>Mark</td>
                                                            <td>Otto</td>
                                                            <td>@mdo</td>
                                                        </tr>
                                                        <tr>

                                                            <td>Jacob</td>
                                                            <td>Thornton</td>
                                                            <td>@fat</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td >Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingFour">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                                <i className="fa fa-amazon main"></i><i className="fa fa-angle-double-right mr-3"></i>Product Title
							                            </button>
                                        </h5>
                                    </div>

                                    <div id="collapseFour" className="collapse  fade" aria-labelledby="headingOne" data-parent="#accordionExample">
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
                                                        <tr>

                                                            <td>Mark</td>
                                                            <td>Otto</td>
                                                            <td>@mdo</td>
                                                        </tr>
                                                        <tr>

                                                            <td>Jacob</td>
                                                            <td>Thornton</td>
                                                            <td>@fat</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td >Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <a className="button" href="">Send Enquiry</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductInfo