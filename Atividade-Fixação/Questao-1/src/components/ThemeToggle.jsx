import { useEffect, useState } from "react"

export default function ThemeToggle() {
    const [theme, setTheme] = useState("#ffffff")

    useEffect (() => {
        document.body.style.backgroundColor = theme
    }, [theme]);

    function ToggleTheme () {
        setTheme(theme === "#ffffff" ? "#141414" : "#ffffff")
    }

    return (
        <>
            <div>
                <button onClick={ToggleTheme}>
                    {theme === "#ffffff" ? "Tema Escuro 🌙" : "Tema Claro 🌞"}
                </button>
            </div>
        </>
    )
}