// Dijimos que no podemos modificar de tipo de dato a nuestras variables tipo const
const arr = Object.freeze([1,2,3])
// si usamos un push podremos agregar un elemento al array
// arr.push(9);
console.log(arr)

// Si quisieramos agregarle INMUTABILIDAD  a nuestro ARRAY lo enfriamos
// const arr = Object.freeze([1,2,3])

const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);
// (...) Operador de Propagación
// Si nuestra lista es INMUTABLE, podemos usar SPREAD para hacer una copia de nuestra lista
const needThyme = [...groceryList,{"item":"thyme","haveInfredient":false}];
console.log(needThyme);
// También podemos usar .concat()
const needThymeConcat = groceryList.concat([{"item":"thyme","haveInfredient":false}])
console.log(needThymeConcat);

// cambiar el valor de false a true de "thyme"
const changeThymeBool = [...needThyme.slice(0,5),{...needThyme[5], "haveInfredient":true}];
// Sobrescribimos el valor de la clave ya que esta es única
console.log(changeThymeBool)
const prueba = {...needThyme[5]};
console.log(prueba)

// Eliminar el que tenga celery
const notCelery=[...needThyme.slice(0,2),...needThyme.slice(3)]
console.log(notCelery)

// SORTING

const items= Object.freeze(["ana","jhomar", "bernard","elias"]);

const sortedItems = [...items].sort();
console.log(sortedItems)

// Si quisieramos ordenar algún ATRIBUTO haríamos:
const prueba2={ item: 'butter', haveIngredient: true };
console.log("****")
// Puedo acceder a un valor a través del punto y el nombre del key
console.log(prueba2.item);
console.log("****")

const sortedGroceries = [...groceryList].sort((a,b)=> a.item > b.item ? 1:-1);
console.log(sortedGroceries)