import {useContext} from "react";
import {ContenedorContext} from "./ContenedorContext";

export  default function () {
    const contenedorContext = useContext(ContenedorContext);
    return (
        <>
            <br/>
            Componente C
            <p>{contenedorContext.nombreUsuario}</p>
            <button className={"bg-blue-500 m-1"} onClick={ e=>{
                e.preventDefault();
                contenedorContext.setNombreUsuario('CompC');
            }}>
                Actualizar
            </button>
        </>
    )
}