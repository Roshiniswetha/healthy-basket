import { GET_ALL_FRUITS, GET_SINGLE_FRUIT, ADD_TO_CART, UPDATE_CART, DELETE_CART } from "./actionTypes";

const URL = "http://localhost:8080/basket/fruits";

export const getAllFruits = (Fruits) =>{
    return {
        type: GET_ALL_FRUITS,
        payload: Fruits,
    }
}

export const getSingleProduct = (fruit) =>{
    return {
        type: GET_SINGLE_FRUIT,
        payload: fruit,
    }
}

export const addToCart = (fruit) =>{
    return {
        type: ADD_TO_CART,
        payload: fruit,
    }
}

export const updateCart = (fruit) =>{
    return {
        type: UPDATE_CART,
        payload: fruit,
    }
}

export const deleteCart = (i) =>{
    return {
        type: DELETE_CART,
        payload: i,
    }
}

export const fetchFruits = () => {
    return function(dispatch) {
    fetch(URL,{
        method:'GET',
        headers:{'Content-type': 'application/json; charset=UTF-8','Access-Control-Allow-Origin':'*'},
      }).then(response=>response.json())
        .then(data=>{
            console.log(data)
            dispatch(getAllFruits(data));
        })
        .catch(err=>console.log(err))
    }
}