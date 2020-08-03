import React ,{Component} from 'react'
import  ProductInfo from "../component/productinfo"
import {connect} from 'react-redux'
import {getProducts} from '../redux/actions/productActions'
 class Product extends Component {
   constructor(props) {
      super(props);
      this.state={
          products:[]
      }
  }
//   componentWillMount(){
//       this.props.getProducts();
//   }
    render(){
       console.log(this.props);
         return(<>
            <ProductInfo />
         </>)
     }
 }

 const mapStateToProps = (state) => ({
   products: state.products.products
})

export default connect(mapStateToProps,{getProducts})(Product)