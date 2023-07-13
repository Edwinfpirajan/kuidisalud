INSERT INTO public."Pais" (pais_id, "createdAt", "updatedAt", pais)
VALUES
(0, NOW(), NOW(), 'Mexico');

INSERT INTO public."EstadoDepartamento" (estado_id, "createdAt", "updatedAt", estado, pais_id)
VALUES
(0, NOW(), NOW(), 'General', 0);

INSERT INTO public."Municipio" (municipio_id, "createdAt", "updatedAt", estado_id, municipio)
VALUES
(0, NOW(), NOW(), 0, 'Ciudad de Mexico');

INSERT INTO public."Delegacion" (delegacion_id, "createdAt", "updatedAt", municipio_id, estado_id, delegacion)
VALUES
(0, NOW(), NOW(), 0, 0, 'Barrio en CDMX');

INSERT INTO public."Ciudad"( ciudad_id, "createdAt", "updatedAt", delegacion_id, municipio_id, estado_id, ciudad)
VALUES (0, now(), now(), 0, 0, 0, 'Ciudad de México');

INSERT INTO public."Parentescos"(id, parentesco)
VALUES
(0, 'Padre'),
(1, 'Madre'),
(2, 'Hermano'),
(3, 'Conyugue'),
(4, 'Hijo'),
(5, 'Hijastro'),
(6, 'Amigo');