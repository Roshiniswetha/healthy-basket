import { createSlice } from '@reduxjs/toolkit';
import { fruitsData } from "assets/data/Fruits";

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    category: 'All',
    sortBy: 'Default' 
  },
  reducers: {
    setCategory (state, action) {
      const category = action.payload
      state.category = category;
    },
    setCategoriesList(state){
      state.categories = filterValuesByCategory(fruitsData)
    }
  },
});

export const filterValuesByCategory = (fruits) => {
  const categories = new Set()
  return categories.add(fruitsData.filter(fruit=>fruit.category))
};

export const categorySliceActions = categorySlice.actions;
export default categorySlice;