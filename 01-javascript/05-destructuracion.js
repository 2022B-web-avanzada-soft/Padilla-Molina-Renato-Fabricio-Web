// Destructuracion de Objetos
const renato = {
    nombre: "Renato",
};
const fabricio = {
    nombre: "Fabricio",
    apellido: "Padilla"
};
// Crea una nueva referencia, el orden es importante
const renatoFabricio = {
    ...fabricio,
    ...renato
}
console.log("Renato Fabricio", renatoFabricio);
// Destructuracion de arreglos
const arregloUno = [1,2,3,4];
const arregloDos = [5,6,7,8];
const superArreglo = [
    ...arregloUno,
    ...arregloDos
]
console.log("Super arreglo", superArreglo);