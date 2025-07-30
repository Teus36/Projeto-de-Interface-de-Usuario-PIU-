import { useState, useEffect } from "react";

export default function PostList() {
    const [users, setUsers] = useState([]);
    const [filtro, setFiltro] = useState("");

    useEffect (() => {
        fetch(" https://jsonplaceholder.typicode.com/albums")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Erro ao buscar usuários:", error));
    }, []); 

    const usersFilter = users.filter((user) =>
        String(user.userId).includes(filtro)
    );

    return(
        <>
            <div>
                <input 
                    type="text" 
                    placeholder="Digite um número de 1 a 10"
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                />
                <ul>
                    {usersFilter.map((user) => (
                        <li key={user.userId}>
                            {user.userId} - {user.title}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}  