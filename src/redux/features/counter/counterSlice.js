import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    run: 0,
    wicket: 0,
    ball: 0,
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        run: (state, action) => {
            state.run += action.payload
        },
        wicket: (state) => {
            state.wicket += 1
        },
        ball: (state) => {
            state.ball += 1
        }
    }
})

export const {run, wicket, ball} = counterSlice.actions;
export default counterSlice.reducer;