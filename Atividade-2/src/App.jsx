import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import Children from './components/Galeria'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Children>
        <Children>
          <Card ></Card>
        </Children>
      </Children>
    </>
  )
}

export default App
