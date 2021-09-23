/* Controlador faz o meio de campo entre models e o roteador
Front/View -> Route -> Controller -> Model
Front/View <- Route <- Controller <- Model
*/

const database = require('../models') //relacionar controllers com os modelos

class TurmaController {
    //nao necessita do construtor
    //precisamos fazer as operacoes basicas CRUD

    static async retornaTodasTurmas(req, res) { //pode ser chamado sem o New, deve eseprar resolver (async)
        try{
            const todasTurmas = await database.Turmas.findAll()
            return res.status(200).json(todasTurmas)

        }catch (error){

            return res.status(500).json(error.message)
        }
    }
    
    static async retornaUmaTurma(req, res) {
        
        try{
            const id  = req.params.id
            const umaTurma = await database.Turmas.findOne({ where: { id: id } });
            return res.status(200).json(umaTurma)

        }catch(error){
            return res.status(404).json(error.message)
        }

    }
/*
    static async criarPessoa(req, res) {
        try {
            const registroPessoa = req.body
            const regPessoa = await database.Pessoas.create(registroPessoa)
            return res.status(200).json(regPessoa)
            
        } catch (error) {
            return res.status(404).json(error.message)
        }
    }

    static async atualizarPessoa(req, res) {
        try {
        
            //primeiro retorna a pessoa escolhida
            const id  = req.params.id
            //const datosAtuaisPessoa = await database.Pessoas.findOne({ where: { id: id } });
            const dadosAtualizarPessoa = req.body
            console.log(dadosAtualizarPessoa)
            const atualizaPessoa = await database.Pessoas.update(dadosAtualizarPessoa,{ where: { id: id } });
            return res.status(200).json("Atualizado!")

        } catch (error) {
            return res.status(404).json(error.message)
        }

    }

    static async removerPessoa(req, res) {
        try {
            const id  = req.params.id
            const removePessoa = await database.Pessoas.destroy({ where: { id: id } });
            return res.status(200).json(removePessoa)
            
        } catch (error) {
            
        }
    }*/


}

module.exports = TurmaController