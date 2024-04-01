/**
 * Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
*/

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];


document.querySelector("[data-function=printHere]").appendChild(document.createElement("ul")).setAttribute("id", "placesList");
places.forEach((i) => {
    document.querySelector("#placesList").appendChild(document.createElement("li")).textContent = i;
});