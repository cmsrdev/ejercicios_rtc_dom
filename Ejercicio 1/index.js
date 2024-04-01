/**
*
* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
*
* 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
*
* 1.3 Usa querySelector para mostrar por consola todos los p
*
* 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
*
* 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
*
* 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe". 
*
*/

// 1.1

let showMe = document.querySelector(".showme");
console.log(showMe);

// 1.2

let pillado = document.querySelector("#pillado");
console.log(pillado);

// 1.3

let allP = document.querySelectorAll("p");
console.log(allP);

// 1.4

let allPokemon = document.querySelectorAll(".pokemon");
console.log(allPokemon);

// 1.5

let dataFunction = document.querySelectorAll("[data-function]");
console.log(dataFunction);

// 1.6

console.log(dataFunction[2]);


