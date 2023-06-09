// Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um 
// funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$ 
// X", em que X é o quanto o funcionário ganhou no mês.

function salario(horasTrabalhadas, valorPorHora){
    const salarioBase = horasTrabalhadas * valorPorHora;
    return `Voce trabalha ${horasTrabalhadas} por mes, e recebe R$${valorPorHora}, isso no final do mes da o total de R$${salarioBase}`
}

console.log(salario(176, 10))