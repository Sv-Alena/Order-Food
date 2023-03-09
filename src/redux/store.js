import { configureStore } from '@reduxjs/toolkit'
import dishes from './dishesSlise'

export const store = configureStore({
  reducer: {
   dishes
  },
})

