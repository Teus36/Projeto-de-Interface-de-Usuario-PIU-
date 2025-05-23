import "./Descricao.css";

export default function Descricao({ imagem, nome, descricao, ativo }) {
    return (
        <div className={`descricao ${ativo ? 'ativo' : ''}`}>
            <h3>{nome}</h3>
            <img src={imagem} alt={nome} className="ampliada" />
            <p>{descricao}</p>
        </div>
    );
}
