const express = require('express')
const bodyParser = require('body-parser')
const app = express()


const sitesAcesso = [
    { 'site': 'http://globo.com'}
]

const port = 3004

app.get('/api/sites', (req, res) => { //recebe uma req e passa para frente res
    
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


app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`))

module.exports = app