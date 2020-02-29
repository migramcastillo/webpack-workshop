# Workshop 3 - Webpack Dev Server

[Regresar al menú](./README.md)

En este ejercicio vamos a ver como utilizar `webpack-dev-server`. Este paquete nos permite correr un server en el cual podremos ver los cambios de nuestros assets en vivo sin necesidad de refrescar el navegador.

# Instalación de paquetes

Como los paquetes anteriores, instalamos dentro de devDependencies los paquetes WebpackDevServer:

```sh
npm install -D webpack-dev-server
```

# Configuracion de Webpack

Vamos a modificar nuestra configuración actual de webpack para colocar opciones de devServer, una breve explicación de cada campo colocado:

- contentBase: Este valor indica la carpeta raíz que utilizará el devServer para servir contenido estático, aquí debe estar nuestro archivo `index.html`.
- port: Puerto en donde trabajaremos el modo devServer.

```js
module.exports = {
  entry: path.resolve(__dirname, "./src/js/index.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "app.min.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    port: 3000
  }
};
```

## Modificar package.json

Ahora vamos a especificar un comando dentro de nuestro `package.json` para ejecutar nuestro devServer:

```json
"scripts": {
    "start": "webpack-dev-server --config ./webpack.config.js --mode development",
    "build": "webpack --mode development"
}
```

## Corriendo el devServer

Ahora procedemos a ejecutar `npm run start` para correr nuestro webpack devServer desde el puerto 3000 o el de su preferencia, abrimos en nuestro navegador `http://localhost:3000` y abrimos nuestra consola de desarrollo para observar los console.log de nuestros bundles.

## Modificación en vivo

Cambia o agrega los console logs de tu archivo `index.js` ¿Qué es lo que ocurre?

[Siguiente ejercicio](./ex4.md)
