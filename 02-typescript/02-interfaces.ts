export class A{

}
export interface B{

}
interface Usuario{
    nombre: string;
    apellido: string;
    edad?: number | undefined;//opcionl
    sueldo?: number;//opcionl
    casado: boolean | 0 | 1;
    estado: 'AC' | 'IN' | 'BN';
    // funciones
    imprimiUsuario: (mesaje: string) => string | 'BN';
    calcularImpuesto: (impuesto: number) => number;
    estadoActual?: () => 'AP' | 'AF' | 'AT';//opcionl
}

let user: Usuario = {
    nombre: 'Renato',
    apellido: 'Padilla',
    casado: 0,
    sueldo: 11.2,
    estado: 'AC',
    imprimiUsuario: (mesaje : string) =>{
        return 'El mensaje es: ' + mesaje;
    },
    calcularImpuesto: impuesto => {
        return user.sueldo + this.sueldo * impuesto;
    } ,
    estadoActual: () => {
        switch (this.estado){
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
}