import axios from 'axios'
import apiList from "./apilist";

export const getAllProducts = ()    => axios.get(apiList.getAllProducts)