// Função que retorna a soma de todos os múltiplos de 5 ou 7 abaixo de um número limite.
function somaMultiplos(limite) {
  let soma = 0; 

  for (let i = 1; i < limite; i++) {
    if (i % 5 === 0 || i % 7 === 0) {
      soma += i; 
    }
  }

  return soma;
}

const limite = 1000;
const resultadoSoma = somaMultiplos(limite);

console.log(`A soma de todos os múltiplos de 5 ou 7 abaixo de ${limite} é: ${resultadoSoma}`);
