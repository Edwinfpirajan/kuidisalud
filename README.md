# KUIDISALUD Nestjs API

A REST API. Using Nestjs, TypeScript, PostgreSQL, Docker, ESlint, JWT, Passport Authentication.

## Get started

```sh
# Install dependencies
$ npm i

# if npm i fails, try
$ npm i --legacy-peer-deps

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Setting .env environment

```sh
# Create an .env file in the root directory of the application
# Set PostgreSQl environment
$ postgresql://name:password@localhost:5432/db_name

# Set the JWT secret key
$ JWT_ACCESS_SECRET=secret

# Set the JWT Refresh secret key
$ JWT_REFRESH_SECRET

# Especify the port
$ PORT=port
```

## PostgreSQL Setup

```sh
# Initialize a postgresql instance with docker
$ docker run --name kuidis-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```

## Servir API o riniciar proceso de API
### Paso a paso para actualizar versión del servidor
1. Autenticarse vía ssh con git bash o el programa de preferencia. comando: ssh usuario@ip. Si se requiere crear un tunel para acceder a la BD el comando es: "ssh -L 5433:localhost:5433 usuario@ip"
2. ubicarse en la carpeta raíz (cd ..) y luego ubicarse en la carpeta del api cd home/kuidis/repos/kuidisapi/
3. Ejecutar git pull.
4. npm run build.
5. Listar los procesos con el comando "pm2 ls" para identificar el id del proceso "API"
6. Detener el proceso del API con "pm2 stop [id_proceso]". En el momento el id 0 corresponde al del API quedando el comando "pm2 stop 0"
7. Iniciar de nuevo el proceso "pm2 start 0"

nota: si el servidor se reinicia se debe volver a servir el API

1. Repetir los pasos del 1 al 4
2. Ejecutar el comando "pm2 start --name API npm -- start"
3. Para servir el front el comando es "pm2 serve ./ 3000 --spa"


### Actualizar modelo de datos
1. Crear la migración local despues de afectar el schema.prisma con el comando "npx prisma migrate dev --name [nombre_feature]", ejemplo: "npx prisma migrate dev --name verificar_cuenta"
2. para actualizar los typos o entidades de prisma se debe ejecutar el comando "sudo npm run generate"
3. repetir pasos de autenticación del 1 al 3 de la sección anterior.
4. Para actualizar el modelo en la BD se debe ejecutar "sudo npm run migrate"
5. Verificar en pgAdmin (administador de BD de postgress) que en la BD de QA se vea reflejados los cambios de las migraciones

## Docker Setup

```sh
# Give your docker image a name
$ docker build -t <your username>/kuidis-api .

# for example
$ docker build -t kuidis-api .

# After your Docker image is successfully build start it with this command
$ docker run -p 8080:8080 --env-file .env -d <your username>/kuidis-api

# With Docker compose
$ docker-compose up

# As a background service
$ docker-compose up -d
```

## API documentation

```sh
# You could find the Postman API documentation here soon
```

## Features

- ESLint and Prettier are integrated with VSCode to fix and format code on save (you need eslint and prettier VSCode plugins)
- TypeScript
- Docker PostgreSQL
- JWT authentication
- Role Based System
- Passport Authentication
- Dockerfile and docker-compose to generate an optimized production container
- API documentation

## License

MIT

---

## ejemplos json para especialista 

{
  "especialista": {
  "createdAt": "2023-07-10T12:00:00Z",
  "updatedAt": "2023-07-10T12:00:00Z",
  "usuario_id": 1,
  "pais_id": 1,
  "estado_id": 1,
  "municipio_id": 1,
  "delegacion_id": 1,
  "ciudad_id": 1,
  "pais": "México",
  "estado": "Jalisco",
  "municipio": "Guadalajara",
  "delegacion": "Centro",
  "ciudad": "Guadalajara",
  "codigo_postal": "44100",
  "direccion": "Calle Principal 123",
  "telefono_fijo": "1234567890",
  "telefono_movil": "0987654321",
  "genero": "M",
  "tipo_documento": "DNI",
  "nro_documento": "123456789",
  "estatus": "y",
  "curriculum": null,
  "otros_servicios": "Servicio 1, Servicio 2",
  "tiene_seguro": "Sí",
  "nombre_empresa_seguros": "Seguros ABC",
  "tipo_seguro": "n",
  "foto": null,
  "rfc": "RFC123456",
  "banco_id": 1,
  "banco": "Banco XYZ",
  "clabe": "123456789012345678"
},
    "email": "alex@gmail.com"  
}
