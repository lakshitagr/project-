import counterReducer from './slices/CounterSlices'
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        counter : counterReducer
    }
})

export default store
