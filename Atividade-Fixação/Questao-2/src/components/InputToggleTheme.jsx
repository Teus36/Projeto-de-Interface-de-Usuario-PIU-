import { useState, useEffect } from "react"

export default function InputThemeToggle() {
    const [theme, setTheme] = useState("#ffffff")

    useEffect (() => {
        document.body.style.backgroundColor = theme
    }, [theme])

    function ToggleTheme(e) {
        setTheme(e.target.value)
    }

    return (
        <>
            <div>
                <p>Digite o nome de uma cor em inglês para mudar a cor de fundo</p>
                <input type="text" onChange={ToggleTheme} placeholder="Digite uma cor"/>
            </div>        
        </>
    )
}
