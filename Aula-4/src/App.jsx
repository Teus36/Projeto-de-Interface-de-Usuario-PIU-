import { useState } from 'react'
import Props from './components/Props'
import Card from './components/Card'
import Children from './components/Children'
import './App.css'

function App() {

  return (
    <>
      {/* <h1>Opa</h1>
      <Props nome={"Mateus"} newname={"Batista"}></Props> */}
      <Children>
        <Children>
          <Card imagem={"https://archives.bulbagarden.net/media/upload/thumb/2/27/0004Charmander.png/250px-0004Charmander.png"} nome={"Charmander"}/>
        </Children>
        <Children>
          <Card imagem={"https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/250px-0001Bulbasaur.png"} nome={"Bulbassauro"}/>
        </Children>
        <Children>
          <Card imagem={"https://archives.bulbagarden.net/media/upload/thumb/5/54/0007Squirtle.png/250px-0007Squirtle.png"} nome={"Bulbassauro"}/>
        </Children>
      </Children>
    </>
  )
}

export default App
