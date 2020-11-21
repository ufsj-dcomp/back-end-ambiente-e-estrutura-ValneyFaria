var express = require('express');
var app = express();

// Definição de rota (/ é a rota raiz, qualquer requisição que chegar aqui será respondida)
app.get('/', function (req, res) {
    // req e res: respectivamente, carrega informações sobre a requisição (variáveis) e carrega informações sobre a resposta
    res.send('Hello World!');
});

app.get('/aplicativo', function (req, res) {
    // req e res: respectivamente, carrega informações sobre a requisição (variáveis) e carrega informações sobre a resposta
    res.send('Aplicativo Exemplo!');
});

app.get('/html', function (req, res) {
    // req e res: respectivamente, carrega informações sobre a requisição (variáveis) e carrega informações sobre a resposta
    res.send('index.html');
});

app.post('/images', function (req, res) {
    // req e res: respectivamente, carrega informações sobre a requisição (variáveis) e carrega informações sobre a resposta
    res.send('Imagem 1 – Imagem 2 – Imagem 3');
});

app.delete('/clientes/10', function (req, res) {
    // req e res: respectivamente, carrega informações sobre a requisição (variáveis) e carrega informações sobre a resposta
    res.send('Cliente número 10 removido com sucesso');
});

// GET “/aplicativo”
// Retorna para o cliente a string “Aplicativo Exemplo!”

// GET “/html”
// Retorna um código HTML simples com o Título “Hello World!” e
// no corpo o conteúdo “Lista 03 – Tecnologias Web”

// POST “/imagens”
// Retorna para o cliente a string “Imagem 1 – Imagem 2 – Imagem 3”

// DELETE “/clientes/10”
// Retorna para o cliente a string “Cliente número 10 removido
// com sucesso”



// [completer com as rotas listadas acima]
app.listen(3022, function () {
    console.log('Aplicacao Web rodando na porta 3000!');
});