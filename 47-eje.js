function serieNumerica(tipo, n) {
    for (let i = 1; i <= n; i++) {
        if (tipo === "tipo1") console.log(i * 2);
        if (tipo === "tipo2") console.log(i * 2 - 1);
        if (tipo === "tipo3") console.log(i * i);
        if (tipo === "tipo4") console.log(i * 3);
    }
}


serieNumerica("tipo1", 5);
serieNumerica("tipo2", 5);
serieNumerica("tipo3", 5); 
serieNumerica("tipo4", 5);