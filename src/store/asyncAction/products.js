import { productsLoadAction } from "../reducer/productsReducer";

const productsURL = 'https://dummyjson.com/products';

export const asynkLoadProductsAction = async (dispatch) => {
    const resp = await fetch (productsURL);
    const data = await resp.json();
    
    
    dispatch(productsLoadAction(data.products))
    }