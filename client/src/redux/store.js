import counterReducer from './slices/CounterSlices'
import { configureStore } from '@reduxjs/toolkit';
import loginReducer, { login } from './slices/LoginSlice'

const store = configureStore({
    reducer: {
        counter : counterReducer,
        login: loginReducer
    }
})

export default store
