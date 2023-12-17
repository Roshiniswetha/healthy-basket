import { configureStore, compose } from '@reduxjs/toolkit'
import {applyMiddleware} from 'redux'
import { thunk } from 'redux-thunk'
import {fruitSlice, vegetableSlice, dailyEssentialSlice, cartSlice, categorySlice, searchSlice} from './productSlices';

export const store = configureStore({   
    reducer: {
        fruits: fruitSlice.reducer,
        vegetables: vegetableSlice.reducer,
        dailyEssentials: dailyEssentialSlice.reducer,
        cart: cartSlice.reducer,
        category: categorySlice.reducer,
        search: searchSlice.reducer,
    },
})

export default store;