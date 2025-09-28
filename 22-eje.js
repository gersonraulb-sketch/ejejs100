function dias(dia){
    switch(dia){
        case 1 : return "Lunes";
        case 2 : return "Martes";
        case 3 : return "Miercoles";
        case 4 : return "Jueves";
        case 5 : return "Viernes";
        case 6 : return "Sabado";
        case 7 : return "Domingo";
        default: return "Invalido";
    }
}

console.log(dias(1))
console.log(dias(2))
console.log(dias(3))
console.log(dias(4))
console.log(dias(5))
console.log(dias(6))
console.log(dias(7))