import Dropdown from './components/Dropdown'
import './App.css'

function App() {
  const frutas = ["Banana", "Maçã", "Uva", "Laranja"];

  return (
    <>
      <Dropdown options={frutas}></Dropdown>
    </>
  )
}

export default App
