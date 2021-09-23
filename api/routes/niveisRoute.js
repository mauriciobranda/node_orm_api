/* Ponto de Entrada Rotas de Niveis */

const { Router } = require('express') //metodos Routes do Express
const bodyParser = require('body-parser');
const NivelController = require('../controllers/NivelController')

const router = new Router();

router.get('/niveis/', NivelController.retornaTodosNiveis)
/*router.get('/pessoas/:id', PessoaController.retornaUmaPessoa)
router.post('/pessoas', PessoaController.criarPessoa)
router.put('/pessoas/:id', PessoaController.atualizarPessoa)
router.delete('/pessoas/:id', PessoaController.removerPessoa)*/

module.exports = router;


