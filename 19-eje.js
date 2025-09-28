function convertir(cantidad, moneda) {
    const tasas = {
        'USD': 0.00025,
        'MXN': 0.0042,
        'EUR': 0.00021
    };
    
    return cantidad * tasas[moneda];
}


console.log(convertir(100000, 'USD') + " USD");
console.log(convertir(50000, 'MXN') + " MXN");
console.log(convertir(200000, 'EUR') + " EUR");