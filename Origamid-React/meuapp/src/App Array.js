import React from 'react';

const App = () => {
  const produtos = ['Notebook', 'Tablet', 'Smartphone'];

  return (
    <ul>
      {produtos.map((produto) => (
        <li key={produto}>{produto}</li>
      ))}
    </ul>
  );
};

export default App;
