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

// .MAP()

const lista1 = ["uno","dos","tres"];
// "e" sería el iterador de la lista, map nos devuelve una lista mejorada
const lista1Li = lista1.map(e => `<li>${e}</li>`);
console.log(lista1Li)

const values = [1,2,3,5,7];
const cubes = values.map( e => e**3);
console.log(cubes)

// .Filter()

const values2 = [1,2,3,4,5,6];
// "e" itera la lista y nos devuelve una lista que cumpla la condición de valores pares/evens
const evens = values2.filter( e => e%2 ===0);
console.log(evens)

const groceries2 = ["pearl onions", "cremini mushrooms", "thyme"];
// "item" sería el iterador. Retornamos una lista de elementos que incluyen la "o"
const oFoods = groceries2.filter( item => item.includes("o") );
console.log(oFoods)

// Podemos hacer de Todo, siempre que devolvamos un TRUE o FALSE
const values3 = [1, 2, 3, 4, 5];
// Filtramos todos los impares, luego elevamos al cuadrado esos valores impares.
const oddCubes = values3.filter( val => val % 2 !==0 ).map( val => val**3 );
console.log(oddCubes)
