export default function ListagemCarros ({carros}) {
    // Filtra somente os carros vermelhos
    const carrosVermelhos = carros.filter(carro => carro.cor = 'vermelho');

    return (
        <>
            <div>
            <h1>Carros com modelo e ano</h1>
            {/* O map percorre a lista de carros que foi importada do arquivo dados_carro.js, carro vai ser o valor e index a chave */}
            <ul>
                {carros.map((carro, index) => (
                    <li key={index} style={{border: '1px solid black'}}>
                        {carro.modelo}
                        {carro.ano}
                    </li>
                ))}
            </ul>
            </div>
            <h1>Carros vermelhos</h1>
            {/* Lista os carros de cor vermelha */}
            <ul>
                {carrosVermelhos.map(carro => (
                    <li key={carro.cor} style={{border: '1px solid black'}}>
                        {carro.modelo}
                        {carro.cor}
                    </li>
                ))}
            </ul>
        </>
    )
}