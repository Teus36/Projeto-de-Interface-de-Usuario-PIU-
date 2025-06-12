import { useState } from 'react'
import Contador from './components/Componente_1'
import ListagemCarros from './components/Componente_2'
import { carros } from './dados_carro'
import './App.css'

function App() {
  
  return (
    <>
      <Contador></Contador>
      <ListagemCarros carros={carros}></ListagemCarros>
    </>
  )
}

export default App
