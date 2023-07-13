import { User } from "@prisma/client"
import { Multer } from 'multer';



export class EspecialistaDto {
  especialistaId?: string 
  telefonoMovil: string
  telefonoFijo: string
  genero: string
  fechaNacimiento?: Date
  tipoDocumento: string
  nroDocumento: string
  estatus: string
  curriculum?: Multer.File
  otrosServicios: string
  tieneSeguro: string
  foto?: Multer.File
  rfc: string
  bancoId?: string
  banco?: string
  clave?: string
}