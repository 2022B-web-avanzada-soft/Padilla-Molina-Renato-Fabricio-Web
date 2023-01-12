import {useEffect, useState} from "react";
interface Usuario{
    nombre: string,
    edad: number,
    casado: boolean,
    hijos?: number[];
}
export default function () {
    const [numero, setNumero] = useState(0);
    const [nombre, setNombre] = useState("");
    const [arregloNumero, setArregloNumero] = useState([1,2,3]);
    const [usuario, setUsuario] = useState({
        nombre: "Adrian",
        edad: 33,
        casado: true,
    } as Usuario)
    // ayuda a escuchar cambios variables
    useEffect(
        ()=>{
            console.log('INICIO EL COMPONENTE',numero,usuario)
        },
        []//arregloVariables
        //Si esta vacio se ejecuta al principio una vez
    );
    useEffect(
        ()=>{
            console.log('Cambio numero',numero)
        },
        [numero]//arregloVariables
    );
    useEffect(
        ()=>{
            console.log('Cambio arreglo numero',arregloNumero)
        },
        [arregloNumero]//arregloVariables
    );
    useEffect(
        ()=>{
            console.log('Cambio usuario',usuario)
        },
        [usuario]//arregloVariables
    );
    useEffect(
        ()=>{
            console.log('Cambio todo',usuario,numero,arregloNumero)
        },
        [usuario,numero,arregloNumero]//arregloVariables
    );
    //setUsuario({nombre: "Fabricio", edad: 28, casado: false, hijos: []} )
    return (<>
        <button className="bg-blue-500 m-2" onClick={
            (event)=>{
                event.preventDefault();
                setNumero(numero+1);
            }}
        >Numero</button>
        <button className="bg-blue-500 m-2" onClick={
            (event)=>{
                event.preventDefault();
                setArregloNumero([...arregloNumero, 1]);
            }}
        >Arreglo</button>
        <button className="bg-blue-500 m-2" onClick={
            (event)=>{
                event.preventDefault();
                let usuarioNuevo = {...usuario, nombre: new Date().toString()}
                setUsuario(usuarioNuevo);
            }}
        >Usuario</button>
    </>)
}