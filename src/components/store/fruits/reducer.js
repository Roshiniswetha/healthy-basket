import { GET_ALL_PRODUCTS, GET_SINGLE_PRODUCT, ADD_TO_CART, UPDATE_CART, DELETE_CART } from "./actionTypes";

const initialState = {
    numberOfItems: 0,
    cartItems:[],
    products:[],
    product:[],
    isLoading: false,
    isLoaded: false,
}


function reducer(state=initialState,action){
    switch(action.type){
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }
        case GET_SINGLE_PRODUCT:
            return {
                ...state,
                product: action.payload,
            }
        default: return
    }
}

export default reducer;

