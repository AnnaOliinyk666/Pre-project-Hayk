const PRODUCTS_LOAD = 'PRODUCTS_LOAD'
const PRODUCTS_SEARCH_FILTER = 'PRODUCTS_SEARCH_FILTER'
const PRODUCTS_RESET_FILTER = 'PRODUCTS_RESET_FILTER'
const PRODUCTS_SORT_PRICE = 'PRODUCTS_SORT_PRICE'

export const productsLoadAction = (payload) => ({type: PRODUCTS_LOAD, payload});
export const productsSearchAction = (payload) => ({type: PRODUCTS_SEARCH_FILTER, payload});
export const productsResetAction = () => ({type: PRODUCTS_RESET_FILTER});
export const productsSortPriceAction = (payload) => ({type: PRODUCTS_RESET_FILTER, payload});

export const productsReducer = (state=[],action) => {
    if (action.type === PRODUCTS_LOAD) {
        return action.payload.map(item => ({...item, show:true}))
    } else if(action.type === PRODUCTS_SEARCH_FILTER){
        return state.map(item => ({
            ...item,
            show: item.title.toLowerCase().startsWith(action.payload.toLowerCase())
        }));
    }else if(action.type === PRODUCTS_RESET_FILTER){
        return state.map(item => ({
            ...item,
            show: true
        }));
        
    }else if(action.type === PRODUCTS_SORT_PRICE){
        if (action.payload === 1) {
            return state.sort((a,b) => {a - b} )
        } else {
            return state.sort((a,b) => {b - a} )
        }
    }
        return state
        
    }