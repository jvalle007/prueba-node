let amigos = ["Coco", "Pablito", "Sus", "Franco"]

let amigosJSON = JSON.stringify (amigos)

// console.log(amigosJSON);

let amigosOriginal = JSON.parse (amigosJSON)

// console.log(amigosOriginal);

let persona = {
    nombre: "Carli",
    edad: 26,
    domicilio: "Calle falsa 123"
}

// console.log(persona);

let personaJSON = JSON.stringify (persona)

// console.log(personaJSON);

let personaOriginal = JSON.parse (personaJSON)

console.log(personaOriginal);
