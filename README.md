# Taller. Iniciando lenguaje HTML

Desarrollo de software orientado a la web (NRC-816) - Semana 4 - UNIMINUTO

Estudiante: Lisbeth María Molinares Castro
Docente: Daniel Ricardo Gonzalez Polo

Proyecto con los 12 códigos de formularios HTML del anexo "Lenguaje HTML".

## Proyecto: Registro de estudiantes

Además de los 12 ejemplos del anexo, el proyecto incluye un caso real que los une:

- `registro.html`: formulario con `form` (`method="get"`), `input` de texto con `required`, `placeholder` y `size`, usuario con `minlength` y `maxlength`, contraseña (`type="password"`), edad (`type="number"`), fecha (`type="date"`), `radio`, `select` con `selected`, `textarea` con `rows` y `cols`, y `button` con imagen más `reset`.
- `resultado.html`: lee los datos enviados y los muestra como texto (no como HTML). La contraseña no viaja en la URL: solo se envía su longitud.

En un sitio con servidor, el formulario enviaría los datos con `method="post"`.

## Estructura

- `registro.html` y `resultado.html`: el proyecto de registro.
- `index.html`: lista enlazada de los 12 ejemplos.
- `ejemplos/`: un archivo HTML por cada código del anexo y `estilos.css`.
- `img/send.svg`: icono usado en el ejemplo 7.
- `capturas/`: resultado de la ejecución de cada ejemplo.
- `entrega/`: documento del taller (Word y PDF).

## Cómo ejecutarlo

Abre `index.html` en el navegador (o con Visual Studio Code y la extensión Live Server).
Nota: `ejemplo.php` (usado en `action`) no existe en el proyecto; los formularios se muestran, pero no procesan el envío.

## Controles y atributos

form, input (type, name, value, required, placeholder, size, maxlength, minlength), submit, reset, radio, password, number, date, button, img, textarea (rows, cols), select, option (selected).
