
/* Ponto de Entrada de todas as rotas*/
const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute');
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute');

module.exports = app => {
    app.use( bodyParser.json(),
    pessoas,
    niveis,
    turmas)
}


