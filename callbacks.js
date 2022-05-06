// console.log("Holaa 1")
// function()-> callback -> Es una función que se pasa a otra función para ser llamada por esa función -> Función de devolución de llamada
setTimeout(function(){
    console.log("start");
},3000);
console.log("end")

// 2 parámetros
// - Una función
// - Un número

// En JS las funciones se tratan como otro tipo de variable

var exampleFunction = function(message){
    console.log(message);
};
exampleFunction("Holaa mundo");





