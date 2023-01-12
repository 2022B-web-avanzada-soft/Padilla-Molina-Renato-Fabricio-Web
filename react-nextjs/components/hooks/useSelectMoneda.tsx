import {MonedasInterface} from "../../interfaces/moneda"
import {useState} from "react";
export default function (label: string, opciones: MonedasInterface[]) {
    //select de arreglo de monedas (html - jsx element)
    //valor de esa moneda
    const [moneda, setMoneda] = useState('');
    const generarJSEXElementMonedas: ()=>JSX.Element[] = ()=>{
        return opciones.map(
            (moneda)=>(//Iteracion (Key Requerido)
                <option key={moneda.id} id={moneda.id} value={moneda.id}>
                    {moneda.nombre}
                </option>
            )
        );
    };
    const useSelectMonedas = (
        <>
            <label className="form-label" htmlFor={label}>{label}</label>
            <select className="form-select" name={label} id = {label} value={moneda}
                    onChange={e=>{
                        e.preventDefault();
                        setMoneda(e.target.value);
                    }}>
                <option value="">Seleccione opcion</option>
                {generarJSEXElementMonedas()}
            </select>
        </>
    )
    return [moneda, useSelectMonedas];
}