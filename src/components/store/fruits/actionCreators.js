import { GET_ALL_PRODUCTS, GET_SINGLE_PRODUCT, ADD_TO_CART, UPDATE_CART, DELETE_CART } from "./actionTypes";

const URL = "http://localhost:8080/basket/fruits";

export const getAllProducts = (products) =>{
    return {
        type: GET_ALL_PRODUCTS,
        payload: products,
    }
}

export const getSingleProduct = (product) =>{
    return {
        type: GET_SINGLE_PRODUCT,
        payload: product,
    }
}

export const addToCart = (product) =>{
    return {
        type: ADD_TO_CART,
        payload: product,
    }
}

export const updateCart = (product) =>{
    return {
        type: UPDATE_CART,
        payload: product,
    }
}

export const deleteCart = (i) =>{
    return {
        type: DELETE_CART,
        payload: i,
    }
}

export const fetchProducts = () => {
    return function(dispatch) {
    fetch(URL,{
        method:'GET',
        headers:{'Content-type': 'application/json; charset=UTF-8','Access-Control-Allow-Origin':'*'},
      }).then(response=>response.json())
        .then(data=>{
            dispatch(getAllProducts(data));
        })
        .catch(err=>console.log(err))
    }
}