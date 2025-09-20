// Função para encontrar os índices do maior e menor valor em um array.
function encontrarIndices(array) {
  if (array.length === 0) {
    return "O array está vazio.";
  }

  const maiorValor = Math.max(...array);
  const menorValor = Math.min(...array);

  const indiceMaior = array.indexOf(maiorValor);
  const indiceMenor = array.indexOf(menorValor);

  return {
    indiceDoMaior: indiceMaior,
    indiceDoMenor: indiceMenor,
  };
}

const numeros = [50, 25, 100, 5, 87, 12, 150, 3]; 

const resultado = encontrarIndices(numeros);

console.log('Array:', numeros);
console.log(`O índice do maior valor (150) é: ${resultado.indiceDoMaior}`); 
console.log(`O índice do menor valor (3) é: ${resultado.indiceDoMenor}`);   