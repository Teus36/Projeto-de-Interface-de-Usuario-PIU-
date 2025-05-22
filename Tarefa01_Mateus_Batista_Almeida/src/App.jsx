import Card from './components/Card'
import Galeria from './components/Galeria'
import charmander from './assets/charmander.png'
import bulbassauro from './assets/bulbassauro.png'
import squirtle from './assets/squirtle.png'
import pikachu from './assets/pikachu.png'
import evee from './assets/evee.png'


function App() {

  return (
    <>
      <Galeria>
        <Card imagem={charmander}  nome={"Charmander"}></Card>
        <Card imagem={bulbassauro} nome={"Bulbassauro"}></Card>
        <Card imagem={squirtle} nome={"Squirtle"}></Card>
        <Card imagem={pikachu} nome={"Pikachu"}></Card>
        <Card imagem={evee} nome={"Evee"}></Card>
      </Galeria>
    </>
  )
}

export default App
