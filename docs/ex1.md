# Workshop 1 - Inicio de webpack

[Regresar al menú](./README.md)

Para iniciar un nuevo proyecto de NodeJS utilizar el siguiente comando:

```sh
mkdir bundlers
cd bundlers
npm init -y
```

Este comando creara un archivo `package.json` inicial para instalar dependencias de NodeJS.

## Configuración .gitignore

Si deseamos utilizar git para guardar el avance de nuestro proyecto, en node.js debemos "ignorar" todos los archivos generados en `node_modules` para esto generamos un archivo .gitignore en nuestra raíz del proyecto:

```sh
touch .gitignore
```

Con algún editor de texto le colocamos las reglas a ignorar (también vamos a incluir la carpeta dist que vamos a utlizar más adelante).

```git
node_modules/
dist/
```

## Instalación de Webpack

Instalaremos primero webpack y webpack-cli para hacer una configuración, esto puede demorar dependendiendo de la velocidad de Internet ya que son depenedencias muy pesadas.

```sh
npm install -D webpack webpack-cli
```

## Nuestra primera configuración

Creamos en la reaíz de nuestro proyecto un archivo el cual nombraremos como `webpack.config.js`.

Este script será el encargado de guardar las configuraciones de webpack que realicemos. Vamos a empezar colocando el contenido de este ejercicio:

PS: Todo lo que ves aquí es procesado por NodeJS, si nunca lo habias usado bienvenido a NodeJS!!!

```js
//  Este paquete sirve para resolver rutas en cualquier sistema operativo
const path = require("path");

//  Este objeto que exportamos es lo que webpack va a leer
//  La sintaxis que ves es un objeto de JavaScript
module.exports = {
  entry: path.resolve("./src/js/index.js"),
  output: {
    path: path.resolve("./dist"),
    filename: "app.min.js"
  }
};
```

## Generando nuestro primer archivo con modulos ECMAScript

Creamos una carpeta en la raíz llamada `src`, en esta carpeta va a residir todo nuestro código que necesita ser procesado por webpack. Dentro de esta carpeta también haremos carpetas llamadas `js` y `styles` para guardar archivos JavaSricpt y de estilos.

Dentro de la carpeta `js` crearemos un archivo llamado `index.js` con el siguiente contenido:

```js
const date = new Date();

console.log("La fecha actual es: ", date);
```

## Creando nuestro primer script en package.json

Dentro de nuestro archivo `package.json` vamos a encontrar la parte de `scripts` en esta sección del JSON declaramos lo que son los scripts que ejecutara nuestro Package Manager de preferencia (en este caso npm).

```json
"scripts": {
    "build": "webpack --mode development"
}
```

Una vez guardado el archivo ya podremos utilizar el comando

```sh
npm run build
```

Para ejecutar nuestro archivo webpack. Si todo ha salido bien vas a observar que se ha generado una carpeta llamada `dist` con el archivo `app.bundle.js`.

## Probando nuestro archivos

Vamos a instalar globalmente `serve` un paquete de NodeJS que nos permite correr un servidor web a partir de una carpeta de una forma muy fácil.

Para instalarlo ejecutamos:

```sh
npm install serve
```

## Server de pruebas

Dentro de la carpeta `dist` creamos el archivo `index.html` con contenido básico:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Webpack</title>
  </head>

  <body>
    <script src="./app.min.js" type="application/javascript"></script>
  </body>
</html>
```

Creamos un script en `package.json` para correr el server en la carpeta dist:

```sh
"script": {
    "serve": "serve ./dist"
}
```

Abre la dirección que te otorga en el navegador y observa la console. ¿Puedes ver la fecha actual?

[Siguiente ejercicio](./ex2.md)
