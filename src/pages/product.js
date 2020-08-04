import React ,{Component} from 'react'
import  ProductInfo from "../component/productinfo"
import {connect} from 'react-redux'
import {getProducts} from '../redux/actions/productActions'
 class Product extends Component {
   constructor(props) {
      super(props);
      this.state={
          product:[],
          hist:this.props.history
      }
  }
  componentWillReceiveProps(nextProps){
      let id = this.props.match.params.id;
      if(id && nextProps.products){
        let pro = nextProps.products.find(i=>i._id ==id);
        this.setState({product:pro});
      }
  }
    render(){
      console.log(this.props,this.state);
         return(<>
            <ProductInfo product={this.state.product} hist={this.state.hist}/>
         </>)
     }
 }

 const mapStateToProps = (state) => ({
   products: state.products.products
})

export default connect(mapStateToProps,{getProducts})(Product)