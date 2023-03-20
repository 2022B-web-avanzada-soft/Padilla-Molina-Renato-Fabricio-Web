import {Module} from "@nestjs/common";
import {FacultadService} from "./facultad.service";
import {FacultadController} from "./facultad.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {FacultadEntity} from "./facultad.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [FacultadEntity], // Entidad en este modulo
            'default'
        ),
    ],
    providers: [FacultadService],
    exports: [FacultadService],
    controllers: [FacultadController]
})
export class UsuarioModule {

}