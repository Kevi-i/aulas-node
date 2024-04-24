
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const tarefa = require('./model/tarefa');

let porta = 8000;

if (process.env.PORTA) {
    porta = process.env.PORTA;
}


// route
// get -> receber dados
// post -> enviar dados


app.get("/listar-tarefas", async function(req, res){

    let tarefas = await tarefa.listar(req.query.concluido);

    res.json(tarefas);
});

app.post("/nova-tarefa", async function(req, res){
    let dados = req.body;

    let novo = {
        titulo: dados.titulo,
        data_limite: dados.data,
        concluido: false,
        data_criado: new Date() 
    };

    let retorno = await tarefa.cadastrar(novo)
    res.send(retorno);
});

app.post("/alterar-tarefa", function(req, res) {
    res.send("tarefa alterada")
});

app.post("/deletar-tarefa", async function(req, res){

    let retorno = await tarefa.excluir(req.body.id);

    res.send(retorno);
});

app.post("/logar", function(req, res){
    res.send("usuario logado");
})

app.listen(porta, function(){
    console.log("Servidor iniciado na porta: "+ porta)
});