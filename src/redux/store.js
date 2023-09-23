import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'; // from export default

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default store;