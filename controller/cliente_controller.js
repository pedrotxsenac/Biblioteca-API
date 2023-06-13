const Cliente = require('../cliente');

function listarClientes(req, res) {
  const clientes = Cliente.listarClientes();
  res.json(clientes);
}

function inserirCliente(req, res) {
  const cliente = req.body;

  try {
    const clienteCadastrado = Cliente.inserirCliente(cliente);
    res.status(201).json(clienteCadastrado);
  } catch (err) {
    res.status(err.numero).json(err);
  }
}

function buscarPorIdCliente(req,res) {
    const id = req.params.id;
    try{
        const cliente = Cliente.buscarPorIdCliente(id);
        res.json(cliente);
    } catch (err) {
        res.status(err.numero).json(err);
    }
}


function atualizarCliente(req,res) {
    const id = req.params.id;
    const cliente = req.body;
    try{
        const clienteAtualizado = Cliente.atualizarCliente(id,cliente); //de olho aqui
        res.json(clienteAtualizado);
    }
    catch (err) {
        res.status(err.numero).json(err);
    }

}

function deletarCliente(req,res) {
    const id = req.params.id;
    try{
        const clienteDeletado = Cliente.deletarCliente(id);
        res.json(clienteDeletado);
    }
    catch (err) {
        res.status(err.numero).json(err);
    }
}


module.exports = {
  listarClientes,
  inserirCliente,
  buscarPorIdCliente,
  atualizarCliente,
  deletarCliente
};
