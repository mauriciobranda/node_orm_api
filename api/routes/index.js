
/* Ponto de Entrada de todas as rotas*/
const bodyParser = require('body-parser');

module.exports = app => {

    app.use(bodyParser.json());

    app.get('/', (req, res) => { //recebe uma req e passa para frente res
    
        try{
            if(res.statusCode !== 200){
                throw new Error('Cannot access!')
            }
            res.status(200)
            res.send(
                JSON.stringify(sitesAcesso))
        }catch(err){
            res.send(
                JSON.stringify({ mensagem: err.message }))
        }
    })

}


