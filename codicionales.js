var opcion;

function juguemos(opcion){
    if(opcion === "piedra"){
        console.log("ganaste")
    } else if(opcion === "papel"){
        console.log("perdiste")
    } else{
        console.log("empate");
    }
}

//Operador ternario
//codicion ? true : false;

var numero = 1;
var resultado = numero  === 1 ? "Si soy el numero 1" : "No soy uno";
//restulado = si soy el numero 1