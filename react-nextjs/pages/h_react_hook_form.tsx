import {useState} from "react";
import {Controller,useForm} from "react-hook-form";
import Layout from "../components/Layout";
import {Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";

type FormularioEjemplo = {
    nombre: string;
    estadoCivil: string;
}
export default function () {
    const [nombre,setNombre] = useState('Renato');
    const {handleSubmit, register, formState: {errors, isValid}, control} = useForm<FormularioEjemplo>({
        defaultValues: {
            nombre: 'Fabricio',
            estadoCivil : ''
        },
        mode: 'all'
    })
    const controladorSubmit = (data: FormularioEjemplo) => {
        console.log(data);
    }
    return(<>
        <Layout title={"Formulario"}>
            <h1>Formulario con react Hook form</h1>
            <form onSubmit={handleSubmit(controladorSubmit)}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" placeholder="Ej: Renato"
                        id="nombre" {...register("nombre",{
                            required: {
                                value: true,
                                message: 'nombre requerido'
                            },
                            maxLength: {value: 20, message : 'Longitud maxima 20'},
                            minLength: {value :5, message : 'Longitud minima 5'},
                            validate: {
                                soloNumeros:(valorActual) =>{
                                    if (Number.isNaN(+valorActual)) {
                                        return 'Ingrese solo numeros';
                                    }else{
                                        return true;
                                    }
                                }
                            }
                    })} aria-describedby="nombreHelp"/>
                    <div id="nombreHelp" className="form-text">Ingresa tu nombre</div>
                    {errors.nombre &&
                        <div className="alert alert-warning" role="alert">
                            Tiene errores {errors.nombre.message}
                        </div>
                    }
                </div>
                <div className="mb-3">
                    <FormControl fullWidth>
                        <InputLabel id="estadoCivillabelId">Estado civil</InputLabel>
                        <Controller
                            control={control}
                            rules={{required :{value : true, message : 'Estado Civil Requerido'}}}
                            name="estadoCivil"
                            render={({field: {onChange, value, onBlur,}})=>{
                                return <Select labelId="estadoCivillabelId"
                                        id="estadoCiviId" label="Estado Civil"
                                        onBlur={onBlur} value={value}
                                        onChange={onChange}>
                                    <MenuItem value={'casado'}>Casado</MenuItem>
                                    <MenuItem value={'soltero'}>Soltero</MenuItem>
                                </Select>
                            }}
                        />
                        {errors.estadoCivil &&
                            <div className="alert atert-warning" role="alert">
                                Tiene errores {errors.estadoCivil.message}
                            </div>
                        }
                    </FormControl>
                </div>
                <Button type="submit" variant="outlined" disabled={!isValid}>Submit</Button>
            </form>
        </Layout>
    </>)
}