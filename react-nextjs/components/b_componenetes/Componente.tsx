type PropiedadesComponnente = {
    url: string;
    iteraciones: number;
    mostrar: boolean;
};
//interface PropiedadesComponnente  {}

export default function (props: PropiedadesComponnente){
    const {url, iteraciones, mostrar} = props;
    return (
        <>
            <a target="_blank" href={url}>Ir a Google</a>
            {mostrar ? <p>Hello</p> : <></>}
            <div>
                {iteraciones}
            </div>
        </>
    )
}