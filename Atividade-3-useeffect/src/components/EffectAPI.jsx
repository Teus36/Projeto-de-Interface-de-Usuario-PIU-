import { useState, useEffect } from 'react';

export default function EffectAPI() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [API, setAPI] = useState(false)

  useEffect(() => {
    if (!API) return;

    const fetchUsuarios = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json(); 
        setUsuarios(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setLoading(false);
        setAPI(false)
      }
    }

    fetchUsuarios();
  }, [API]); 

  return (
    <div style={{display: "flex", flexDirection: "row", gap: '2em'}}>
      <div style={{border: "2px solid black", borderRadius: "15px", padding: "20px", marginLeft: "15px"}}>
          <h1 style={{textAlign: 'center'}}>Nome</h1>
          <ul>
            {usuarios.map(usuario => (
              <li key={usuario.id}>{usuario.name}</li>
            ))}
          </ul>
          <button onClick={()=> setAPI(true)}>Resgatar dados</button>
      </div>
      <div style={{border: "2px solid black", borderRadius: "15px", padding: "20px"}}>
          <ul>
          <h1 style={{textAlign: 'center'}}>Username</h1>
            {usuarios.map(usuario => (
              <li key={usuario.id}>{usuario.username}</li>
            ))}
          </ul>
          <button onClick={()=> setAPI(true)}>Resgatar dados</button>
      </div>
      <div style={{border: "2px solid black", borderRadius: "15px", padding: "20px"}}>
          <ul>
          <h1 style={{textAlign: 'center'}}>Endereço</h1>
            {usuarios.map(usuario => (
              <li key={usuario.id}>{usuario.address.city}</li>
            ))}
          </ul>
          <button onClick={()=> setAPI(true)}>Resgatar dados</button>
      </div>
    </div>
  );
}