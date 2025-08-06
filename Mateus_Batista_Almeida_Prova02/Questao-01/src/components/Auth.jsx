import { useState, useEffect } from "react";

export default function Auth() {
    const [user, setUser] = useState({
        nome: "",
        palavra_passe: ""
    })
    const colors = ["blue", "red", "pink", "yellow", "green"];

    function handleSubmit (e) {
        if (user.palavra_passe === "AlunoPIU") {
            const index = Math.floor(Math.random() * colors.length);
            document.body.style.backgroundColor = colors[index];
        }
        e.preventDefault()
        console.log(user)
    }

    return (
        <>
             <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">
                        <input type="text" onChange={(e) => setUser({ ...user, nome: e.target.value })} placeholder="Digite seu nome"/>
                        <input type="text" onChange={(e) => setUser({ ...user, palavra_passe: e.target.value })} placeholder="Digite a palavra-passe"/>
                    </label>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </>
    )
}