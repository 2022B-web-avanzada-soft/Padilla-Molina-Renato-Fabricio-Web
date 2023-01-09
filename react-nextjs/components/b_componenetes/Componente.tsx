import {useState} from "react";

type PropiedadesComponnente = {
    url: string;
    iteraciones: number;
    mostrar?: boolean;
};
//interface PropiedadesComponnente  {}

export default function (props: PropiedadesComponnente){
    const {url, iteraciones, mostrar} = props;
    //Hooks>
    const [iteracion, setIteracion] = useState(iteraciones);
    const contenidoCondiconal: () => (JSX.Element) = () => {
        if(mostrar){
            return <p>Hola</p>
        }
        return <></>
    }
    return (
        <>
            <a target="_blank" href={url}>Ir a Google</a>
            {/*mostrar ? <p>Hello</p> : <></>*/}
            {contenidoCondiconal()}
            {mostrar && <h1>Si muestra</h1>}
            <div>
                {iteracion}
            </div>
            <button className="bg-blue-500" onClick={
                (event)=>{
                    console.log(event);
                    setIteracion(iteracion+1);
            }}>Aumentar</button>
        </>
    )
}