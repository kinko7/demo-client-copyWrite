# Copywrite assesstment Project - 

## Comenzando

1.  Clonar el repositorio en su maquina .

## COPYWRITE DIRECTORY

Cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER='usuariodepostgres'
DB_PASSWORD='passwordDePostgres'
DB_HOST='localhost'
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo es ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `texts`

El contenido de `client` fue creado usando: Create React App.

## RUN Project

Sera necesario abrir una terminal para `client` y otra para `api`.
En cada temrinal ejecutar `npm install` para instalar las dependecias y luego `npm start` para correr el back y el front respectivamente.