const inquirer = require('inquirer');
const fs = require('fs');
async function procesar(path){
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'nombre',
                    message: 'Ingresa el nombre de la Facutad'
                },
                {
                    type: 'number',
                    name: 'edificio',
                    message: 'Ingresa el numero de edificio'
                },
                {
                    type: 'number',
                    name: 'estudiantes',
                    message: 'Ingresa el numero de estudiantes'
                },
                {
                    type: 'confirm',
                    name: 'biblioteca',
                    message: 'Posee biblioteca'
                },
                {
                    type: 'input',
                    name: 'fecha',
                    message: 'Ingresa la fecha de fundacion',
                    validate: function(value) {
                        const fecha = new Date(value);
                        if (!isNaN(fecha.getTime())) {
                            return true;
                        } else {
                            return 'Ingrese una fecha valida';
                        }
                    }
                }
            ]);
        const Facultades = JSON.parse(await leer('Facultades.txt'));
        Facultades.push(respuesta)
        escribir(path,JSON.stringify(Facultades))
    }catch (e) {
        console.log(e);
    }
}
async function leerOpcion(){
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'opcion',
                    message: 'Ingresa la opcion...'
                }
            ])
            return respuesta['opcion'];
    }catch (e) {
        console.log(e);
    }
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
                        resolve(fs.readFileSync(path, "utf8"));
                    }
                }
            );
        }
    );
}
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
                        resolve(contenidoPrimerArchivo);
                        return contenidoPrimerArchivo
                    }
                }
            );
        }
    );
}
async function main(){
    let opcion;
    while (opcion!=5) {
        console.log('\tFACULTADES');
        console.log('1.- Leer\n2.- Crear\n3.- Modificar\n4.- Eliminar\n5.- Salir');
        opcion = await leerOpcion();
        switch (opcion) {
            case 1:
                const facultades = JSON.parse(await leer('Facultades.txt'));
                facultades.forEach(facultad => {
                    console.log('Nombre:',facultad['nombre']);
                    console.log('Numero de edificio:',facultad['edificio']);
                    console.log('Numero de alumnos:',facultad['estudiantes']);
                    console.log('Posee biblioteca:',facultad['biblioteca']);
                    console.log('Fecha de fundacion:',facultad['fecha'],'\n');
                });
                break;
            case 2 :
                await procesar('Facultades.txt');
                break;
        }

    }
}
main()