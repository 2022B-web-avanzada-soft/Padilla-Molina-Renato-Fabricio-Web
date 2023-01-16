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
async function leerConfirm(){
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'confirm',
                    name: 'biblioteca',
                    message: ''
                }
            ])
        return respuesta['biblioteca'];
    }catch (e) {
        console.log(e);
    }
}
async function leerFecha(){
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'fecha',
                    message: '...',
                    validate: function(value) {
                        const fecha = new Date(value);
                        if (!isNaN(fecha.getTime())) {
                            return true;
                        } else {
                            return 'Ingrese una fecha valida';
                        }
                    }
                }
            ])
            return respuesta['fecha'];
    }catch (e) {
        console.log(e);
    }
}
async function leerUpdate(){
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'opcion',
                    message: '...'
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
        console.log('Ingresa la opcion...')
        opcion = Number(await leerUpdate());
        let facultades = null;
        switch (opcion) {
            case 1 :
                facultades = JSON.parse(await leer('Facultades.txt'));
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
                console.log('CREADO');
                break;
            case 3 :
                console.log('Ingrese el nombre de a facutad a modificar')
                let modificar = await leerUpdate();
                let encontrado = false;
                facultades = JSON.parse(await leer('Facultades.txt'));
                for (const facultad of facultades) {
                    if (facultad['nombre']==modificar) {
                        console.log('Actualizar numero de edificio');
                        facultad['edificio'] = Number(await leerUpdate());
                        console.log('Actualizar numero de alumnos');
                        facultad['estudiantes'] = Number(await leerUpdate());
                        console.log('Actualizar posee biblioteca');
                        facultad['biblioteca'] = await leerConfirm();
                        console.log('Actualizar fecha de fundacion');
                        facultad['fecha'] = await leerFecha();
                        escribir('Facultades.txt',JSON.stringify(facultades));
                        console.log('ACTUALIZADO');
                        encontrado = false;
                        break;
                    }else {
                        encontrado = true;
                    }
                }
                if (encontrado) {
                    console.log('Facultad no encontrada')
                }
                break;
            case 4 :
                console.log('Ingrese el nombre de a facutad a eliminar')
                facultades = JSON.parse(await leer('Facultades.txt'));
                let eliminar = await leerUpdate();
                let i = 0;
                for (const facultad of facultades) {
                    if (facultad['nombre'] === eliminar) {
                        facultades.splice(i, 1);
                        escribir('Facultades.txt',JSON.stringify(facultades));
                        console.log('ELIMINADO');
                        break;
                    }
                    i++;
                }
            default :
                break;
        }
    }
}
main()