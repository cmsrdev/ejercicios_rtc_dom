/**
 * Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
 * que imprima cada uno de los albums.
*/

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const body = document.querySelector("body");
body.appendChild(document.createElement("ul")).setAttribute("id", "albumsList");
albums.forEach((i) => {
    document.getElementById("albumsList").appendChild(document.createElement("li")).appendChild(document.createTextNode(i));
});
