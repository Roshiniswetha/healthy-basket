import { GET_ALL_VEGETABLES, GET_SINGLE_VEGETABLE, ADD_TO_CART, UPDATE_CART, DELETE_CART } from "./actionTypes";

const URL = "http://localhost:8080/basket/vegetables";

export const getAllVegetables = (vegetables) =>{
    return {
        type: GET_ALL_VEGETABLES,
        payload: vegetables,
    }
}

export const getSingleVegetable = (vegetable) =>{
    return {
        type: GET_SINGLE_VEGETABLE,
        payload: vegetable,
    }
}

export const addToCart = (vegetable) =>{
    return {
        type: ADD_TO_CART,
        payload: vegetable,
    }
}

export const updateCart = (vegetable) =>{
    return {
        type: UPDATE_CART,
        payload: vegetable,
    }
}

export const deleteCart = (i) =>{
    return {
        type: DELETE_CART,
        payload: i,
    }
}

export const fetchVegetables = () => {
    return function(dispatch) {
    fetch(URL,{
        method:'GET',
        headers:{'Content-type': 'application/json; charset=UTF-8','Access-Control-Allow-Origin':'*'},
      }).then(response=>response.json())
        .then(data=>{
            dispatch(getAllVegetables(data));
        })
        .catch(err=>console.log(err))
    }
}