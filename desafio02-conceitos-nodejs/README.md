
<h1 align="center">
    <img alt="GoStack" src="https://www.imagemhost.com.br/images/2020/04/16/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732e706e67.png"  />
</h1>

<h3 align="center">
  Desafio: Conceitos do NodeJS
</h3> 

<p align="center">
    <a href="https://rocketseat.com.br/">
        <img alt="Rocketseat badge" src="https://img.shields.io/static/v1?label=&style=plastic&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAAA4klEQVQokY3RPUqDQRDG8R8SjYUHsAw2IqI2gngDGxs7A1YWVn5cQvCjsxcPkAtY6xHsBCGilTbRwkYlFu8E1pfs5h142J3h+e8wszSPNrro4RGDpuAuXjFM9NQEPK1BI/UmgSdhvMMqrhJ4rwTu4DeMR1Fbi/wdczlwE19Jlxcc4z7ybmqewUJoA2+ZOYeqHfyLy4J5pB8c1sEOPieAH9jKzdjGQQbsY2UcNBXnPL4zD2/jIdd1GWdo4XZM504OhBusx72F/doIRbiPRdUXnYd5VrXEC0yX4AGecY2lpF7sCH+4ClIXrE+qbgAAAABJRU5ErkJggg==&message=Rocketseat&color=7159c1&logoColor=cyan">
    <a/>
    <a href="https://rocketseat.com.br/gostack">
        <img alt="GoStack badge" src="https://img.shields.io/static/v1?label=Bootcamp&message=GoStack%2011&color=green&style=plastic">
    <a/>
    <a href="https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-conceitos-nodejs">
        <img alt="Desafio badge" src="https://img.shields.io/static/v1?label=Desafio&message=02&color=orange&style=plastic">
    <a/>  
    <img alt="MIT badge" src="https://img.shields.io/static/v1?label=License&message=MIT&color=blue&style=plastic"> 
    <img alt="NodeJS badge" src="https://img.shields.io/static/v1?label=&style=plastic&logo=Node.js&message=NodeJS&logoColor=white&color=green">     
</p>
        
## Descrição
        
Aplicação para armazenar repositórios do seu portfólio, permite a criação, listagem, atualização e remoção dos repositórios, pemite também que os repositórios possam receber "likes".
  
## Instalação

Para instalar as dependencias do projeto execute:
```sh
$ yarn
```  

Para iniciar o servidor execute:
```sh
$ yarn dev
```  

## Testes

Para executar os testes execute:
```sh
$ yarn test
```  

## Rotas

- **`POST /repositories`**: A rota recebe os campos `title`, `url` e `techs` dentro do corpo da requisição;

- **`GET /repositories`**: Rota que lista todos os repositórios;

- **`PUT /repositories/:id`**: A rota altera apenas o `title`, a `url` e as `techs` do repositório que possua o `id` igual ao `id` presente nos parâmetros da rota;

- **`DELETE /repositories/:id`**: A rota deleta o repositório com o `id` presente nos parâmetros da rota;

- **`POST /repositories/:id/like`**: A rota deve aumentar o número de likes do repositório específico escolhido através do `id` presente nos parâmetros da rota;

## Tecnologias  

  - Express
  - uuidv4
  - cors

---
<p align="center" size="0.1">
    <i>"do what you love, love what you do"</i>
</p>

<p align="left">
    <a href="https://www.linkedin.com/in/alvarinojr/" target="_blank">
        <img alt="Linkedin badge" src="https://img.shields.io/static/v1?label=&style=flat-square&logo=linkedin&message=Linkedin&colorB=555">
    </>    
    <a href="mailto:alvarinojr@gmail.com" target="_blank">
        <img alt="Gmail badge" src="https://img.shields.io/static/v1?label=&style=flat-square&logo=gmail&colorB=555&message=Email">
    </>    
</p>
