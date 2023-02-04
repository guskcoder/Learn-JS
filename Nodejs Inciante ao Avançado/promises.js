// console.log('Primeira Mensagem');

function aguardarSetTimeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log('Segunda Mensagem');
      // resolve('Segunda Mensagem');
      reject('Mensagem Incorreta');
    }, 5000);
  });
}

// Async / Await

async function executar() {
  try {
    const segundaMensagem = await aguardarSetTimeout();
    console.log(segundaMensagem);

    console.log('Terceira Mensagem');
  } catch (err) {
    console.log(err);
  }
}

executar();

console.log('-----------------------');

console.log('Primeira Mensagem');

aguardarSetTimeout()
  .then((result) => {
    console.log(result);
    console.log('Terceira Mensagem');
  })
  .catch((err) => console.log(err));
