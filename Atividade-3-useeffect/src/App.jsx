import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import EffectAPI from './components/EffectAPI'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EffectAPI></EffectAPI>
    </>
  )
}

export default App
