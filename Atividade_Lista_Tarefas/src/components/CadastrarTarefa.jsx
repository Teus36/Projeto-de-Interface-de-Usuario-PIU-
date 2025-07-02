import { useState } from "react";

export default function CadastrarTarefa () {
    const [inputValue, setInputValue] = useState("")
    const [tarefas, setTarefas] = useState([])
    const [prioridade, SetPrioridade] = useState({
        nome: '',
        prioridade: 'Alta'
    })

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
                <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}} onSubmit={handleSubmit}>
                    <label style={{marginRight: '10px'}}>
                         <input type="text" value={inputValue} onChange={handleChange} style={{padding: '10px', borderRadius: '15px'}}/>
                    </label>
                    <button style={{width: '25%', border: '2px solid black'}} type="submit">Enviar</button>
                </form>
                
                <ul style={{display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none'}}>
                    {tarefas.map((tarefa, index) =>  (
                        <li style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px 15px 0px 15px', border: '1px solid black', borderRadius: '10px', width: '25em', height: '5em'}} 
                        key={index}>{tarefa}
                        <div>
                            <button>🔼</button>
                            <button>🔽</button>
                        </div>
                        </li>
                        ))}
                </ul>
            </div>

        </>
    );
}