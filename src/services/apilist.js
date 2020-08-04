import {baseUrl} from "../constant";


 
 const apiList ={
     getAllProducts : `${baseUrl}/product/getall`,
     userRegistration : `${baseUrl}/authentication/register`,
     userLogin : `${baseUrl}/authentication/login`,
     enquiryList :`${baseUrl}/inquiry/user`,
     createEnquiry:`${baseUrl}/inquiry/create`
 }
 export default apiList