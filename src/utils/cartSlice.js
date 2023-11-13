import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: ["Pizza", "burger"]
    },
    reducers: {
        addItem: (state, action) =>{
            //Directly modifying the state over here.
            state.items.push(action.payload)
        },
        removeItem: (state) =>{
            state.items.pop();
        },
        clearCart : (state) =>{
            state.items.length = 0;
        },
    },
});

export const { addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer
