import { configureStore, compose } from '@reduxjs/toolkit'
import {applyMiddleware} from 'redux'
import { thunk } from 'redux-thunk'
import {fruitSlice, vegetableSlice, dailyEssentialSlice, cartSlice} from './productSlices';
// import logger from 'redux-logger'
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({   
    reducer: {
        fruits: fruitSlice.reducer,
        vegetables: vegetableSlice.reducer,
        dailyEssentials: dailyEssentialSlice.reducer,
        cart: cartSlice.reducer,
    },
})

export default store;