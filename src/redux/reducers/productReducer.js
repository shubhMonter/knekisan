import { SET_PRODUCTS, SET_PRODUCT, CLEAR_PRODUCT } from "../actions/types";



const initialState = {
  products: [],
  product: null,
  featured: [],
  categories: []
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload,
        
      };

    case SET_PRODUCT:
      return {
        ...state,
        product: payload
      };

    case CLEAR_PRODUCT:
      return {
        ...state,
        product: null
      };

    default:
      return state;
  }
};
