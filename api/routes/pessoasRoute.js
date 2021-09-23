
/* Ponto de Entrada Rotas de Pessoas */
const { Router } = require('express') //metodos Routes do Express
const bodyParser = require('body-parser');
const PessoaController = require('../controllers/PessoaController')

const router = new Router();

router.get('/pessoas', PessoaController.retornaTodasPessoas)
router.get('/pessoas/:id', PessoaController.retornaUmaPessoa)
router.post('/pessoas', PessoaController.criarPessoa)
router.put('/pessoas/:id', PessoaController.atualizarPessoa)
router.delete('/pessoas/:id', PessoaController.removerPessoa)
router.get('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.retornaMatPessoa)


module.exports = router;


