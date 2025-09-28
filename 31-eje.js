function calc(ing){
    switch(true){
        case (ing >= 800): return "Su impuesto es de: " + ing * 0.4;
        case (ing >= 500): return "Su impuesto es de: " + ing * 0.2;
        case (ing >= 300): return "Su impuesto es de: " + ing * 0.1;
    }
}

console.log(calc(800));
console.log(calc(500));
console.log(calc(300));