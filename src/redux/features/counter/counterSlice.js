import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    run: 0,
    wicket: 0,
    over: 0,
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        run: (state, action) => {
            state.run += action.payload
        }
    }
})

export const {run} = counterSlice.actions;
export default counterSlice.reducer;