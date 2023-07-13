import { Parentescos } from "src/common/enum/parentescos.enum";

export class BeneficiarioDto {
    public id?: string;
    public primerNombre: string;
    public primerApellido: string;
    public segundoNombre: string;
    public segundoApellido: string;
    public tipoDocumento: string;
    public parentesco: Parentescos;
    public numDocumento: string;
    public fechaNacimiento: string;
    public codigoPostal: string;
    public direccion: string;
    public telefonoMovil: string;
    public genero: string;
    public pais: string;
    public estado: string;
    public municipio: string;
    public delegacion: string;

    static instance() {
        return new this();
    }
}