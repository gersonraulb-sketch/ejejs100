function descuento(total, categoria) {
    switch(categoria) {
        case "regular": return "Descuento incluido: " + total * 0.95;   
        case "frecuente": return "Descuento incluido: " + total * 0.90;  
        case "vip": return "Descuento incluido: " + total * 0.85;        
        default: return "Sin descuento: " + total;                  
    }
}

console.log(descuento(100, "regular"));   
console.log(descuento(100, "vip"));       
console.log(descuento(100, "normal"));    