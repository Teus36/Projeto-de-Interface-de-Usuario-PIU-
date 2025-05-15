import { useState } from "react"

export default function Info1V() {
    const [valor, setValor] = useState(0)
    const [valor2, setValor2] = useState(1)

    function numeric() {
        let aux = valor2*2
        setValor2(aux)
    }

    return(
        <>
            <div>
                <button onClick={() => {setValor(valor +1)}}>Cliques {valor}</button>
                <button onClick={() => {setValor2(numeric)}}>Cliques {valor2}</button>
            </div>
        </>
    )
}