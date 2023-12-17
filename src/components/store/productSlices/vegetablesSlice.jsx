import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import { vegetablesData } from "assets/data/Vegetables";

const vegetableSlice = createSlice({
    name: 'Vegetableslice',
    initialState: {
        numberOfItems: 0,
        allVegetables: vegetablesData,
        filteredVegetables: vegetablesData,
        isLoading: false,
        isLoaded: false,
    },
    reducers: {
        getAllVegetables: (state,action) => {
            return {
                ...state,
            }
        },
        getFilteredVegetablesBySearchTerm: (state,action) => {
            const searchTerm = action.payload;
            const filteredValues = state.allVegetables.filter(value =>
                value.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            return {
                ...state,
                filteredVegetables: filteredValues,
            };
        },
        getFilteredVegetablesByCategory: (state,action) => {
            const category = action.payload;
            const filteredValues = (category==='All') ? state.allVegetables : state.allVegetables.filter(vegetable =>
                vegetable.category===category)
            return {
                ...state,
                filteredVegetables: filteredValues,
            };
        }
    }
})


export const vegetablesActions = vegetableSlice.actions;
export default vegetableSlice