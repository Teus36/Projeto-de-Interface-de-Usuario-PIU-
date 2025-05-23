import Card from './components/Card'
import Galeria from './components/Galeria'
import charmander from './assets/charmander.png'
import bulbassauro from './assets/bulbassauro.png'
import squirtle from './assets/squirtle.png'
import pikachu from './assets/pikachu.png'
import evee from './assets/evee.png'
import abra from './assets/abra.png'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <>
    <ThemeToggle />
      <Galeria>
        <Card imagem={charmander} nome={"Charmander"} 
        descricao={"A chama em sua cauda demonstra a força de sua força vital. Se Charmander estiver fraco, a chama também queimará fracamente."} />
        <Card imagem={bulbassauro} nome={"Bulbassauro"} 
        descricao={"Por algum tempo após o nascimento, ele usa os nutrientes contidos na semente em suas costas para crescer."} />
        <Card imagem={squirtle} nome={"Squirtle"} 
        descricao={"Após o nascimento, suas costas incham e endurecem, formando uma concha. Ele exala uma espuma potente pela boca."} />
        <Card imagem={pikachu} nome={"Pikachu"} 
        descricao={"Quando fica irritado, ele imediatamente descarrega a energia armazenada nas bolsas em suas bochechas."} />
        <Card imagem={evee} nome={"Evee"} 
        descricao={"Sua capacidade de evoluir para muitas formas permite que ele se adapte de forma suave e perfeita a qualquer ambiente."} />
        <Card imagem={abra} nome={"Abra"} 
        descricao={"Este Pokémon usa seus poderes psíquicos enquanto dorme. O conteúdo dos sonhos de Abra afeta os poderes que o Pokémon possui."}/>
      </Galeria>
    </>
  )
}

export default App
