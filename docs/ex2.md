# Workshop 2 - ECMA Script Modules

[Regresar al menú](./README.md)

Este ejercicio es sencillo, es para mostrar como exportar código utilizando ECMA Script Modules.

# Archivo de funciones

Generamos dentro de `/src/js` un archivo llamado `helpers.js`, este archivo va a contener modulos que vamos a utilizar en `index.js`.

Dentro de `helpers.js` vamos a generar dos funciones:

```js
export const today = () => {
  return new Date();
};

export const tomorrow = () => {
  const date = today();
  date.setDate(date.getDate() + 1);
  return date;
};

export default {
  today,
  tomorrow
};
```

## Importando helpers

Ahora en el archivo `index.js` vamos a importar los helpers de la siguiente forma:

```js
import helpers from "./helpers";

console.log("Mañana será: ", helpers.tomorrow());
```

## Importando sólo la funcion que necesito

Puedes importar solo la funcion que necesitas utilizando la deestructuración de ES6:

```js
import { tomorrow } from "./helpers";

console.log("Mañana será: ", tomorrow());
```

[Siguiente ejercicio](./ex3.md)
