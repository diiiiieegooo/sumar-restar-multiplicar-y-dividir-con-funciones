function sumar(num1, num2) {
    let resultado = num1 + num2;
    console.log(`El resultado de la suma es ${resultado}`);
  }


  function restar(num1, num2) {
    let resultado = num1 - num2;
    console.log(`El resultado de la resta es ${resultado}`);
  }


  function multiplicar(num1, num2) {
    let resultado = num1 * num2;
    console.log(`El resultado de la multiplicación es ${resultado}`);
  }


  function dividir(num1, num2) {
    let resultado = num1 / num2;
    console.log(`El resultado de la división es ${resultado}`);
  }


  let numero1 = parseInt(prompt("Introduce el primer número:"));
  let numero2 = parseInt(prompt("Introduce el segundo número:"));

  sumar(numero1, numero2);
  restar(numero1, numero2);
  multiplicar(numero1, numero2);
  dividir(numero1, numero2);