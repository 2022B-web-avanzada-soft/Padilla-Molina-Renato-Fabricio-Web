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
