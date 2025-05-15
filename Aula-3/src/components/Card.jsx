import "./Card.css"

export default function Card(){
    let screen = "https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/250px-0001Bulbasaur.png"

    return(
        <div>
            <figure>
                <img src={screen} alt="BULBASSAURO" />
                <figcaption>BULBASSAUROOOO</figcaption>
            </figure>
        </div>
    )
}

