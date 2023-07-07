// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a 
// multiplicação deles. Porém, não utilize o operador de mutiplicação.


function multiplicar(param1, param2){
    const soma = param1 * param2;
     return `A multiplicacao entre ${param1} X ${param2} = ${soma}`
};

console.log(multiplicar(0, 3))