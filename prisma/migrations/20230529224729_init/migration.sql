-- CreateEnum
CREATE TYPE "Role" AS ENUM ('user', 'admin', 'especialista', 'paciente', 'universidad', 'estudiante', 'universidadUser');

-- CreateTable
CREATE TABLE "OTP" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "code" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "OTP_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "primer_nombre" VARCHAR(50),
    "primer_apellido" VARCHAR(50),
    "segundo_nombre" VARCHAR(50),
    "segundo_apellido" VARCHAR(50),
    "email" VARCHAR(50),
    "password" VARCHAR(100),
    "newPassword" TEXT,
    "codigo_usuario" TEXT,
    "role" "Role" DEFAULT 'user',
    "activo" BOOLEAN DEFAULT true,
    "bloqueado" BOOLEAN DEFAULT false,
    "conectado" BOOLEAN DEFAULT false,
    "ultima_modif_psw" TIMESTAMP(3),
    "user_roles" "Role"[],
    "token" TEXT,
    "rememberMeToken" TEXT,
    "refreshToken" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "paciente_id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "es_usuario_principal" CHAR(1),
    "tipo_dependencia" INTEGER,
    "primer_nombre" VARCHAR(50),
    "primer_apellido" VARCHAR(50),
    "segundo_nombre" VARCHAR(50),
    "segundo_apellido" VARCHAR(50),
    "tipo_documento" VARCHAR(10),
    "nro_documento" VARCHAR(25) NOT NULL,
    "Pais" TEXT,
    "Estado" TEXT,
    "MunicipioCiudad" TEXT,
    "Delegacion" TEXT,
    "pais_id" INTEGER,
    "estado_id" INTEGER,
    "municipio_id" INTEGER,
    "delegacion_id" INTEGER,
    "ciudad_id" INTEGER,
    "codigo_postal" VARCHAR(10),
    "direccion" VARCHAR(250),
    "telefono_fijo" VARCHAR(25),
    "telefono_movil" VARCHAR(25),
    "genero" VARCHAR(1),
    "sexo" VARCHAR(1),
    "fecha_nacimiento" DATE,
    "usuario_id" INTEGER,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("paciente_id")
);

-- CreateTable
CREATE TABLE "Especialista" (
    "especialista_id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "usuario_id" INTEGER,
    "pais_id" INTEGER,
    "estado_id" INTEGER,
    "municipio_id" INTEGER,
    "delegacion_id" INTEGER,
    "ciudad_id" INTEGER,
    "pais" TEXT,
    "estado" TEXT,
    "municipio" TEXT,
    "delegacion" TEXT,
    "ciudad" TEXT,
    "codigo_postal" TEXT,
    "direccion" VARCHAR(250),
    "telefono_fijo" TEXT,
    "telefono_movil" VARCHAR(25),
    "genero" VARCHAR(1),
    "fecha_nacimiento" TIMESTAMP(3),
    "tipo_documento" VARCHAR(10),
    "nro_documento" VARCHAR(25),
    "estatus" CHAR(1),
    "curriculum" BYTEA,
    "otros_servicios" TEXT,
    "tiene_seguro" CHAR(1),
    "nombre_empresa_seguros" TEXT,
    "tipo_seguro" TEXT,
    "foto" BYTEA,
    "rfc" VARCHAR(50),
    "banco_id" VARCHAR(50),
    "banco" TEXT,
    "clabe" VARCHAR(50),

    CONSTRAINT "Especialista_pkey" PRIMARY KEY ("especialista_id")
);

-- CreateTable
CREATE TABLE "EspecialidadMedica" (
    "especialidad_id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "especialidad" TEXT NOT NULL,

    CONSTRAINT "EspecialidadMedica_pkey" PRIMARY KEY ("especialidad_id")
);

-- CreateTable
CREATE TABLE "DolenciaPorEspecialidadMedica" (
    "dolencia_id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "especialidad_id" INTEGER,
    "dolencia" TEXT NOT NULL,

    CONSTRAINT "DolenciaPorEspecialidadMedica_pkey" PRIMARY KEY ("dolencia_id")
);

-- CreateTable
CREATE TABLE "Universidad" (
    "universidad_id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "universidad" VARCHAR(50) NOT NULL,
    "siglas" VARCHAR(10) NOT NULL,
    "pais_id" INTEGER,
    "estado_id" INTEGER,
    "municipio_id" INTEGER,
    "delegacion_id" INTEGER,
    "ciudad_id" INTEGER,
    "codigo_postal" VARCHAR(10) NOT NULL,
    "direccion" VARCHAR(250) NOT NULL,

    CONSTRAINT "Universidad_pkey" PRIMARY KEY ("universidad_id")
);

