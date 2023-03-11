import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItams: []
    },
    reducers: {
        addItemsToCart: (state, action) => {
            state.cartItams.push({
                dishId: action.payload.dish.id,
                quantity: action.payload.quantity
            })
          },
    }

})

export const getCartItems = state => state.cart.cartItems
export const { addItemsToCart } = cartSlice.actions
export default cartSlice.reducer