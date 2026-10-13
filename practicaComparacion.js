const prompt = require('prompt-sync')();


function compararNumeros(numero1, numero2, numero3) {
    let mayor = numero1;
    let centro = numero2;
    let menor = numero3;

    if (mayor < centro) {
        let aux = mayor;
        mayor = centro;
        centro = aux;
    }

    if (mayor < menor) {
        let aux = mayor;
        mayor = menor;
        menor = aux;
    }

    if (centro < menor) {
        let aux = centro;
        centro = menor;
        menor = aux;
    }

    if (numero1 === numero2 && numero2 === numero3) {
        console.log('Los números son iguales.');
    }

    console.log(mayor + ", " + centro + ", " + menor + ".");
    console.log(menor + ", " + centro + ", " + mayor + ".");
}

const numero1 = Number(prompt('Ingresa el primer numero: '));
const numero2 = Number(prompt('Ingresa el segundo numero: '));
const numero3 = Number(prompt('Ingresa el tercer numero: '));

compararNumeros(numero1, numero2, numero3);