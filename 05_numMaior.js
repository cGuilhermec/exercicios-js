// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

function numMaior(num1, num2){

    if (num1 > num2){
        return `true`
    } else if (num1 === num2){
        return `false`
    } else return `false`
}

console.log(numMaior(6, 4))