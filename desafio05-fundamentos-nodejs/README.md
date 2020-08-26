
<h1 align="center">
    <img alt="GoStack" src="https://www.imagemhost.com.br/images/2020/04/16/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732e706e67.png"  />
</h1>

<h3 align="center">
  Desafio: Primeiro projeto Node.js
</h3>

<p align="center">
    <a href="https://rocketseat.com.br/">
        <img alt="Rocketseat badge" src="https://img.shields.io/static/v1?label=&style=plastic&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAAA4klEQVQokY3RPUqDQRDG8R8SjYUHsAw2IqI2gngDGxs7A1YWVn5cQvCjsxcPkAtY6xHsBCGilTbRwkYlFu8E1pfs5h142J3h+e8wszSPNrro4RGDpuAuXjFM9NQEPK1BI/UmgSdhvMMqrhJ4rwTu4DeMR1Fbi/wdczlwE19Jlxcc4z7ybmqewUJoA2+ZOYeqHfyLy4J5pB8c1sEOPieAH9jKzdjGQQbsY2UcNBXnPL4zD2/jIdd1GWdo4XZM504OhBusx72F/doIRbiPRdUXnYd5VrXEC0yX4AGecY2lpF7sCH+4ClIXrE+qbgAAAABJRU5ErkJggg==&message=Rocketseat&color=7159c1&logoColor=cyan">
    <a/>
    <a href="https://rocketseat.com.br/gostack">
        <img alt="GoStack badge" src="https://img.shields.io/static/v1?label=Bootcamp&message=GoStack%2011&color=green&style=plastic">
    <a/>
    <a href="https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-fundamentos-nodejs">
        <img alt="Desafio badge" src="https://img.shields.io/static/v1?label=Desafio&message=05&color=orange&style=plastic">
    <a/>
    <img alt="Custom badge" src="https://img.shields.io/static/v1?label=License&message=MIT&color=blue&style=plastic">
    <img alt="NodeJS badge" src="https://img.shields.io/static/v1?label=&style=plastic&logo=Node.js&message=NodeJS&logoColor=white&color=339933">
    <img alt="TypeScript badge" src="https://img.shields.io/static/v1?label=&style=plastic&logo=TypeScript&message=TypeScript&logoColor=white&color=007ACC">

</p>

## Descrição

Aplicação para armazenar transações financeiras de entrada e saída, nesta etapa permite o cadastro e a listagem de transações, não efetua percistencia em banco de dados.

[![desafio3.gif](https://s4.gifyu.com/images/desafio5.gif)](https://gifyu.com/image/ldDz)

## Instalação

Para instalar as dependencias do projeto execute:
```sh
$ yarn
```

Para iniciar o projeto execute:
```sh
$ yarn dev:server
```

## Testes

- **`should be able to create a new transaction`**: Para que esse teste passe, sua aplicação deve permitir que uma transação seja criada, e retorne um json com a transação criado.

- **`should be able to list the transactions`**: Para que esse teste passe, sua aplicação deve permitir que seja retornado um objeto contendo todas as transações junto ao balanço de income, outcome e total das transações que foram criadas até o momento.

- **`should not be able to create outcome transaction without a valid balance`**: Para que esse teste passe, sua aplicação não deve permitir que uma transação do tipo outcome extrapole o valor total que o usuário tem em caixa, retornando uma resposta com código HTTP 400 e uma mensagem de erro no seguinte formato: { error: string }

Para executar os testes execute:
```sh
$ yarn test
```

## Tecnologias

  - ReactJS
  - Jest
  - ESLint
  - Prettier
  - SuperTest
  - TypeScript

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
