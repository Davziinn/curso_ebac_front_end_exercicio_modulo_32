import { configureStore } from '@reduxjs/toolkit'
import contatoReducer from './contatoSlice'

const store = configureStore({
    reducer: {
        contato: contatoReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch

export default store