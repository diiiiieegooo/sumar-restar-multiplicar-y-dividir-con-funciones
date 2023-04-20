function sumar(num1, num2) {
    return num1 + num2;
  }

  function restar(num1, num2) {
    return num1 - num2;
  }

  function multiplicar(num1, num2) {
    return num1 * num2;
  }
  
  function dividir(num1, num2) {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return "No es posible realizar operaciones por cero.";
    }
  }
  
  alert("¡Bienvenido a mates en linea, a continuación podrá realizar sumas, restas, multiplicaciones o divisiones:");
  
  let num1 = parseFloat(prompt("Por favor, ponga el primer número aquí: "));
  let num2 = parseFloat(prompt("Ahora, ponga el segundo número aquí: "));
  
  console.log("El resultado de la suma es: " + sumar(num1, num2));
  console.log("El resultado de la resta es: " + restar(num1, num2));
  console.log("El resultado de la multiplicación es: " + multiplicar(num1, num2));
  console.log("El resultado de la división es: " + dividir(num1, num2));
  