import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import { VEGETABLESURL } from "./constants";

const vegetableSlice = createSlice({
    name: 'vegetableSlice',
    initialState: {
        numberOfItems: 0,
        // cartItems:[],
        vegetables:[],
        Vegetable:[],
        isLoading: false,
        isLoaded: false,
    },
    reducers: {
        getAllVegetables: (state,action) => {
            state.vegetables.push(action.payload)
        }
    }
})


export const onVegetablesPageLoad = () => {
    return function(dispatch) {
        fetch(VEGETABLESURL,{
            method:'GET',
            headers:{'Content-type': 'application/json; charset=UTF-8','Access-Control-Allow-Origin':'*'},
        }).then(response=>response.json())
        .then(data=>{
            dispatch(vegetablesActions.getAllVegetables(data));
        })
            .catch(err=>console.log(err))
        }
}

export const vegetablesActions = vegetableSlice.actions;
export default vegetableSlice