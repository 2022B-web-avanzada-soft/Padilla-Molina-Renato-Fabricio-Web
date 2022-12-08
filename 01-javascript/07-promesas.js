const fs = require('fs');

function promesaEsPar(numero){
    const miPrimerPromesa = new Promise(
        (resolve, reject)=>{
            if(numero%2==0){resolve(numero);}
            else {reject('No es par');}
            //resolve(1);//return
            //reject(':(');//throw
        }
    );
    return miPrimerPromesa
}
function promesaAlCuadrado(numero){
    return new Promise((res)=> res(Math.pow(numero,2)));
}

promesaEsPar(4)
    .then(
        (data)=>{
            console.log("Data",data);
            return  promesaAlCuadrado(data);
        }
    )
    .then(
        (data)=>{
            console.log("Data",data);
            return  promesaAlCuadrado(data);
        }
    )
    .then(
        (data)=>{
            console.log("Data",data);
            return  promesaAlCuadrado(data);
        }
    )
    .catch(
        (error)=>{console.log("Error",error);}
    )
    .finally(
        ()=>{console.log("Finally");}
    )