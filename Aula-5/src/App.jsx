import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [valor, SetValor] = useState(0)

  return (
    <>
      <Navbar></Navbar>
    </>
  )
}

export default App
