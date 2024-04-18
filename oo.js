// orientação de objetos

class Caneta
{
    // atributo - propiedade
    cor = "";

    // executado quando é criado
    constructor(cor)
    {
        this.cor = cor;
    }

    // metodo
    escrever()
    {
        console.log("escreveu " + this.cor);    
    }
}

// instancia
let bic1 = new Caneta("Verde");
let bic2 = new Caneta("Azul");
let bic3 = bic1;

bic1.escrever();

console.log(bic1);
console.log(bic2);
console.log(bic3);

if (bic1 == bic3) {
    console.log("igual");
} else {
    console.log("diferentes")
}

// herança
class CanetaPontaFina extends Caneta
{
    led = "ligado";
}

let bic4 = new CanetaPontaFina("Rosa");

console.log(bic4);

bic4.escrever();

console.log( JSON.stringify(bic4) )

var receita = {
    titulo: "pão simples",
    ingredientes: ["Farinha de Trigo", "Fermento", "Água", "Sal"],
    instrucoes: ["Misture todos os ingredientes, e dissolva bem.",
        "Cubra com um pano e deixe por uma hora em um local morno.",
        "Misture novamente, coloque numa bandeja e asse num forno."]
    };