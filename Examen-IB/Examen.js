const inquirer = require('inquirer');
const fs = require('fs');
async function procesarUniversidad(path){
    let id = 0;
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'nombre',
                    message: 'Ingresa el nombre de la Universidad'
                },
                {
                    type: 'confirm',
                    name: 'publica',
                    message: 'Es publica'
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
        const Universidad = JSON.parse(await leer(path));
        respuesta["facultades"] = 0;
        respuesta["estudiantes"] = 0;

        Universidad.forEach(uni => {
            if(id < uni["id"]){
                id = uni["id"];
            }
        });
        id++;
        respuesta["id"] = id;
        Universidad.push(respuesta)
        escribir(path,JSON.stringify(Universidad))
    }catch (e) {
        console.log(e);
    }
    return id;
}
async function procesarFacultad(path,id){
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'nombre',
                    message: 'Ingresa el nombre de la Facultad'
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
        const Facultades = JSON.parse(await leer(path));
        respuesta["id"] = id;
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
                    message: '...',
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
async function modificarFacultad(id){
    console.log('Ingrese el nombre de la facutad a modificar')
    let modificar = await leerUpdate();
    let encontrado = false;
    const facultades = JSON.parse(await leer('Facultades.txt'));
    for (const facultad of facultades) {
        if (facultad['nombre']==modificar && facultad["id"]==id) {
            console.log('¿Desea actualizar numero de edificio?');
            if(await leerConfirm()){
                console.log('Actualizar numero de edificio');
                facultad['edificio'] = Number(await leerUpdate());
                encontrado = true;
            }
            console.log('¿Desea actualizar numero de alumnos?');
            if(await leerConfirm()){
                console.log('Actualizar numero de alumnos');
                facultad['estudiantes'] = Number(await leerUpdate());
                encontrado = true;
            }
            console.log('¿Desea actualizar posee biblioteca?');
            if(await leerConfirm()){
                console.log('Actualizar posee biblioteca');
                facultad['biblioteca'] = await leerConfirm();

            }
            console.log('¿Desea actualizar fecha de fundacion?');
            if(await leerConfirm()){
                console.log('Actualizar fecha de fundacion');
                facultad['fecha'] = await leerFecha();
                encontrado = true;
            }
            escribir('Facultades.txt',JSON.stringify(facultades));
            console.log('ACTUALIZADO');
            break;
        }else {
            encontrado = false;
        }
    }
    return encontrado;
}
async function contarFacultades (id){
    let numFac = 0;
    const facultades = JSON.parse(await leer('Facultades.txt'));
    facultades.forEach(facultad => {
        if(id === facultad["id"]){
            numFac++;
        }
    });
    return numFac;
}
async function contarEstudiantes (id){
    let numFac = 0;
    const facultades = JSON.parse(await leer('Facultades.txt'));
    facultades.forEach(facultad => {
        if(id === facultad["id"]){
            numFac=numFac+facultad["estudiantes"];
        }
    });
    return numFac;
}
async function eliminarFacultad (id){
    const facultades = JSON.parse(await leer('Facultades.txt'));
    escribir('Facultades.txt',JSON.stringify(facultades.filter(facultad => facultad["id"] != id)));
}
async function mainFacultad(id){
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
                    if(id == facultad["id"]){
                        console.log('Nombre:',facultad['nombre']);
                        console.log('Numero de edificio:',facultad['edificio']);
                        console.log('Numero de alumnos:',facultad['estudiantes']);
                        console.log('Posee biblioteca:',facultad['biblioteca']);
                        console.log('Fecha de fundacion:',facultad['fecha'],'\n');
                    }
                });
                break;
            case 2 :
                await procesarFacultad('Facultades.txt', id);
                console.log('CREADO');
                break;
            case 3 :
                if (await modificarFacultad(id)) {
                    console.log('Facultad no encontrada')
                }
                break;
            case 4 :
                console.log('Ingrese el nombre de a facutad a eliminar')
                facultades = JSON.parse(await leer('Facultades.txt'));
                let eliminar = await leerUpdate();
                let i = 0;
                for (const facultad of facultades) {
                    if (facultad['nombre'] === eliminar && facultad["id"]==id) {
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
async function main(){
    let opcion;
    while (opcion!=5) {
        console.log('\tUNIVERSIDAD');
        console.log('1.- Leer\n2.- Crear\n3.- Modificar\n4.- Eliminar\n5.- Salir');
        console.log('Ingresa la opcion...')
        opcion = Number(await leerUpdate());
        let universidades = null;
        switch (opcion) {
            case 1 :
                universidades = JSON.parse(await leer('Universidad.txt'));
                universidades.forEach(universidad => {
                    console.log('Nombre:',universidad['nombre']);
                    console.log('Numero de facultades:',universidad['facultades']);
                    console.log('Numero de alumnos:',universidad['estudiantes']);
                    console.log('Es publica:',universidad['publica']);
                    console.log('Fecha de fundacion:',universidad['fecha'],'\n');
                });
                break;
            case 2 :
                const id = await procesarUniversidad('Universidad.txt');
                await mainFacultad(id);
                universidades = JSON.parse(await leer('Universidad.txt'));
                for (const universidad of universidades) {
                    if (universidad['id']===id) {
                        universidad['facultades']= await contarFacultades(id);
                        universidad['estudiantes']= await contarEstudiantes(id);
                        escribir('Universidad.txt',JSON.stringify(universidades));
                        break;
                    }
                }
                console.log('CREADO');
                break;
            case 3 :
                console.log('Ingrese el nombre de la universidad a modificar')
                let modificar = await leerUpdate();
                let encontrado = false;
                universidades = JSON.parse(await leer('Universidad.txt'));
                for (const universidad of universidades) {
                    if (universidad['nombre']==modificar) {
                        console.log('¿Desea actualizar es publica?');
                        if(await leerConfirm()){
                            console.log('Actualizar es publica');
                            universidad['publica'] = await leerConfirm();
                            encontrado = true;
                        }
                        console.log('¿Desea actualizar fecha de fundacion?');
                        if(await leerConfirm()){
                            console.log('Actualizar fecha de fundacion');
                            universidad['fecha'] = await leerFecha();
                            encontrado = true;
                        }
                        console.log('¿Desea actualizar facultades?');
                        if(await leerConfirm()){
                            await modificarFacultad(universidad["id"]);
                            encontrado = true;
                        }
                        escribir('Universidad.txt',JSON.stringify(universidades));
                        break;
                    }else {
                        encontrado = false;
                    }
                }
                if (!encontrado) {
                    console.log('Universidad no encontrada')
                }else {
                    console.log('ACTUALIZADO');
                }
                break;
            case 4 :
                console.log('Ingrese el nombre de a universidad a eliminar')
                universidades = JSON.parse(await leer('Universidad.txt'));
                let eliminar = await leerUpdate();
                let i = 0;
                for (const facultad of universidades) {
                    if (facultad['nombre'] === eliminar) {
                        universidades.splice(i, 1);
                        escribir('Universidad.txt',JSON.stringify(universidades));
                        await eliminarFacultad(facultad['id']);
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