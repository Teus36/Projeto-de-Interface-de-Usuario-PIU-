import { useState, useEffect } from "react";

export default function InputThemeToggle2() {
    const [text, setText] = useState("");
    const colors = ["#ffffff", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ffccff"];

    useEffect(() => {
        const index = Math.floor(Math.random() * colors.length);
        document.body.style.backgroundColor = colors[index];
    }, [text]);

    return (
        <>
            <div>
                <input 
                    type="text" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    placeholder="Digite algo"
                />
            </div>        
        </>
    );
}