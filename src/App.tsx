import React from 'react'
import ContatoForm from './components/ContatoForm'
import ListaContato from './components/ListaContato'
import styled from 'styled-components'
import GlobalStyles from './styles'

const Container = styled.div`
  padding: 20px;
`

function App() {
  return (
    <Container>
      <GlobalStyles />
      <h1>Lista de Contatos</h1>
      <ContatoForm />
      <ListaContato />
    </Container>
  )
}

export default App;
