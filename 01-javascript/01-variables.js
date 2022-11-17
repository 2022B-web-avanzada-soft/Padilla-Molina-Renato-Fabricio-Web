// variables mutables
var numeroA = 1;
let numeroB = 2;
numeroA = 12;
numeroB = 8;
numeroA = false;
numeroB = true;

// variables inmutables
const extensionPdf = 'PDF';

// Tipos de variables
const numero = 1;
const sueldo = 1.2;
const texto = 'Renato';
const apellidos = "Padilla";
const booleano = false;
const hijos = null;
const zapatos = undefined;

console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellidos);
console.log(typeof booleano);
console.log(typeof hijos);
console.log(typeof zapatos);

if(""){
    console.log("String vacio Es Verdadero");
} else {
    console.log("String vacio Es Falsy");
}

if("Renato"){
    console.log("String Es Truty");
} else {
    console.log("String Es Falso");
}

if(-1){
    console.log("-1 Es Truty");
} else {
    console.log("-1 Es Falso");
}

if(0){
    console.log("0 Es Truty");
} else {
    console.log("0 Es Falso");
}

if(1){
    console.log("1 Es Truty");
} else {
    console.log("1 Es Falso");
}

if(null){
    console.log("null Es Truty");
} else {
    console.log("null Es Falso");
}
if(undefined){
    console.log("undefined Es Truty");
} else {
    console.log("undefined Es Falso");
}

const renato = {
    "nombre": "Renato",
    "apellido": "Padilla",
    edad: 27,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color: "cafe",
        talla: 38,
    },
    mascotas: ["Hela","Bongo"]
};
console.log(renato);
console.log(renato.mascotas);
console.log(renato["mascotas"]);
//Cambiar valor de una llave
renato.nombre = "Reno";
console.log(renato.nombre);
//Agregar una nueva llave
renato.sueldo;
console.log(renato.sueldo);
//Agregar un valor a una llave
renato.sueldo = 500;
console.log(renato.sueldo);
renato["gastos"] = 200;
console.log(renato.gastos);
console.log(renato);
//Borrar el valor de una propiedad
renato.apellido = undefined;
console.log(renato);
console.log(Object.keys(renato));
console.log(Object.values(renato));
//Eliminar la llave y el valor dentro del objeto
delete renato.apellido;
console.log(renato);
console.log(Object.keys(renato));
//Variables por valor o referencia
//Variables por valor en JS son las primitivas; number, String y boolean
let edadRenato = 27;
let edad = edadRenato;
console.log(edadRenato);
console.log(edad);
edadRenato = edadRenato + 1;
console.log(edadRenato);
console.log(edad);
//Variables por referencia
let notas = {
    total: 10
}
let notas2B = notas;//Igualando la referencia
notas2B.total = notas2B.total + 1;
console.log(notas);
console.log(notas2B);
//Clonar objetos
let notas3B = Object.assign({}, notas);
notas3B.total = notas3B.total +1;
console.log("1B",notas);
console.log("2B",notas2B);
console.log("3B",notas3B);