/*
const a_componente = function() {
    return (
        <></>
    )
}
export default a_componente
const b_componente = () =>{
    return (
        <></>
    )
}
export default b_componente*/
import EstilosEjemplo from "../components/a_estilos/EstilosEjemplo";
import Componente from "../components/b_componenetes/Componente";
export default function a_hola_mundo() {
    return (
        <>
            <h1>Hola Mundo</h1>
            <EstilosEjemplo></EstilosEjemplo>
            <Componente iteraciones={3}
                        mostrar={true}
                        url={'http://google.com'}
            ></Componente>
            <br/>
            <Componente iteraciones={3}
                        url={'http://google.com'}
            ></Componente>
        </>
    )
}
