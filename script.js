calcular();
function calcular() {
    let num1 = parseInt(prompt("Pon tu primer número:"));
    let num2 = parseInt(prompt("Pon tu segundo número:"));
    sumar(num1, num2);
    restar(num1, num2);
    multiplicar(num1, num2);
    dividir(num1, num2);
}
function sumar(num1, num2) {
    let resultado = num1 + num2;
    console.log(`La suma es: ${resultado}`);
    alert("El resultado de la suma es: " + suma);
}


function restar(num1, num2) {
    let resultado = num1 - num2;
    console.log(`La resta es: ${resultado}`);
    alert("El resultado de la resta es: " + resta);
}

function multiplicar(num1, num2) {
    let resultado = num1 * num2;
    console.log(`La multiplicación es: ${resultado}`);
    alert("El resultado de la multiplicación es: " + multiplicación);
}


function dividir(num1, num2) {
    let resultado = num1 / num2;
    console.log(`La división es: ${resultado}`);
    alert("El resultado de la división es: " + división);

}