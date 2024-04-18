/*
 vetores e loops

 vetores -> array
*/

var cidades = ["curITIba", "PINHAIS", "colombo"];

console.log(cidades);

cidades.push("araucaria");

cidades.sort();

console.log(cidades);

var ini = 0;
var fim = cidades.length - 1;

while(ini <= fim)
{
    var atual = cidades[ini];

    var letra = atual.charAt(0).toUpperCase();
    var resto = atual.substr(1).toLowerCase();

    cidades[ini] = letra + resto;

    ini += 1;
}

cidades.sort();
console.log(cidades);

// imprime os nomes na tela
var fim = cidades.length - 1;

for (var ini = 0; ini <= fim; ini++)
{
    console.log(cidades[ini])
}

console.log("\n forEach \n");

function escrever(item)
{
    console.log(item)
}

cidades.forEach(escrever);