# Workshop 5 - Utilizar Sass

[Regresar al menú](./README.md)

Ya cargado nuestros archivos de estilos también podemos personalizar reglas para compilar archivos de pre-procesadores de CSS como Sass, Less y Stylus. En este caso vamos a trabajar con Sass.

# Instalación de paquetes

Como los paquetes anteriores, instalamos dentro de devDependencies los loaders y librerias que necesita Sass para trabajar:

```sh
npm install -D sass-loader node-sass
```

Sass Loader para Webpack y Node-sass para que NodeJS procese los estilos de Sass

# Configuracion de Webpack

Agregamos una nueva regla a nuestra lista para tener capacidad de leer tanto archivos `.css` como archivos `.saas` y `.scss`

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
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    port: 3000
  }
};
```

## Generar un archivo sass

Vamos a generar un nuevo archivo dentro de `/src/styles/` llamado `styles.scss` en este archivo vamos a colocar un script básico de Sass con anidación y variables:

Nota: Agrega un `h1` dentro del body para ver el cambio de los estilos.

```scss
$bgColor: green;
$fontColor: white;

body {
  background: $bgColor;
  h1 {
    color: $fontColor;
  }
}
```

## Usando nuestro SASS en JS

Regresamos a index.js y simplemente vamos a importar el archivo sass como si fuera un modulo de JavaScript:

```js
import ".../styles/style.scss";
```

## Correr el devServer

Utilizaremos otra vez el comando para correr el devServer:

```sh
npm run start
```

Vamos a `http://localhost:3000` y debemos observar el fondo de color verde y las letras en blanco, intenta modificar los estilos del archivo `.scss`.

[Siguiente ejercicio](./ex6.md)
