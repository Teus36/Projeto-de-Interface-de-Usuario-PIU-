import React from 'react';
import CustomDropdown from './components/CustomDropdown';

function App() {
  const frutas = ["Banana", "Maçã", "Uva", "Laranja"];
  const cidades = ["Caicó", "Natal", "Mossoró", "Pau dos Ferros"];

  return (
    <div style={{ padding: '40px' }}>
      <h1>Dropdown Customizado 🍌</h1>
      <CustomDropdown label="Escolha uma fruta:" options={frutas} />
      <CustomDropdown label="Escolha uma cidade:" options={cidades} />
    </div>
  );
}

export default App;