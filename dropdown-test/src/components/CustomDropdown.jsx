// CustomDropdown.js
import React, { useState, useRef, useEffect } from 'react';
import './CustomDropdown.css'; // vamos criar um CSS simples

function CustomDropdown({ label, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <label><strong>{label}</strong></label>
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selected || "-- Selecione --"}
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen ? (
        <ul className="dropdown-list">
          {options.map((opt, index) => (
            <li key={index} onClick={() => handleSelect(opt)} className="dropdown-item">
              {opt}
            </li>
          ))}
        </ul>
      ) : ""}
    </div>
  );
}

export default CustomDropdown;
