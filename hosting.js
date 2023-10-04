function exampleFunction() {
    var x = "declarada dentro de la función"; // x solo se puede utilizar en exampleFunction
    console.log("funcion interna");
    console.log(x);
  }
  
  console.log(x); // error

  // Sin embargo, el siguiente código es válido debido a que la variable se declara fuera de la función, lo que la hace global:
  var x = "función externa declarada";

  exampleFunction();
  
  function exampleFunction() {
    console.log("funcion interna");
    console.log(x);
  }
  
  console.log("funcion externa");
  console.log(x);
  