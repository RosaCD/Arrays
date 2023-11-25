let numero = [1,3,5,7,11];

// console.log(numero[numero.length-1]);
// console.log(numero[0]);
// console.log(numero.at(3));
// console.log(numero.at(-4));
// console.log(numero.length);

// for (let inicio = 0; inicio < numero.length; inicio++) {
//     console.log(numero[inicio]);
    
// }

// for (let index = numero.length-1; index >= 0; index--) {
//     console.log(numero[index]);    
// }

// mostrar();
// function mostrar(params) {
//     for (let inicio = 0; inicio < numero.length; inicio++) {
//         console.log(numero[inicio]);
        
//     }
// }

// let comida = ["Sopa", "Sopitos", "Pozole"];

// mostrarc(comida);
// function mostrarc(arr) {
//     for (let inicio = 0; inicio < arr.length; inicio++) {
//         console.log(arr[inicio]);
        
//     }
// }

// showDom("Array1", comida);

// function showDom(elementos, arr) {
//     document.getElementById(elementos).innerHTML = "";
    
    
//     for (let iniciar = 0; iniciar < arr.length; iniciar++) {
//         document.getElementById(elementos).innerHTML += `<div>${arr[iniciar]}</div>`
        
//     }
// }

// Mutable

// let birds = ["Robin", "Raven", "Crow"];

// birds.push("Phoenix");
// birds.unshift("Hummingbird")
// birds.splice(3,0,"Jaybird")
// birds.splice(2,2, "dove")
// birds.splice(2,3)

// let b = birds.pop();
// console.log(b);
// let a = birds.shift();
// console.log(a);


// mostrarc(birds);
// function mostrarc(arr) {
//     for (let inicio = 0; inicio < arr.length; inicio++) {
//         console.log(arr[inicio]);
        
//     }
// }


// showDom("Array1", birds);

// function showDom(elementos, arr) {
//     document.getElementById(elementos).innerHTML = "";
    
    
//     for (let iniciar = 0; iniciar < arr.length; iniciar++) {
//         document.getElementById(elementos).innerHTML += `<div>${arr[iniciar]}</div>`
        
//     }
// }

// Inmutable

let arbol = ["sauce", "pino", "arcoiris"];

arbol.push("Tejo");
arbol.unshift("Abedul");
arbol.splice(2,0,"Cedro");

let flor = ["Dandelion", "Rose", "Lily" ]

const planta = arbol.concat(flor);
planta.push("chrysanthemums");

showDom("Array1", arbol);
showDom("Array2", planta);

function showDom(elementos, arr) {
    document.getElementById(elementos).innerHTML = "";
    
    
    for (let iniciar = 0; iniciar < arr.length; iniciar++) {
        document.getElementById(elementos).innerHTML += `<div>${arr[iniciar]}</div>`
        
    }
}

let array = ["uno", "dos", "tres"];

let array2 = ["cuatro", "cinco", "seis"];
array2[1];

let multidimensional = [array, array2];

multidimensional [0][1];