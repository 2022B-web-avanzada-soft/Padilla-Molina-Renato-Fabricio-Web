let arreglo = [6,7,8,9,10];
arreglo = 1;
arreglo = true;
arreglo = undefined;
arreglo = null;
arreglo = {};
arreglo = [true, 1, 1.1, "Renato", "Padilla", undefined, null, {}, [1,2]];
arreglo = [6,7,8,9,10];
//for of
for(let numero of arreglo){
    console.log("numero", numero);
}
//for in
for (let indice in arreglo){
    arreglo[indice];
    console.log("indice", indice);
}

let objetoPrueba = {a:1,b:2,c:3};
for (let llave in objetoPrueba){
    console.log("llave", llave);
}
arreglo.push(11);//Añadir al final
arreglo.pop();//Eliminar al final
arreglo.unshift(5);//Añadir al principio
console.log(arreglo);
//splice(indice,numero de elementod eliminados, agregar)
arreglo.splice(0,0,4);
console.log(arreglo);

const indice9 = arreglo.indexOf(9);
arreglo.splice(indice9,2);
console.log(arreglo);