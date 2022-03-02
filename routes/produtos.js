const express = require('express')
const router = express.Router();

router.get('/', (request, response, next) => {
    response.status(200).send({
        mensagem: 'GET de Produtos'
    })
});

router.post('/', (request, response, next) => {
    response.status(201).send({
        mensagem: 'POST de Produtos'
    })
});

router.get('/:id_produto', (request, response, next) => {
    response.status(200).send({
        mensagem: 'GET com parametro de Produtos'
    })
});

router.put('/:id_produto', (request, response, next) => {
    response.status(201).send({
        mensagem: 'PUT de PRODUTO'
    })
});

module.exports = router