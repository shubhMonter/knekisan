import { SET_ENQUIRY_LIST, SET_PRODUCT, CLEAR_PRODUCT, GET_PRODUCT } from "./types";
import { getEnquiryList } from "../../services/enquiry";

// export const setProducts = products => dispatch => {
//   // console.log("asdfasdf", products);
//   const parsedProduct = products.products.map(el => addSlugToProduct(el));
//   // console.log({
//   //   parsedProduct
//   // });
//   dispatch({
//     type: SET_PRODUCTS,
//     payload: {
//       ...products,
//       products: parsedProduct
//     }
//   });
// };
export const setProduct = product => dispatch => {
  if (product) {
    dispatch({
      type: SET_PRODUCT,
      payload: product
    });
  } else {
    dispatch({
      type: SET_PRODUCT,
      payload:product
    });
  }
};
export const clearProduct = () => ({
  type: CLEAR_PRODUCT,
  payload: null
});

export const enquiryList = (id) => dispatch => {
 console.log(id);
  getEnquiryList(id)
  .then(res => {
    console.log({res})
    if(res.data && res.data.data){
      dispatch({
        type: SET_ENQUIRY_LIST,
        payload: res.data.data
      })
    }
  })
  .catch(err => {
    console.log({err})
  })
}