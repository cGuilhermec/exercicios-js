// Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias

function transformadorDeIdade(idade){
    const totIdade = idade * 365; 
    return `Sua indade em dias e: ${totIdade}`
}

console.log(transformadorDeIdade(22))