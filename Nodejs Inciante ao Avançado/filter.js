const usuarios = [
  { id: 1, nome: 'Gustavo', idade: 18 },
  { id: 2, nome: 'Maria', idade: 19 },
  { id: 3, nome: 'José', idade: 20 },
  { id: 4, nome: 'Pedro', idade: 21 },
  { id: 5, nome: 'Joana', idade: 22 },
  { id: 6, nome: 'Joaquim', idade: 18 },
];

const result = usuarios.filter(
  (usuario) => usuario.idade == 18 || usuario.idade == 20
);

console.log(result);
