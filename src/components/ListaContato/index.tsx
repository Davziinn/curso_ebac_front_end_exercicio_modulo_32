import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { removerContato } from '../redux/contatoSlice'
import ContatoForm from '../ContatoForm'
import { List, ListItem, Button, Info } from './styles'

interface Contato {
    id: number
    name: string
    email: string
    phone: string
}

const ListaContato: React.FC = () => {
    const contatos = useSelector((state: RootState) => state.contato.contatos)
    const dispatch = useDispatch()

    const handleRemove = (id: number) => {
        dispatch(removerContato(id))
    }

    return (
        <List>
            {contatos.map((contato: Contato) => (
                <ListItem key={contato.id}>
                    <Info>
                        <strong>{contato.name}</strong> 
                        <span>{contato.email}</span>
                        <span>{contato.phone}</span>
                    </Info>
                    <Button onClick={() => handleRemove(contato.id)}>Remover</Button>
                    <ContatoForm existeContato={contato} />
                </ListItem>
            ))}
        </List>
    )
}

export default ListaContato
