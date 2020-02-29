# Workshop 4 - Compilar CSS desde JS

[Regresar al menú](./README.md)

En este ejercicio vamos a realizar nuestra primera configuración de rules de webpack para procesar los archivos CSS con un loader especifico e implementar estilos a nuestra aplicación con cambios de CSS en vivo.

# Instalación de paquetes

Como los paquetes anteriores, instalamos dentro de devDependencies los loaders que le indicaran a webpack como tratar los archivos css:

```sh
npm install -D css-loader style-loader
```

# Configuracion de Webpack

Agregamos de la siguiente forma reglas personalizadas para tratar los archivos con extensión que coincida con la expresión regular que declaramos.

Esta regla indica que los archivos que terminen en `.css` van a ser procesados por CSSLoader y StyleLoader.

CSS Loader permite leer contenido de archivos CSS y Style Loader permite insertar el estilo y hacer el render de estos en nuestro HTML.

```js
module.exports = {
  entry: path.resolve(__dirname, "./src/js/index.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "app.min.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    port: 3000
  }
};
```

## Generar un archivo css

Vamos a generar un nuevo archivo dentro de `/src/styles/` si no cuentas con esta carpeta vamos a generarla. El archivo nuevo a crear se va a llamar `style.css`y vamos a colocar algo que sea bastante visible a la vista:

```css
body {
  background: red;
}
```

## Usando nuestro CSS en JS

Regresamos a index.js y simplemente vamos a importar el archivo css como si fuera un modulo de JavaScript:

```js
import ".../styles/style.css";
```

## Correr el devServer

Utilizaremos otra vez el comando para correr el devServer:

```sh
npm run start
```

Vamos a `http://localhost:3000` y debemos observar el fondo de color rojo, intenta modificar el fondo en el archivo CSS.

[Siguiente ejercicio](./ex5.md)
