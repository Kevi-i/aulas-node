const express = require("express");

const app = express();

// route
// get -> receber dados
// post -> enviar dados 

app.get("/listar-tarefas", function(req,res){
    res.send("tarefas cadastradas");
});

app.post("/nova-tarefa",function(req,res){
    res.send("tarefa adicionada");
});

app.post("/alterar-tarefa", function(req,res){
    res.send("tarefa alterada");
});

app.post("deletar-tarefa", function(req,res){
    res.send("tarefa deletada");
});

app.post("/logar", function(req,res){
    res.send("usuario logado");
});

app.listen(8000, function(){
    console.log("servidor iniciado");
});