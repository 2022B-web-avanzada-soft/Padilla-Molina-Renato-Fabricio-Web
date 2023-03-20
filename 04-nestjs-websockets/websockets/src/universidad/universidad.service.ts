import {Injectable} from "@nestjs/common";
import {InjectDataSource} from "@nestjs/typeorm";
import {UniversidadEntity} from "./universidad.entity";
import {DataSource, FindManyOptions} from "typeorm";
import {UniversidadCreateDto} from "./dto/universidad-create.dto";
import {UniversidadUpdateDto} from "./dto/universidad-update.dto";

@Injectable()
export class UniversidadService {
    constructor(
        @InjectDataSource()
        public datasource: DataSource
    ) {}

    public usuarioRepository = this.datasource.getRepository(UniversidadEntity);
    find(opciones: FindManyOptions<UniversidadEntity>) {
        return this.usuarioRepository.find(opciones)
    }
    findOneById(id: number) {
        return this.usuarioRepository.findOne({
            // select:{ },
            where: {
                id: id
            },
        })
    }
    create(datosCrear: UniversidadCreateDto) {
        return this.usuarioRepository.save(datosCrear);
    }
    update(datosActualizar: UniversidadUpdateDto, id: number) {
        return this.usuarioRepository.save(
            {...datosActualizar, id}
        );
    }
    delete(id: number) {
        return this.usuarioRepository.delete(id);
    }
}