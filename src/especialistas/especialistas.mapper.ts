import { CreateEspecialistaDto } from "./dto/create-especialista.dto";
import { EspecialistaDto } from "./dto/especialista.dto";

import { Especialista } from '@prisma/client';

export class EspecialistaMapper {

    // igual esta entidad toca arreglarla.

    static toEntity(especialistaDto: EspecialistaDto, usurioId?: number){
        console.log(especialistaDto);
        
        let especialista_id = Number(especialistaDto.especialistaId);
        especialista_id = isNaN(especialista_id) ? undefined : especialista_id

        const especialistaEntity: Especialista = {
            especialista_id,
            usuario_id: usurioId,
            pais_id: 0,
            estado_id: 0,
            municipio_id: 0,
            delegacion_id: 0,
            ciudad_id: 0,
            tipo_documento: especialistaDto.tipoDocumento,
            nro_documento: especialistaDto.nroDocumento,
            fecha_nacimiento: especialistaDto.fechaNacimiento? new Date(especialistaDto.fechaNacimiento): null,
            telefono_movil: especialistaDto.telefonoMovil,
            telefono_fijo: especialistaDto.telefonoFijo,
            genero: especialistaDto.genero,
            estatus: especialistaDto.estatus,
            curriculum: especialistaDto.curriculum,
            otros_servicios: especialistaDto.otrosServicios,
            nombre_empresa_seguros: especialistaDto.otrosServicios,
            tipo_seguro: "",
            tiene_seguro: especialistaDto.tieneSeguro,
            foto: especialistaDto.foto,
            rfc: especialistaDto.rfc,
            banco_id: especialistaDto.bancoId,
            banco: especialistaDto.banco,
            clabe: especialistaDto.clave,
            pais: "", // Agrega la propiedad 'pais' con un valor adecuado
            estado: "", // Agrega la propiedad 'estado' con un valor adecuado
            municipio: "", // Agrega la propiedad 'municipio' con un valor adecuado
            delegacion: "", // Agrega la propiedad 'delegacion' con un valor adecuado
            ciudad: "", // Agrega la propiedad 'ciudad' con un valor adecuado
            codigo_postal: "",
            direccion: "",
            createdAt: new Date(),
            updatedAt: new Date()
        }
        return especialistaEntity;
    }

    static toDto(especialista: Especialista): EspecialistaDto {

        const especialistaDto = {     
            usuarioId: especialista.usuario_id, 
            telefonoMovil: especialista.telefono_movil,
            telefonoFijo: especialista.telefono_fijo,
            genero: especialista.genero,
            fechaNacimiento: especialista.fecha_nacimiento,
            tipoDocumento: especialista.tipo_documento,
            nroDocumento: especialista.nro_documento,
            estatus: especialista.estatus,
            curriculum: especialista.curriculum, 
            otrosServicios: especialista.otros_servicios,
            tieneSeguro: especialista.tiene_seguro,
            foto: especialista.foto,
            rfc: especialista.rfc,
            bancoId: especialista.banco_id,
            banco: especialista.banco,
            clave: especialista.clabe
        }
        return especialistaDto;
    }

    static toCreate(afterDTO: EspecialistaDto, userId: number): EspecialistaDto {
        const beforeDto = {     
            usuarioId: userId, 
            telefonoMovil: afterDTO.telefonoMovil,
            telefonoFijo: afterDTO.telefonoFijo,
            genero: afterDTO.genero,
            fechaNacimiento: afterDTO.fechaNacimiento,
            tipoDocumento: afterDTO.tipoDocumento,
            nroDocumento: afterDTO.nroDocumento,
            estatus: afterDTO.estatus,
            curriculum: afterDTO.curriculum, 
            otrosServicios: afterDTO.otrosServicios,
            tieneSeguro: afterDTO.tieneSeguro,
            foto: afterDTO.foto,
            rfc: afterDTO.rfc,
            bancoId: afterDTO.bancoId,
            banco: afterDTO.banco,
            clave: afterDTO.clave
        }
        return beforeDto
    }

}