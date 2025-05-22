import { useState } from "react";
import "./Card.css";

export default function Card({ imagem, nome, descricao }) {
    const [expandido, setExpandido] = useState(false);

    function handleClick() {
        setExpandido(!expandido);
    }

    return (
        <button onClick={handleClick} className={`card ${expandido ? 'expandido' : ''}`}>
            <figure>
                <img src={imagem} alt={nome} />
            </figure>

            {expandido && (
                <div className="descricao">
                    <h3>{nome}</h3>
                    <img src={imagem} alt={nome} className="ampliada" />
                    <p>{descricao}</p>
                </div>
            )}
        </button>
    )
}