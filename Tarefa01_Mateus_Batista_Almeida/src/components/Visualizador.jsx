import "./Visualizador.css"

export default function Visualizador({ imagem, nome }) {
    if (!imagem) return null; // Se não tiver imagem, não mostra nada

    return (
        <div className="visualizador">
            <h2>{nome}</h2>
            <img src={imagem} alt={nome} />
        </div>
    );
}
