import { createSlice } from '@reduxjs/toolkit';
import { fruitsData } from "assets/data/Fruits";
import { vegetablesData } from 'assets/data/Vegetables';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    fruitCategories: [],
    fruitCategory: 'All',
    vegetableCategory: 'All',
    sortBy: 'Default',
    vegetableCategories: []
  },
  reducers: {
    setFruitCategory (state, action) {
      const category = action.payload
      state.fruitCategory = category;
    },
    setVegetableCategory (state, action) {
      const category = action.payload
      state.vegetableCategory = category;
    },
    setFruitsCategoriesList(state, action){
      state.fruitCategories = action.payload
    },
    setVegetablesCategoriesList(state, action){
      state.vegetableCategories = action.payload
    }
  },
});

export const filterFruitsValuesByCategory = (fruits) => {
  return function(dispatch) {
  const categories = new Set()
  fruitsData.map(fruit=>categories.add(fruit.category))
  dispatch(categorySliceActions.setFruitsCategoriesList(categories))
  }
};

export const filterVegetablesValuesByCategory = (fruits) => {
  return function(dispatch) {
  const categories = new Set()
  vegetablesData.map(vegetable=>categories.add(vegetable.category))
  dispatch(categorySliceActions.setVegetablesCategoriesList(categories))
  }
};

export const categorySliceActions = categorySlice.actions;
export default categorySlice;