import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Contato {
    id: number
    name: string
    email: string
    phone: string
}

interface ContatoState {
    contatos: Contato[]
}

const initialState: ContatoState = {
    contatos: []
}

const contatoSlice = createSlice({
    name:  'contato',
    initialState,
    reducers: {
        addContato: (state, action: PayloadAction<Contato>) => {
            state.contatos.push(action.payload)
        },
        removerContato: (state, action: PayloadAction<number>) => {
            state.contatos = state.contatos.filter(
                (contato) => contato.id !== action.payload
            )
        },
        editarContato: (state, action: PayloadAction<Contato>) => {
            const index = state.contatos.findIndex(
                (contato) => contato.id === action.payload.id
            )
            if(index !== -1) {
                state.contatos[index] = action.payload
            }
        }
    }
})

export const { addContato, removerContato, editarContato } = contatoSlice.actions
export default contatoSlice.reducer