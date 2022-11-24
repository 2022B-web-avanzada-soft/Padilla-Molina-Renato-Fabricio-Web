const fs = require('fs');
console.log('PRIMERO');
fs.readFile(
    '01-javascript/06-ejemplo.txt',
    'utf-8',
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
        if(errorLecturaPrimerArchivo){
            console.log("ERROR LEYENDO ARCHIVO", errorLecturaPrimerArchivo);
        }else{
            console.log("Contenido:", contenidoPrimerArchivo);
        }
        console.log('SEGUNDO');
    }
);
console.log('TERCERO');
const read = function(file,path){
    fs.readFile(
        file,
        'utf-8',
        (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
            if(errorLecturaPrimerArchivo){
                console.log("ERROR LEYENDO ARCHIVO", errorLecturaPrimerArchivo);
            }else{
                console.log("Contenido:", contenidoPrimerArchivo);
                write(path,contenidoPrimerArchivo);
            }
        }
    );
}

const write = function(path,nuevoContenido){
    fs.writeFile(
        path,
        nuevoContenido,
        (errorEscritura) => {
            if(errorEscritura){
                console.log(errorEscritura);
            }else{
                console.log(fs.readFileSync(path, "utf8"));
            }
        }
    );
}
read("01-javascript/06-ejemplo.txt",'01-javascript/06-nuevo-archivo.txt');
read("01-javascript/01-variables.js",'01-javascript/06-nuevo-archivo.txt');