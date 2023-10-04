//Forma sintaxica de generar un array
var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
console.log(frutas);
console.log(frutas.length); //Para ver tamaño del array
console.log(frutas[0]); //Consultar un elemento del array en posición especifica

//Metodos que nos ayudan a mutar un array
//Agregar más frutas al final de nuestro array
var masFrutas = frutas.push("Uvas");
//Eliminar ultimo elemento del array
var ultimo = frutas.pop("Uvas");
//Agregar al inicio de nuestro array
var nuevaLongitud = frutas.unshift("Uvas");
//Borrar primer elemento del array
var borrarFruta = frutas.shift("Manzana");
//Nos ayuda a saber la posición del elemento que le pasemos al array
var posicion = frutas.indexOf("Cereza");