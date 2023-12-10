import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
// import axios from "axios";

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        isCartOpen: false,
        cartItems:[],
        totalQuantity: 0,
        totalPrice: 0,
    },
    reducers: {
        toggleCartPopup(state){
            return {
                ...state,
                isCartOpen: !state.isCartOpen
              }
        },
        addItemToCart(state,action){
            const id = action.payload.id;
            const isExisting = state.cartItems.map((item) => item.id).includes(id);
            let cart = null;
            let price = 0;
            let totalItems = 0;
            if (isExisting) {
                const cartItem = state.cartItems.map((item) => {
                if (item.id === id) {
                    return {
                    ...item,
                    productQuantityInCart: item.productQuantityInCart + 1
                    };
                }
                return item;
                });
                cart = [...cartItem];
                // totalItems = product.quantityAdded + state.totalQuantity

            } else {
                cart = [...state.cartItems, action.payload];
            }
            return {
                ...state,
                cartItems: cart,
                // totalPrice: 
            };
        },
        deleteItemFromCart(state, action) {
            return {
                ...state,
                cartItems: state.cartItems.filter((i) => i.id !== action.payload.id)
            }
          },
      
          emptyCart(state) {
            return {
                ...state,
                cartItems: []
              };
          },
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice