import { useState } from "react"

export default function Dropdown({options}) {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(null)

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option) => {
        setSelected(option)
        setIsOpen(false);
    };  

    const wrapperStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    };

    const dropdownContainerStyle = {
        display: "flex",
        flexDirection: "column",
        width: "47%",
        color: "black",
        alignItems: "center",
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
    };

    const triggerStyle = {
        display: "flex",
        justifyContent: "center",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "5px",
        color: "black",
        width: "70%",
        cursor: "pointer",
    };

    const listStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        listStyleType: "none",
        gap: "3px",
        backgroundColor: "white",
        borderRadius: "5px",
        color: "black",
        width: "90%",
        padding: "10px",
        margin: 0,
    };

    const itemStyle = {
        cursor: "pointer",
        padding: "5px",
        width: "100%",
        border: "1px solid black",
        borderRadius: "5px",
    };

    return (
        <>
            <h1>Dropdown com React</h1>
            <div style={wrapperStyle}>
                <div style={dropdownContainerStyle}>

                <div style={triggerStyle} onClick={toggleDropdown}>
                    {selected || "Selecione uma opção"}
                    <span style={{ marginLeft: "5px" }}>{isOpen ? "▲" : "▼"}</span>
                </div>

                {isOpen && (
                    <ul style={listStyle}>
                    {options.map((opt, index) => (
                        <li key={index} onClick={() => handleSelect(opt)} style={itemStyle}>
                            {opt}
                        </li>
                    ))}
                    </ul>
                )}
                </div>
            </div>
        </>
);}