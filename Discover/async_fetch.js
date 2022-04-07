async function start() {
  const reponse = await fetch('https://api.github.com/users/guskcoder');
  const user = await reponse.json();
  const reposResponse = await fetch(user.repos_url);
  const repos = await reposResponse.json();
  console.log(repos);
}

async function start() {
  const url = 'https://api.github.com/users/guskcoder';
  const user = await fetch(url).then((r) => r.json());
  const repos = await fetch(user.repos_url).then((r) => r.json());
  console.log(repos);
}

start();
