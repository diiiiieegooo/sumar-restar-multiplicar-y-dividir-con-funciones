function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        console.log("Error: No se puede dividir por cero.");
        return;
    }
    return a / b;
}

var numero1 = parseInt(prompt("Ingrese el primer número:"));
var numero2 = parseInt(prompt("Ingrese el segundo número:"));

console.log("Resultado de la suma: " + sumar(numero1, numero2));
console.log("Resultado de la resta: " + restar(numero1, numero2));
console.log("Resultado de la multiplicación: " + multiplicar(numero1, numero2));
console.log("Resultado de la división: " + dividir(numero1, numero2));