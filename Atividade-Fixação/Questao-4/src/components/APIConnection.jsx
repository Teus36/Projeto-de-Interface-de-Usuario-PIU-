import { useState, useEffect } from "react";

export default function ListaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [filtro, setFiltro] = useState("");

    // Faz a requisição GET quando o componente carrega
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsuarios(data))
            .catch((error) => console.error("Erro ao buscar usuários:", error));
    }, []);

    // Filtra os usuários com base no texto digitado
    const usuariosFiltrados = usuarios.filter((user) =>
        user.name.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <div>
            <h2>Lista de Usuários</h2>
            <input
                type="text"
                placeholder="Filtrar por nome"
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
            />
            <ul>
                {usuariosFiltrados.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}
