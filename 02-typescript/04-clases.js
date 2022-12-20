class Persona {
    constructor(nombre, apellido) {
        this.nombreApellido = '';
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombreApellido = nombre + apellido;
    }
    ;
    mostrarNombreApellido() {
        return this.nombreApellido;
    }
}
Persona.nombreRef = 'Humano';
class Usuario extends Persona {
    constructor(nombre, apellido, cedula, estadoCivil) {
        super(nombre, apellido);
        this.cedula = cedula;
        this.estadoCivil = estadoCivil;
        this.cedula;
        this.estadoCivil;
    }
}
const renato = new Usuario('Renato', 'Padilla', '12345', 'soltero');
renato.nombre;
renato.apellido;
