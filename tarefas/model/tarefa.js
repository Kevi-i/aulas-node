/*
   CRUD

   C -> Create -> Criar
   R -> Read -> Ler
   U -> Update -> Atualizar
   D -> Delete -> Remove
*/

const { MongoClient } = require("mongodb");

const urlCon = "mongodb+srv://alunos:alunos123@turma-abril.4kgbwqw.mongodb.net/";

const conexao = new MongoClient(urlCon);

/**
 * Adicionar a tarefa ao BD
 * @param {*} nova Dados da nova tarefa 
 */
function cadastrar(nova)
{

}

/**
 * Seta o status da tarefa como concluido
 * @param {*} tarefa Tarefa selecionada 
 */
function concluir(tarefa)
{

}

/**
 * Altera as informações da tarefa
 * @param {*} tarefa Tarefa selecionada
 */
function modificar(tarefa, novoDados)
{

}

/**
 * Remove a tarefa do BD
 * @param {*} tarefa Tarefa selecionada
 */
function excluir(tarefa)
{

}

/**
 * Altera o status para o valor informado
 * @param {*} tarefa Tarefa selecionada
 */
function status(tarefa, status)
{

}

/**
 * Seta uma data limite para a tarefa
 * @param {*} tarefa Tarefa selecionada
 */
function data(tarefa, data)
{
    
}

/**
 * Lista tarefas cadastradas
 * @param {boolean} concluido 
 */
async function listar(concluido)
{
    let filtro = {};

    if (concluido == "true") {
        filtro.concluido = true;
    }

    if (concluido == "false") {
        filtro.concluido = false;
    }

    let tarefas = await conexao.db("proj-tarefas")
                        .collection("tarefas")
                        .find(filtro)
                        .toArray();

    return tarefas;
}

module.exports = {
    cadastrar,
    concluir,
    modificar,
    excluir,
    status,
    data,
    listar
}