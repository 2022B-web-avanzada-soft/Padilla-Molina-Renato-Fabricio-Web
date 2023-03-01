import io from "socket.io-client"
import {useEffect, useState} from "react";
import MensajeChat, {MensajeChatProps} from "../components/MensajeChat";
import {useForm} from "react-hook-form";
import Layout from "../components/Layout";

const servidorWebsocket = 'http://localhost:11202';
const socket = io(servidorWebsocket);

export interface FormularioModelo{
    nombre:string;
    mensaje:string;
}
export type MensajeSala = FormularioModelo;

export default function(){
    const [isConnected, setIsConnected] = useState(socket.connected)
    const inicioCantidad: MensajeChatProps = {
        mensaje: '22',
        nombre: 'Sala'
    };
    const [mensajes, setMensajes] = useState([inicioCantidad] as MensajeChatProps[]);

    const [cantidad, setCantidad] = useState(22)

    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
        defaultValues: {
            nombre: '',
            mensaje: '',
        },
        mode: 'all'
    })

    useEffect(
        () => {

            socket.on('connect', () => {
                setIsConnected(true);
                console.log('Si esta conectado');
            });
            socket.on('disconnect', () => {
                setIsConnected(false);
                console.log('No esta conectado');
            });
            socket.on('escucharEventoPropiedad', (data: MensajeSala) => {
                const nuevoMensaje: MensajeChatProps = {
                    mensaje: data.mensaje,
                    nombre: data.nombre
                };
                setCantidad(parseInt(data.mensaje))
                setMensajes((mensajesAnteriores) => [nuevoMensaje]);
            });
        },
        []
    )
    const actualizarPropiedades = (data: FormularioModelo) => {
        const nuevoMensaje= {
            nombre: data.nombre,
            mensaje: (cantidad-parseInt(data.mensaje))
        };
        socket.emit(
            'comprarPropiedad', // Nombre Evento
            nuevoMensaje, //  Datos evento
            () => { // Callback o respuesta del evefnto
                const nuevoMensaje2:MensajeChatProps = {
                    mensaje: ''+(cantidad-parseInt(data.mensaje)),
                    nombre: data.nombre
                };
                setCantidad(cantidad-parseInt(data.mensaje))
                setMensajes((mensajesAnteriores) => [nuevoMensaje2]);
            }
        )
    }

    const estaConectado = () =>{
        if(isConnected){
            return <span>Conectado :)</span>
        }else{
            return <span>Desconectado :(</span>
        }
    }

    return (
        <>
            <Layout title="Monopoly">
                <h1>Monopoly</h1>
                <p><strong>{estaConectado()}</strong></p>
                <div className="row">

                    <div className="col-sm-6 container">
                        <div className="row align-items-center">

                            <form onSubmit={handleSubmit(actualizarPropiedades)} className="row align-items-center">
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <img
                                            className="rounded" width="700" height="700"
                                            src="https://i.pinimg.com/564x/3e/8e/48/3e8e48fa311d6b2b0f7cb76079acdded.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="mb-3 row align-items-center">
                                    {mensajes.map((mensaje, indice) =>
                                        <MensajeChat key={indice}
                                                     mensaje={mensaje.mensaje}
                                                     nombre={mensaje.nombre}
                                        />)
                                    }
                                </div>
                                <div className="mb-2 row align-items-center">
                                    <label htmlFor="mensaje" className="form-label">Ingrese numero de propiedades</label>
                                    <input type="text"
                                           className="form-control"
                                           placeholder="Numero"
                                           id="mensaje"
                                           {...register('mensaje')}
                                           aria-describedby="mensajeHelp"
                                    />
                                    {errors.mensaje &&
                                        <div className="alert alert-warning" role="alert">
                                            Tiene errores {errors.mensaje.message}
                                        </div>
                                    }
                                </div>
                                <button type="submit"
                                        disabled={!isValid}
                                        className="btn btn-success btn-lg w-25 row align-items-center">
                                    Comprar Propiedad
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </Layout>

            <hr />
        </>
    )
}