import { SET_USER, UNSET_USER, SET_CART,SET_ERRORS } from "./types";
import setAuthToken from '../../utils/setAuthToken';
import {registerUser,loginUser,updateUserDetails} from "../../services/auth"
import jwt_decode from 'jwt-decode';
// Login - Get User Token
export const logUser = userData => dispatch => {
   loginUser(userData)
      .then(res => {
        console.log(res);
        // Save to localStorage
        const { token } = res.data;
        // Set token to ls
        localStorage.setItem('jwtToken', token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        delete res.data.user.password;
        dispatch(setUser(res.data.user));
      })
      .catch(err =>
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data
        })
      );
     
  };
  export const regUser = userData => dispatch => {
    registerUser(userData)
      .then(res => {
          console.log(res);
        // Save to localStorage
        const { token } = res.data;
        // Set token to ls
        localStorage.setItem('jwtToken', token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        delete res.data.user.password;
        dispatch(setUser(res.data.user));
      })
      .catch(err =>{
          console.log({err})
          if(err.response.data){
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data
        });}
      }
      );
  };

  export const updateUser = userData => dispatch =>{
    updateUserDetails(userData).then(res=>{
      delete res.data.data.password;
      dispatch(setUser(res.data.data));
    }).catch(err =>{
      console.log({err})
      if(err.response.data){
    dispatch({
      type: SET_ERRORS,
      payload: err.response.data
    });}
  }
  );
  }
  // Set logged in user
  export const setUser = decoded => {
    return {
      type: SET_USER,
      payload: decoded
    };
  };

  // Log user out
  export const logoutUser = () => dispatch => {
    console.log("logut");
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch({
      type:UNSET_USER,
      payload:{}
    });
  };