/* Objetos Date
  .getDate --> retorna el número del día del mes de una fecha
  .getMonth --> retorna el número del mes de una fecha 
  .getDay --> retorna el día de la semana de una fecha
  .getFullYear --> retorna el año completo

  El objeto Date nos permite crear una fecha dinámica (yyyy, mm, dd)
 */



let fechaActual = new Date ()

// let fechaActual = new Date (1986, 8, 3)

let anio = fechaActual.getFullYear ()
let mes = fechaActual.getMonth ()
let dia = fechaActual.getDate ()

let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

console.log("Hoy es el "+ dia + " de " + meses [mes] + " de " + anio)

// console.log (fechaActual.toUTCString())

// console.log (fechaActual.getFullYear())

// console.log (fechaActual.getMonth())

// console.log (fechaActual.getDay())

// console.log (fechaActual.getDate())

