const express = require("express");
const cors = require("cors");
const { uuid, isUuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const {title, url, techs} = request.body;

  repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  };

  repositories.push(repository);

  return response.json(repository);
});

app.put("/repositories/:id", checkRepository, (request, response) => {
  const id = request.params.id;
  const {title, url, techs} = request.body;

  const indexRepository =  repositories.findIndex(p => p.id == id);
 
  if(indexRepository == -1){
    return response.status(400).json({error: 'O respositório informado não foi encontrado'});
  }

  repository = {
    id,
    title,
    url,
    techs,
    likes: repositories[indexRepository].likes
  };

  repositories[indexRepository] = repository;

  return response.json(repository);
});

app.delete("/repositories/:id", checkRepository, (request, response) => {
  const id = request.params.id;

  const indexRepository =  repositories.findIndex(p => p.id == id);

  if(indexRepository == -1){
    return response.status(400).json({error: 'O respositório informado não foi encontrado'});
  }

  repositories.splice(indexRepository, 1);

  return response.status(204).json();
});

app.post("/repositories/:id/like", checkRepository, (request, response) => {
  const id = request.params.id;

  const indexRepository =  repositories.findIndex(p => p.id == id);

  if(indexRepository == -1){
    return response.status(400).json({error: 'O respositório informado não foi encontrado'})
  }

  const repository = repositories[indexRepository];

  repository.likes += 1;

  repositories[indexRepository] = repository;

  return response.json(repository);
});

function checkRepository(request, response, next){
  if(!isUuid(request.params.id)){   
    return response.status(400).json({error: 'Campo inválido para o identificador'});
  }

  return next();
}

module.exports = app;
