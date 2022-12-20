
function imprimir(
    mensaje?: string
): void {
    console.log('Hola' + mensaje ? mensaje: 'bienvemido');
}
const arregloNumeros: number[] = [1,2];
const arregloNumerosDos: Array<number> = [1,2];
const arregloNumerosTres: (number | string | boolean)[] = [1, 'dos', true, 2, 'uno', false];
const arregloNumerosCuatro: Array<number | string | boolean> = [1, 'dos', true, 2, 'uno', false];
let arregloNumerosCinco: number[] | string[] = [1,2];
arregloNumerosCinco = ['uno', 'dos'];