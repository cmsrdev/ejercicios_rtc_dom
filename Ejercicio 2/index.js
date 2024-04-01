/**
* 1.1 Inserta dinamicamente en un html un div vacio con javascript.
* 
* 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
*
* 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
*
* 1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
*
* 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
*
* 1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
* const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
*
* 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
*
* 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
* Recuerda que no solo puedes insertar elementos con .appendChild.
*
* 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
*/

/**
 * Ya que tenemos que crear varios div en diferentes ocasiones en el ejercicio pense que lo mejor seria crear una funcion que
 * nos permita crearlos mas rapidamente.
*/ 

// funcion anonima para crear div en html a traves del DOM y lo inserta en el body directamente, estas variables al estar dentro de una funcion
// no nos afectaran al usarlas fuera de ella en otros ejercicios posteriores, en este caso usaremos una funcion anonima aunque las arrow siempre lo son
// en comparacion a crear una funcion con la palabra clave function

const newDiv = () => {
    const body = document.querySelector("body");
    const emptyDiv = document.createElement("div");
    body.appendChild(emptyDiv);
}


// 1.1

newDiv();


// 1.2

// podriamos hacer otra funcion para crear parrafos pero esta vez no lo insertamos en el body si no que la hacemos mas dificil haciendola mas "fucional"
// la idea seria que esta funcion por parametros le indiquemos la etiqueta ( location en este caso le hemos llamado ) donde queremos 
// insertar ese parrafo nuevo ademas de el indice ( index le hemos llamado ) de esta etiqueta ya que podriamos tener muchos div por ejemplo en el caso 
// de no tener mas que un solo div este seria el indice 0

const newP = (location,index) => {
    const insertIn = document.querySelectorAll(location)[index];
    const emptyP = document.createElement("p");
    insertIn.appendChild(emptyP);
}

//la etiqueta se debe insertar como un string ya que si no añadimos "" o '' o `` lo tomara como una variable que no esta definida

newDiv();
newP("div", 5);

// podemos hacer la funcion anterior de este mismo modo para que no solo nos inserte un div en el final del body como la primera funcion que creamos al inicio
// si no que nos inserte el div donde queramos como en la funcion anterior

const newDiv2 = (location,index) => {
    const insertIn = document.querySelectorAll(location)[index];
    const emptyDiv = document.createElement("div");
    insertIn.appendChild(emptyDiv);
}

// 1.3

// en este caso hemos usado una funcion anonima sin parametros otra vez ya que queremos insertar este div al final de body podriamos hacer una funcion con parametros
// parecida a las anteriores donde indicarle la etiqueta donde queremos meter ese nuevo div y listo

const divP6 = () => {
    const body = document.querySelector("body");
    const emptyDiv = document.createElement("div");
    body.appendChild(emptyDiv);
    for (let i = 0; i < 6; i++){
        if (i < 6){
            const newP = document.createElement("p");
            emptyDiv.appendChild(newP);
        }
    }
}

// divP6();

// esta misma funcion pero añadiendo parametros donde indicarle donde crear este div

const newDivP6 = (location, index) => {
    const insertIn = document.querySelectorAll(location)[index];
    const emptyDiv = document.createElement("div");
    insertIn.appendChild(emptyDiv);
    for (let i = 0; i < 6; i++){
        if (i < 6){
            const newP = document.createElement("p");
            emptyDiv.appendChild(newP);
        }
    }
}

newDivP6("body", 0);


// 1.4

newP("body", 0);
const body = document.querySelector("body");
//hacemos un console.log para saber el indice de nuestro ultimo p ( probe a usar -1 pero no funciona )
console.log(body.querySelectorAll("p"));
let lastP = body.querySelectorAll("p")[15];
let text = document.createTextNode("Soy dinámico!");
lastP.appendChild(text);


// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

// aqui usamos el primer h2 con la clase fn-insert-here pero puede que tengamos mas h2 con esa misma clase, podemos usarlo de la siguiente manera:
/**
 * let h2 = body.querySelectorAll("h2", ".fn-insert-here")[0];
 * de esta manera nos aseguramos que es el primer h2 con esa clase
*/

let h2 = body.querySelector("h2.fn-insert-here");
text = document.createTextNode("Wubba Lubba dub dub"); // ya esta variable fue declarada antes al estar declarada con let solo cambiamos su valor de ahi no usar let otra vez
h2.appendChild(text);


// 1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

// 1.6.1 bucle para recorrer el array y obtener todo el texto que contiene

/*

for (i = 0; i < apps.length; i++){
    console.log(apps[i])
}

*/

// 1.6.2 crear la ul li en el html a traves del DOM, posteriormente tendremos que meter el valor del bucle anterior apps[i] dentro de cada li como hicimos con la funcion
// anterior que nos creó 6 p en un solo div donde usaremos el valor de i para decirle cuantas li debe crear y luego meter apps[i] dentro de estas li

/*

const ul = document.createElement("ul");
body.appendChild(ul);
for (i = 0; i < apps.length; i++){
    if (i < apps.length){
        const newLi = document.createElement("li");
        ul.appendChild(newLi);
        const contentLi = document.createTextNode(apps[i]);
        newLi.appendChild(contentLi);
    }
}

*/

// podemos hacerlo con un for each
// se puede usar indexOf porque es un array no un nodelist

const ul = document.createElement("ul");
body.appendChild(ul);
apps.forEach((i) => {
    if (apps.indexOf(i) < apps.length){
        const newLi = document.createElement("li");
        ul.appendChild(newLi);
        const contentLi = document.createTextNode(i);
        newLi.appendChild(contentLi);
    }
});


// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const removeMe = body.querySelectorAll(".fn-remove-me");
removeMe.forEach((i) => {
    i.remove();
});

// ya que i en este forEach no es un Array como en el caso anterior de apps no podemos usar indexOf pero si podemos darle dos parametros a la arrow y asi sacar el 
// indice de este removeMe y hacer un bucle que elimine todas las clases fn-remove-me pero no lo necesitamos ya que al ser un nodelist este removeMe podemos usar el metodo
// remove directamente y al ser forEach un bucle nos ira iterando i y borrrando todos los elementos con esta clase



// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// si no vale esta manera ya que piden usando appendChild, no entiendo como hacerlo sin un after o before ya que quieren meter en medio de los divs un p y el metodo
// appendChild su comportamiento es insertar un elemento despues del ultimo elemento es decir no podria meterlo en medio de los div sin un after o before

document.querySelectorAll("div")[0].after(document.createElement("p"));
text = document.createTextNode("Voy en medio!");
body.querySelectorAll("p")[4].appendChild(text);


// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

body.querySelectorAll("div.fn-insert-here").forEach((i)=>{
    text = document.createTextNode("Voy dentro!");
    i.appendChild(document.createElement("p"));
    i.querySelector("p").appendChild(text);
});

