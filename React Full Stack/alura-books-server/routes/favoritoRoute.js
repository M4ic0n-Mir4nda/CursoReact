const { Router } = require("express");
const { getFavoritos, postFavorito, deleteFavorito } = require("../controllers/favoritoController")
const router = Router()

router
    .get('/', getFavoritos)
    .post('/:id', postFavorito)
    .delete('/:id', deleteFavorito)

module.exports = router