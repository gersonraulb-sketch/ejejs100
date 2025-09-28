function convertirTiempo(cantidad, de, a) {
    switch(de + a) {
        case "segundosminutos": return cantidad / 60;
        case "minutossegundos": return cantidad * 60;
        case "minutoshoras": return cantidad / 60;
        case "horasminutos": return cantidad * 60;
        case "horassegundos": return cantidad * 3600;
        case "segundoshoras": return cantidad / 3600;
        default: return "Invalido";
    }
}

console.log(convertirTiempo(120, "segundos", "minutos"));
console.log(convertirTiempo(2, "horas", "minutos"));
console.log(convertirTiempo(1, "horas", "segundos"));