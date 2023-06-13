const Livro = require('../livro');

function listarLivros(req, res) {
  const livros = Livro.listarLivros();
  res.json(livros);
}

function inserirLivro(req, res) {
  const livro = req.body;

  try {
    const livroCadastrado = Livro.inserirLivro(livro);
    res.status(201).json(livroCadastrado);
  } catch (err) {
    res.status(err.numero).json(err);
  }
}

function atualizarLivro(req,res) {
  const id = req.params.id;
  const livro = req.body;
  try{
      const livroAtualizado = Livro.atualizarLivro(id,livro); //de olho aqui
      res.json(livroAtualizado);
  }
  catch (err) {
      res.status(err.numero).json(err);
  }

}

function deletarLivro(req,res) {
  const id = req.params.id;
  try{
      const livroDeletado = Livro.deletarLivro(id);
      res.json(livroDeletado);
  }
  catch (err) {
      res.status(err.numero).json(err);
  }
}



/////////////////////////////




function buscarLivroPorId(req, res) {
  const id = req.params.id;
  try {
    const livro = Livro.buscarLivroPorId(id);
    res.json(livro);
  } catch (err) {
    res.status(err.numero).json(err);
  }
}

function buscarLivrosPorAutor(req, res) {
  const autor = req.params.autor;
  try {
    const livros = Livro.buscarLivrosPorAutor(autor);
  res.json(livros);
  } catch (err) {
    res.status(err.numero).json(err);
  }
}

function buscarLivrosPorNome(req, res) {
  const nome = req.params.nome;
  const livros = Livro.buscarLivrosPorNome(nome);
  res.json(livros);
}

function buscarLivrosDisponiveis(req, res) {
  const livros = Livro.buscarLivrosDisponiveis();
  res.json(livros);
}


///////////////////


function realizarRetiradaLivro(req, res) {
  const id = req.params.id;
  const clienteId = req.params.clienteId;
  try {
    const livroRetirado = Livro.realizarRetiradaLivro(id, clienteId);
    res.json(livroRetirado);
  } catch (err) {
    res.status(err.numero).json(err);
  }
}

function realizarDevolucaoLivro(req, res) {
  const id = req.params.id;
  const clienteId = req.params.clienteId;
  try {
    const livroDevolvido = Livro.realizarDevolucaoLivro(id,clienteId);
    res.json(livroDevolvido);
  } catch (err) {
    res.status(err.numero).json(err);
  }
}

module.exports = {
  listarLivros,
  inserirLivro,
  atualizarLivro,
  deletarLivro,
  

  
  buscarLivroPorId,
  buscarLivrosPorAutor,
  buscarLivrosPorNome,
  buscarLivrosDisponiveis,
  
  
  
  realizarRetiradaLivro,
  realizarDevolucaoLivro
};
