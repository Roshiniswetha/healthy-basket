import { GET_ALL_VEGETABLES, GET_SINGLE_VEGETABLE } from "./actionTypes";

const initialState = {
    numberOfItems: 0,
    cartItems:[],
    vegetables:[],
    vegetable:[],
    isLoading: false,
    isLoaded: false,
}


function reducer(state=initialState,action){
    switch(action.type){
        case GET_ALL_VEGETABLES:
            return {
                ...state,
                vegetables: action.payload,
            }
        case GET_SINGLE_VEGETABLE:
            return {
                ...state,
                vegetable: action.payload,
            }
        default: return state
    }
}

export default reducer;

