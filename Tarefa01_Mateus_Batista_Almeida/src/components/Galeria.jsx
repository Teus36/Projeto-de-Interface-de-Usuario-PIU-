import "./Galeria.css"

export default function Galeria ({children}){

    return(
        <>
            <h1 style={{margin: "25px"}}>Pokedex</h1>
            <div className="galeria">
                {children}
            </div>
        </>
    )
}