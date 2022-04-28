import React from 'react';

const App = () => {
  const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];

  return (
    <ul>
      {produtos.map(({ nome, preco, cores }) => (
        <div key={nome}>
          <h1>{nome}</h1>
          <p>Preço: {preco}</p>
          {cores.map((cor) => (
            <li key={cor} style={{ backgroundColor: cor, color: 'white' }}>
              {cor}
            </li>
          ))}
        </div>
      ))}
    </ul>
  );
};

export default App;