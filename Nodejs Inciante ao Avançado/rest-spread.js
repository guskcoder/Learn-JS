const aluno = {
  nome: 'Gustavo',
  idade: 19,
  cursos: ['Node', 'SQL', 'Docker'],
};

// console.log(aluno);

const alunoAtualizado = {
  ...aluno,
  idade: 20,
  cursos: [...aluno.cursos, 'Java'],
};

// console.log(alunoAtualizado);

// REST ...

const { nome, ...resto } = aluno;

console.log(resto);

const nomes = ['Daniel', 'Mariana', 'Carol'];

const [primeiro, ...restoNomes] = nomes;

console.log(restonomes);
