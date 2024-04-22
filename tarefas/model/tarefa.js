
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
 */
function listar()
{
    let tarefas = [
        {
            concluido: false,
            titulo: "Fazer dever de casa",
            data_limite: "2024-04-20",
            data_criado: "2024-04-18"
        },
        {
            concluido: true,
            titulo: "Ir no dentista",
            data_limite: "2024-04-20",
            data_criado: "2024-04-18"
        },
        {
            concluido: false,
            titulo: "Lavar roupa",
            data_limite: "2024-04-20",
            data_criado: "2024-04-18"
        }
    ];

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