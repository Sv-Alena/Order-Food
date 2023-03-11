import { configureStore } from '@reduxjs/toolkit'
import dishes from './dishesSlise';
import cart from './cartSlise'

export const store = configureStore({
  reducer: {
   dishes,
   cart
  },
})

