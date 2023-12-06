import { configureStore, compose } from '@reduxjs/toolkit'
import {applyMiddleware} from 'redux'
import { thunk } from 'redux-thunk'
// import logger from 'redux-logger'
// import { composeWithDevTools } from 'redux-devtools-extension';
import ProductsProvider from "./fruits/reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({reducer:ProductsProvider},composeEnhancers(applyMiddleware(thunk)));