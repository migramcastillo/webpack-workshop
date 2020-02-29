# Workshop 6 - Babel y React

[Regresar al menú](./README.md)

En este ejercicio vamos a finalizar nuestra configuración compilando archivos con JSX para utilizar aplicaciones React y también para habilitar el HMR.

# Instalación de paquetes

Vamos a instalar dependencias de trabajo y dependencias de desarrollo, las primeras van a ser para utilizar React

```sh
npm install react react-dom
```

Todas las demas serán dependencias de desarrollo que serviran para el modo dev:

```sh
npm install -D @babel/core @babel/preset-env @babel/preset-react babel-loader react-hot-loader
```

Basicamente son dependencias para que Babel procese React.

# Configuracion de Webpack

Agregamos una nueva regla a nuestra lista para tener capacidad de procesar archivos `.js` y `.jsx` con la excepción de los archivos dentro de node_modules.

También agregamos ciertos cambios a nuestro código:

- entry: Vamos a utilizar un nuevo script `App.js` para nuestra aplicación React.
- rules: Se agrega la regla para cargar `.js` y `.jsx` mediante `babel-loader`.
- resolve: Esta configuración nos permite decirle a webpack cuales extensiones van a ser utilizadas por default cuando importemos modulos.
- plugins: Al prinicipio importamos webpack y abajo estamos utilizando un plugin desde el mismo código fuente de webpack para tener HMR.
- devServer: Activamos la opción `hot` en true.

```js
const webpack = require("webpack");

module.exports = {
  entry: path.resolve(__dirname, "./src/js/App.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "app.min.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    port: 3000,
    hot: true
  }
};
```

## Configuración de Babel

Por defecto webpack va a buscar un archivo `.babelrc` cuando se utilice `babel-loader`, generamos en la raíz del proyecto el archivo `.babelrc` con las siguientes configuraciones:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

En resumen esta configuración indica que Babel utilizará traducciones para el código generado por React.

## Modificacion HTML

Dentro del `body` nuestro HTML vamos a colocar una etiqueta `div` con id `app` esta va a servir para que React utilice esa parte del código para renderizar.

```html
<div id="app"></div>
```

## Componente React

Dentro de `src` vamos a generar una carpeta llamada `components` en esta carpeta vamos a generar un archivo llamado `Container.jsx`:

```jsx
import React from "react";

const Container = () => {
  return (
    <div>
      <h1>Esta es mi aplicación</h1>
      <p>
        Bienvenido a mi nueva aplicación React creada con webpack sin refresh
      </p>
    </div>
  );
};

export default Container;
```

Este es un componente sencillo que vamos a utilizar a continuación.

## App base para React

Ahora dentro de `/src/js` vamos a generar un archivo llamado `App.js`, en este archivo vamos a declarar el inicializador de React con HMR:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Container from "../components/Container";

ReactDOM.render(<Container />, document.getElementById("app"));

module.hot.accept();
```

Lo que estamos haciendo en este archivo en importar la libreria de React que son modulos ECMA Script, importar el componente que hicimos hace un momento y con ReactDOM le indicamos que vamos a renderizar el componente `Container` dentro del elemento con id `app` en nuestro HTML, la última línea indica que utilizaremos HMR.

PS: Usualmente para los archivos `.jsx` necesitariamos declarar al final la extensión, pero gracias nuestra configuración en la sección de `resolve` esto ya no es necesario.

## Correr el devServer

Utilizaremos otra vez el comando para correr el devServer:

```sh
npm run start
```

Vamos a `http://localhost:3000` y debemos nuestra aplicación corriendo.

¿Qué pasa si modifico algo del Container? ¿Cómo podría agregar estilos a mi componente?

[Siguiente ejercicio](./ex7.md)
