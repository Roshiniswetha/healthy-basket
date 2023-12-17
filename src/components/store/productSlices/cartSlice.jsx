import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
// import axios from "axios";

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cartItems:[],
        totalQuantity: 0,
        totalPrice: 0,
    },
    reducers: {
        addItemToCart(state,action){
            const newItem = action.payload;

            const existingItem = state.cartItems.find((i) => i.id === newItem.id);

            state.totalQuantity++;

            if (existingItem) {
                state.cartItems.map((item)=>{
                    if(item.id===newItem.id){
                        state.cartItems.push({
                            ...item,
                            quantity: item.quantity++,
                            // price: item.price + (newItem.price * newItem.quantity),
                        });
                        state.totalPrice = newItem.price + state.totalPrice;
                        state.totalQuantity = state.totalQuantity + item.quantity;
                    }
                })
            } else {
                state.cartItems.push({
                    ...newItem,
                    quantity: 1
                });
                state.totalPrice = newItem.price;
            }
                },
        deleteItemFromCart(state, action) {
            const newItemId = action.payload;
            const existingItem = state.cartItems.find((i) =>  i.id === newItemId);
            state.totalQuantity--;

            if (existingItem?.quantity === 1) {
                state.cartItems = state.cartItems.filter((i) => i.id !== newItemId);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
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