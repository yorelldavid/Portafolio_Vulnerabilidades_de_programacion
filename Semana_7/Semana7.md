# Portafolio de evidencias.

## Semana 7.
TypeScript es un superset de JavaScript que añade tipos a nuestras variables ayudando así a la detección de errores de forma temprana y mejorando el autocompletado.

Los navegadores no entienden TypeScript así que lo vamos a transpilar a JavaScript usando Parcel.
yarn add parcel-bundler --dev



"scripts": {
    "start": "parcel index.html player-video/index.html player-video/**/*.html"
  },
  "browserslist": [
    "last 1 Chrome version"
  ]
TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases. Anders Hejlsberg, diseñador de C# y creador de Delphi y Turbo Pascal, ha trabajado en el desarrollo de TypeScript.1​ TypeScript puede ser usado para desarrollar aplicaciones JavaScript que se ejecutarán en el lado del cliente o del servidor (Node.js).

TypeScript extiende la sintaxis de JavaScript, por tanto cualquier código JavaScript existente debería funcionar sin problemas. Está pensado para grandes proyectos, los cuales a través de un compilador de TypeScript se traducen a código JavaScript original.
ademas que existe diferentes tipos de typescript
boolean. Valor verdadero o falso.
number. Números.
string. Cadenas de texto.
string[]. Arreglo del tipo cadena de texto.
Array. Arreglo multi-tipo, acepta cadenas de texto o números.
enum. Es un tipo especial llamado enumeración.
any. Cualquier tipo.
object. Del tipo objeto.


// Boolean
let muted: boolean = true;
muted = false;

// Numbers
let numerador: number = 42;
let denomindador: number = 6;
let resultado = numerador / denomindador;

// String
let nombre: string = "David";
let saludo: string = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ["Bruce", "Alan", "Raúl"];
// people.push(34);

// Arreglos de Strings and numbers:
let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("Yorell");
peopleAndNumbers.push(345);

// Enum
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Amarillo",
}
let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es: ${colorFavorito}`);

// Any
let comodin: any  = "Joker";
comodin = { type: "WildCard" }

// Object 
let someObject: object = { type: "WildCard" };
