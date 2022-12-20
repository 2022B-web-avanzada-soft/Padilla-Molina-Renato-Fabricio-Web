let nombre: string = 'Renato';// primitivo
let apellido: String = 'Padilla';// clase String
console.log(nombre);
nombre = 'Fabricio';
let edad: number = 27;
let casado: boolean = false;
let fecha: Date = new Date();
let sueldo: number;
sueldo = 12.3;

// Duck Typing
let apellidoB = 'Molina';
console.log(typeof apellidoB);

let mari: any = 2;
mari = '2';
mari = true;
mari = () => '2';

let edadMultiple: number | string  | Date = '2';
edadMultiple = '2';
edadMultiple = 'dos';
edadMultiple = new Date();
edadMultiple = 222;
let  numeroUnico: number = 1;
numeroUnico = numeroUnico + (Math.pow((edadMultiple as number), 2));