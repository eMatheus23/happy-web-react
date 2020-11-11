import express from 'express';

const app = express();

// Rota = conjunto
// Recurso = usuário
// Métodos = HTTP = GET, POST, PUT, DELETE
// Parâmetros

// GET = Busca um informação (Lista, item)
// POST = Criando uma informação nova
// PUT = Editando uma informação 
// DELETE = Deletando uma informação 

app.get('/users', (request, response) => {
    return response.json({ message: 'Hello World' });
});

app.listen(3333);