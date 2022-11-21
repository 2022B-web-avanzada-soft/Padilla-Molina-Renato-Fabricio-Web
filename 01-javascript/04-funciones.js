function soloNumeros(a, b, c){
    return a-b+c;
}
//JS permite el uso de funciones sin validaciones
/*
soloNumeros('v', true, [1,2,3]);
soloNumeros(1,2,3,4,5,6,7);
soloNumeros();
*/
function soloLetras(a, b, c){
    console.log(a, b, c);
}
// Funciones nombreadas
function funcionNombrada(){

}
// Funciones anonimas - Anonymus Function
const funcionSinNombre1 = function (){};
var funcionSinNombre2 = function (){};
let funcionSinNombre3 = function (){};
[].forEach(function (){});
funcionSinNombre1();
funcionSinNombre2();
funcionSinNombre3();
// Funciones anonimas - Fat Arrow Functions
const funcionFatArrow1 = () => {};
var funcionFatArrow2 = () => {};
let funcionFatArrow3 = () => {};
[].forEach(() => {});
funcionFatArrow1();
funcionFatArrow2();
funcionFatArrow3();
const funcionFatArrow4 = () => {};
const funcionFatArrow5 = (parametro) => {
    return parametro + 1;
};
const funcionFatArrow6 = (parametro) => parametro + 1;
const funcionFatArrow7 = parametro => parametro + 1;
const funcionFatArrow8 = (a, b, c) => a + b + c;
// Parametros infinitos
// Solo podemos tener un parametro infinito por funcion
function sumarNumeros(...todosLosNumeros){
    let total = 0;
    todosLosNumeros.forEach(
        (valorActual) => {
            total = total + valorActual;
        }
    );
    return total;
}
sumarNumeros(1,2,3,4,5,6,7);