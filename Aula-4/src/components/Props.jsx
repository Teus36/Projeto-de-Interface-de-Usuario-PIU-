export default function Props({nome, newname}) {

    return (
        <>
            <div>
                <h1>Teste props</h1>
                <p>O nome {nome} foi enviado via props</p>
                <p>{newname}</p>
            </div>
        </>
    )
}
