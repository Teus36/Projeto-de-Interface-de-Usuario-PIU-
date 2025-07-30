import { useState } from "react"

export default function Auth() {
    const [user, setUser] = useState({
        nome: "string",
        senha: "string"
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">
                        <input type="text" onChange={(e) => setUser({ ...user, nome: e.target.value })} placeholder="Digite seu nome"/>
                        <input type="text" onChange={(e) => setUser({ ...user, senha: e.target.value })} placeholder="Digite sua senha"/>
                    </label>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </>
    )
}