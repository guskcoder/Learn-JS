const pessoa = {
  nome: 'Carol',
  idade: 19,
  documento: '879114865654',
  instagram: 'carol',
};

// quando já tem uma variavél com o nome
// var nome = 'Gustavo'
const { nome: nomeDaPessoa } = pessoa;

// quando não tem variavel declada com o nome
const { nome } = pessoa;

console.log(nomeDaPessoa);
