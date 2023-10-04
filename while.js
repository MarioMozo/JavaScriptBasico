var nombres = ["nombre1", "nombre2", "nombre3"];

function leerArray(nombres) {
    console.log("Leyendo array ${nombres}");
    
}

while (nombres.length>0) {
    var seGuardanNombresAqui = nombres.shift();
    leerArray(nombres);
}

//aqui lee cada nombre y llama a la funcion para imprimir cada elemento.