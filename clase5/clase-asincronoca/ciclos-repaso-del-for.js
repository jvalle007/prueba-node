function noParesDeContarImparesHasta(numero){
    let acumuladora = 0
    for (let i = 1; i <= numero; i ++) {
        if ( i % 2 != 0) {
            acumuladora = acumuladora + 1
        } 
    } return acumuladora
} 

console.log(noParesDeContarImparesHasta (18));

