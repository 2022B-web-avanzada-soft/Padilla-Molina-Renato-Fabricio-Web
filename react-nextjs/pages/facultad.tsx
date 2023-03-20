import Link from "next/link";
import Layout from "../components/Layout";
import {useEffect, useState} from "react";

export interface Facultad{
    id:number,
    nombres:string,
    especialidad:string,
    trabaja_fin_semana:string,
    costo_cita:number,
    horas_trabajo:number
}
export default function (){
    const [facultades, setFacultades] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:11203/medico").then((response) => {
            setFacultades(response.data);
        });
    }, []);
    const deletePost = (doctorId:number)=>{
        axios
            .delete(`http://localhost:11203/medico/${facultadId}`)
            .then(() => {
                alert("Doctor deleted!");
            });
    }
    if (!facultades) return null;

    return(
        <>
            <Layout title="Facultad">
                <div className="m-3">
                    <button type="button"
                            className="btn btn-primary">
                        <Link className="text-white" href="/CrearDoctor">Crear Facultad</Link>
                    </button>
                </div>
                {facultades.length ? (
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
                        {facultades.map((facultad)=>(
                            <tr className="border-b" key={facultad.id}>
                                <td>
                                    {facultad.nombres}
                                </td>
                                <td>
                                    {facultad.especialidad}
                                </td>
                                <td>
                                    {facultad.trabaja_fin_semana}
                                </td>
                                <td>
                                    {facultad.costo_cita}
                                </td>
                                <td>
                                    {facultad.horas_trabajo}
                                </td>
                                <td className="p-4 flex justify-center gap-3">
                                    <button
                                        type="button"
                                        className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"

                                    > <Link href={'/ActualizarDoctor/'+facultad.id}>Actualizar</Link>
                                    </button>
                                    <button type="submit"
                                            className="text-red-600 hover:text-blue-700 uppercase font-bold text-xs"
                                            onClick={(e)=>deletePost(facultad.id)}>
                                        Eliminar
                                    </button>
                                    <button type="submit"
                                            className="text-red-600 hover:text-blue-700 uppercase font-bold text-xs"
                                    >
                                        <Link href={'/Pacientes/'+facultad.id}>Ver </Link>
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