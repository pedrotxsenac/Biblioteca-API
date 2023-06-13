const Autor = require('../autor');

function listarAutor(req, res) {
  const autores = Autor.listarAutor();
  res.json(autores);
}

function inserirAutor(req, res) {
  const autor = req.body;

  try {
    const autorCadastrado = Autor.inserirAutor(autor);
    res.status(201).json(autorCadastrado);
  } catch (err) {
    res.status(err.numero).json(err);
  }
}

function buscarPorIdAutor(req,res) {
    const id = req.params.id;
    try{
        const autor = Autor.buscarPorIdAutor(id);
        res.json(autor);
    } catch (err) {
        res.status(err.numero).json(err);
    }
}

function atualizarAutor(req,res) {
    const id = req.params.id;
    const autor = req.body;
    try{
        const autorAtualizado = Autor.atualizarAutor(id,autor);
        res.json(autorAtualizado);
    }
    catch (err) {
        res.status(err.numero).json(err);
    }

}

function deletarAutor(req,res) {
    const id = req.params.id;
    try{
        const autorDeletado = Autor.deletarAutor(id);
        res.json(autorDeletado);
    }
    catch (err) {
        res.status(err.numero).json(err);
    }
}



module.exports = {
  listarAutor,
  inserirAutor,
  buscarPorIdAutor,
  atualizarAutor,
  deletarAutor
};
