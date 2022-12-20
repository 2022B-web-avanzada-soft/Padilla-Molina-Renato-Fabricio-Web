class Persona {
    public nombre: string;
    public apellido: string;
    static nombreRef: string = 'Humano';
    protected nombreApellido = '';
    constructor(
        nombre : string,
        apellido : string
    ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombreApellido = nombre + apellido;
    };
    private mostrarNombreApellido(): string {
        return this.nombreApellido;
    }
}
class Usuario extends Persona {
    constructor(
        nombre: string,
        apellido: string,
        public cedula: string,
        public estadoCivil: string,
    ) {
        super(nombre,apellido);
        this.cedula;
        this.estadoCivil;
    }
}
const renato = new Usuario(
    'Renato',
    'Padilla',
    '12345',
    'soltero'
);
renato.nombre;
renato.apellido;