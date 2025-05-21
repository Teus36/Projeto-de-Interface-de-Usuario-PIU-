import "./Card.css"

export default function Card({imagem, nome}){
    let screen = "https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/250px-0001Bulbasaur.png"

    return(
        <div>
            <figure>
                <img src={imagem} alt="BULBASSAURO" />
                <figcaption>{nome}</figcaption>
            </figure>
        </div>
    )
}

