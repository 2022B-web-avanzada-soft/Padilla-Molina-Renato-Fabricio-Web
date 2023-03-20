import Link from "next/link";
import Layout from "../components/Layout";
import {useEffect, useState} from "react";

export interface Universidad{
    id:number,
    nombres:string,
    especialidad:string,
    trabaja_fin_semana:string,
    costo_cita:number,
    horas_trabajo:number
}
export default function (){
    const [universidades, setUniversidades] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:11203/medico").then((response) => {
            setUniversidades(response.data);
        });
    }, []);
    const deletePost = (doctorId:number)=>{
        axios
            .delete(`http://localhost:11203/medico/${universidadId}`)
            .then(() => {
                alert("Doctor deleted!");
            });
    }
    if (!universidades) return null;

    return(
        <>
            <Layout title="Universidad">
                <div className="m-3">
                    <button type="button"
                            className="btn btn-primary">
                        <Link className="text-white" href="/CrearDoctor">Crear Universidad</Link>
                    </button>
                </div>
                {universidades.length ? (
                    <table className="w-full bg-white shadow m-5 table-auto">
                        <thead className="bg-black text-white">
                        <tr>
                            <th className="p-2">Nombre</th>
                            <th className="p-2">Especialidad</th>
                            <th className="p-2">¿Trabaja fines de semana?</th>
                            <th className="p-2">Costo por cita</th>
                            <th className="p-2">Horas de trabajo al día</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        {universidades.map((universidad)=>(
                            <tr className="border-b" key={universidad.id}>
                                <td>
                                    {universidad.nombres}
                                </td>
                                <td>
                                    {universidad.especialidad}
                                </td>
                                <td>
                                    {universidad.trabaja_fin_semana}
                                </td>
                                <td>
                                    {universidad.costo_cita}
                                </td>
                                <td>
                                    {universidad.horas_trabajo}
                                </td>
                                <td className="p-4 flex justify-center gap-3">
                                    <button
                                        type="button"
                                        className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"

                                    > <Link href={'/ActualizarDoctor/'+universidad.id}>Actualizar</Link>
                                    </button>
                                    <button type="submit"
                                            className="text-red-600 hover:text-blue-700 uppercase font-bold text-xs"
                                            onClick={(e)=>deletePost(universidad.id)}>
                                        Eliminar
                                    </button>
                                    <button type="submit"
                                            className="text-red-600 hover:text-blue-700 uppercase font-bold text-xs"
                                    >
                                        <Link href={'/Pacientes/'+universidad.id}>Ver </Link>
                                    </button>
                                </td>
                            </tr>
                        ))
                        }
                        </tbody>
                    </table>
                ): (<p className="text-center mt-10"> No existe </p> )}

            </Layout>

        </>
    )
}