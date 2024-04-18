
/*
  ES6 -> ES2012
*/

let nome = "edir";
nome = 123;

let x = 321;


if (x > 0)
{
    let nome = "abc";
   
}

console.log(nome);

/**
 * Soma dois numeros
 * @param {number} n1 
 * @param {number} n2 
 * @returns {number}
 */
function soma(n1, n2)
{
    return n1 + n2;
}

let res = soma(2, 3);
console.log(res);

let sub = function(n1, n2) {
    return n1 - n2;
}


console.log( sub(2, 3) );

// op -> callback
function calc(n1, n2, op)
{
    return op(n1, n2);   
}

let valor = calc(3, 5, soma);


module.exports = soma;