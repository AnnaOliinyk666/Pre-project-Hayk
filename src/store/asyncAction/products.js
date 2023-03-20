import { productsLoadAction } from "../reducer/productsReducer";

const productsURL = 'https://fakestoreapi.com/products';

export const asynkLoadProductsAction = async (dispatch) => {
    const resp = await fetch (productsURL);
    const data = await resp.json();
    console.log(data);
    
    dispatch(productsLoadAction(data))
    }