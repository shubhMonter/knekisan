import { SET_ENQUIRY_LIST, UNSET_ENQUIRY_LIST } from "../actions/types";

const initialState = {
    enquiries: [],
    enquiry:{}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SET_ENQUIRY_LIST:
        return {
          ...state,
          enquiries: action.payload
        };
    case UNSET_ENQUIRY_LIST:
        return{
            ...state,
            enquiries:action.payload
        }
      default:
        return state;
    }
  }