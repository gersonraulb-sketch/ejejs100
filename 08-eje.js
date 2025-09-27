let total = 500;

if (total >= 500) {
    let desc = total * 0.20;
    let totaldes = total - desc;
    console.log("Tiene un descuento del 20%, su total es: " + totaldes)
} else if (total >= 300) {
    let desc = total * 0.10;
    let totaldes = total - desc;
    console.log("Tiene un descuento del 10%, su total es: " + totaldes)
} else {
    console.log("No aplica ningun descuento, su total es: " + total)
}