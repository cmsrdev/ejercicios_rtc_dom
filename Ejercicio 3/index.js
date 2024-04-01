// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const body = document.querySelector("body");
const ul = document.createElement("ul");
body.appendChild(ul);
countries.forEach((i) => {
    if (countries.indexOf(i) < countries.length){
        const newLi = document.createElement("li");
        ul.appendChild(newLi);
        const contentLi = document.createTextNode(i);
        newLi.appendChild(contentLi);
    }
});


// sin variables
// podemos usar como parametros en el forEach i y j para que nos de un indice y asi no tener que usar un indexOf por ejemplo

// countries.forEach((i) => {
//     if (countries.indexOf(i) < countries.length){
//         body.querySelector("ul").appendChild(document.createElement("li")).appendChild(document.createTextNode(i));
//     }
// });


//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

body.querySelectorAll(".fn-remove-me").forEach((i) => {
    i.remove()
});


// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const listOfCars = document.createElement("ul");
body.appendChild(listOfCars);
cars.forEach((i) =>{
    if (cars.indexOf(i) < cars.length){
        listOfCars.appendChild(document.createElement("li")).appendChild(document.createTextNode(i));
        listOfCars.querySelectorAll("li")[cars.indexOf(i)].setAttribute("data-function", "printHere");
    }
});


// 1.4  y 1.6 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.


const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];


countries2.forEach((i) => {
    if (countries2.indexOf(i) < countries2.length){
        const divRandom = document.createElement("div");
        body.appendChild(divRandom);
        divRandom.classList.add("removeDiv");
        divRandom.appendChild(document.createElement("h4")).appendChild(document.createTextNode(i.title));
        divRandom.appendChild(document.createElement("img")).setAttribute("src", `${i.imgUrl}`);
        divRandom.appendChild(document.createElement("button")).classList.add("removeThisDiv");
        divRandom.querySelector(".removeThisDiv").appendChild(document.createTextNode("Elimina este Div"));  
        const removeThisDiv = (j) => {
            j.target.parentElement.remove();
            console.log(j);
        }
        divRandom.querySelector(".removeThisDiv").addEventListener("click", removeThisDiv);
    }
});


// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
/**
 * le añadiremos una clase que se eliminara o se creara dependiendo de si la tiene o no con un toggle
 * podemos usar el mismo sistema que el ejercicio anterior y hacer los dos ejercicios en 1 haciendo un boton
 * que elimine y otro que cree estos div según el enunciado entiendo que habla de los divs creados en el ejercicio
 * anterior y no de todos los divs de la web, si fuese de todos los divs de la web seria mas sencillo y seria algo asi :
*/


body.appendChild(document.createElement("button")).setAttribute("id", "deleteLastDiv");
document.getElementById("deleteLastDiv").appendChild(document.createTextNode("Elimina el ultimo Div"));

// o 
// document.getElementById("deleteLastDiv").textContent = "Elimina el ultimo Div";


// esto me costo un poco porque queria entrar a traves de allDivs[-1] como si fuese un array pero al ser un nodelist no puedo usarlo asi
const removeLastDiv = () => {
    const allDivs = body.querySelectorAll("div");
    allDivs[allDivs.length - 1].remove();
}

document.getElementById("deleteLastDiv").addEventListener("click", removeLastDiv);


// este seria como entendi yo el ejercicio eliminando solo los divs que creamos con el h4 y la imagen y no todos los divs de la web

// 1.5 segun yo

const countries3 = [
	{title: 'Random title 2', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title 2', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title 2', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title 2', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title 2', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

countries3.forEach((i) => {
    if (countries3.indexOf(i) < countries3.length){
        const divRandom = document.createElement("div");
        divRandom.classList.add("deleteDiv");
        body.appendChild(divRandom);
        divRandom.appendChild(document.createElement("h4")).appendChild(document.createTextNode(i.title));
        divRandom.appendChild(document.createElement("img")).setAttribute("src", `${i.imgUrl}`);
    }
});

body.appendChild(document.createElement("button")).setAttribute("id", "deleteLastDiv2");
document.getElementById("deleteLastDiv2").appendChild(document.createTextNode("Elimina el ultimo Div2"));
body.appendChild(document.createElement("button")).setAttribute("id", "createDiv");
document.getElementById("createDiv").appendChild(document.createTextNode("Crea un nuevo Div"));

// funciona porque siempre selecciona el ultimo
const removeDiv2 = () => {
    const allDivs = document.getElementsByClassName("deleteDiv");
    allDivs[allDivs.length - 1].remove();
}

// el problema es que añade todos los que faltan y no solo 1 elemento pero se podria pulir mas la idea
const addDiv = () => {
    countries3.forEach((i)=>{
        if(document.getElementsByClassName("deleteDiv").length < countries3.length){
            const divRandom = document.createElement("div");
            divRandom.classList.add("deleteDiv");
            document.getElementsByClassName("deleteDiv")[document.getElementsByClassName("deleteDiv").length - 1].after(divRandom);
            divRandom.appendChild(document.createElement("h4")).appendChild(document.createTextNode(i.title));
            divRandom.appendChild(document.createElement("img")).setAttribute("src", `${i.imgUrl}`); // me gustaria que crease uno random de el array pero no di como hacer ni usando match.floor
        }
    })
}

document.getElementById("deleteLastDiv2").addEventListener("click", removeDiv2);
document.getElementById("createDiv").addEventListener("click", addDiv);


//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
// !! ejercicio resuelto en el 1.4