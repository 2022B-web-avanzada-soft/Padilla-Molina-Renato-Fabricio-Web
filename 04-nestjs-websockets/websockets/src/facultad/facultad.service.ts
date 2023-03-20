import {Injectable} from "@nestjs/common";
import {InjectDataSource} from "@nestjs/typeorm";
import {FacultadEntity} from "./facultad.entity";
import {DataSource, FindManyOptions} from "typeorm";
import {FacultadCreateDto} from "./dto/facultad-create.dto";
import {FacultadUpdateDto} from "./dto/facultad-update.dto";

@Injectable()
export class FacultadService {
    constructor(
        @InjectDataSource()
        public datasource: DataSource
    ) {}

    public usuarioRepository = this.datasource.getRepository(FacultadEntity);
    find(opciones: FindManyOptions<FacultadEntity>) {
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
    create(datosCrear: FacultadCreateDto) {
        return this.usuarioRepository.save(datosCrear);
    }
    update(datosActualizar: FacultadUpdateDto, id: number) {
        return this.usuarioRepository.save(
            {...datosActualizar, id}
        );
    }
    delete(id: number) {
        return this.usuarioRepository.delete(id);
    }
}