export interface MensajeChatProps {
    nombre: string;
    mensaje: string;
}
export default function (props: MensajeChatProps){
    const {nombre, mensaje} = props
    return (<>
        {
            <p className='text-left'>
                <strong>Numero de propiedades: </strong>{mensaje}
            </p>
        }
    </>)
}