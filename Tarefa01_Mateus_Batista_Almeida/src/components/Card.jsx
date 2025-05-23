import { useState } from "react";
import Descricao from "./Descricao";
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

            <Descricao 
                imagem={imagem} 
                nome={nome} 
                descricao={descricao} 
                ativo={expandido} 
            />
        </button>
    )
}
