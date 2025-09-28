function menu(opcion) {
    switch(opcion) {
        case 1: return "Hamburguesa - $10";
        case 2: return "Pizza - $12";
        case 3: return "Ensalada - $8";
        case 4: return "Pasta - $11";
        case 5: return "Sopa - $6";
        default: return "Opción no válida";
    }
}

console.log(menu(1));
console.log(menu(3));
console.log(menu(5));