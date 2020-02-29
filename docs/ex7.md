# Workshop 7 - Produccón

[Regresar al menú](./README.md)

Este ejercicio es sencillo, vamos simplemente a declarar otro script dentro de `package.json` para compilar webpack en modo producción:

```json
{ "build:prod": "webpack --mode production" }
```

Corremos el comando:

```sh
npm run build:prod
```

¿Tarda un poco más?

## Correr nuestra app en prod

¿Recuerdan `serve`? Vamos a utilizar el comando que dejamos:

```sh
npm run serve
```

Para correr nuestra app con assets en producción.

¿Cómo compararias en tamaño de assets el modo dev y el modo producción?
