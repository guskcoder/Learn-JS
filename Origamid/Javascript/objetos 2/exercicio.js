function pesquisar() {
  let valor = document.querySelector('.inputvalor').value;

  const cep = fetch(`https://viacep.com.br/ws/${valor}/json`);

  cep
    .then((r) => r.json())
    .then((body) => {
      console.log(body.bairro);
      const conteudo = document.querySelector('.container');
      conteudo.innerText = body.bairro;
    });
}
