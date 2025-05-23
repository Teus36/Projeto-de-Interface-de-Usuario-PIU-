import { useState, useEffect } from "react";
import './ThemeToggle.css'

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
    );
}