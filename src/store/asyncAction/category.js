// import axios from "axios";

import { categoriesLoadAction } from "../reducer/categoriesReducer";

const categoryURL = 'https://dummyjson.com/products/categories';

// const getCategory = () => {
//     const request = axios.get(categoryURL)
    
//     return request
//     .then(res => res)
//     .catch(err => console.log(err)); 
// }

// export default {
//     getCategory
    
// }


export const asynkLoadCategoriesAction = async (dispatch) => {
const resp = await fetch (categoryURL);
const data = await resp.json();
// console.log(data);

dispatch(categoriesLoadAction(data))
}