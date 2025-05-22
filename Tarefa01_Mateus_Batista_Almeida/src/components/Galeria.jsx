import "./Galeria.css"

export default function Galeria ({children}){

    return(
        <>
            <h1 style={{position: "absolute", left: '43%', bottom:'70%'}}>Pokedex</h1>
            <br/>
            <div className="galeria">
                {children}
            </div>
        </>
    )
}