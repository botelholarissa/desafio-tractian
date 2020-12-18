# Tractian - Desafio 

## Descição do projeto

<p align="justify">
    Um API com CRUD para cadastrar empresas e seus respectivos ativos, unidades e colaboradores.
<p>

---

## Pré-requisitos

- [Node](https://nodejs.org/en/download/)
- [NPM](https://www.npmjs.com/get-npm) ou [Yarn](https://classic.yarnpkg.com/pt-BR/docs/install/

## Como rodar a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/botelholarissa/desafio-tractian
# Acesse a pasta do projeto no terminal/cmd
$ cd desafio-tractian
# Instale as dependências
$ npm install 
# Execute a aplicação em modo de desenvolvimento
$ npm run start 
# A aplicação será aberta na porta:5000 - acesse http://localhost:5000
```
### Heroku
https://tractian-desafio.herokuapp.com/

## Rotas

### index
Método | Caminho | Descrição
------ | ------- | ---------:
GET | / | Retorna informações iniciais.

### users
Método | Caminho | Descrição
------ | ------- | ---------:
GET | /users | Retorna todos os usuários.
GET | /users/:id | Retorna o usuário pelo ID inserido.
POST | /users/create | Adiciona um usuário.
PUT | /users/update | Atualiza informações do usuário.
DELETE | /users/delete | Deleta um usuário.

### assets
Método | Caminho | Descrição
------ | ------- | ---------:
GET | /assets | Retorna todos os ativos.
GET | /assets/:id | Retorna o ativo pelo ID inserido.
POST | /assets/create | Adiciona um ativo.
PUT | /assets/update | Atualiza informações do ativo.
DELETE | /assets/delete | Deleta um ativo.

### units
Método | Caminho | Descrição
------ | ------- | ---------:
GET | /units | Retorna todos as unidades.
GET | /units/:id | Retorna a unidade pelo ID inserido.
POST | /units/create | Adiciona uma unidade.
PUT | /units/update | Atualiza informações da unidade.
DELETE | /units/delete | Deleta uma unidade.

### companies
Método | Caminho | Descrição
------ | ------- | ---------:
GET | /co | Retorna todos as empresas.
GET | /co/:id | Retorna a empresa pelo ID inserido.
GET | /co/overview/:id | Retorna todas as informações da empresa e de seus ativos, colaboradores, funcionários e unidades.
POST | /co/create | Adiciona um empresa.
PUT | /co/update | Atualiza informações da empresa.
DELETE | /co/delete | Deleta uma empresa.