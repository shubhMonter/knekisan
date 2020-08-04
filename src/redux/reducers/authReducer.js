import { SET_USER, UNSET_USER } from "../actions/types";

const initialState = {
    isAuthenticated: false,
    user: {}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SET_USER:
        return {
          ...state,
          isAuthenticated:true,
          user: action.payload
        };
    case UNSET_USER:
        return{
            ...state,
            isAuthenticated:false,
            user:action.payload
        }
      default:
        return state;
    }
  }