function dividir (num1, num2) {
    if (num1 === 0 || num2 === 0) {
        return "No se puede dividir por 0"
    } else {
        return num1 / num2
    }
}

console.log (dividir (18, 2))

module.exports = dividir