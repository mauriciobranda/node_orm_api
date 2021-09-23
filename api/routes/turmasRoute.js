/* Ponto de Entrada Rotas de Turmas */

const { Router } = require('express') //metodos Routes do Express
const bodyParser = require('body-parser');
const TurmaController = require('../controllers/TurmaController')

const router = new Router();

router.get('/turmas/', TurmaController.retornaTodasTurmas)
router.get('/turmas/:id', TurmaController.retornaUmaTurma)
/*router.post('/pessoas', PessoaController.criarPessoa)
router.put('/pessoas/:id', PessoaController.atualizarPessoa)
router.delete('/pessoas/:id', PessoaController.removerPessoa)*/

module.exports = router;


