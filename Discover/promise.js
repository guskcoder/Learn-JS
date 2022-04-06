let aceitar = true;

console.log('Pedir Uber');

const promessa = new Promise((resolve, reject) => {
  if (aceitar) {
    return resolve('Pedido Aceito');
  }

  return reject('Pedido Negado');
});

console.log('Aguardando');

promessa
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log('Finalizado'));
