import express from 'express';

const app = express();

app.use(express.json());

// Rota = conjunto
// Recurso = usuário
// Métodos = HTTP = GET, POST, PUT, DELETE
// Parâmetros

// GET = Busca um informação (Lista, item)
// POST = Criando uma informação nova
// PUT = Editando uma informação 
// DELETE = Deletando uma informação 

// Query Params: http://localhost:3333/users?search=diego&page=2
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users/ 


app.post('/users/:id', (request, response) => {
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);


    return response.json({ message: 'Hello World' });
});



app.listen(3333);

// Driver nativo, Query builder, ORM 
// Object Relational Mapping
