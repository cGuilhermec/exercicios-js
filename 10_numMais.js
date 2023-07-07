function numMais(param) {
    let resultado = '';
    for(let i = 0; i < param; i++)
    resultado += `+, `
    return resultado;
}

console.log(numMais(5))