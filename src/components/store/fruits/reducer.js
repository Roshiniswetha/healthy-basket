import { GET_ALL_FRUITS, GET_SINGLE_FRUIT, ADD_TO_CART, UPDATE_CART, DELETE_CART } from "./actionTypes";

const initialState = {
    numberOfItems: 0,
    cartItems:[],
    fruits:[],
    fruit:[],
    isLoading: false,
    isLoaded: false,
}


function reducer(state=initialState,action){
    switch(action.type){
        case GET_ALL_FRUITS:
            return {
                ...state,
                fruits: action.payload,
            }
        case GET_SINGLE_FRUIT:
            return {
                ...state,
                fruit: action.payload,
            }
        default: return state
    }
}

export default reducer;

