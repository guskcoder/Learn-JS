import { useState, useEffect } from 'react/cjs/react.production.min';
import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss';

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://google.com',
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/guskcoder/repos')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
