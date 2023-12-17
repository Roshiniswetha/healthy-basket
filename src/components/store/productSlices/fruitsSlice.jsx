import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import { GETFRUITSURL , ADDFRUITSURL } from "./constants";
import axios from "axios";
import { fruitsData } from "assets/data/Fruits";

const fruitSlice = createSlice({
    name: 'fruitSlice',
    initialState: {
        numberOfItems: 0,
        allFruits: fruitsData,
        filteredFruits:fruitsData,
        isLoading: false,
        isLoaded: false,
    },
    reducers: {
        getAllFruits: (state,action) => {
            return {
                ...state,
            }
        },
        getFilteredFruitsBySearchTerm: (state,action) => {
            const searchTerm = action.payload;
            const filteredValues = state.allFruits.filter(value =>
                value.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            return {
                ...state,
                filteredFruits: filteredValues,
            };
        },
        getFilteredFruitsByCategory: (state,action) => {
            const category = action.payload;
            const filteredValues = (category==='All') ? state.allFruits : state.allFruits.filter(fruit =>
                fruit.category===category)
            return {
                ...state,
                filteredFruits: filteredValues,
            };
        }
    }
})


// export const onFruitsPageLoad = () => {
//     return function(dispatch) {
//         axios.get(GETFRUITSURL)
//         // .then((response) => {
//         //     const convertString = JSON.stringify(response.data);
//         //     dispatch(fruitsActions.getAllFruits(response.data))
//         //     console.log(convertString));
//         // })
//         .then(response => dispatch(fruitsActions.getAllFruits(response.data)))
//         .catch(errors => console.log(errors));
//     }
// }

// export const addFruits = (body,file) => {
//     return function(dispatch) {
//         const formData = new FormData();
//         formData.append('file', file);
//         formData.append('name', body.name);
//         formData.append('slogan', body.slogan);
//         formData.append('description', body.description);
//         formData.append('price', body.price);
//         formData.append('quantity', body.quantity);
//         formData.append('date', body.date);
//         formData.append('weight', body.weight);
//         formData.append('healthBenefits', body.healthBenefits);
//         formData.append('lifetime', body.lifetime);
//         // const config = { headers: { 'Content-Type': 'multipart/form-data' } };
//         axios.post(ADDFRUITSURL, formData)
//         .then(response => console.log(response))
//         .catch(errors => console.log(errors))
//         }
// }

export const fruitsActions = fruitSlice.actions;
export default fruitSlice