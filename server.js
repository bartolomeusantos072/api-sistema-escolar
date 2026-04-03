// api/server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Aponta para o seu arquivo
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Reescreve as rotas para que a Vercel entenda o caminho /api/
server.use(jsonServer.rewriter({
    '/api/*': '/$1'
}));

server.use(router);

module.exports = server;