-- CreateTable
CREATE TABLE "ModalidadCita" (
    "modalidad_id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "modalidad" TEXT NOT NULL,
    "estatus" TEXT NOT NULL,

    CONSTRAINT "ModalidadCita_pkey" PRIMARY KEY ("modalidad_id")
);

-- CreateTable
CREATE TABLE "Configuracion" (
    "configuracion_id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "teleconsulta_programada_id" INTEGER NOT NULL,
    "teleconsulta_ai_id" INTEGER NOT NULL,
    "teleconsulta_cons_id" INTEGER NOT NULL,
    "consulta_domicilio_id" INTEGER NOT NULL,
    "duracion_cita_ai" INTEGER NOT NULL,
    "duracion_cita_tcp" INTEGER NOT NULL,

    CONSTRAINT "Configuracion_pkey" PRIMARY KEY ("configuracion_id")
);

-- CreateTable
CREATE TABLE "TerminosCondiciones" (
    "terminos_id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "modalidad_id" INTEGER,
    "texto_pacientes" TEXT NOT NULL DEFAULT '',
    "texto_especialistas" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "TerminosCondiciones_pkey" PRIMARY KEY ("terminos_id")
);

-- CreateTable
CREATE TABLE "RelacionDependencia" (
    "relacion_id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "dependencia" TEXT NOT NULL,

    CONSTRAINT "RelacionDependencia_pkey" PRIMARY KEY ("relacion_id")
);

-- CreateTable
CREATE TABLE "Banco" (
    "banco_id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombre_banco" VARCHAR(20) NOT NULL,

    CONSTRAINT "Banco_pkey" PRIMARY KEY ("banco_id")
);

-- CreateTable
CREATE TABLE "Pais" (
    "pais_id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "pais" TEXT NOT NULL,

    CONSTRAINT "Pais_pkey" PRIMARY KEY ("pais_id")
);

-- CreateTable
CREATE TABLE "EstadoDepartamento" (
    "estado_id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "estado" TEXT NOT NULL,
    "pais_id" INTEGER NOT NULL,

    CONSTRAINT "EstadoDepartamento_pkey" PRIMARY KEY ("estado_id")
);

-- CreateTable
CREATE TABLE "Municipio" (
    "municipio_id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "estado_id" INTEGER NOT NULL,
    "municipio" TEXT NOT NULL,

    CONSTRAINT "Municipio_pkey" PRIMARY KEY ("municipio_id")
);

-- CreateTable
CREATE TABLE "Delegacion" (
    "delegacion_id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "municipio_id" INTEGER NOT NULL,
    "estado_id" INTEGER NOT NULL,
    "delegacion" TEXT NOT NULL,

    CONSTRAINT "Delegacion_pkey" PRIMARY KEY ("delegacion_id")
);

-- CreateTable
CREATE TABLE "Ciudad" (
    "ciudad_id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "delegacion_id" INTEGER NOT NULL,
    "municipio_id" INTEGER NOT NULL,
    "estado_id" INTEGER NOT NULL,
    "ciudad" TEXT NOT NULL,

    CONSTRAINT "Ciudad_pkey" PRIMARY KEY ("ciudad_id")
);

