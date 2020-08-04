import axios from 'axios'
import apiList from "./apilist";

export const getEnquiryList = id => axios.get(apiList.enquiryList +`/${id}`)
export const CreateEnquiry = body => axios.post(apiList.createEnquiry, {...body})