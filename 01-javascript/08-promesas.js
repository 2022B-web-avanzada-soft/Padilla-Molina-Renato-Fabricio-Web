const fs = require('fs');
function leer(path){
    return new Promise(
        (resolve, reject)=>{
            fs.readFile(
                path,
                'utf-8',
                (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
                    if(errorLecturaPrimerArchivo){
                        reject("ERROR LEYENDO ARCHIVO");
                    }else{
                        console.log("Contenido:", contenidoPrimerArchivo);
                        resolve(contenidoPrimerArchivo);
                    }
                }
            );
        }
    );
}
function escribir(path,contenido){
    return new Promise(
        (resolve, reject)=>{
            fs.writeFile(
                path,
                contenido,
                (errorEscritura) => {
                    if(errorEscritura){
                        reject(errorEscritura);
                    }else{
                        console.log("Contenido:", contenido);
                        resolve(fs.readFileSync(path, "utf8"));
                    }
                }
            );
        }
    );
}
function ejercicio(path, contenido){
    return leer(path)
        .then(
            (data)=>{
                return escribir(path,data+contenido);
            }
        )
        .catch(
            (error)=>{console.log(error);}
        )
        .finally(
            ()=>{console.log("Finally");}
        )
}
ejercicio('06-ejemplo.txt','\nSe logro');


// ASYNC AWAIT
// Reglas
// 1- Estar dentro de una funcion
// 2- Agregar la palabra async antes de la declaracion de la funcion
// 3- Agregar la palabra await antes de la declaracion de la promesa
// Cualquier funcion con async await se convierte en una promesa
async function asyncAwaitUno(path, contenido){
    //Si se saben que en la promesa puede haber un reject usamos try catch
    try{
        const respuestaContenido = await leer(path);
        await escribir(path, respuestaContenido+contenido);
    }catch (e) {
        console.log(e);
    }
}
asyncAwaitUno('06-ejemplo.txt','\nSe logro de nuevo');
const asyncAwaitDos = function(){}

const asyncAwaitTres = ()=>{}