const BASKET_INCR = 'BASKET_INCREMENT'
const BASKET_DECR = 'BASKET_DECREMENT'
const defaultState = [
    {
        id:1,
        count: 3
    },
    {
        id:2,
        count: 32
    },
    {
        id:3,
        count: 8    
    }
]

    export const basketIncrementAction = (payload) => {
    return {
        type: BASKET_INCR,
        payload
    }
   }
   export const basketDecrementAction = (payload) =>{
    return {
        type: BASKET_DECR,
        payload
    }
   }
   export const basketReducer = (state=defaultState,action) => {
    if (action.type === BASKET_DECR) {
        const target = state.find(({id}) => id === action.payload);
        target.count--
        if (target.count === 0) {
            state = state.filter (({id}) => id !== action.payload)
        } 
        return [...state]     
        
    } else if (action.type === BASKET_INCR) {
        const target = state.find(({id}) => id === action.payload);
        target.count++
        return [...state]
    }
        return state  
    }

    