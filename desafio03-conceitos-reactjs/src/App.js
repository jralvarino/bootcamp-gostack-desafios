import React, { useEffect, useState} from "react";
import api from './services/api';
import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data)
    })
  }, []);

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      url: "https://github.com/jralvarino",
      title: `Alvarino Jr. ${Date.now()}`,
      techs: ["Node", "Express", "TypeScript"]
    });

    const repository = response.data;

    setRepositories([...repositories, repository]);
  }

  async function handleRemoveRepository(id) {
      await api.delete(`repositories/${id}`);

      const newRepositories = repositories.filter(repository => {
        return repository.id !== id;
      })

      setRepositories(newRepositories);
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(respository => (
            <li key={respository.id}>
              {respository.title}
              <button onClick={() => handleRemoveRepository(respository.id)}>Remover</button>
            </li>
        ))}
      </ul>
      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;