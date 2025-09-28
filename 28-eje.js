function salario(horas, cargo){
    switch(cargo){
        case "empleado": return "$ " + horas * 15;
        case "supervisor": return "$ " + horas * 20;
        case "gerente": return "$ " + horas * 40;
    }
}

console.log(salario(80, "empleado"));
console.log(salario(80, "supervisor"));
console.log(salario(80, "gerente"));