import React, { useState, useEffect } from 'react';

export default function TrocarCorDeFundo() {
  const [corFundo, setCorFundo] = useState('#ffffff'); 

  useEffect(() => {
    document.body.style.backgroundColor = corFundo;
  }, [corFundo]);

  function trocarCor() {
    setCorFundo(corFundo === '#ffffff' ? '#0050ff' : '#ffffff'); 
  }

  return (
    <div>
      <button onClick={trocarCor}>Trocar Cor</button>
    </div>
  );
}

