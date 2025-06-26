import { useState } from "react";

export default function CadastrarTarefa () {
    const [inputValue, setInputValue] = useState("")
    const [tarefas, setTarefas] = useState([])

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (inputValue.trim() === "") return ;

        setTarefas([...tarefas, inputValue])
        setInputValue("");
    }

    return (
        <>
            <div>
                <h1>Lista de tarefas</h1>
                <form onSubmit={handleSubmit}>
                    <label style={{marginRight: '10px'}}>
                         <input type="text" value={inputValue} onChange={handleChange} style={{padding: '10px', borderRadius: '15px'}}/>
                    </label>
                    <button type="submit">Enviar</button>
                </form>
                
                <ul style={{listStyle: 'none'}}>
                    {tarefas.map((tarefa, index) =>  (
                        <li key={index}>{tarefa}</li>
                        ))}
                </ul>
            </div>

        </>
    );
}