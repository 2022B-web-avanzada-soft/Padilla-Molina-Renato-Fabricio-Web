const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];
// Funciones con parametros
// Find
// Enviamos una ecpresion -> Truty Falsy
// Devuelve el primero que cumple esa condicion
const respuestaFind = arreglo
    .find(
        function (valorActual, indiceActual, arregloCompleto){
            console.log("Valor actual", valorActual);
            console.log("Indice actual", indiceActual);
            console.log("Arreglo completo", arregloCompleto);
            return valorActual.nombre === "Cristian";
        }
    );
console.log("Respuesta Find", respuestaFind);
// FindIndex
// Enviamos una ecpresion -> Truty Falsy
// Devuelve el primero que cumple esa condicion
const respuestaFindIndex = arreglo
    .findIndex(
        function (valorActual, indiceActual, arregloCompleto){
            return valorActual.nombre === "Cristian";
        }
    );
console.log("Respuesta Find Index", respuestaFindIndex);
// ForEach
const respuestaForEach = arreglo
    .forEach(
        function (valorActual){
            console.log("Valor actual", valorActual);
        }
    );
console.log("Respuesta For Each", respuestaForEach);
// MAP(Modificar un arreglo)
// Enviamos los datos del nuevo arreglo
// Devuelve el nuevo arreglo
const respuestaMap = arreglo
    .map(
        (valorActual) => {
            const notaActual = valorActual.nota+1;
            const nuevoElemento = {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: notaActual,
                estaAprovado: notaActual > 14,
                casado: false
            }
            return nuevoElemento;
        }
    )
console.log("Respuesta Map", respuestaMap);
console.log("Arreglo", arreglo);
// Filter
// Enviamos una ecpresion -> Truty Falsy
// Devuelve los elementos que cumplen la condicion
const respuestaFilter = arreglo
    .filter(
        (valorActual) => {
            return valorActual.nota >= 14;
        }
    )
console.log("Respuesta Filter", respuestaFilter);
console.log("Arreglo", arreglo);
// Some
// Devuelve un booleano
// OR
// Hay alguna nota menor a 9?
const respuestSome = arreglo
    .some(
        function (valorActual) {
            return valorActual.nota < 9;
        }
    )
console.log("Respuesta Some", respuestSome);
// Every
// Devuelve un booleano
// AND
// Todas las notas mayores a 14?
const respuestEvery = arreglo
    .every(
        function (valorActual) {
            return valorActual.nota > 14;
        }
    )
console.log("Respuesta Every", respuestEvery);
// Reduce
const respuestaRduce = arreglo
    .reduce(
        function (valorAcumulado, valorActual) {
            return (valorActual.nota + valorAcumulado);
        },
        0// Acumulador
    )
console.log("Respuesta Reduce", respuestaRduce);
console.log("Promedio", respuestaRduce/arreglo.length);
