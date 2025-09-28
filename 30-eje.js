function jugar(jd, jd2) {
    switch(jd+ jd2) {
        case 'piedratijera':
        case 'papelpiedra':
        case 'tijerapapel':
            return "Ganaste";
        case 'piedrapiedra':
        case 'papelpapel':
        case 'tijeratijera':
            return "Empate";
        default:
            return "Perdiste";
    }
}


console.log(jugar('piedra', 'tijera'));  
console.log(jugar('papel', 'papel'));    
console.log(jugar('tijera', 'piedra'));  