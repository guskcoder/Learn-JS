// Buscar os dados do usuário

// Chamar uma função pra validar a idade do usuário

function buscarUsuario(callback) {
  // Banco de dados
  const usuario = {
    id: 1,
    nome: 'Maria',
    idade: 17,
  };

  callback(usuario);
}

function calcularIdade(usuario) {
  if (usuario.idade >= 18) {
    console.log('Usuário Maior de Idade');
  } else {
    console.log('Usuário Menor de Idade');
  }
}

buscarUsuario(calcularIdade);
