import { createSlice } from '@reduxjs/toolkit';

export const dishesSlice = createSlice({
    name: 'dishes',
    initialState: {
        selectedCategory: 'МОРЕПРОДУКТЫ' 
    },
    reducers: {
        filterCadegory: (state, action) => {
            state.selectedCategory = action.payload
          },
    }

})

export const { filterCadegory } =dishesSlice.actions
export const getSelectedCategory = state => state.dishes.selectedCategory
export default dishesSlice.reducer