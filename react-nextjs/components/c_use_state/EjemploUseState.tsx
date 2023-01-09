import {useState} from "react";
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
    //setUsuario({nombre: "Fabricio", edad: 28, casado: false, hijos: []} )
    return (<>
        <button className="bg-blue-500" onClick={
            (event)=>{
                event.preventDefault();
                setNumero(numero+1);
            }}
        >Numero</button>
        <button className="bg-blue-500" onClick={
            (event)=>{
                event.preventDefault();
                setArregloNumero([...arregloNumero, 1]);
            }}
        >Arreglo</button>
        <button className="bg-blue-500" onClick={
            (event)=>{
                event.preventDefault();
                let usuarioNuevo = {...usuario, nombre: new Date().toString()}
                setUsuario(usuarioNuevo);
            }}
        >Usuario</button>
    </>)
}