const express = require('express');
const cadastroLivros = require('../livro')
const livroController = require('../controller/livro_controller')

const router = express.Router();

//Recurso: Livros - rota: /livros
router.get('/', livroController.listarLivros);
router.post('/', livroController.inserirLivro);
router.put('/:id', livroController.atualizarLivro);
router.delete('/:id', livroController.deletarLivro);
////////////////
router.get('/:id', livroController.buscarLivroPorId);
router.get('/autor/:autor', livroController.buscarLivrosPorAutor);
router.get('/nome/:nome', livroController.buscarLivrosPorNome);
router.get('/disponiveis', livroController.buscarLivrosDisponiveis);
///////////////
router.put('/:id/retirar/:clienteId', livroController.realizarRetiradaLivro);
router.put('/:id/devolver/:clienteId', livroController.realizarDevolucaoLivro);

module.exports = router;
