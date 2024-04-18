
//Exercicio 31

var dia = 1;

if (dia == 1)
{
    console.log("domingo");
    
} else if(dia == 2)
{
    console.log("segunda");
} else if(dia == 3)
{
    console.log("terça");
} else if (dia == 4)
{ 
    console.log("quarta");
} else if (dia == 5)
{
    console.log("quinta");
} else if (dia == 6)
{
    console.log ("sexta");
} else if(dia == 7)
{
    console.log("sabado");
}
else 
{
    console.log("valor inválido");
}

/* 
    pessoa > 12 e tiver < de 50kg -> encaminhar médico
    pessoa < 50 kg e mais de 16 anos tambem encaminha

   && -> E -> and 
   || -> OU -> or
*/

var idade = 10;
var peso = 34.7;

if (idade > 12)
{
    if (peso < 50)
    {
        console.log("medico");
    } else {
        console.log("normal");
    }
    
} else if( peso < 50)
{
    if (idade > 16)
    {
        console.log("medico");
    } else {
        console.log("normal");
    }
}

/*
    aluno for da 4 ou da 5 e dia de aula de matematica
    ele nao ter aula
*/

var aluno = 3
var matematica = true;

if ( (aluno == 5 || aluno == 5) && matematica == true)
{
    console.log("nao tem aula");
} else {
    console.log("aula normal");
}
