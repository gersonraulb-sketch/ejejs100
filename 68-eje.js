function buscar(arr, buscar, reemplazar) {
    return arr.map(elemento => 
        elemento === buscar ? reemplazar : elemento
    );
}

console.log(buscar([1, 2, 3, 2, 4], 2, 99));