import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import { GETDAILYESSENTIALSURL } from "./constants";

const dailyEssentialSlice = createSlice({
    name: 'dailyEssentialSlice',
    initialState: {
        numberOfItems: 0,
        // cartItems:[],
        dailyEssentials:[],
        dailyEssential:[],
        isLoading: false,
        isLoaded: false,
    },
    reducers: {
        getAllDailyEssentials: (state,action) => {
            state.dailyEssentials.push(action.payload)
        }
    }
})


export const onDailyEssentialsPageLoad = () => {
    return function(dispatch) {
        fetch(GETDAILYESSENTIALSURL,{
            method:'GET',
            headers:{'Content-type': 'application/json; charset=UTF-8','Access-Control-Allow-Origin':'*'},
        }).then(response=>response.json())
        .then(data=>{
            console.log(data)
            dispatch(dailyEssentialsActions.getAllDailyEssentials(data));
        })
            .catch(err=>console.log(err))
        }
}

export const dailyEssentialsActions = dailyEssentialSlice.actions;
export default dailyEssentialSlice