/*
let sumar = (num1, num2) => num1 + num2
let restar = (num1, num2) => num1 - num2
let multiplicar = (num1, num2) => num1 * num2
let dividir = (num1, num2) => num1 / num2

let calculadora = (num1, num2, operacion) => operacion (num1, num2)

console.log(calculadora (3, 5, restar));
*/

function agregarHttp(url) {
    return "http://" + url
}

function procesar(array,funcion){
    let retorno = []
    for (i=0; i < array.length; i++){
        retorno.push (agregarHttp(array[i]))
    } 
    return retorno
}

console.log(procesar (['www.google.com', 'www.river.com'], agregarHttp))
