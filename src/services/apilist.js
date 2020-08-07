import {baseUrl} from "../constant";


 
 const apiList ={
     getAllProducts : `${baseUrl}/product/getall`,
     userRegistration : `${baseUrl}/authentication/register`,
     userLogin : `${baseUrl}/authentication/login`,
     enquiryList :`${baseUrl}/inquiry/user`,
     createEnquiry:`${baseUrl}/inquiry/create`,
     updateProfile:`${baseUrl}/users/update`,
     imageUpload:`${baseUrl}/users/upload`
 }
 export default apiList