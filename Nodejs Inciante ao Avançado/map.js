const nomes = ['Maria', 'João', 'Felipe', 'Isabel'];

// Map Criar uma nova Array Modificada
const result = nomes.map((nome) => {
  return {
    nome: nome,
    descricao: 'O nome do usuário é ' + nome,
    id: Math.random().toFixed(2),
  };
});

// console.log(result);

// For em Array ForEach
nomes.forEach((nome) => console.log(nome));

// For tradicional
for (var variavel = 0; variavel <= nomes.length; variavel++) {
  console.log(`Utilizando o For o nome é ${nomes[variavel]}`);
}
