import { createStore , combineReducers, applyMiddleware } from 'redux';
import { categoriesReducer } from './reducer/categoriesReducer';
import thunk from 'redux-thunk';
import { productsReducer } from './reducer/productsReducer';


const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer
    })
export const store = createStore(rootReducer, applyMiddleware(thunk));