import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: []
}

export const cardsSlice = createSlice({

    name: 'cards',
    initialState,
    reducers: {
        initCards: (state, cards) => {
            state.value = cards.payload
          }, 
        
    },
})

export const { initCards } = cardsSlice.actions

export const selectValue = (state) => state.cards.value

export default cardsSlice.reducer