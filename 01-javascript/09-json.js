const arregloUsuarios = [
    {
        id: 1,
        nombre: 'Renato'
    }
];
const arregloGuardado = JSON.stringify(arregloUsuarios);
const usuario = {
    id: 1,
    nombre: 'Renato'
};
const objetoGuardado = JSON.stringify(usuario);
console.log('Arreglo guardado', arregloGuardado);
console.log('Objeto guardado',objetoGuardado);
const arregloRestaurado = JSON.parse(arregloGuardado);
const objetoRestaurado = JSON.parse(objetoGuardado);
console.log('Arreglo restaurado', arregloRestaurado);
console.log('Objeto restaurado',objetoRestaurado);