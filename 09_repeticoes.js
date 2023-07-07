// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto 
// que o segundo será o número de vezes que haverá repetição. Um array será retornado


function repetir(n1, n2) {
    let resultado = []
    for (let i = 0; i < n2; i++)
    resultado.push(n1)
    return resultado
}

console.log(repetir(1, 5)) 

// function repetir(item, quantidade) {
//     let resultado = []
//     for (let i = 0; i < quantidade; i++)
//     resultado.push(item)
//     return resultado
//     }
    