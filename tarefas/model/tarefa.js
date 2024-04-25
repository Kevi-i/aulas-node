/*
   CRUD

   C -> Create -> Criar
   R -> Read -> Ler
   U -> Update -> Atualizar
   D -> Delete -> Remove
*/

const { MongoClient, ObjectId } = require("mongodb");

const urlCon = "mongodb+srv://alunos:alunos123@turma-abril.4kgbwqw.mongodb.net/";

const conexao = new MongoClient(urlCon);

/**
 * Adicionar a tarefa ao BD
 * @param {*} nova Dados da nova tarefa 
 */
async function cadastrar(nova)
{
    let retorno = await conexao.db("proj-tarefas")
                        .collection("tarefas")
                        .insertOne(nova);

    return retorno;
}

/**
 * Seta o status da tarefa como concluido
 * @param {*} tarefa Tarefa selecionada 
 */
async function concluir(tarefa)
{
    let atual = await conexao.db("proj-tarefas")
                        .collection("tarefas")
                        .findOne({_id: new ObjectId(tarefa)});
    

    let novo = { 
        $set: {
            concluido: !atual.concluido
        }
    };
    let retorno = await conexao.db("proj-tarefas")
                        .collection("tarefas")
                        .updateOne({_id: new ObjectId(tarefa)}, novo);
    return retorno;
}

/**
 * Altera as informações da tarefa
 * @param {*} tarefa Tarefa selecionada
 */
async function modificar(tarefa, novoDados)
{
    let novo = {
        $set: novoDados
    };

    let retorno = await conexao.db("proj-tarefas")
                        .collection("tarefas")
                        .updateOne({_id: new ObjectId(tarefa)}, novo);
    
    return retorno;
}

/**
 * Remove a tarefa do BD
 * @param {*} tarefa Tarefa selecionada
 */
async function excluir(tarefa)
{
    let retorno = await conexao.db("proj-tarefas")
                        .collection("tarefas")
                        .deleteOne({_id: new ObjectId(tarefa)});
    return retorno;
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