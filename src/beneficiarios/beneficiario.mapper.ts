import { BeneficiarioDto } from "./dtos/beneficiario.dto";
import { Beneficiarios } from '@prisma/client';

export class BeneficiarioMapper {
    static toEntity(beneficiarioDto: BeneficiarioDto, usurioId?: number): Beneficiarios {
        let id = Number(beneficiarioDto.id);
        id =  isNaN(id) ? undefined : id
        
        const beneficiarioEntity: Beneficiarios = {
            id,
            primer_nombre: beneficiarioDto.primerNombre,
            primer_apellido: beneficiarioDto.primerApellido,
            segundo_nombre: beneficiarioDto.segundoNombre,
            segundo_apellido: beneficiarioDto.segundoApellido,
            tipo_documento: beneficiarioDto.tipoDocumento,
            nro_documento: beneficiarioDto.numDocumento,
            fecha_nacimiento: new Date(beneficiarioDto.fechaNacimiento),
            codigo_postal: beneficiarioDto.codigoPostal,
            direccion: beneficiarioDto.direccion,
            telefono_movil: beneficiarioDto.telefonoMovil,
            genero: beneficiarioDto.genero,
            parentesco_id: beneficiarioDto.parentesco,
            Pais: beneficiarioDto.pais,
            Estado: beneficiarioDto.estado,
            MunicipioCiudad: beneficiarioDto.municipio,
            Delegacion: beneficiarioDto.delegacion,
            ciudad_id: 0,
            delegacion_id: 0,
            municipio_id: 0,
            pais_id: 0,
            estado_id: 0,
            usuario_id: usurioId,
            createdAt: undefined,
            updatedAt: undefined
        }
        return beneficiarioEntity;
    }

    static toDto(beneficiario: Beneficiarios): BeneficiarioDto {
        const beneficiarioDto = {
            id: beneficiario.id.toString(),
            primerNombre: beneficiario.primer_nombre,
            primerApellido: beneficiario.primer_apellido,
            segundoNombre: beneficiario.segundo_nombre,
            segundoApellido: beneficiario.segundo_apellido,
            tipoDocumento: beneficiario.tipo_documento,
            numDocumento: beneficiario.nro_documento,
            fechaNacimiento: beneficiario.fecha_nacimiento.toLocaleString(),
            codigoPostal: beneficiario.codigo_postal,
            direccion: beneficiario.direccion,
            telefonoMovil: beneficiario.telefono_movil,
            genero: beneficiario.genero,
            parentesco: beneficiario.parentesco_id,
            pais: beneficiario.Pais,
            estado: beneficiario.Estado,
            municipio: beneficiario.MunicipioCiudad,
            delegacion: beneficiario.Delegacion,
        }

        return beneficiarioDto;
    }
}