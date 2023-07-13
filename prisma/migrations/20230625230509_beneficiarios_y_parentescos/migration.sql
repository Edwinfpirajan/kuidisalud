-- DropIndex
DROP INDEX "Paciente_pais_id_key";

-- AlterTable
ALTER TABLE "Paciente" ALTER COLUMN "primer_nombre" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "primer_apellido" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "segundo_nombre" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "segundo_apellido" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "tipo_documento" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "genero" SET DATA TYPE VARCHAR(100);

-- CreateTable
CREATE TABLE "Beneficiarios" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "primer_nombre" VARCHAR(100),
    "primer_apellido" VARCHAR(100),
    "segundo_nombre" VARCHAR(100),
    "segundo_apellido" VARCHAR(100),
    "tipo_documento" VARCHAR(50),
    "nro_documento" VARCHAR(25) NOT NULL,
    "Pais" TEXT,
    "Estado" TEXT,
    "MunicipioCiudad" TEXT,
    "Delegacion" TEXT,
    "codigo_postal" VARCHAR(10),
    "fecha_nacimiento" DATE,
    "direccion" VARCHAR(250),
    "telefono_movil" VARCHAR(25),
    "genero" VARCHAR(100),
    "parentesco_id" INTEGER NOT NULL,
    "pais_id" INTEGER,
    "estado_id" INTEGER,
    "municipio_id" INTEGER,
    "delegacion_id" INTEGER,
    "ciudad_id" INTEGER,
    "usuario_id" INTEGER,

    CONSTRAINT "Beneficiarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parentescos" (
    "id" SERIAL NOT NULL,
    "parentesco" TEXT NOT NULL,

    CONSTRAINT "Parentescos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "beneficiario_usuario_id_idx" ON "Beneficiarios"("usuario_id");

-- AddForeignKey
ALTER TABLE "Beneficiarios" ADD CONSTRAINT "Beneficiarios_parentesco_id_fkey" FOREIGN KEY ("parentesco_id") REFERENCES "Parentescos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Beneficiarios" ADD CONSTRAINT "Beneficiarios_pais_id_fkey" FOREIGN KEY ("pais_id") REFERENCES "Pais"("pais_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Beneficiarios" ADD CONSTRAINT "Beneficiarios_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "EstadoDepartamento"("estado_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Beneficiarios" ADD CONSTRAINT "Beneficiarios_municipio_id_fkey" FOREIGN KEY ("municipio_id") REFERENCES "Municipio"("municipio_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Beneficiarios" ADD CONSTRAINT "Beneficiarios_delegacion_id_fkey" FOREIGN KEY ("delegacion_id") REFERENCES "Delegacion"("delegacion_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Beneficiarios" ADD CONSTRAINT "Beneficiarios_ciudad_id_fkey" FOREIGN KEY ("ciudad_id") REFERENCES "Ciudad"("ciudad_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Beneficiarios" ADD CONSTRAINT "Beneficiarios_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
