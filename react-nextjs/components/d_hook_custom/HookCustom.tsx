import useSelectMoneda from "../hooks/useSelectMoneda";
import {useEffect} from "react";
import {MONEDAS} from "./monedas";

export default function () {
    const [moneda, useSelectMonedas] = useSelectMoneda(
        'Moneda ',
        MONEDAS
    )
    useEffect(
        ()=>{
            console.log('Cambio moneda',moneda);
        },
        [moneda]
    );
    return (<>{useSelectMonedas}</>)
}