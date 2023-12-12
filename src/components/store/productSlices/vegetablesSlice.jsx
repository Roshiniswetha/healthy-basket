import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import { GETVEGETABLESURL , ADDVEGETABLESURL } from "./constants";
import axios from "axios";

const vegetableSlice = createSlice({
    name: 'vegetableSlice',
    initialState: {
        vegetables:[],
        Vegetable:[],
        isLoading: false,
        isLoaded: false,
    },
    reducers: {
        getAllVegetables: (state,action) => {
            state.vegetables.push(action.payload.data)
        },
    }
})


export const onVegetablesPageLoad = () => {
    return function(dispatch) {
        axios.get(GETVEGETABLESURL)
        .then(response => dispatch(vegetablesActions.getAllVegetables(response)))
        .catch(errors => console.log(errors));
    }
}

export const addVegetables = (body,file) => {
    return function(dispatch) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', body.name);
        formData.append('slogan', body.slogan);
        formData.append('description', body.description);
        formData.append('price', body.price);
        formData.append('quantity', body.quantity);
        formData.append('date', body.date);
        formData.append('weight', body.weight);
        formData.append('healthBenefits', body.healthBenefits);
        formData.append('lifetime', body.lifetime);
        // const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        axios.post(GETVEGETABLESURL, formData)
        .then(response => console.log(response))
        .catch(errors => console.log(errors))
        }
}

export const vegetablesActions = vegetableSlice.actions;
export default vegetableSlice