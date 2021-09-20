const database = require('../models') //relacionar controllers com os modelos

class PessoaController {
    //nao necessita do construtor
    //precisamos fazer as operacoes basicas CRUD

    static async retornaTodasPessoas(req, res) { //pode ser chamado sem o New, deve eseprar resolver (async)
        try{
            const todasPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasPessoas)

        }catch (error){

            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController