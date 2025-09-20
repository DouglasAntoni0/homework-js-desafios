// Função que calcula o Máximo Divisor Comum (MDC) entre dois números.
function calcularMDC(num1, num2) {
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  let menorNumero = Math.min(num1, num2);

  for (let i = menorNumero; i > 0; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
}

const numeroA = 48;
const numeroB = 18;

const mdc = calcularMDC(numeroA, numeroB);

console.log(`O MDC entre ${numeroA} e ${numeroB} é: ${mdc}`);