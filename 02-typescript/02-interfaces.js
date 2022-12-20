export class A {
}
let user = {
    nombre: 'Renato',
    apellido: 'Padilla',
    casado: 0,
    sueldo: 11.2,
    estado: 'AC',
    imprimiUsuario: (mesaje) => {
        return 'El mensaje es: ' + mesaje;
    },
    calcularImpuesto: impuesto => {
        return user.sueldo + this.sueldo * impuesto;
    },
    estadoActual: () => {
        switch (this.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
};
