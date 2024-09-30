# API de Notícias

Esta é uma API simples de notícias, criada em Node.js, com funcionalidades de CRUD (Create, Read, Update, Delete). A API permite gerenciar notícias, onde cada notícia contém um título, corpo, autor e data de criação. A API também utiliza o MongoDB como banco de dados.

## Funcionalidades

A API contém os seguintes endpoints:

- `GET /news` - Listar todas as notícias
- `GET /news/{id}` - Obter uma notícia específica pelo ID
- `POST /news` - Criar uma nova notícia
- `PUT /news/{id}` - Atualizar uma notícia existente
- `DELETE /news/{id}` - Deletar uma notícia

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework web para Node.js.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar as notícias.
- **Mongoose**: Biblioteca para modelagem de dados no MongoDB.
- **Swagger**: Utilizado para gerar a documentação da API.
- **Nodemon**: Ferramenta para reiniciar o servidor automaticamente durante o desenvolvimento.
- **Postman**: Utilizado para testar os endpoints da API.

## Instalação e Configuração

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/sua-api-de-noticias.git
cd sua-api-de-noticias
