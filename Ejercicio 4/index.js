/**
 * 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
 * evento click que ejecute un console log con la información del evento del click
 * 
 * 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
 * 
 * 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
*/

// 1.1

const body = document.querySelector("body");
body.appendChild(document.createElement("button")).setAttribute("id", "btnToClick");
document.getElementById("btnToClick").textContent = "Pulsame";
document.getElementById("btnToClick").addEventListener("click", (i) => {console.log(i)});


// 1.2 


document.querySelector("input.focus").addEventListener("focus", (j) => {console.log(j.target.value)});

// 1.3

document.querySelector("input.value").addEventListener("input", (k) => {console.log(k.target.value)});