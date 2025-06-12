import { useState } from "react";

export default function Contador() {
    const [corBotao1, setCorBotao1] = useState('white');
    const [corBotao2, setCorBotao2] = useState('white');
    const [count, setCount] = useState(0)


    // Adiciona cliques ao contador, quando o contador atingir 10 o botão passará a ter a cor verde
    const mudarCorIncremento = () => {
        // Mudança de Cor do botão ao contador chegar em 10, utilizando operador ternário
        setCorBotao1(count >= 10 ? 'green' : 'white');
        // Adição dos cliques
        setCount(count + 1)
      };
    
    // Diminui cliques do contador, quando o contador atingir um valor negativo o botão passará a ter a cor vermelha
    const mudarCorDecremento = () => {
        // Mudança de Cor do botão ao contador ao atingir um valor negativo, utilizando operador ternário
        setCorBotao2(count < 0 ? 'red': 'white')
        // Subtração dos cliques
        setCount(count - 1)
      };
    
    return (
        <>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1>Contador de cliques</h1>
                <div style={{display: "flex", gap: "10px"}}>
                    {/* Botão de incremento que chama a função mudarCorIncremento, 
                    a cor do botão incremento só será mudada se for usado o style inline, 
                    onde o valor que estiver no corBotao1 será a cor aplicada para o background */}
                    <button style={{backgroundColor: `${corBotao1}`}} onClick={() => mudarCorIncremento()}>
                        🔼
                    </button>
                    {/* Botão de decremento que chama a função mudarCorDecremento, 
                    a cor do botão decremento só será mudada se for usado o style inline, 
                    onde o valor que estiver no corBotao2 será a cor aplicada para o background */}
                    <button style={{backgroundColor: `${corBotao2}`}} onClick={() => mudarCorDecremento()}>
                        🔽
                    </button>
                    {/* Carrega o valor da variável count aonde é armazenado a quantidade de cliques */}
                    <label style={{marginTop: "10px"}}>Cliques: {count}</label>
                </div>
            </div>
        </>
    )}