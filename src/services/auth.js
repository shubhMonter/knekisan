import apiList from "./apilist";
import axios from "axios";


export const registerUser       = body              => axios.post(apiList.userRegistration, {...body})
export const loginUser          = body              => axios.post(apiList.userLogin, {...body})
// export const getUserDetails     = userId            => axios.get(apiList.getUserDetails+userId)
 export const updateUserDetails  = body              => axios.post(apiList.updateProfile, {...body})
 export const updateImage  = (id,body)              => axios.post(apiList.imageUpload+`/${id}`, body, { headers: {'content-type': 'multipart/form-data'  }})
// export const updateUserPassword = body              => axios.post(apiList.updateUserPassword, {...body})
// export const getOrders          = userId            => axios.get(apiList.orderList+userId)
// export const forgotPassword     = body              => axios.post(apiList.forgotPassword, {...body, firststep: "aa"})
// export const setForgotPassword  = body              => axios.post(apiList.forgotPassword, {...body})