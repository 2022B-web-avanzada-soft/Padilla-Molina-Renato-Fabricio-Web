import styles from './estilos.module.css';
import styled from "@emotion/styled";
//Styled components
const Titulo = styled.h1`
  font-size: 2rem;;
  text-transform: uppercase;
  color: orange;
`
const TituloRojo = styled.h1`
  font-size: 1.5rem;;
  text-transform: capitalize;
  color: red;
`
const SubTitulo = styled.h2`
  font-size: 1.5rem;;
  text-transform: capitalize;
  color: green;
`
export default function () {
    const misEstilos = {
        color: "white",
        backgroundColor: "black",
        borderBottom: "5px solid yellow"
    };
        return (
        <>
            <Titulo>Hola</Titulo>
            <TituloRojo>Hola</TituloRojo>
            <SubTitulo>Hola</SubTitulo>
            <h1 style={
                {
                    color: misEstilos.color,
                    backgroundColor: misEstilos.backgroundColor,
                    borderBottom: misEstilos.borderBottom
                }
            }>
                Estilos en objeto
            </h1>
            <div style={misEstilos}> Otros Estilos </div>
            <div className={styles.rojo}>
                Estilos en hoja de estilos
            </div>
        </>
    )
}