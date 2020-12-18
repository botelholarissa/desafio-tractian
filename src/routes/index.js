const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send({
        title: "Desafio Tractian",
        description: "Utilizando essa API você pode cadastrar, atualizar, deletar e retornar dados de usuários, empresas, ativos e unidades.",
        version: "1.0.0"
    });
})


module.exports = router;