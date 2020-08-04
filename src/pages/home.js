import React, { Component } from 'react'

import PropTypes from "prop-types"
import Banner from "../component/banner"
import ProductList from "../component/productlist"
import {connect} from 'react-redux'
import {getProducts} from '../redux/actions/productActions'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            show:false,
            products:[]
        }
    }
    componentWillMount(){
        this.props.getProducts();
    }
    render() {
        console.log(this.props);
        return (<>
            <Banner />
            <ProductList products={this.props.products}/>  
        </>)
    }
}
Home.propTypes={
    getProduct:PropTypes.func.isRequired,
    products:PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    products: state.products.products
})

export default connect(mapStateToProps,{getProducts})(Home)