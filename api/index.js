const express = require('express')
const routes = require('./routes') //importa todos os metodos de routes p/ acessar as rotas

const app = express()
const port = 3004

routes(app)

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`))

module.exports = app