-- CreateTable
CREATE TABLE "UsuarioUniversidad" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "usuario_id" INTEGER,
    "universidad_id" INTEGER,
    "telefono" TEXT NOT NULL,
    "profesion" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "tiene_seguro" TEXT NOT NULL,

    CONSTRAINT "UsuarioUniversidad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuarioEstudiante" (
    "usuario_id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "universidad_id" INTEGER NOT NULL,
    "telefono" TEXT NOT NULL,
    "profesion" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "tiene_seguro" TEXT NOT NULL,
    "tipo_documento" TEXT NOT NULL,
    "nro_documento" TEXT NOT NULL,
    "pais_id" INTEGER,
    "estado_id" INTEGER,
    "municipio_id" INTEGER,
    "delegacion_id" INTEGER,
    "ciudad_id" INTEGER,
    "codigo_postal" TEXT,
    "direccion" TEXT NOT NULL,
    "telefono_fijo" TEXT,
    "telefono_movil" TEXT NOT NULL,

    CONSTRAINT "UsuarioEstudiante_pkey" PRIMARY KEY ("usuario_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OTP_userId_key" ON "OTP"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_pais_id_key" ON "Paciente"("pais_id");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_usuario_id_key" ON "Paciente"("usuario_id");

-- CreateIndex
CREATE INDEX "paciente_usuario_id_idx" ON "Paciente"("usuario_id");

-- CreateIndex
CREATE UNIQUE INDEX "Especialista_usuario_id_key" ON "Especialista"("usuario_id");

-- CreateIndex
CREATE UNIQUE INDEX "UsuarioUniversidad_usuario_id_key" ON "UsuarioUniversidad"("usuario_id");

-- AddForeignKey
ALTER TABLE "OTP" ADD CONSTRAINT "OTP_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_pais_id_fkey" FOREIGN KEY ("pais_id") REFERENCES "Pais"("pais_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "EstadoDepartamento"("estado_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_municipio_id_fkey" FOREIGN KEY ("municipio_id") REFERENCES "Municipio"("municipio_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_delegacion_id_fkey" FOREIGN KEY ("delegacion_id") REFERENCES "Delegacion"("delegacion_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_ciudad_id_fkey" FOREIGN KEY ("ciudad_id") REFERENCES "Ciudad"("ciudad_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Especialista" ADD CONSTRAINT "Especialista_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DolenciaPorEspecialidadMedica" ADD CONSTRAINT "DolenciaPorEspecialidadMedica_especialidad_id_fkey" FOREIGN KEY ("especialidad_id") REFERENCES "EspecialidadMedica"("especialidad_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Universidad" ADD CONSTRAINT "Universidad_pais_id_fkey" FOREIGN KEY ("pais_id") REFERENCES "Pais"("pais_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Universidad" ADD CONSTRAINT "Universidad_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "EstadoDepartamento"("estado_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Universidad" ADD CONSTRAINT "Universidad_municipio_id_fkey" FOREIGN KEY ("municipio_id") REFERENCES "Municipio"("municipio_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Universidad" ADD CONSTRAINT "Universidad_delegacion_id_fkey" FOREIGN KEY ("delegacion_id") REFERENCES "Delegacion"("delegacion_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Universidad" ADD CONSTRAINT "Universidad_ciudad_id_fkey" FOREIGN KEY ("ciudad_id") REFERENCES "Ciudad"("ciudad_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TerminosCondiciones" ADD CONSTRAINT "TerminosCondiciones_modalidad_id_fkey" FOREIGN KEY ("modalidad_id") REFERENCES "ModalidadCita"("modalidad_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EstadoDepartamento" ADD CONSTRAINT "EstadoDepartamento_pais_id_fkey" FOREIGN KEY ("pais_id") REFERENCES "Pais"("pais_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Municipio" ADD CONSTRAINT "Municipio_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "EstadoDepartamento"("estado_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delegacion" ADD CONSTRAINT "Delegacion_municipio_id_fkey" FOREIGN KEY ("municipio_id") REFERENCES "Municipio"("municipio_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delegacion" ADD CONSTRAINT "Delegacion_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "EstadoDepartamento"("estado_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ciudad" ADD CONSTRAINT "Ciudad_delegacion_id_fkey" FOREIGN KEY ("delegacion_id") REFERENCES "Delegacion"("delegacion_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ciudad" ADD CONSTRAINT "Ciudad_municipio_id_fkey" FOREIGN KEY ("municipio_id") REFERENCES "Municipio"("municipio_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ciudad" ADD CONSTRAINT "Ciudad_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "EstadoDepartamento"("estado_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioUniversidad" ADD CONSTRAINT "UsuarioUniversidad_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioUniversidad" ADD CONSTRAINT "UsuarioUniversidad_universidad_id_fkey" FOREIGN KEY ("universidad_id") REFERENCES "Universidad"("universidad_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioEstudiante" ADD CONSTRAINT "UsuarioEstudiante_universidad_id_fkey" FOREIGN KEY ("universidad_id") REFERENCES "Universidad"("universidad_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioEstudiante" ADD CONSTRAINT "UsuarioEstudiante_pais_id_fkey" FOREIGN KEY ("pais_id") REFERENCES "Pais"("pais_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioEstudiante" ADD CONSTRAINT "UsuarioEstudiante_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "EstadoDepartamento"("estado_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioEstudiante" ADD CONSTRAINT "UsuarioEstudiante_municipio_id_fkey" FOREIGN KEY ("municipio_id") REFERENCES "Municipio"("municipio_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioEstudiante" ADD CONSTRAINT "UsuarioEstudiante_delegacion_id_fkey" FOREIGN KEY ("delegacion_id") REFERENCES "Delegacion"("delegacion_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioEstudiante" ADD CONSTRAINT "UsuarioEstudiante_ciudad_id_fkey" FOREIGN KEY ("ciudad_id") REFERENCES "Ciudad"("ciudad_id") ON DELETE SET NULL ON UPDATE CASCADE;
