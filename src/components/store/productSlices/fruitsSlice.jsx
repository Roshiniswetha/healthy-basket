import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import { FRUITSURL } from "./constants";

const fruitSlice = createSlice({
    name: 'fruitSlice',
    initialState: {
        numberOfItems: 0,
        // cartItems:[],
        fruits:[],
        fruit:[],
        isLoading: false,
        isLoaded: false,
    },
    reducers: {
        getAllFruits: (state,action) => {
            state.fruits.push(action.payload)
        }
    }
})


export const onFruitsPageLoad = () => {
    return function(dispatch) {
        fetch(FRUITSURL,{
            method:'GET',
            headers:{'Content-type': 'application/json; charset=UTF-8','Access-Control-Allow-Origin':'*'},
        }).then(response=>response.json())
        .then(data=>{
            console.log(data)
            dispatch(fruitsActions.getAllFruits(data));
        })
            .catch(err=>console.log(err))
        }
}

export const fruitsActions = fruitSlice.actions;
export default fruitSlice