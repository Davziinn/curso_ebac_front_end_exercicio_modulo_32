import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContato, editarContato } from '../redux/contatoSlice'
import { Form, Input, Button } from './styles'

interface Contato {
    id: number
    name: string
    email: string
    phone: string
}

interface ContatoFormProps {
    existeContato?: Contato
}

const ContatoForm: React.FC<ContatoFormProps> = ({ existeContato }) => {
    const [name, setName] = useState(existeContato?.name || '')
    const [email, setEmail] = useState(existeContato?.email || '')
    const [phone, setPhone] = useState(existeContato?.phone || '')
    const dispatch = useDispatch()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const novoContato: Contato = {
            id: existeContato ? existeContato.id : Date.now(),
            name,
            email,
            phone
        }

        if (existeContato) {
            dispatch(editarContato(novoContato))
        } else {
            dispatch(addContato(novoContato))
        }

        setName('')
        setEmail('')
        setPhone('')
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome"
                required
            />
            <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <Input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Telefone"
                required
            />
            <Button type="submit">{existeContato ? 'Editar' : 'Adicionar'}</Button>
        </Form>
    )
}

export default ContatoForm
