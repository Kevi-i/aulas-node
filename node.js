// escrever um arquivo
//formato de modulo cjs
const fs = require("fs");
const csv = require("csv-writer").createArrayCsvWriter;

// formato ESM
// import fs from "fs";

function escreve()
{
    console.log("inicio");

    let valores = "nome, email\n";
    valores += "pedro, pedro@abc.com\n";
    valores += "maria, maria@gmail.com\n";

    let cidades = [["curitiba"], ["colombo"], ["arucaria"]];

    const retorno = function(){
        console.log("terminou");
    }

    let gravar = csv({
        path: "cidade.csv",
        header: ["Nome"]
    });
    
    gravar.writeRecords(cidades);

    // exercicio
    // ler o arquivo exemplo.csv e imprimir na tela
}

function lerClientes(cb){
    fs.readFile("exemplo.csv", "utf8", function(erro, dados){
        if (erro != null)
        {
            cb("Arquivo não encontrado");
        } else {
            cb(dados);
        }
    } )
}

escreve();

module.exports = {
    escreve,
    lerClientes
}