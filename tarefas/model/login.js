
const { MongoClient, ObjectId } = require("mongodb");

const urlCon = "mongodb+srv://alunos:alunos123@turma-abril.4kgbwqw.mongodb.net/";

const conexao = new MongoClient(urlCon);

/**
 * loga o usuario e retorna os dados dele
 * @param {*} usuario 
 * @param {*} senha 
 */
async function logar(usuario, senha)
{
    let retorno = await conexao.db("proj-tarefas")
                    .collection("usuarios")
                    .findOne({login: usuario, senha: senha});
    
    if (retorno)
    {
        return retorno;
    } else {
        return {
            erro: "Usuário ou senha não encontrados"
        }
    }
}

function estaLogado()
{

}

function deslogar()
{
    
}

module.exports = {
    logar
}