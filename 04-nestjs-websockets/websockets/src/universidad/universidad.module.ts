import {Module} from "@nestjs/common";
import {UniversidadService} from "./universidad.service";
import {UniversidadController} from "./universidad.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UniversidadEntity} from "./universidad.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [UniversidadEntity], // Entidad en este modulo
            'default'
        ),
    ],
    providers: [UniversidadService],
    exports: [UniversidadService],
    controllers: [UniversidadController]
})
export class UsuarioModule {

}