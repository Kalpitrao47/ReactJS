import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"

const appStore = configureStore(
{
    reducer:{
        cart: cartReducer
    }
}
)

export default appStore;


//Now we will provide this store to our application- in app.js
