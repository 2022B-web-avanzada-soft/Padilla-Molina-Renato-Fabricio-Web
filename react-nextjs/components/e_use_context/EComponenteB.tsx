import {useContext} from "react";
import {ContenedorContext} from "./ContenedorContext";
import EComponenteC from "./EComponenteC";

export  default function () {
    const contenedorContext = useContext(ContenedorContext);
    return (
        <>
            <br/>
            Componente B
            <p>{contenedorContext.nombreUsuario}</p>
            <button className={"bg-blue-500 m-1"} onClick={ e=>{
                e.preventDefault();
                contenedorContext.setNombreUsuario('CompB');
            }}>
                Actualizar
            </button>
            <EComponenteC></EComponenteC>
        </>
    )
}