yarn add parcel-bundler --dev
"scripts": {
    "start": "parcel index.html player-video/index.html player-video/**/*.html"
  },
  "browserslist": [
    "last 1 Chrome version"
  ]
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
